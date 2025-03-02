import { fetchAnimals } from '@/lib/api';
import { Animal } from '@/types/animal';
import React, { useEffect, useState } from 'react';

const AnimalList: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAnimals();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Liste des Animaux</h1>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.animalTemplate.name}</h2>
            <img src={animal.imageUrl} alt={animal.animalTemplate.name} style={{ width: '200px', height: 'auto' }} />
            <p>Sexe: {animal.sex}</p>
            <p>Origine: {animal.origin}</p>
            <p>Prix: {animal.price} €</p>
            <p>Loyer: {animal.rent} €</p>
            <p>Statut: {animal.status}</p>
            <p>Couleur: {animal.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;