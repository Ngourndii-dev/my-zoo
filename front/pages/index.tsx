import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from './services';
import Sales from './sales';
import Contact from './contact';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Sales />
      <Contact />
    </div>
  );
}