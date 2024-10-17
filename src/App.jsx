import { useState,useEffect } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'

import Home from './page/home/Home'
import Calculator from './page/Calculator/Calculator'
import Component from './page/component/Component'
import Todo from './page/Todo/Todo'
import Products from './page/Products/Products'
import Cart from './page/Cart/Cart'
import Layout from './Layout/Layouts/Layout'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { fetchProducts } from './Data/products'


const initialTab = 'home'
function App() {
  const [products,setProducts] = useState([])
  const [carts,setCarts] = useState([])

  useEffect(() => {
    setProducts(fetchProducts())
  },[])
  useEffect(() => {
    console.log(products)
  })
 
  const [tab,setTab] = useState('')
  useEffect(() => {
    setTab(initialTab)
  }, [])

  return (
    <div className='app-container bg-light'>
     <HashRouter>
      <Routes>
        <Route element={<Layout products={products} carts={carts} tab={tab} setTab={setTab}/>}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/calculator"} element={<Calculator />} />
          <Route path={"/component"} element={<Component />} />
          <Route path={"/todo"} element={<Todo />} />
          <Route path={"/products"} element={<Products products={products} carts={carts} setCarts={setCarts}/>} />
          <Route path={"/cart"} element={<Cart carts={carts} setCarts={setCarts}/>} />
        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
