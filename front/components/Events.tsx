import React, { useEffect, useState } from 'react';
import { fetchEvent } from '../lib/api';
import { CalendarDays, PawPrint, HeartPulse, MapPin, ScrollText } from 'lucide-react';
import { Event } from '../types/event';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvent();
        setEvents(data);
      } catch (err) {
        setError('Erreur lors du chargement des événements');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-bounce text-4xl">🐾</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-200 border border-red-500 text-red-800 px-6 py-4 rounded-lg shadow-md max-w-md mx-auto text-center">
          🚨 {error}
        </div>
      );
    }

    if (!events.length) {
      return (
        <div className="text-center text-gray-600 text-xl py-12 flex flex-col items-center gap-3">
          <div className="text-6xl">😢</div>
          Aucun événement disponible
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {events.map((event) => (
          <article
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative h-64">
              <img
                src={event.image}
                alt={event.descriptionEvent}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-white" />
                <time className="text-white font-semibold text-lg">
                  {new Date(event.situationDate).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                🎈 {event.descriptionEvent}
              </h3>
              
              {event.animal && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      🐾 {event.animal.animalTemplate.species || event.animal.animalTemplate.espèce}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 gap-2">
                    <span className="text-2xl text-yellow-500">⭐</span>
                    <span className="font-medium">{event.animal.animalTemplate.name}</span>
                  </div>
                  
                  {event.animal.sexe && (
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      👥 Sexe: {event.animal.sexe || event.animal.sex}
                    </p>
                  )}
                  
                  {event.animal.origine && (
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-500" />
                      Origine: {event.animal.origine || event.animal.origin}
                    </p>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <PawPrint className="w-12 h-12 text-purple-700" strokeWidth={1.5} />
            Événements Récents 🎉
            <HeartPulse className="w-12 h-12 text-red-500" strokeWidth={1.5} />
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <ScrollText className="w-5 h-5 text-indigo-700" /> 
            Découvrez les dernières actualités de nos animaux 🐾
          </p>
        </header>

        {renderContent()}
      </div>
    </div>
  );
};

export default Events;
