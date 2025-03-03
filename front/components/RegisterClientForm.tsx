import { Client } from '@/types/client';
import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const RegisterClientForm: React.FC = () => {
  const [client, setClient] = useState<Client>({
    client_name: '',
    phone_number: '',
    email: '',
  });

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(client),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Client registered:', result);
    } catch (error) {
      console.error('Error registering client:', error);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`relative flex items-center justify-center min-h-screen transition-colors duration-300 ${theme === 'light' ? 'bg-gradient-to-br from-gray-100 to-gray-200' : 'bg-gradient-to-br from-gray-900 to-gray-800'}`}>
      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-xl shadow-2xl w-full max-w-md transition-all transform hover:scale-105 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center animate-pulse">
            Register Client   
            <button
                    onClick={toggleTheme}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all transform hover:scale-110"
                >
                    {theme === 'light' ? <MoonIcon className="w-6 h-6 text-gray-800" /> : <SunIcon className="w-6 h-6 text-yellow-400 animate-spin-slow" />}
            </button>
        </h2>

        {['client_name', 'phone_number', 'email'].map((field, index) => (
          <div key={index} className="mb-6">
            <label
              className="block text-sm font-semibold mb-2 transition-all duration-300 transform hover:scale-105 hover:text-blue-500 dark:hover:text-blue-400"
              htmlFor={field}
            >
              {field.replace('_', ' ').toUpperCase()}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={client[field as keyof Client]}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-blue-500 hover:border-blue-400 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-700 text-white border-gray-600 focus:ring-blue-700'}`}
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all transform hover:scale-105"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterClientForm;