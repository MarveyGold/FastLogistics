import styles from "@/styles/Header.module.css";
import Nav from "./Nav";

export default function Header() {
    
    
    return(
        <header className={styles.header} > 
        <div className={styles.logo} >
         <h2 className={styles.l} >F ast Logistics</h2>
            <i >excellence inspired</i>
        </div>
        <Button />
        
        </header>
    )
}
