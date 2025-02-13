import { create } from "zustand";

interface StoreState {
  orders: any[];
  addOrder: (order: any) => void;
}

const useStore = create<StoreState>((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));

export default useStore;