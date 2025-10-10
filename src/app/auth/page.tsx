
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Role, UserProfile } from '@/lib/types';

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Login State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup State
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupRole, setSignupRole] = useState<Role | ''>('');


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toast({ title: 'Success', description: 'Logged in successfully.' });
      router.push('/dashboard');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Login Failed', description: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupRole) {
      toast({ variant: 'destructive', title: 'Role not selected', description: 'Please select a role.' });
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      const user = userCredential.user;
      await updateProfile(user, { displayName: signupName });

      const newUserProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        name: signupName,
        role: signupRole,
        avatarUrl: user.photoURL,
      };
      await setDoc(doc(db, 'users', user.uid), newUserProfile);
      
      toast({ title: 'Account Created', description: 'Welcome to SkillHub!' });
      router.push('/dashboard');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Sign Up Failed', description: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast({ title: 'Success', description: 'Logged in with Google.' });
      router.push('/dashboard');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Google Sign-In Failed', description: error.message });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md" style={{ perspective: '1000px' }}>
        <div
          className={`relative w-full h-[650px] transition-transform duration-700`}
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Login Form (Front) */}
          <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden' }}>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Login</h1>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
                  <span className="text-gray-500 dark:text-gray-400">or</span>
                  <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
                </div>
            </div>
            <form onSubmit={handleLogin} className="space-y-6 mt-8">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="john@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required disabled={isLoading}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" placeholder="Your password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required disabled={isLoading}/>
              </div>
              <Link href="#" className="text-sm text-primary hover:underline block text-right">Forgot password?</Link>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>Login</Button>
            </form>
            <div className="text-center mt-6">
                <p className="text-gray-500 dark:text-gray-400">Don't have an account?</p>
                <Button variant="link" className="text-primary font-bold" onClick={() => setIsFlipped(true)}>Sign Up</Button>
            </div>
          </div>
          
          {/* Signup Form (Back) */}
          <div className="absolute w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Create Account</h1>
                <div className="flex justify-center items-center gap-2 mt-4">
                  <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
                   <Button variant="outline" className="w-full my-4" onClick={handleGoogleSignIn} disabled={isLoading}>
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Sign up with Google
                  </Button>
                  <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
                </div>
            </div>
            <form onSubmit={handleSignup} className="space-y-4 mt-6">
               <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input id="signup-name" type="text" placeholder="John Doe" value={signupName} onChange={e => setSignupName(e.target.value)} required disabled={isLoading}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="john@example.com" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required disabled={isLoading}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="Create a password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required disabled={isLoading}/>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">I am a...</Label>
                <Select value={signupRole} onValueChange={(value) => setSignupRole(value as Role)} disabled={isLoading}>
                  <SelectTrigger id="role"><SelectValue placeholder="Select your role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="sponsor">Sponsor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>Sign Up</Button>
            </form>
             <div className="text-center mt-4">
                <p className="text-gray-500 dark:text-gray-400">Already have an account?</p>
                <Button variant="link" className="text-primary font-bold" onClick={() => setIsFlipped(false)}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
