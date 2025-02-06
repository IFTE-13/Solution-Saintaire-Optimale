import CTA from '@/components/cta';
import { Hero } from '@/components/hero';
import HomeAbout from '@/components/home-about';
import Industries from '@/components/industries';
import Reasons from '@/components/reason';
import { Reviews } from '@/components/reviews';
import { Services } from '@/components/services';
 
export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <HomeAbout />
      <Services />
      <Industries />
      <Reasons />
      <CTA />
    </>
  );
}