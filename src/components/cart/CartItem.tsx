import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { api } from '../../lib/axios';
import { Product } from '../../types';

interface CartItemProps {
  productId: number;
  quantity: number;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItem({ productId, quantity, onUpdateQuantity, onRemove }: CartItemProps) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) return null;

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <button onClick={onRemove} className="p-2 hover:bg-gray-100 rounded-full">
        <Trash2 className="w-4 h-4 text-red-500" />
      </button>
      <img src={product.image} alt={product.title} className="w-16 h-16 object-contain" />
      <div className="flex-grow">
        <h3 className="font-medium truncate">{product.title}</h3>
      </div>
      <div className="w-24 text-center">${product.price}</div>
      <div className="w-32">
        <div className="flex border rounded-md">
          <button
            className="px-3 py-1 hover:bg-gray-100"
            onClick={() => quantity > 1 && onUpdateQuantity(quantity - 1)}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value > 0) onUpdateQuantity(value);
            }}
            className="w-12 text-center border-x"
          />
          <button
            className="px-3 py-1 hover:bg-gray-100"
            onClick={() => onUpdateQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-24 text-right font-medium">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
}