'use client';
export default function Button(){
  return(
    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Navigation Menu" >☰</button>
  )
}
