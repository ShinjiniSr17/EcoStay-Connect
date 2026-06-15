import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EcoStay Connect",
  description: "Discover eco-friendly stays around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-50 text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}