import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimonial from './components/Testimonial/Testimonial';


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
        <Banner />
        <AppStore />
        <Testimonial />

      
      </div>
    </>
  )
}

export default App
