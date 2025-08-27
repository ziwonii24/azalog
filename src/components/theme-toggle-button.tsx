"use client";

import { useTheme } from "next-themes";
import SunIcon from "@/assets/sun.svg";
import MoonIcon from "@/assets/moon.svg";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors duration-200 cursor-pointer"
      aria-label={theme === "dark" ? "라이트 모드로 변경" : "다크 모드로 변경"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
