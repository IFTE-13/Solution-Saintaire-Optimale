import CTA from '@/components/cta';
import { Hero } from '@/components/hero';
import Industries from '@/components/industries';
import Reasons from '@/components/reason';
import { Reviews } from '@/components/reviews';
 
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <Industries />
      <Reasons />
      <CTA />
    </>
  );
}