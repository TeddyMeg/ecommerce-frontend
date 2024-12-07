import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, 'Street address is required'),
  apartment: z.string().optional(),
  townCity: z.string().min(2, 'Town/City is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  emailAddress: z.string().email('Valid email is required'),
  saveInfo: z.boolean().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="First Name*"
        {...register('firstName')}
        error={errors.firstName?.message}
      />
      <Input
        label="Company Name"
        {...register('companyName')}
      />
      <Input
        label="Street Address*"
        {...register('streetAddress')}
        error={errors.streetAddress?.message}
      />
      <Input
        label="Apartment, floor, etc. (optional)"
        {...register('apartment')}
      />
      <Input
        label="Town/City*"
        {...register('townCity')}
        error={errors.townCity?.message}
      />
      <Input
        label="Phone Number*"
        type="tel"
        {...register('phoneNumber')}
        error={errors.phoneNumber?.message}
      />
      <Input
        label="Email Address*"
        type="email"
        {...register('emailAddress')}
        error={errors.emailAddress?.message}
      />
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="saveInfo"
          {...register('saveInfo')}
          className="rounded border-gray-300"
        />
        <label htmlFor="saveInfo" className="text-sm">
          Save this information for faster check-out next time
        </label>
      </div>
    </form>
  );
}