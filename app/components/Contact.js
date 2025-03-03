import Link from "next/link";
import styles from '@/styles/Contact.module.css';
export default function Contact() {
    return(
     <div id="contact-us" className={styles.ContactUs} >
        <ul>
        <h4 className="bx-sm">Contact us via</h4> 
            <li className='bx bxs-phone-call bx-md '> <Link href="tel:+2348064530100">Call</Link></li>
            <li className="bx bxs-envelope bx-md"> <Link href="mailto:salesafrica@fastlogisticscargo.com">Email</Link></li>
            <li className="bxl-facebook-circle bx-md bx" > <Link href="https://www.facebook.com/jimah.osoidaghe">Facebook</Link></li>
            <li className="bx bxl-whatsapp bx-md"><Link href="https://wa.me/+2348064530100">Whatsapp</Link></li>
         
        </ul>
     </div>
    )
}