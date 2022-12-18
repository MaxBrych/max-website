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
      <body className="font-sans text-white bg-gray-900">
        <Header />

        {children}
      </body>
    </html>
  );
}
