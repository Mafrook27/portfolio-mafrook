import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      title: 'New Contact Form Submission',
      name,
      time: new Date().toString(),
      message,
      email,
    };

    emailjs.send('service_w5doq7e', 'template_3q7ogx8', templateParams, 'Mzny8RXOhIKCsr6WQ')
      .then(() => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <div className="contact-form-container" data-aos="fade-up">
      <h3 className="contact-form-title">Let's Build Something Great</h3>
      <p className="contact-form-subtitle">Send me a message and I'll get back to you.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Tell me about your project..."
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="contact-submit-btn">
          Send Message →
        </button>
      </form>
    </div>
  );
};

export default Contact;
