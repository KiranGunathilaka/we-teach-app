"use client"

import styles from "./page.module.css";
import FAQ from "@/components/FAQ/FAQ";
import ContactUs from "@/components/ContactUs/ContactUs"

export default function Home() {
  return (
    <main >
      <FAQ />
      <ContactUs />
    </main>
  );
}
