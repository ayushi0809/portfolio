import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Skills from './components/Skills'
import Expierence from './components/Expierence'
import Form from './components/Form'
import BackToTopButton from './components/BackToTopButton'



const App = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Home />
    <About/>
    <Skills/>
    <Expierence/>
    <Form />
      <SocialLinks />
<BackToTopButton />

    </div>
  )
}
export default App