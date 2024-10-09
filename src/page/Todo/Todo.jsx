import React, { useEffect,useState } from 'react'
import { fetchTodos } from '../../Data/Todos'
import './Todo.css'


function Todo() {
  // todosRaw -> filters -> todos -> display
  // todosRaw
  const [todosRaw,setTodosRaw] = useState([])
  // Filters
  const [onlyWaiting,setOnlyWaiting] = useState(false)
  const [itemPerPage,setItemPerPage] = useState(5)
  // todos
  const [todos,setTodos] = useState([])

  // display
  const [numPage,setNumPage] = useState(1)
  const [currentPage,setCurrentPage] = useState(1)

  useEffect(() => {
    console.log(`currentPage = ${currentPage}`)
  },[currentPage])

  useEffect(() => {
    // setCurrentPage((prev) => (prev > numPage ? numPage : prev))
    setCurrentPage(1)
  },[numPage])

  useEffect(() => {
    console.log(`itemPerPage = ${itemPerPage}`)
    setNumPage(Math.ceil(todosRaw.length / itemPerPage))
  },[itemPerPage,todosRaw])

  useEffect(() => {
    console.log(`onlyWaiting = ${onlyWaiting}`)
  },[onlyWaiting])


  useEffect(() => {
    setTodosRaw(fetchTodos())
    setCurrentPage(1)
  },[]) //load

  useEffect(() => {
    if (onlyWaiting) {
      // Show only waiting
      setTodos(todosRaw.filter((todo)=>{
        return todo.completed === false
      }))
    }else {
      // Show All
      setTodos(todosRaw)
    }
  },[todosRaw,onlyWaiting,itemPerPage]) //*** bypass filters

  return (
    <div className='todo-container rounded'>
      {/* filters */}
      <div className='todo-filter-container'>
        <div className="form-check form-switch">
          <input className="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="flexSwitchCheckChecked"
            onClick={(e)=>{setOnlyWaiting(e.target.checked)}} 
            // checked 
          />
          <label className="form-check-label" 
            htmlFor="flexSwitchCheckChecked">Show only waiting</label>
        </div>
        <select className="form-select" 
        aria-label="Default select example" 
        defaultValue={5}
        style={{width: '200px'}}
        onChange={(e)=>{
          setItemPerPage(e.target.value)
        }}>
          <option value={5} selected>5 items per page</option>
          <option value={10}>10 items per page</option>
          <option value={50}>50 items per page</option>
          <option value={100}>100 items per page</option>
        </select>
      </div>

      {/* table */}
      <table className='table table-striped'>
        <thead className='table-dark'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th style={{textAlign: 'right'}}>Completed</th>
          </tr>
        </thead>
        <tbody>

          {/* <tr>
            <td><span className='badge bg-secondary'>1</span></td>
            <td style={{textAlign: 'left'}}>Do somting</td>
            <td style={{textAlign: 'right'}}>
              Done 
              <button className='btn btn-danger'><span className='bi bi-trash'></span></button>
            </td>
          </tr> */}
          {todos.map((todo)=>{
            return (
              <tr key={todo.id}>
                <td><span className='badge bg-secondary'>{todo.id}</span></td>
                <td style={{textAlign: 'left'}}>{todo.title}</td>
                <td style={{textAlign: 'right'}}>
                  <span className={'badge ' + (todo.completed ? 'bg-success' : 'bg-warning')}>
                    {todo.completed ? 'Done' : 'Waiting'}
                    &nbsp;
                    <span className={'bi '+(todo.completed ? 'bi-check' : 'bi-clock')}></span>
                  </span>
                  
                  <button className='btn btn-danger'><span className='bi bi-trash'></span></button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      {/* page control */}
      <div>
        <button 
          className='btn btn-outline-primary todo-space' 
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}>First</button>
        <button 
          className='btn btn-outline-primary todo-space' 
          onClick={() => (currentPage > 1 && setCurrentPage(currentPage - 1))}
          disabled={currentPage === 1}>
          Previous
        </button>
        <span className='todo-space'>{currentPage}&nbsp;/&nbsp;{numPage}</span>
        <button 
          className='btn btn-outline-primary todo-space' 
          onClick={() => (currentPage < numPage && setCurrentPage(currentPage + 1))}
          disabled={currentPage === numPage}>
          Next
        </button>
        <button 
          className='btn btn-outline-primary todo-space' 
          onClick={() => setCurrentPage(numPage)}
          disabled={currentPage === numPage}>Last</button>
      </div>
    </div>
  )
}

export default Todo
