import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import TheArt from "./components/TheArt";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="libre-baskerville">
      <div className="noise">
        <Navbar />
        <Hero />
        <Cocktails />
      </div>
      <About />
      <TheArt/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default App
