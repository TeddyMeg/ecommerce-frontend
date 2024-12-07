import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCartStore } from '../store/useCartStore';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'react-hot-toast';

const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, 'Street address is required'),
  apartment: z.string().optional(),
  townCity: z.string().min(2, 'Town/City is required'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  emailAddress: z.string().email('Valid email is required'),
  paymentMethod: z.enum(['bank', 'cash']),
  saveInfo: z.boolean().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'cash',
    },
  });

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Account</span>
        <span>/</span>
        <span>My Account</span>
        <span>/</span>
        <span>Product</span>
        <span>/</span>
        <span>View Cart</span>
        <span>/</span>
        <span className="text-black">CheckOut</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-8">Billing Details</h1>
          <div className="space-y-4">
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
              {...register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />
            <Input
              label="Email Address*"
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
          </div>
        </div>

        <div>
          <div className="bg-gray-50 p-8 rounded-lg">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-medium">{item.title}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="border-t mt-8 pt-4 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="bank"
                  value="bank"
                  {...register('paymentMethod')}
                  className="form-radio"
                />
                <label htmlFor="bank" className="flex items-center gap-2">
                  Bank
                  <div className="flex gap-2">
                    <img src="https://www.visa.com/images/visa-logo.png" alt="Visa" className="h-6" />
                    <img src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/mastercard-logo.png" alt="Mastercard" className="h-6" />
                  </div>
                </label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  {...register('paymentMethod')}
                  className="form-radio"
                />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-4 mb-4">
                <Input placeholder="Coupon Code" className="flex-grow" />
                <Button type="button" variant="primary">Apply Coupon</Button>
              </div>
              <Button type="submit" variant="primary" fullWidth>
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}