import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function HomeSection() {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.homeContent}>
                <div className={styles.tr}>
                    <Image 
                        src="/planes.png"  
                        alt="Plane flying in the sky" 
                        className={styles.plane} 
                        width={500} 
                        height={300} 
                        style={{ maxWidth: '100%', height: 'auto' }} 
                    />
                </div>
                
                <div className='bx' style={{ width: '100%' }}>
                    <h3 className={styles.slogan}>We cover the world to Nigerian ports</h3>       
                </div>
                
                <Image 
                    src="/ship.png" 
                    alt="Ship sailing on the sea" 
                    className={styles.ship} 
                    width={500} 
                    height={300} 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
                
                <div className="bx bx-xs">
                    <h3 className={styles.means}>Air, Sea and Land</h3>
                </div>
            </div>
        </section>
    );
}
