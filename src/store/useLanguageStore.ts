import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Language } from "@/lib/translations";

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "en", // Default awal
      toggleLanguage: () => {
        const current = get().language;
        const next: Language = current === "en" ? "id" : "en";
        set({ language: next });
      },
    }),
    {
      name: "language-storage", // Nama key di localStorage
    },
  ),
);

// "use client";

// import { useLanguageStore } from "@/store/useLanguageStore";
// import { getTranslations } from "@/lib/translations";

// export default function LanguageSwitcher() {
//   // Ambil state dan fungsi dari Zustand store
//   const { language, toggleLanguage, setLanguage } = useLanguageStore();

//   // Ambil fungsi terjemahan berdasarkan bahasa yang aktif
//   const t = getTranslations(language);

//   return (
//     <div className="flex gap-2 items-center">
//       <p>Bahasa aktif: {language}</p>

//       {/* Tombol Toggle */}
//       <button
//         onClick={toggleLanguage}
//         className="px-3 py-1 rounded bg-blue-500 text-white"
//       >
//         Ubah Bahasa
//       </button>

//       {/* Atau ubah secara spesifik */}
//       <button onClick={() => setLanguage("id")}>ID</button>
//       <button onClick={() => setLanguage("en")}>EN</button>
//     </div>
//   );
// }
