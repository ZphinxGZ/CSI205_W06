import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ tab, setTab }) {
  return (
    <div className='navbar-container'>

      <Link to={'/home'}>
        <button 
        className={'btn ' + (tab === 'home' ? 'btn-danger' : 'btn-outline-danger')} 
        onClick={() => setTab('home')}
        >
          Home
        </button>
      </Link>
      <Link to={'/calculator'}>
        <button 
        className={'btn ' + (tab === 'calculator' ? 'btn-danger' : 'btn-outline-danger')}
        onClick={() => setTab('calculator')}
        >
          Calculator
        </button>
      </Link>
      <Link to={'/component'}>
        <button 
        className={'btn ' + (tab === 'component' ? 'btn-danger' : 'btn-outline-danger')}
        onClick={() => setTab('component')}
        >
          Component
        </button>
      </Link>
      <Link to={'/todo'}>
        <button 
        className={'btn ' + (tab === 'todo' ? 'btn-danger' : 'btn-outline-danger')}
        onClick={() => setTab('todo')}
        >
          Todo
        </button>
      </Link>
      
    </div>
  )
}

export default Navbar
