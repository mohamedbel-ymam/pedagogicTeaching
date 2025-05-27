import { create } from "zustand";

export const useThemeStore = create((set) => {
  
  const storedTheme = localStorage.getItem("theme") || "light";

 
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }

  return {
    darkMode: storedTheme === "dark",
    toggleDarkMode: () =>
      set((state) => {
        const newMode = !state.darkMode;
        const newTheme = newMode ? "dark" : "light";

        
        if (typeof document !== 'undefined') {
          document.documentElement.classList.toggle("dark", newMode);
        }

       
        localStorage.setItem("theme", newTheme);

        return { darkMode: newMode };
      }),
  };
});