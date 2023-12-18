import React, { useState } from 'react';
import PackageSize from '../PackageSize/PackageSize'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SenderForm from '../SenderForm/SenderForm';

import './HomeBody.css'
const HomeBody = () => {
  const openMap = () => { };
  const [viewHeight, setViewHeight] = useState('50vh');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [backgroundColor, setBackgroundColor] = useState('');
  const [fColor, setFColor] = useState('');

  const handleFormWidow = () => {

    setIsFormOpen(!isFormOpen);
    setViewHeight('90vh');
    if (isFormOpen) {
      setBackgroundColor('');
      setFColor('black');
      setViewHeight('50vh');
    } else {
      setBackgroundColor('var(--primary-color)');
      setFColor('white');

    }
  };
  
  return (
    <div className='home-body' style={{height: viewHeight}}>
      <div className="container">
        {/* <div className="flex-row destination">
          <button type="button" onClick={() => openMap('deliveryLocation')}><SearchIcon style={{ width: '20px', height: '20px', color: 'var(--primary-color)' }} /></button>
          <input type="text" id="deliveryLocation" placeholder="Enter delivery location" required />
        </div> */}
        <PackageSize />
        <div className="details-flex-row">
          <button style={{background: backgroundColor, color: fColor}} onClick={handleFormWidow}>Sender's Details</button>
          <button style={{background: backgroundColor, color: fColor}} onClick={handleFormWidow}>Receiver's Details</button>
        </div>
        {isFormOpen && <SenderForm/>}
        <button className="next-button"><ArrowRightAltIcon/></button>
      </div>
    </div>
  )
} 

export default HomeBody