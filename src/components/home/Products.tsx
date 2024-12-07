import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { api } from '../../lib/axios';
import { Product } from '../../types';
import { ProductCard } from '../product/ProductCard';
import { Button } from '../ui/Button';

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products?limit=4');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-green-500 font-medium">Products</span>
          <h2 className="text-3xl font-bold mt-2">All Products</h2>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full border">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full border">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">View All Products</Button>
      </div>
    </div>
  );
}