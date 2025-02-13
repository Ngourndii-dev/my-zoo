import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';

const orderSchema = z.object({
  name: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  quantity: z.number().min(1, 'La quantité doit être au moins 1'),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderModalProps {
  animalId: string;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ animalId, onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = async (data: OrderFormData) => {
    try {
      await axios.post('/api/orders', { ...data, animalId });
      onClose();
    } catch (error) {
      console.error('Erreur lors de la commande', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Commander</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nom</label>
            <input {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Email</label>
            <input {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label>Quantité</label>
            <input type="number" {...register('quantity', { valueAsNumber: true })} />
            {errors.quantity && <span>{errors.quantity.message}</span>}
          </div>
          <button type="submit">Valider</button>
        </form>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default OrderModal;