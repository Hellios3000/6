'use client';
import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
    total: state.total + item.price
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id),
    total: state.total - (state.items.find((i) => i.id === id)?.price || 0)
  })),
  clearCart: () => set({ items: [], total: 0 }),
}));