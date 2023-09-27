import HeroSection from './components/HeroSection'
import Header from './components/Header'
import Services from './components/Services'
import React, { useEffect } from 'react'
import About from './components/About'
import Project from './components/Project'
import Companies from './components/Companies'
import Footer from './components/Footer'
import GithubCon from './components/GithubCon'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import ContactUS from './components/ContactUS'
import Certificate from './components/Certificate'


function App() {

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init();
  }, []);
  
  
  return (
   
    <div className='flex flex-col gap-10 ' >
      
      <Header  />
      <HeroSection />
      <Services />
      <section id="about"></section>
      <About/>
      <section id="certification"></section>
      <Certificate/>
      <section id="project"></section>
      <Project  />
      <section id="contact"></section>
      <ContactUS/>
      <GithubCon/>  
      <Footer/>
      
    </div>
  )
}

export default App