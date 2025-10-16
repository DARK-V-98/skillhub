
"use client";

import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useFirebase, errorEmitter, FirestorePermissionError } from "@/firebase";
import type { AppUser, UserProfile, Role } from "@/lib/types";

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
      return;
    };
    
    let unsubscribeProfile: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (unsubscribeProfile) {
        unsubscribeProfile();
        unsubscribeProfile = null;
      }

      if (firebaseUser) {
        const userRef = doc(firestore, "users", firebaseUser.uid);
        
        unsubscribeProfile = onSnapshot(userRef, 
          async (docSnap) => {
            if (docSnap.exists()) {
              const userProfile = docSnap.data() as UserProfile;
              setUser({ ...firebaseUser, ...userProfile });
            } else {
              // Profile doesn't exist, create it with a default role
              const newUserProfile: UserProfile = {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                name: firebaseUser.displayName,
                avatarUrl: firebaseUser.photoURL,
                role: 'student', // Default role
              };
              try {
                await setDoc(userRef, newUserProfile);
                setUser({ ...firebaseUser, ...newUserProfile });
              } catch (error) {
                  const permissionError = new FirestorePermissionError({
                    path: userRef.path,
                    operation: 'write',
                    requestResourceData: newUserProfile,
                  });
                  errorEmitter.emit('permission-error', permissionError);
              }
            }
            setLoading(false);
          }, 
          (error) => {
            const permissionError = new FirestorePermissionError({
              path: userRef.path,
              operation: 'get',
            });
            errorEmitter.emit('permission-error', permissionError);
            setLoading(false);
          }
        );
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeProfile) {
        unsubscribeProfile();
      }
    };
  }, [auth, firestore]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
