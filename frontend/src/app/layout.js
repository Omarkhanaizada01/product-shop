import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Shopery",
  description: "Organic eCommerce Shop Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans bg-white">
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
