'use client';
import styles from "@/styles/Header.module.css";
export default function Button(){
  const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
  return(
    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Navigation Menu" >☰</button>
  )
}
