import { useState,useEffect } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'

import Home from './page/home/Home'
import Calculator from './page/Calculator/Calculator'
import Component from './page/component/Component'
import Todo from './page/Todo/Todo'
import Cart from './page/Cart/Cart'
import Layout from './Layout/Layouts/Layout'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'




const initialTab = 'home'
function App() {

  const [tab,setTab] = useState('')

  useEffect(() => {
    setTab(initialTab)
  }, [])

  return (
    <div className='app-container bg-light'>
     <HashRouter>
      <Routes>
        <Route element={<Layout tab={tab} setTab={setTab}/>}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/calculator"} element={<Calculator />} />
          <Route path={"/component"} element={<Component />} />
          <Route path={"/todo"} element={<Todo />} />
          <Route path={"/cart"} element={<Cart />} />
        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
