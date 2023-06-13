import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Skills from './components/Skills'
import Expierence from './components/Expierence'
import Form from './components/Form'



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


    </div>
  )
}
export default App