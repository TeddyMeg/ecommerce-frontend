import { Trash2 } from 'lucide-react';
import { useWishlistStore } from '../store/useWishlistStore';
import { useCartStore } from '../store/useCartStore';
import { Button } from '../components/ui/Button';

export default function Wishlist() {
  const { items, removeItem } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addItemById);

  const handleAddToCart = (id: number) => {
    addToCart(id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Wishlist ({items.length})</h1>
        {items.length > 0 && (
          <Button 
            variant="outline" 
            onClick={() => items.forEach(item => handleAddToCart(item.id))}
          >
            Move All To Bag
          </Button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
            <h3 className="font-medium mb-2 truncate">{item.title}</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-red-500 font-bold">${item.price}</span>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(item.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500 ml-1">({item.rating.count})</span>
              </div>
            </div>
            <Button
              variant="primary"
              fullWidth
              onClick={() => handleAddToCart(item.id)}
            >
              Add To Cart
            </Button>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-16">
          <h2 className="text-xl font-medium text-gray-600">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2">Browse our products and add items you love to your wishlist</p>
        </div>
      )}
    </div>
  );
}
