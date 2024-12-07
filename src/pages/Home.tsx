import { Categories } from '../components/home/Categories';
import { FlashSales } from '../components/home/FlashSales';
import { Hero } from '../components/home/Hero';
import { NewArrivals } from '../components/home/NewArrivals';
import { Products } from '../components/home/Products';
import { PromoSection } from '../components/home/PromoSection';

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FlashSales />
      <Categories />
      <Products />
      <PromoSection />
      <NewArrivals />
    </div>
  );
}