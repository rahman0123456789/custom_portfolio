import Image from "next/image";
import Hero from "./hero/page";
import About from "./about/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
     <Hero/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  
  );
}
