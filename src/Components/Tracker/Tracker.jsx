import React from 'react'
import './Tracker.css'
const Tracker = () => {
  return (
    <div className='tracker row'>
        <button>Track</button>
        <input type="text" placeholder='Enter Tracking ID e.g #1230987' />
    </div>
  )
}

export default Tracker