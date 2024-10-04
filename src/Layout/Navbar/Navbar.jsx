import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar({ tab, setTab }) {
  return (
    <div className='navbar-container'>

      <Link to={'/home'}>
        <button 
        className={'btn ' + (tab === 'home' ? 'btn-primary' : 'btn-outline-primary')} 
        onClick={() => setTab('home')}
        >
          Home
        </button>
      </Link>
      <Link to={'/calculator'}>
        <button 
        className={'btn ' + (tab === 'calculator' ? 'btn-primary' : 'btn-outline-primary')}
        onClick={() => setTab('calculator')}
        >
          Calculator
        </button>
      </Link>
      <Link to={'/todo'}>
        <button 
        className={'btn ' + (tab === 'todo' ? 'btn-primary' : 'btn-outline-primary')}
        onClick={() => setTab('todo')}
        >
          Todo
        </button>
      </Link>
      
    </div>
  )
}

export default Navbar
