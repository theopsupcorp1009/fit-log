import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContextProvider from "@/Context/Context";
import { ToastContainer } from "react-toastify";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fit Log",
  description: "Your personal fitness tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable}} h-full antialiased`}
    >
      <body className="font-oswald min-h-full flex flex-col font-oswald">

        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </ContextProvider>

      </body>
    </html>
  );
}