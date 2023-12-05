import React from 'react'
import './Navigation.css'

//import Material UI icons**************************************************
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
// icons end****************************************************************

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="flex-row">
            <div className="navs flex-col">
                <HomeIcon style={{width: 30, height: 30, color: 'gray'}}/>
                <span>Home</span>
            </div>
            <div className="navs flex-col"><AccountBalanceWalletIcon style={{width: 30, height: 30, color: 'gray'}}/>
            <span>Balance</span>
            </div>
            <div className="navs flex-col"><LocationOnIcon style={{width: 30, height: 30, color: 'gray'}}/>
            <span>History</span>
            </div>
            <div className="navs flex-col"><AccountCircleIcon style={{width: 30, height: 30, color: 'gray'}}/>
            Profile
            </div>
        </div>
    </div>
  )
}

export default Navigation