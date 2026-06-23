import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const globalThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'global-theme', 
    }
  )
);
