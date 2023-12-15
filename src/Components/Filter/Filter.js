import React from 'react'
import './Filter.css'

function Filter() {
  return (
    <div className='container Filter'>
        <h2>Filter</h2>
        <h6>Order Type</h6>
        <div className='row' >
          <div className='col-md-6'>
            <input type='checkbox'style={{marginLeft:'12px'}} />
            <label>Home Delivery</label>
          </div>
          <div className='col-md-6'>
            <input type='checkbox' />
            <label>Pick Up</label>
          </div>
        </div>
    </div>
  )
}

export default Filter