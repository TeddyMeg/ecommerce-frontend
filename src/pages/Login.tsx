import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { SocialAuth } from '../components/auth/SocialAuth';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <AuthLayout
      image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800"
      title="Log in to Exclusive"
      subtitle="Enter your details below"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

        <div className="flex justify-between items-center">
          <Link to="/forgot-password" className="text-red-500 hover:underline text-sm">
            Forgot Password?
          </Link>
        </div>
        
        <Button type="submit" fullWidth>
          Log in
        </Button>
      </form>

      <SocialAuth />

      <p className="text-center mt-6">
        Don't have an account?{' '}
        <Link to="/signup" className="text-red-500 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}