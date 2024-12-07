import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/useCartStore';
import { useWishlistStore } from '../../store/useWishlistStore';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addItem);
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success('Added to cart');
  };

  return (
    <div className="group relative">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <button
          className={`absolute top-4 right-4 p-2 rounded-full ${
            isInWishlist ? 'bg-red-50' : 'bg-white'
          } shadow-md hover:bg-red-50 transition-colors`}
          onClick={handleWishlistClick}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-medium truncate">{product.title}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-red-500 font-bold">${product.price}</span>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-sm text-gray-500 ml-1">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
}