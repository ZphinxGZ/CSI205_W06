import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { HashRouter,Routes,Route } from 'react-router-dom'

import Home from './page/home/Home'
import Todo from './page/Todo/Todo'
import Layout from './Layout/Layouts/Layout'


import './App.css'

function App() {
  return (
    <div>
     <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
