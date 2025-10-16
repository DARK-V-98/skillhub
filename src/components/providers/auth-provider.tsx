
"use client";

import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useFirebase } from "@/firebase";
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
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userProfile = userSnap.data() as UserProfile;
          setUser({ ...firebaseUser, ...userProfile });
        } else {
          // This case handles users who exist in Auth but not Firestore (e.g. social login)
          console.warn("User profile not found in Firestore. Creating a default profile.");
          const newUserProfile: UserProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            avatarUrl: firebaseUser.photoURL,
            role: "student", // Default role for any newly created profile
          };
          try {
            await setDoc(userRef, newUserProfile);
            setUser({ ...firebaseUser, ...newUserProfile });
          } catch (error) {
            console.error("Error creating user profile in Firestore:", error);
            // We still set the user with the firebase data, but role features might not work
            setUser(firebaseUser as AppUser);
          }
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

    
