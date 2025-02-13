import React, { useState } from 'react';
import { Animal } from './types';
import OrderModal from './OrderModal';

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="animal-card">
      <h3>{animal.name}</h3>
      <p>{animal.description}</p>
      <button onClick={handleOrderClick}>Commander</button>
      {isModalOpen && (
        <OrderModal animalId={animal.id} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default AnimalCard;