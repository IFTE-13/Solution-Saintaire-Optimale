import CTA from '@/components/cta';
import { Hero } from '@/components/hero';
import { Reviews } from '@/components/reviews';
 
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <CTA />
    </>
  );
}