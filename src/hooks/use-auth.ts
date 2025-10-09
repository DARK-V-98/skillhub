"use client";

import { useContext } from "react";
import { AuthContext } from "@/components/providers/firebase-provider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a FirebaseProvider");
  }
  return context;
};
