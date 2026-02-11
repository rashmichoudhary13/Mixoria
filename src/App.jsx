import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import TheArt from "./components/TheArt";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Drinks from "./components/Drinks";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="font-['Libre_Baskerville']">
      <div className="noise">
        <Navbar />
        <Hero />
        <Cocktails />
      </div>
      <About />
      <Drinks/>
      <TheArt/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App
