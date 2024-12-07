import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { SocialAuth } from '../components/auth/SocialAuth';

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpForm) => {
    console.log(data);
  };

  return (
    <AuthLayout
      image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
      title="Create an account"
      subtitle="Enter your details below"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Name"
          placeholder="Enter your name"
          {...register('name')}
          error={errors.name?.message}
        />
        <Input
          label="Email or Phone Number"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        
        <Button type="submit" fullWidth>
          Create Account
        </Button>
      </form>

      <SocialAuth />

      <p className="text-center mt-6">
        Already have an account?{' '}
        <Link to="/login" className="text-red-500 hover:underline">
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}