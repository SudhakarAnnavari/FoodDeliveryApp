import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { CartProvider } from './components/ContextReducer'
import MyOrder from './pages/MyOrder'

const App = () => {
  return (
    <CartProvider>
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/myorders' element={<MyOrder/>} />
     </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
