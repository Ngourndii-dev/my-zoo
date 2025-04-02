import { Order } from '@/types/order';
import React, { useState, useCallback } from 'react';

interface OrderFormProps {
  animalId: number;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ animalId, onClose }) => {
  const [orderDate, setOrderDate] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [idClient, setIdClient] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!orderDate || quantity <= 0 || idClient <= 0) {
        setError('Please fill in all fields correctly.');
        return;
      }

      const order: Order = {
        id: 0,
        order_date: orderDate,
        quantity,
        id_client: idClient,
        id_animal: animalId,
      };

      try {
        const response = await fetch('http://localhost:8080/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(order),
        });

        if (response.ok) {
          alert('Order placed successfully!');
          onClose();
        } else {
          throw new Error('Failed to place order.');
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while placing the order.');
      }
    },
    [orderDate, quantity, idClient, animalId, onClose]
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">Place Order</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champ pour afficher l'ID de l'animal (lecture seule) */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Animal ID</label>
            <input
              type="text"
              value={animalId}
              readOnly
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Order Date</label>
            <input
              type="date"
              value={orderDate}
              onChange={(e) => setOrderDate(e.target.value)}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Client ID</label>
            <input
              type="number"
              value={idClient}
              onChange={(e) => setIdClient(Number(e.target.value))}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
              min="1"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;