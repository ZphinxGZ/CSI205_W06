import React from 'react'
import './Component.css'

import Add from './Add/Add'
import Counter from './Counter/Counter'
import Tempertures from './Tempertures/Tempertures'
import Timer from './Timer/Timer'

function Component() {
  return (
    <div className='component-container rounded'>
      <div className='border border-2 border-danger p-2 componentcontainer'>
        <div className='bg-dark text-light p-2 border border-danger rounded text-center d-flex justify-content-center mb-2'>
          <h1 className=''>React Component</h1>      
        </div>

        <div className='container contain01 text-center'>
          <div className='contain02'>
            <Counter name={'John'} value={10}/>
            <Timer />
          </div>
          <div className='contain03 text-center'>
            <Add aValue={10} bValue={20}/>
          </div>
        </div>
        
        <div className='container text-center container04'>
          <Tempertures initCelsius={25} name={'Tempertures'}/>
        </div>

        <div className='d-flex justify-content-center footer-name'>
          <h2>นายคุณากร ขำเจริญ รหัส 66075070</h2>
        </div>
      </div>
    </div>
  )
}

export default Component