import { Order } from '@/types/order';
import React, { useState } from 'react';

interface OrderFormProps {
  animalId: number;
  onClose: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ animalId, onClose }) => {
  const [orderDate, setOrderDate] = useState<string>('');
  const [status, setStatus] = useState<"append" | "available" | "unavailable">("append");
  const [quantity, setQuantity] = useState<number>(1);
  const [idClient, setIdClient] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order: Order = {
      id: 0,
      order_date: orderDate,
      status,
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
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while placing the order.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4">Place Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-sm font-medium text-gray-300">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "append" | "available" | "unavailable")}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
            >
              <option value="append">Append</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 block w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white"
              required
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