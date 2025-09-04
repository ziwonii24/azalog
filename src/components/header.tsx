import Link from "next/link";
import { CATEGORIES } from "@/types";

import HomeIcon from "@/assets/home.svg";
import HamburgerIcon from "@/assets/hamburger.svg";
import ThemeToggleButton from "./theme-toggle-button";

/**
 * TODO:
 * 1. Static Image (& Crop)
 * 2. Search bar
 * 3. Responsive design ✓
 * 4. GitHub link
 * 5. Subcategories hover menu
 * 6. Theme toggle
 * @returns
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Home Icon */}
          <div className="flex-shrink-0 mr-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-md transition-colors duration-200"
              aria-label="홈으로 이동"
            >
              <HomeIcon className="h-6 w-6" />
            </Link>
          </div>

          {/* Desktop Navigation - Categories next to home icon */}
          <nav className="hidden md:flex space-x-1 flex-1">
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side - Dark Mode Toggle */}
          <div className="hidden md:flex items-center">
            <ThemeToggleButton />
          </div>

          {/* Mobile Right Side - Menu Button and Dark Mode Toggle */}
          <div className="md:hidden ml-auto flex items-center space-x-2">
            <ThemeToggleButton />
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
              aria-label="메뉴 열기"
            >
              <HamburgerIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
          <nav className="py-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Home
            </Link>
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
