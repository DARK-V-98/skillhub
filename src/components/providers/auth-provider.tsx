"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import type { AppUser, UserProfile } from "@/lib/types";

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userProfile = userSnap.data() as UserProfile;
          setUser({ ...firebaseUser, ...userProfile });
        } else {
          // This case is handled more explicitly on the signup form.
          // However, for social logins, we create a default student profile.
          console.log("Creating new user profile for social login.");
          const newUserProfile: UserProfile = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            avatarUrl: firebaseUser.photoURL,
            role: "student", // Default role
          };
          await setDoc(userRef, newUserProfile);
          setUser({ ...firebaseUser, ...newUserProfile });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
