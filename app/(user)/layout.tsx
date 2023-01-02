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
      <body className="font-sans text-black bg-white">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
