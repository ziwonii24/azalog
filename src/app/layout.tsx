import './globals.css';

import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col bg-white transition-colors duration-200 dark:bg-gray-900">
          <Header />
          <main className="container mx-auto flex-1 px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
