import { z } from 'zod';

export const AuthCredentialValidation = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
});

export type AuthCredentialValidationTYPE = z.infer<typeof AuthCredentialValidation>;
