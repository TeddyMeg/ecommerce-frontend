import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-5 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Exclusive</h2>
          <h3 className="mb-4">Subscribe</h3>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-white rounded px-4 py-2 w-full"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              →
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-6">Support</h3>
          <ul className="space-y-4">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">Account</h3>
          <ul className="space-y-4">
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">Quick Link</h3>
          <ul className="space-y-4">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">Download App</h3>
          <p className="text-sm text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-4 mb-4">
            <img 
              src="https://th.bing.com/th/id/R.fbd3782b74b283e3a06c44fc7600f0a8?rik=6S9LOi8CSACj%2fQ&pid=ImgRaw&r=0" 
              alt="QR Code" 
              className="w-24 h-24 bg-white rounded-lg"
            />
            <div className="space-y-2">
              <img 
                src="https://th.bing.com/th/id/R.468ef7f576ce6cfef78231938349ab0b?rik=asTuqFNXKLUCsw&pid=ImgRaw&r=0" 
                alt="Get it on Google Play" 
                className="h-10"
              />
              <img 
                src="https://th.bing.com/th/id/R.9fef0094f21dc756d50d570b0f371790?rik=3j1Z%2bQb6RiG9pw&pid=ImgRaw&r=0" 
                alt="Download on App Store" 
                className="h-10"
              />
            </div>
          </div>
          <div className="flex space-x-6">
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Linkedin className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="text-center mt-16 text-gray-400">
        <p>© Copyright Rimel 2023. All right reserved</p>
      </div>
    </footer>
  );
}