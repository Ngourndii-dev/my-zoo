import React, { useEffect, useState } from 'react';
import { Event } from '../types/event'; 
import { fetchEvent } from '../lib/api'; 

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetchEvent(); 
        setEvents(data);
      } catch (err) {
        setError('Une erreur est survenue lors de la récupération des événements');
      } finally {
        setLoading(false); 
      }
    };

    getEvents();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div>
      <h1>Liste des événements</h1>
      {events.length === 0 ? (
        <p>Aucun événement disponible.</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <h2>{event.description_event}</h2>
              <p>Date de l'événement : {new Date(event.situation_date).toLocaleDateString()}</p>
              <p>Quantité : {event.quantity}</p>
              <img src={event.image} alt={event.description_event} style={{ width: '200px' }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Events;
