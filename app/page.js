import Contact from './components/Contact';
import Header from './components/Header';
import HomeSection from './components/Home';
import Services from "./components/Services";
import  '@/app/page.module.css';


export default function Home() {
  return(
    <>
      <Header />
      <main>
        <HomeSection />
        <Services />
        <Contact />
      </main>
    </>
  );
}
