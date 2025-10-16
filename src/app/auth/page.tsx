
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
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Role, UserProfile } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft } from 'lucide-react';
import { useFirebase, errorEmitter, FirestorePermissionError } from '@/firebase';
import { placeholderImages } from '@/lib/placeholder-images';

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { auth, firestore } = useFirebase();
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
    if (!auth) {
        toast({ variant: 'destructive', title: 'Error', description: 'Authentication service not available.' });
        setIsLoading(false);
        return;
    }
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
    if (!auth || !firestore) {
      toast({ variant: 'destructive', title: 'Error', description: 'Authentication service not available.' });
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      const user = userCredential.user;
      await updateProfile(user, { displayName: signupName });

      const newUserProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        name: signupName,
        avatarUrl: user.photoURL,
        role: signupRole,
      };
      
      const userDocRef = doc(firestore, 'users', user.uid);

      // Non-blocking write with contextual error handling
      setDoc(userDocRef, newUserProfile)
        .then(() => {
          toast({ title: 'Account Created', description: 'Welcome to SkillHub!' });
          router.push('/dashboard');
        })
        .catch(async (serverError) => {
          // This catch block is for Firestore permission errors.
          const permissionError = new FirestorePermissionError({
              path: userDocRef.path,
              operation: 'create',
              requestResourceData: newUserProfile,
          });
          errorEmitter.emit('permission-error', permissionError);
          // Do not set isLoading to false here, as the error overlay will take over.
        });

    } catch (error: any) {
      // This catch block is for createUserWithEmailAndPassword errors (e.g., email already in use)
      toast({ variant: 'destructive', title: 'Sign Up Failed', description: error.message });
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
     if (!auth) {
        toast({ variant: 'destructive', title: 'Error', description: 'Authentication service not available.' });
        setIsLoading(false);
        return;
    }
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast({ title: 'Success', description: 'Logged in with Google.' });
      router.push('/dashboard');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Google Sign-In Failed', description: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const authImage = placeholderImages.find(p => p.id === 'auth-background');

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/30 p-4">
      <div className="w-full max-w-4xl" style={{ perspective: '2000px' }}>
        <div
          className="relative w-full h-[700px] transition-transform duration-700"
          style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front side: Login */}
          <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
            <div className="flex h-full bg-background rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-1/2 hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground relative">
                  <Button variant="ghost" asChild className="absolute top-4 left-4 z-10 hover:bg-white/20">
                    <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
                  </Button>
                  {authImage && 
                    <Image 
                      src={authImage.imageUrl} 
                      alt={authImage.imageHint} 
                      fill 
                      className="object-cover opacity-20" 
                    />
                  }
                  <div className="z-10">
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl" aria-label="SkillHub Home">
                      <Image src="/logo.png" alt="SkillHub Logo" width={120} height={30} className="h-auto w-auto brightness-0 invert" />
                    </Link>
                  </div>
                  <div className="z-10">
                    <h2 className="text-3xl font-bold">Welcome Back</h2>
                    <p className="mt-2 opacity-80">Login to continue your learning journey and connect with our community.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Login to SkillHub</h2>
                    <p className="text-muted-foreground mb-6">
                        Don&apos;t have an account?{' '}
                        <Button variant="link" className="p-0" onClick={() => setIsFlipped(true)}>
                            Create one now
                        </Button>
                    </p>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <Label htmlFor="login-email">Email</Label>
                            <Input id="login-email" type="email" placeholder="you@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required disabled={isLoading} />
                        </div>
                        <div>
                            <Label htmlFor="login-password">Password</Label>
                            <Input id="login-password" type="password" placeholder="••••••••" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required disabled={isLoading} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember" className='font-normal'>Remember me</Label>
                            </div>
                            <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>Login</Button>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-muted"></div>
                        <span className="mx-4 text-xs uppercase text-muted-foreground">Or</span>
                        <div className="flex-grow border-t border-muted"></div>
                    </div>
                     <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Sign in with Google
                    </Button>
                </div>
            </div>
          </div>

          {/* Back side: Signup */}
           <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
             <div className="flex h-full bg-background rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
                    <p className="text-muted-foreground mb-6">
                        Already have an account?{' '}
                        <Button variant="link" className="p-0" onClick={() => setIsFlipped(false)}>
                            Login here
                        </Button>
                    </p>
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <Label htmlFor="signup-name">Full Name</Label>
                            <Input id="signup-name" type="text" placeholder="John Doe" value={signupName} onChange={e => setSignupName(e.target.value)} required disabled={isLoading}/>
                        </div>
                        <div>
                            <Label htmlFor="signup-email">Email</Label>
                            <Input id="signup-email" type="email" placeholder="you@example.com" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required disabled={isLoading} />
                        </div>
                        <div>
                            <Label htmlFor="signup-password">Password</Label>
                            <Input id="signup-password" type="password" placeholder="••••••••" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required disabled={isLoading} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="role">I am a...</Label>
                            <Select value={signupRole} onValueChange={(value) => setSignupRole(value as Role)} required disabled={isLoading}>
                            <SelectTrigger id="role"><SelectValue placeholder="Select your role" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="student">Student</SelectItem>
                                <SelectItem value="teacher">Teacher</SelectItem>
                                <SelectItem value="sponsor">Sponsor</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoading}>Create Account</Button>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-muted"></div>
                        <span className="mx-4 text-xs uppercase text-muted-foreground">Or</span>
                        <div className="flex-grow border-t border-muted"></div>
                    </div>
                     <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
                         <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        Sign up with Google
                    </Button>
                </div>
                <div className="w-1/2 hidden md:flex flex-col justify-between p-8 bg-gradient-to-br from-primary/90 to-primary text-primary-foreground relative">
                    <Button variant="ghost" asChild className="absolute top-4 left-4 z-10 hover:bg-white/20">
                        <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
                    </Button>
                    {authImage && 
                        <Image 
                        src={authImage.imageUrl} 
                        alt={authImage.imageHint} 
                        fill 
                        className="object-cover opacity-20" 
                        />
                    }
                    <div className="z-10">
                         <Link href="/" className="flex items-center gap-2 font-bold text-2xl" aria-label="SkillHub Home">
                           <Image src="/logo.png" alt="SkillHub Logo" width={120} height={30} className="h-auto w-auto brightness-0 invert" />
                        </Link>
                    </div>
                    <div className="z-10">
                        <h2 className="text-3xl font-bold">Join Our Community</h2>
                        <p className="mt-2 opacity-80">Create an account to start your journey of learning and teaching with thousands of others.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

    