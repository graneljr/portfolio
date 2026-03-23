import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full items-center relative flex-col gap-10 justify-center overflow-y-scroll scrollbar-show'> 
      <NavBar/>
      <section className='xsm:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] ' id='about'>
        <About/>
      </section>
      <section className='xsm:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] ' id="projects">
         <Projects/>
      </section>
       <section className='xsm:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] ' id="contact">
         <Contact/>
      </section>
    </div>
  )
}

export default App
