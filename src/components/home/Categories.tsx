import { useState } from 'react';
import { Smartphone, Monitor, Watch, Camera, Gamepad, Loader } from 'lucide-react';
import { useCategories } from '../../hooks/useCategories';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../product/ProductCard';

const categoryIcons = {
  electronics: Monitor,
  jewelery: Watch,
  "men's clothing": Smartphone,
  "women's clothing": Camera,
} as const;

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const { categories, loading: categoriesLoading } = useCategories();
  const { products, loading: productsLoading } = useProducts(selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? undefined : category);
  };

  if (categoriesLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <span className="text-red-500 font-medium">Categories</span>
        <h2 className="text-2xl font-bold mt-2">Browse By Category</h2>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {categories.map((category) => {
          const Icon = categoryIcons[category as keyof typeof categoryIcons] || Gamepad;
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`flex flex-col items-center justify-center p-6 border rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'border-red-500 bg-red-50'
                  : 'hover:border-red-500'
              }`}
            >
              <Icon className="w-8 h-8 mb-2" />
              <span className="text-sm capitalize">{category}</span>
            </button>
          );
        })}
      </div>

      {productsLoading ? (
        <div className="flex justify-center items-center py-12">
          <Loader className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}