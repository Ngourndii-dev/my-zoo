import { fetchAnimals } from '@/lib/api';
import { Animal } from '@/types/animal';
import { BadgeDollarSign, Home, Tag, Key, Venus, Palette, Search } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';
import OrderForm from './OrderForm';

const AnimalDetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <li className="flex items-center justify-between w-full p-3 border-b border-gray-200 last:border-b-0">
    <span className="flex items-center gap-3">
      {React.cloneElement(icon, { className: 'w-5 h-5 text-blue-500' })}
      <span className="font-semibold text-gray-700">{label}</span>
    </span>
    <span className="text-gray-600">{value}</span>
  </li>
);

const AnimalCard: React.FC<{ animal: Animal }> = ({ animal }) => {
  const [showOrderForm, setShowOrderForm] = useState<boolean>(false);

  const handleOrderClick = () => {
    setShowOrderForm(true); 
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
      <div className="overflow-hidden">
        <img
          src={animal.imageUrl}
          alt={animal.animalTemplate.name}
          className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-90 transform transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {animal.animalTemplate.name}
        </h2>
        <div className="text-gray-700 text-lg font-medium">
          <ul className="space-y-2 w-full">
            <AnimalDetailItem icon={<Home />} label="Origin" value={animal.origin} />
            <AnimalDetailItem icon={<BadgeDollarSign />} label="Price" value={`${animal.price} €`} />
            <AnimalDetailItem icon={<Key />} label="Rent" value={`${animal.rent} €`} />
            <AnimalDetailItem icon={<Venus />} label="Sex" value={animal.sex} />
            <AnimalDetailItem icon={<Palette />} label="Color" value={animal.color} />
          </ul>
          <button
            onClick={handleOrderClick}
            className="mt-6 w-50 bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Order Now
          </button>
        </div>
      </div>
      {showOrderForm && <OrderForm animalId={animal.id} onClose={() => setShowOrderForm(false)} />}
    </div>
  );
};

const LoadingState: React.FC = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-semibold text-blue-500 animate-pulse bg-white">
    Loading...
  </div>
);

const ErrorState: React.FC<{ error: string }> = ({ error }) => (
  <div className="flex justify-center items-center h-screen text-2xl text-red-500 font-bold bg-white">
    Error: {error}
  </div>
);

const AnimalList: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getAnimals = useCallback(async () => {
    try {
      const data = await fetchAnimals();
      setAnimals(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAnimals();
  }, [getAnimals]);

  const filteredAnimals = animals.filter(animal =>
    animal.animalTemplate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
        Our Adorable Animals
      </h1>
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for an animal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;