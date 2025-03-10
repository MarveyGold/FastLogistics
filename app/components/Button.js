'use client';
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";  

export default function Button() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button 
        className={styles.menuToggle} 
        onClick={toggleMenu} 
        aria-label="Navigation Menu" 
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      {menuOpen && (
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.ul}>
            <li><Link href="#home"><span className={styles.u}>Home</span></Link></li>
            <li><Link href="#services"><span className={styles.u}>Services</span></Link></li>
            <li><Link href="#contact-us"><span className={styles.u}>Contact Us</span></Link></li>
          </ul>
        </nav>
      )}
    </>
  );
        }
