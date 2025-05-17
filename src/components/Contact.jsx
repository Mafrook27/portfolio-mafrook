import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // You might need states for 'title' and 'time' if they are user inputs,
  // or you can set them dynamically here. Let's assume 'title' and 'time'
  // are generated in the code for this example.
  const title = 'New Contact Form Submission'; // Example title
  const time = new Date().toString(); // Example time

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update templateParams to match the template_3q7ogx8 parameters
    const templateParams = {
      title: title,
      name: name,       // Matches your state variable
      time: time,
      message: message, // Matches your state variable
      email: email,     // Matches your state variable
    };

    // Updated Service ID and Template ID, keeping the Public Key
    // IMPORTANT: Verify service_w5doq7e is exactly correct in your dashboard
    emailjs.send('service_w5doq7e', 'template_3q7ogx8', templateParams, 'Mzny8RXOhIKCsr6WQ')
      .then(() => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        // Reset title and time states if you added them
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
        // Log the specific error response from EmailJS if available
        if (error.status && error.text) {
            console.error('EmailJS response error:', error.status, error.text);
        }
      });
  };

  return (
    <div className="contact-form-container" data-aos="flip-left">
      <h1>
        Let’s Build Something <span>Great</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          rows="5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* If 'title' or 'time' are form inputs, add them here */}
        {/* <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> */}
        {/* <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} /> */}
        <button type="submit">
          Send<span className="arrow">→</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;