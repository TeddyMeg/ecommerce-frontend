import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Button } from '../components/ui/Button';
import { toast } from 'react-hot-toast';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem } = useCartStore();

  const subtotal = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast.success('Item removed from cart');
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    updateQuantity(id, quantity);
    toast.success('Cart updated');
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <span>Home</span>
        <span>/</span>
        <span className="text-black">Cart</span>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-xl font-medium text-gray-600">Your cart is empty</h2>
          <p className="text-gray-500 mt-2">Browse our products and add items to your cart</p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => navigate('/')}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-4">Product</th>
                  <th className="text-left pb-4">Price</th>
                  <th className="text-left pb-4">Quantity</th>
                  <th className="text-right pb-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 text-xl"
                        >
                          ×
                        </button>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-contain"
                        />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td className="py-4">${item.price}</td>
                    <td className="py-4">
                      <div className="flex border rounded w-24">
                        <button
                          className="px-2"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                          className="w-full text-center"
                          min="1"
                        />
                        <button
                          className="px-2"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                Return To Shop
              </Button>
            </div>

            <div className="w-80 border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Cart Total</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t font-bold">
                  <span>Total:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Button
                variant="primary"
                fullWidth
                className="mt-6"
                onClick={handleCheckout}
              >
                Process to checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}