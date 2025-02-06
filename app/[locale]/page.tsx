import CTA from '@/components/cta';
import { Hero } from '@/components/hero';
import Industries from '@/components/industries';
import Reasons from '@/components/reason';
import { Reviews } from '@/components/reviews';
import { Services } from '@/components/services';
 
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
      <Industries />
      <Reasons />
      <CTA />
    </>
  );
}