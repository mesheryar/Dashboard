import React from 'react'
import './ByDate.css'

function ByDate() {

  return (
    <div className='ByDate-main'>
      <div className='container Bydate'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='ByDate-h1'>By Date</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <input type='checkbox' style={{marginTop:'15px'}} />
            <label>This Week</label>
          </div>
          <div className='col-md-6'>
            <input type='checkbox' style={{marginTop:'15px'}}/>
            <label>Last Week</label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <input type='checkbox' />
            <label>This Month</label>
          </div>
          <div className='col-md-6'>
            <input type='checkbox' />
            <label>Last Month</label>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <input type='checkbox' />
            <label>This Year</label>
          </div>
          <div className='col-md-6'>
            <input type='checkbox' />
            <label>Last Year</label>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-md-12'>
          <input type='checkbox'/>
            <label>Date Range</label>
          </div>
          <div className='col-md-12'>
            <button>Filter</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ByDate

