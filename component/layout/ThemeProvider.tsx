"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextValue {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setIsDark(localStorage.getItem("trams-theme") === "dark");
      setHasLoadedPreference(true);
    });
  }, []);

  useEffect(() => {
    if (!hasLoadedPreference) {
      return;
    }

    localStorage.setItem("trams-theme", isDark ? "dark" : "light");
  }, [hasLoadedPreference, isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
