import React from 'react'
import './PackageSize.css'
import Insurance from '../Insurance/Insurance'

const PackageSize = () => {
    return (
        <div className='package-size'>
            <div className='title'>Package Size</div>
            <div className="flex-row">
                <div className="box flex-col">
                    <span>0-1kg</span>
                    <div className="box-image"><img src="./box2.png" alt="" /></div>
                    <span className='description'>Small</span>
                </div>
                <div className="box flex-col">
                    <span>1-5kg</span>
                    <div className="box-image"><img src="./box3.png" alt="" /></div>
                    <span className='description'>Big</span>
                </div>
                <div className="box flex-col">
                    <span>5-35kg</span>
                    <div className="box-image"><img src="./box1.png" alt="" /></div>
                    <span className='description'>Large</span>
                </div>
                <div className="box flex-col">
                    <span>35kg {'>'}</span>
                    <div className="box-image"><img src="./box4.png" alt="" /></div>
                    <span className='description'>X large</span>
                </div>
            </div>
            <Insurance/>
        </div>
    )
}

export default PackageSize