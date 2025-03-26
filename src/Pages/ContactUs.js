import React from "react";
import Navbar from "../Components/Navbar";
import './CSS/Contact.css';
const ContactUs = () => {
  return (
    <div>
    <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:malihaque@gmail.com">malihaque@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/ahaq" target="_blank" rel="noopener noreferrer">linkedin.com/in/ahaq</a></p>
    <p>Phone: +92 332 520 9822</p>
  </section>
    </div>
  );
};

export default ContactUs;
