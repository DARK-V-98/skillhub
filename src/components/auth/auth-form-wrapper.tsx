import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerText: string;
  footerLinkText: string;
  footerLink: string;
}

export function AuthFormWrapper({
  children,
  title,
  description,
  footerText,
  footerLinkText,
  footerLink,
}: AuthFormWrapperProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <GraduationCap className="mx-auto h-12 w-auto text-primary" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold font-headline tracking-tight text-foreground">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {description}
          </p>
        </div>
        {children}
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {footerText}{' '}
          <Link href={footerLink} className="font-medium text-primary hover:text-primary/90">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}
