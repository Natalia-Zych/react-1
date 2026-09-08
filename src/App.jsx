import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Registration from './components/Registration'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [helloIsHidden, setVisibility] = useState(true);
  const text = "lalala";
  return (
    <>
      <Header/>
      <Registration/> 
      {/* <Content/>
      <section id="center">
        <button type="button"
                onClick={() => setVisibility((helloIsHidden) => helloIsHidden = !helloIsHidden) }
        >Say Helllllo {helloIsHidden}</button>
          <p hidden={helloIsHidden}>Hello {helloIsHidden}</p>
      </section> */}


      {/* <section id="next-steps">
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </section> */}

      <section id="spacer"></section>
      <Footer/>
    </>
  )
}

export default App

//cd C:/Users/KOMPUTER/Desktop/React/React-1
// npm run dev