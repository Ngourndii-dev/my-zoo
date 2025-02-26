import React, { useEffect, useState } from "react";
import { fetchAnimals } from "../../lib/api";
import { Animal } from "../../types/animal";
import SearchInput from "./SearchInput";
import Button from "./Button"; 
import Modal from "./Modal";

const AnimalCard = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null); 

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await fetchAnimals();
        setAnimals(data);
        setFilteredAnimals(data);
      } catch (error) {
        console.error("Erreur de récupération des animaux", error);
      } finally {
        setLoading(false);
      }
    };

    loadAnimals();
  }, []);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredAnimals(animals);
    } else {
      const lowercasedQuery = query.toLowerCase();
      const filtered = animals.filter((animal) =>
        animal.name.toLowerCase().includes(lowercasedQuery) ||
        animal.origin.toLowerCase().includes(lowercasedQuery) ||
        animal.color.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredAnimals(filtered);
    }
  };

  const openModal = (animal: Animal) => {
    setSelectedAnimal(animal); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchInput onSearch={handleSearch} />
      <div className="animal-cards-container">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="animal-card">
            <img
              src={animal.image}
              alt={animal.name}
              className="animal-image"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <div className="animal-info">
              <h2>{animal.name}</h2>
              <p><strong>Sexe:</strong> {animal.sex}</p>
              <p><strong>Origine:</strong> {animal.origin}</p>
              <p><strong>Prix:</strong> {animal.price} €</p>
              <p><strong>Location:</strong> {animal.rent} €</p>
              <p><strong>Statut:</strong> {animal.status}</p>
              <p><strong>Couleur:</strong> {animal.color}</p>
              <Button variant="primary" onClick={() => openModal(animal)}>
                Voir plus
              </Button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedAnimal && (
        <Modal animal={selectedAnimal} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default AnimalCard;
