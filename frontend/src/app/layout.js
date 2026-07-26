import { Poppins } from "next/font/google";
import "./globals.css";
import Toast from "../components/ui/Toast";
import Providers from "../components/Providers";
import ErrorBoundary from "../components/ErrorBoundary";

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
    <html lang="en" suppressHydrationWarning>
     <body
  className={`${poppins.className} bg-gray-50 text-gray-800 antialiased dark:bg-gray-900 dark:text-white`}
>
  <Providers>
  <ErrorBoundary>
    <Toast />
    {children}
  </ErrorBoundary>
</Providers>
</body> 
    </html>
  );
}