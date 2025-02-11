import { useState } from 'react'
import './App.css'
import Nav from './sections/Nav';
import PortfolioPage from './PortfolioPage'
import Footer from './sections/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <PortfolioPage/>
      <Footer/>
    </>
  )
}

export default App
