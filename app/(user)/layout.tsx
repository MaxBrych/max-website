import { ThemeProvider } from "next-themes";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="text-black bg-white dark:bg-black dark:text-white font-modern">
        <Providers>
          <Header />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
