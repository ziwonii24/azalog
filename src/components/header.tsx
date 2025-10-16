import Link from 'next/link';
import { CATEGORIES } from '@/types';

import HomeIcon from '@/assets/home.svg';
import HamburgerIcon from '@/assets/hamburger.svg';
import ThemeToggleButton from './theme-toggle-button';

/**
 * TODO:
 * 1. Static Image (& Crop)
 * 2. Search bar
 * 4. GitHub link
 * 5. Subcategories hover menu
 * @returns
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors duration-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Home Icon */}
          <div className="mr-6 flex-shrink-0">
            <Link href="/" className="p-2" aria-label="홈으로 이동">
              <HomeIcon className="h-6 w-6 transition-colors duration-200 dark:text-gray-100" />
            </Link>
          </div>

          {/* Desktop Navigation - Categories next to home icon */}
          <nav className="hidden flex-1 space-x-1 md:flex">
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="rounded-md px-3 py-1 hover:bg-gray-100"
              >
                <span className="text-sm font-bold text-gray-900 transition-colors duration-200 dark:text-gray-100">
                  {category}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side - Dark Mode Toggle */}
          <div className="hidden items-center md:flex">
            <ThemeToggleButton />
          </div>

          {/* Mobile Right Side - Menu Button and Dark Mode Toggle */}
          <div className="ml-auto flex items-center space-x-2 md:hidden">
            <ThemeToggleButton />
            {/* TODO: toggle */}
            <button
              type="button"
              className="cursor-pointer rounded-md p-2 text-gray-900 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label="메뉴 열기"
            >
              <HamburgerIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="border-t border-gray-200 transition-colors duration-200 md:hidden dark:border-gray-700">
          <nav className="py-2">
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="block rounded-md px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <span className="text-sm font-bold text-gray-600 transition-colors duration-200 dark:text-gray-100">
                  {category}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
