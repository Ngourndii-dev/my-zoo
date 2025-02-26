import { Order } from "@/types/order";
import { useState } from "react";
import { z } from "zod";
import { create } from "zustand";

const orderSchema = z.object({
  order_date: z.string().min(1, "La date est requise"),
  status: z.enum(["append", "available", "unavailable"]),
  quantity: z.number().min(1, "La quantité doit être au moins 1"),
  id_client: z.number().min(1, "L'ID client est requis"),
  id_animal: z.number().min(1, "L'ID animal est requis"),
});

interface OrderFormState {
  order: Partial<Order>;
  setOrder: (order: Partial<Order>) => void;
}

const useOrderStore = create<OrderFormState>((set) => ({
  order: {},
  setOrder: (order) => set({ order }),
}));

export function OrderForm() {
  const { order, setOrder } = useOrderStore();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = orderSchema.safeParse(order);
    if (!validation.success) {
      setError(validation.error.errors.map((err) => err.message).join(", "));
      return;
    }
    setError(null);
    await fetch("http://localhost:8080/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="order_date">Date de la commande</label>
        <input
          type="date"
          id="order_date"
          onChange={(e) => setOrder({ ...order, order_date: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantité</label>
        <input
          type="number"
          id="quantity"
          placeholder="Quantité"
          onChange={(e) => setOrder({ ...order, quantity: Number(e.target.value) })}
        />
      </div>
      <div>
        <label htmlFor="status">Statut</label>
        <select
          id="status"
          onChange={(e) => setOrder({ ...order, status: e.target.value })}
        >
          <option value="append">Append</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
      <button type="submit">Envoyer</button>
      {error && <p>{error}</p>}
    </form>
  );
}
