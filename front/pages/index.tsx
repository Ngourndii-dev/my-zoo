import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Sales from './sales';
import Services from './services';
import Contact from './contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sales />
      <Services />
      <Contact />
    </div>
  );
}