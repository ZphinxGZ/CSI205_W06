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
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/todo"} element={<Todo />} />
        </Route>
      </Routes>
     </HashRouter>
    </div>
  )
}

export default App
