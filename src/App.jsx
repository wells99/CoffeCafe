import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from "./components/Services/Services"


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing:"ease-in",
      delay:100,
    });
  })

  return (
    <>
      <div className='overflow-x-hidden'>

        <Navbar />
        <Home />
        <Services />
      </div>
    </>
  )
}

export default App
