import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
  // LandingPage.js
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/app-info'); // Navigate to the next step after a certain duration
    }, 3000); // Change the duration as needed (3000ms = 3 seconds)

    return () => clearTimeout(timeout);
  }, [history]);

  return (
    <div className='logo-page'>
        <img src="./pika.png" alt="PIKA app logo" className="app-logo" />
        <img src="./pika-falcon.png" alt="PIKA app logo" className="app-logo-bg" />
        <button className='next-button'>Start</button>
    </div>
  );
};

export default LandingPage;