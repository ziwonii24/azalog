import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
