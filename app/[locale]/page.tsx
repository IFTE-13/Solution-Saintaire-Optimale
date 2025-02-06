import CTA from '@/components/cta';
import { Hero } from '@/components/hero';
import Reasons from '@/components/reason';
import { Reviews } from '@/components/reviews';
 
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <Reasons />
      <CTA />
    </>
  );
}