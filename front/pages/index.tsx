import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sales from '@/components/Sales';
import Contact from '@/components/ContactForm';
import Services from '@/components/Services';
import Separator from '@/components/ui/Separator';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Separator/>
      <Hero />
      <Services />
      <Sales />
      <Contact />
    </div>
  );
}