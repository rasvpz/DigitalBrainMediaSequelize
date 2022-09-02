import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'   
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// import Productscreen from './screen/ProductDetail'
import Home from './screen/HomeScreen'
import EditProducts from './screen/EditProducts'
// import DeleteProducts from './screen/DeleteProducts'
import ProductDetail from './screen/ProductDetail'
import ShowProducts from './screen/ShowProducts'
import AddProducts from './screen/AddProducts'
import Banner from './components/Banner'
const App = () => {
  return (

         <Router>
          <NavBar />
          <Banner />
            <Routes>
              <Route  path = '/' element={<Home/>} />
              <Route  path = '/addProducts' element={<AddProducts/>} />
              <Route  path = '/products' element={<ShowProducts/>} />
              <Route  path = '/products/:id' element={<ProductDetail/>} />              
              <Route  path = '/products/edit/:id' element={<EditProducts/>} />
              {/* <Route  path = '/products/delete/:id' element={<DeleteProducts/>} /> */}

              {/* <Route  path = '/products/:id' element={<ProductDetail/>} /> */}
              {/* <Route  path = '/register' element={<Register userRegistered = {isLoggin} />} /> */}
            </Routes>
          <Footer />
        </Router>

  )
}

export default App

