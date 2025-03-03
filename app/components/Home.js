import Image from "next/image";
import styles from "@/styles/Home.module.css";


export default function HomeSection() {
    return (
        <section id="home" className={styles.home}>
                <div className={styles.homeContent}>
            <div className={styles.tr}>
                <Image src="/planes.png"  alt="Plane" className={styles.plane} width={500} height={300} style={{maxWidth: '100%', height: 'auto' }} />
            </div>
        
            <div className={styles.slogan}>
             <h3 className=" bx" style={{width: '100vw'}} > We cover the world to Nigerian ports</h3>       
            </div>
            <Image type="image" src="/ship.png" alt="ship" className={styles.ship} width={500} height={300} style={{maxWidth: '100%', height: 'auto' }} />
            <div className={styles.means}>
                <h3 className="bx bx-xs">Air, Sea and Land</h3>
            </div>
            
        </div>
        </section>
    )
}