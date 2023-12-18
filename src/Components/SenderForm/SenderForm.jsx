import React, { useState } from 'react';
import './SenderForm.css';

const SenderForm = () => {
  const [senderDetails, setSenderDetails] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSenderDetails({ ...senderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with senderDetails (e.g., submit to server, process data)
    console.log(senderDetails); // For demonstration, logs sender details to the console
  };

  return (
    <form className='sender-form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={senderDetails.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={senderDetails.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={senderDetails.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={senderDetails.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SenderForm;
