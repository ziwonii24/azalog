import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* 로고 및 설명 */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Azalog
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              개발과 학습의 기록을 남기는 블로그
            </p>
          </div>

          {/* 링크 섹션 */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                바로가기
              </h4>
              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  홈
                </Link>
                <Link
                  href="/category"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  카테고리
                </Link>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                소셜
              </h4>
              <div className="flex flex-col space-y-1">
                <a
                  href="https://github.com/ziwonii24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Copyright © {new Date().getFullYear()} @ziwonii24 All rights
              reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
