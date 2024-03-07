

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your own Email.js template and user ID
    const serviceId = 'service_ep01xo7';
    const templateId = 'template_gdeefbr';
    const userId = 'aq2UxuasCWJTe-YuP'; 

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // add a success message 
      setName("");
      setEmail("");
      setMessage("");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        //error message
      });
  };

  return (
    <div id="Contact" className='container-fluid p-3 bg-color-4'>
      <div className='row mb-4 ps-md-5 ps-lg-0'>
        <h2 className='display-5 color-2 fw-bold'>Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit} className='contactForm shadow-lg p-3 mb-5 bg-body rounded'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button className='btn-send-message mt-3' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;