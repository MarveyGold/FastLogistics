
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <header className={styles.header} > 
        <div className={styles.logo} >
         <h2 className={styles.l} >F ast Logistics</h2>
            <i >excellence inspired</i>
        </div>
        
        <nav className={`${styles.nav} ${menuOpen ? styles.active : '' }` } >
            <ul className={styles.ul} >
                <li> <Link href="#home" className={styles.u} >Home</Link> </li>
                <li><Link href="#services" className={styles.u}>Services</Link> </li>
                <li><Link href="#contact-us" className={styles.u}>Contact Us</Link></li>
            </ul>
        </nav>
        </header>
    )
}
