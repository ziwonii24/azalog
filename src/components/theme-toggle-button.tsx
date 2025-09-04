"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SunIcon from "@/assets/sun.svg";
import MoonIcon from "@/assets/moon.svg";

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 컴포넌트가 마운트된 후에만 테마 UI를 렌더링
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // 하이드레이션 완료 전까지는 기본 아이콘 표시
  if (!mounted) {
    return (
      <div className="text-gray-600 dark:text-gray-300 p-2 rounded-md">
        <MoonIcon className="h-5 w-5" />
      </div>
    );
  }

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
