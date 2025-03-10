'use client';
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";
export default function Button(){
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return(
    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Navigation Menu" >☰</button>
<nav className={`${styles.nav} ${menuOpen ? styles.active : '' }` } >
            <ul className={styles.ul} >
                <li> <Link href="#home" className={styles.u} >Home</Link> </li>
                <li><Link href="#services" className={styles.u}>Services</Link> </li>
                <li><Link href="#contact-us" className={styles.u}>Contact Us</Link></li>
            </ul>
        </nav>
  )
}
