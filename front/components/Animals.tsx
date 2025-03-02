import { fetchAnimals } from "@/lib/api";
import { Animal } from "@/types/animal";
import { useEffect, useState } from "react";

const AnimalList = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const response = await fetchAnimals();
        if (response && response.data) {
          setAnimals([response.data]); 
        } else {
          setError("Données invalides reçues.");
        }
      } catch (err) {
        setError("Erreur lors du chargement des animaux.");
      } finally {
        setLoading(false);
      }
    };
    loadAnimals();
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Liste des Animaux</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
           
            <p>Sexe : {animal.sex}</p>
            <p>Origine : {animal.origin}</p>
            <p>Prix : {animal.price}€</p>
            <p>Loyer : {animal.rent}€</p>
            <p>Statut : {animal.status}</p>
            <p>Couleur : {animal.color}</p>
            <img src={animal.imageUrl} alt="Animal" width={150} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
