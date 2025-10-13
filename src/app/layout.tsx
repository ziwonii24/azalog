import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
          <Header />
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
