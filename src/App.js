import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Product from './page/Product'
import About from './page/About'
import Cart from './page/Cart'
import Profile from './page/Profile'
import UpdateProfile from './page/UpdateProfile'
import Checkout from './page/Checkout'
import Notifi from './component/Notifi'
import ManageCategory from './page/ManageCategory'
import CreateProduct from './page/CreateProduct'
import DetailsProduct from './page/DetailsProduct'
import UpdateProduct from './page/UpdateProduct'
import OrderDetails from './page/OrderDetails'
function App() {
  return (
    <>
      <Notifi />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/manageCategory" element={<ManageCategory />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/detailsProduct/:id" element={<DetailsProduct />} />
          <Route path="/orderDetails/:id" element={<OrderDetails />} />

          <Route path="/updateProduct" element={<UpdateProduct />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
