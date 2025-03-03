import { fetchAnimals } from '@/lib/api';
import { Animal } from '@/types/animal';
import { BadgeDollarSign, Home, Tag, Key, Venus, Palette } from "lucide-react";
import React, { useEffect, useState, useCallback } from 'react';

const AnimalDetailItem: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
  <li className="flex items-center justify-between w-full p-2">
    <span className="flex items-center gap-2">
      {icon}
      <span className="font-semibold text-blue-300">{label}</span>
    </span>
    <span className="text-gray-200">{value}</span>
  </li>
);

const AnimalCard: React.FC<{ animal: Animal }> = ({ animal }) => {
  const [showOrderForm, setShowOrderForm] = useState<boolean>(false);

  return (
    <div className="relative bg-gradient-to-t from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
      <img
        src={animal.imageUrl}
        alt={animal.animalTemplate.name}
        className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-80"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-end p-1 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0">
        <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
          {animal.animalTemplate.name}
        </h2>
        <div className="text-white text-lg font-medium flex flex-col items-center space-y-1 p-1 rounded-xl shadow-xl backdrop-blur-lg bg-black/40 transition-all duration-300 overflow-visible">
          <ul className="space-y-1 w-full">
            <AnimalDetailItem icon={<Tag className="w-2 h-2 text-blue-300" />} label="Status" value={animal.status} />
            <AnimalDetailItem icon={<Home className="w-2 h-2 text-blue-300" />} label="Origin" value={animal.origin} />
            <AnimalDetailItem icon={<BadgeDollarSign className="w-2 h-2 text-blue-300" />} label="Price" value={`${animal.price} €`} />
            <AnimalDetailItem icon={<Key className="w-2 h-2 text-blue-300" />} label="Rent" value={`${animal.rent} €`} />
            <AnimalDetailItem icon={<Venus className="w-2 h-2 text-blue-300" />} label="Sex" value={animal.sex} />
            <AnimalDetailItem icon={<Palette className="w-2 h-2 text-blue-300" />} label="Color" value={animal.color} />
            <button
              onClick={() => setShowOrderForm(true)}
              className="mt-4 bg-blue-500 hover:bg-blue-900 text-white font-bold py-1 px-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Order
            </button>
          </ul>
        </div>
      </div>
      {showOrderForm && <OrderForm animalId={animal.id} onClose={() => setShowOrderForm(false)} />}
    </div>
  );
};
const LoadingState: React.FC = () => (
  <div className="flex justify-center items-center h-screen text-3xl font-semibold text-blue-500 animate-pulse bg-black">
    Loading...
  </div>
);

const ErrorState: React.FC<{ error: string }> = ({ error }) => (
  <div className="flex justify-center items-center h-screen text-2xl text-red-500 font-bold bg-black">
    Error: {error}
  </div>
);

const AnimalList: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-10 px-6 text-white">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate__animated animate__fadeIn animate__delay-1s">
        Animal List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
