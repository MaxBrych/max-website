import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="text-black bg-white font-modern">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
