import type { User as FirebaseUser } from "firebase/auth";

export type Role = "student" | "teacher" | "sponsor" | "admin" | "developer";

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
  category: string;
  description: string;
  instructor: {
    name: string;
    avatarUrl: string;
  };
  duration: string;
  price: number;
  rating: number;
  imageUrl: string;
  imageHint: string;
  studentsEnrolled: number;
}
