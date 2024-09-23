import { create } from 'zustand'

export const useNotificateStore = create((set) => ({
  cart: 0,
  setCarts: (number) => set({ cart: number }),
}))