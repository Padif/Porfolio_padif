import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

function applyTheme(theme: Theme, animate: boolean) {
  const root = document.documentElement;
  if (animate) {
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 600);
  }
  root.classList.toggle("light", theme === "light");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "light" ? "#f4f4f8" : "#050508");
  }
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark", // Default awal
      toggleTheme: () => {
        const next: Theme = get().theme === "light" ? "dark" : "light";
        applyTheme(next, true);
        set({ theme: next });
      },
      setTheme: (theme: Theme) => {
        applyTheme(theme, false);
        set({ theme });
      },
    }),
    {
      name: "theme-storage", // Nama key di localStorage
      onRehydrateStorage: () => (state) => {
        // Dijalankan saat state berhasil dimuat dari localStorage di browser
        if (state) {
          applyTheme(state.theme, false);
        }
      },
    },
  ),
);
