import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';
import { useWishlistStore } from '../store/useWishlistStore';
import { Badge } from './ui/Badge';

export default function Navbar() {
  const { user } = useAuthStore();
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  return (
    <>
      <div className="bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <span className="ml-2 underline cursor-pointer">ShopNow</span>
      </div>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Exclusive
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign Up</Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-3 pr-10 py-1 border rounded-md w-64"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/wishlist" className="relative">
                <Heart className="w-6 h-6" />
                <Badge count={wishlistItems.length} />
              </Link>
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />
                <Badge count={cartItems.length} />
              </Link>
              <Link to={user ? "/account" : "/login"}>
                <User className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}