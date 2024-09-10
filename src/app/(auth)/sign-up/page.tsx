'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import {
  AuthCredentialValidation,
  AuthCredentialValidationTYPE
} from '@/lib/validators/AccounValidationCredentials';
import { trpc } from '@/trpc/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Page = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCredentialValidationTYPE>({ resolver: zodResolver(AuthCredentialValidation) });

  const {data} = trpc.anyApiRoute.useQuery()

  const onSubmit = ({email, password}: AuthCredentialValidationTYPE) => {
    //send email
  };

  return (
    <>
      <div className="container relative pt-20 flex flex-col items-center justify-center h-screen lg:px-0">
        <div className="mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>
            <Link href="/auth/sign-in" className={buttonVariants({ variant: 'link' })}>
              Already have an account? Sign in
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center space-y-2">
              <div className="grid gap-2 w-full">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...register('email')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.email,
                    })}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register('password')}
                    className={cn({
                      'focus-visible:ring-red-500': errors.password,
                    })}
                    placeholder="********"
                  />
                </div>
                <Button type="submit">Create Account</Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 mt-8">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our{' '}
              <Link
                href="/terms-of-service"
                className="font-medium text-purple-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="font-medium text-purple-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
