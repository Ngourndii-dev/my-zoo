import React, { useState } from 'react';
import axios from 'axios';
import AnimalCard from './AnimalCard';
import { Animal } from './types';

const AnimalList: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    const fetchAnimals = async () => {
      const response = await axios.get<Animal[]>('/api/animals');
      setAnimals(response.data);
    };

    fetchAnimals();
  }, []);

  const filteredAnimals = animals.filter(animal =>
    animal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un animal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="animal-list">
        {filteredAnimals.slice(0, 3).map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
        {filteredAnimals.slice(3).map(animal => (
          <div key={animal.id} style={{ display: 'none' }}>
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;