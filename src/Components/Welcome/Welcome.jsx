import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust'; // Importing the AdjustIcon component from Material-UI
import CircleIcon from '@mui/icons-material/Circle'; // Importing the CircleIcon component from Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Importing the LocationOnIcon component from Material-UI
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Importing the ChevronLeftIcon component from Material-UI
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // Importing the NotificationActiveIcon component from Material-UI
import './Welcome.css'; // Importing the Welcome CSS file

function WelcomePage() {
  // Function to handle opening the map for a specific input location
  function openMap(inputId) {
    // This function would contain the logic to open Google Maps or other mapping services based on the input ID
    // It's currently a placeholder and should be implemented with the appropriate functionality
  }
  

  return (
    <div className='welcome'> {/* Outer container for the welcome page */}
      <div className="container"> {/* Container for the form */}
      <div className="flex-col estimated-shipping">
        <ChevronLeftIcon style={{width: 30, height: 30}}/>
        <span>Estimated Shipping</span>
        <NotificationsActiveIcon style={{color: 'gold'}}/>
      </div>
        <div className="flex-col">
          <div className="left-side-icons">
          <AdjustIcon style={{ width: '20px', height: '20px', color: 'gold'}} />
            <CircleIcon style={{ width: '5px', height: '5px', color: 'white' }} />
            <CircleIcon style={{ width: '5px', height: '5px', color: 'white' }} />
            <CircleIcon style={{ width: '5px', height: '5px', color: 'white' }} />
            <CircleIcon style={{ width: '5px', height: '5px', color: 'white' }} />
            <CircleIcon style={{ width: '5px', height: '5px', color: 'white' }} />
            <LocationOnIcon style={{ width: '20px', height: '20px', color: 'gold'}} />
          </div>
          <form>
            {/* Container for the pickup location input */}
            <div className='flex-col'>
              <input type="text" id="pickupLocation" placeholder="Enter pickup location" required /> {/* Input for pickup location */}
              <button type="button" onClick={() => openMap('pickupLocation')}><AdjustIcon style={{ width: '20px', height: '20px', color: 'var(--primary-color)'}}/></button> {/* Button to trigger map opening for pickup location */}
            </div>

            {/* Container for the delivery location input */}
            <div className="flex-col">
              <input type="text" id="deliveryLocation" placeholder="Enter delivery location" required /> {/* Input for delivery location */}
              <button type="button" onClick={() => openMap('deliveryLocation')}><LocationOnIcon style={{ width: '20px', height: '20px', color: 'var(--primary-color)'}}/></button> {/* Button to trigger map opening for delivery location */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage; // Exporting the WelcomePage component
