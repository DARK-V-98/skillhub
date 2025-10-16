
"use client";

import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useFirebase, errorEmitter, FirestorePermissionError, setDocumentNonBlocking } from "@/firebase";
import type { AppUser, UserProfile } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { auth, firestore } = useFirebase();
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth || !firestore) {
      setLoading(false);
      return;
    };
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const userRef = doc(firestore, "users", firebaseUser.uid);
        try {
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userProfile = userSnap.data() as UserProfile;
            setUser({ ...firebaseUser, ...userProfile });
          } else {
            console.warn("User profile not found in Firestore. Creating a default profile.");
            const newUserProfile: UserProfile = {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName,
              avatarUrl: firebaseUser.photoURL,
              role: "student", // Default role
            };
            
            // Use the non-blocking write with integrated error handling
            setDocumentNonBlocking(userRef, newUserProfile, {});
            
            // Optimistically set the user state on the client
            setUser({ ...firebaseUser, ...newUserProfile });
          }
        } catch (error: any) {
          // This will catch permission errors on getDoc
          const permissionError = new FirestorePermissionError({
              path: userRef.path,
              operation: 'get',
          });
          errorEmitter.emit('permission-error', permissionError);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, firestore]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
