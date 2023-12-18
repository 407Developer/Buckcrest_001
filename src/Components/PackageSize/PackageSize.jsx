import React from 'react'
import './PackageSize.css'
import Insurance from '../Insurance/Insurance'
import { useState } from 'react';

    
const PackageSize = () => {
    const [activeBox, setActiveBox] = useState(null);

    const handleBoxClick = (boxNumber) => {
        setActiveBox(boxNumber);
    };
    const [senderBox, setSenderBox] = useState('close');
    const [ReceiverBox, setReceiverBox] = useState('close');

    return (
        <div className='package-size'>
            <div className='title'>Package Size</div>
            <div className="flex-row">
                <div className={`box flex-col ${activeBox === 1 ? 'active-button' : ''}`} flex-col onClick={() => handleBoxClick(1)}>
                    <span>0-1kg</span>
                    <div className="box-image"><img src="./box2.png" alt="" /></div>
                    <span className='description'>Small</span>
                </div>
                <div className={`box flex-col ${activeBox === 2 ? 'active-button' : ''}`} flex-col onClick={() => handleBoxClick(2)}>
                    <span>1-5kg</span>
                    <div className="box-image"><img src="./box3.png" alt="" /></div>
                    <span className='description'>Big</span>
                </div>
                <div className={`box flex-col ${activeBox === 3 ? 'active-button' : ''}`} flex-col onClick={() => handleBoxClick(3)}>
                    <span>5-35kg</span>
                    <div className="box-image"><img src="./box1.png" alt="" /></div>
                    <span className='description'>Large</span>
                </div>
                <div className={`box flex-col ${activeBox === 4 ? 'active-button' : ''}`} flex-col onClick={() => handleBoxClick(4)}>
                    <span>35kg {'>'}</span>
                    <div className="box-image"><img src="./box4.png" alt="" /></div>
                    <span className='description'>X large</span>
                </div>
            </div>
            <Insurance />
        </div>
    )
}

export default PackageSize