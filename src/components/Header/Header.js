import Link from "next/link";
import styles from "@/components/Header/Header.module.css"

const Header = () => {
  return (
    <header>
        <div className={styles.test}>
            <p>This is header</p>
        </div>
    </header>
    
  );
}

export default Header;
