import type { User as FirebaseUser } from "firebase/auth";

export type Role = "student" | "teacher" | "sponsor" | "admin";

export interface UserProfile {
  uid: string;
  email?: string | null;
  name?: string | null;
  avatarUrl?: string | null;
  role: Role;
}

export type AppUser = FirebaseUser & UserProfile;

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatarUrl: string;
  };
  category: string;
  duration: string;
  imageUrl: string;
  imageHint: string;
  studentsEnrolled: number;
}
