import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
