import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.navbar}>
          <div className={styles.navbarContainer}>
            <div className={styles.logo}>Logo</div>
            <ul className={styles.navMenu}>
              <li className={styles.navItem}>
                <a className={styles.navButton} href="">
                <AiOutlineHome size={30} />
                <span>Home</span>
              </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navButton} href="">
                <IoStatsChartOutline />
                <span>Stats</span>
              </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navButton} href="#FAQ">
                <FaQuestionCircle />
                <span>FAQ</span>
              </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navButton} href="#ContactUs">
                <FiPhoneCall />
                <span>Contact us</span>
              </a>
              </li>
              <ul className={styles.navMenu}>
                <li className={styles.navItem}>
                  <button className={styles.loginButton}>Join now</button>
                </li>
                <li className={styles.navItem}>
                  <button className={styles.loginButton}>Sign in</button>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
