
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import type { Role } from '@/lib/types';
import { Book, Briefcase, Heart } from 'lucide-react';

interface RoleSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: Role) => void;
  isLoading: boolean;
}

export default function RoleSelectionDialog({ isOpen, onClose, onRoleSelect, isLoading }: RoleSelectionDialogProps) {
  const [selectedRole, setSelectedRole] = useState<Role | ''>('');

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>One last step</DialogTitle>
          <DialogDescription>
            To personalize your experience, please select your primary role on SkillHub.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <RadioGroup value={selectedRole} onValueChange={(value) => setSelectedRole(value as Role)}>
            <Label
              htmlFor="role-student"
              className="flex items-start space-x-4 rounded-md border p-4 transition-all hover:bg-accent has-[:checked]:border-primary"
            >
              <RadioGroupItem value="student" id="role-student" className="mt-1" />
              <div className="grid gap-1.5">
                <div className='font-semibold flex items-center gap-2'><Book className="h-4 w-4 text-primary"/>I am a Student</div>
                <p className="text-sm text-muted-foreground">
                  I want to learn new skills, enroll in courses, and connect with teachers.
                </p>
              </div>
            </Label>
             <Label
              htmlFor="role-teacher"
              className="flex items-start space-x-4 rounded-md border p-4 transition-all hover:bg-accent has-[:checked]:border-primary"
            >
              <RadioGroupItem value="teacher" id="role-teacher" className="mt-1" />
              <div className="grid gap-1.5">
                <div className='font-semibold flex items-center gap-2'><Briefcase className="h-4 w-4 text-primary"/>I am a Teacher</div>
                <p className="text-sm text-muted-foreground">
                  I want to share my knowledge, create courses, and build a community.
                </p>
              </div>
            </Label>
             <Label
              htmlFor="role-sponsor"
              className="flex items-start space-x-4 rounded-md border p-4 transition-all hover:bg-accent has-[:checked]:border-primary"
            >
              <RadioGroupItem value="sponsor" id="role-sponsor" className="mt-1" />
              <div className="grid gap-1.5">
                <div className='font-semibold flex items-center gap-2'><Heart className="h-4 w-4 text-primary"/>I am a Sponsor</div>
                <p className="text-sm text-muted-foreground">
                  I want to support education by funding courses and students.
                </p>
              </div>
            </Label>
          </RadioGroup>
        </div>
        <DialogFooter>
          <Button onClick={handleContinue} disabled={!selectedRole || isLoading} className="w-full">
            {isLoading ? 'Creating Account...' : 'Continue to Dashboard'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
