import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { CATEGORIES } from "@/types";

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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200"
              aria-label="메뉴 열기"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden border-t border-gray-200">
          <nav className="py-2">
            {Object.keys(CATEGORIES).map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
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
