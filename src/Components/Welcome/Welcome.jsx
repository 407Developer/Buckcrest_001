import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust'; // Importing the AdjustIcon component from Material-UI
import CircleIcon from '@mui/icons-material/Circle'; // Importing the CircleIcon component from Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Importing the LocationOnIcon component from Material-UI
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Importing the ChevronLeftIcon component from Material-UI
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // Importing the NotificationActiveIcon component from Material-UI
import MenuIcon from '@mui/icons-material/Menu';

import Tracker from '../Tracker/Tracker';
import './Welcome.css'; // Importing the Welcome CSS file

function WelcomePage() {
  // Function to handle opening the map for a specific input location
  function openMap(inputId) {
    // This function would contain the logic to open Google Maps or other mapping services based on the input ID
    // It's currently a placeholder and should be implemented with the appropriate functionality
  }


  return (
    <div className='welcome'> {/* Outer container for the welcome page */}
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31520.299298999435!2d7.471104!3d9.060352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e758922a854db%3A0x4359b8df5543551b!2sHCR%20PLAZA!5e0!3m2!1sen!2sng!4v1702768304371!5m2!1sen!2sng" 
      title="Example Website"
      width="600"
      height="450"
      style={{border: 10}}
      allowfullscreen = "false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <div className="container"> {/* Container for the form */}
        <div className="flex-row greeting">
          <span>Hi, Divine</span>
        </div>
        <div id="menu-bar"><MenuIcon /></div>

        {/* <Tracker /> */}
      </div>
    </div>
  );
}

export default WelcomePage; // Exporting the WelcomePage component
