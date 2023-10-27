import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PhotoSlider from './components/PhotoSlider'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Testimonial from './components/Testimonial'
import Features from './components/Features'

import AOS from 'aos';
function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <AboutUs/>
    <Features/>
    <Testimonial/>
    <PhotoSlider/>
    <Footer/>
    </>
  )
}

export default App
