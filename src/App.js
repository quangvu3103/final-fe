import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import About from './page/About'
import Cart from './page/Cart'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
