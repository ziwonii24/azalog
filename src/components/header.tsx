import Link from "next/link";
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
        <div className="flex items-center h-16">
          {/* Home Icon */}
          <div className="flex-shrink-0 mr-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md transition-colors duration-200"
              aria-label="홈으로 이동"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation - Categories next to home icon */}
          <nav className="hidden md:flex space-x-6 flex-1">
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
          <div className="md:hidden ml-auto">
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
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            >
              홈
            </Link>
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
