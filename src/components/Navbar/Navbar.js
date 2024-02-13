import Link from "next/link";
import styles from "@/app/page.module.css";

const Navbar = () => {
  return (
    <div>
      <Link href="/tutor-list" classname={styles.description}>Tutors List</Link>
    </div>
  )
}

export default Navbar
