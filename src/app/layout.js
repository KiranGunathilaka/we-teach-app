import { Inter } from "next/font/google";
import "./globals.css";
import styles from "@/app/layout.module.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "We Teach",
  description: "Platform to find a tutor for anything you want to learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={styles.scrollSetter}>
      <body className={inter.className }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
