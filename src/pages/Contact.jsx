import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subtext">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="contact-details">
          <div className="detail-box">
            <i className="fas fa-envelope"></i>
            <h4>Email</h4>
            <p>faizanIshtiaqwork@gmail.com</p>
          </div>
          <div className="detail-box">
            <i className="fas fa-phone"></i>
            <h4>Phone</h4>
            <p>+92 300 1234567</p>
          </div>
          <div className="detail-box">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Location</h4>
            <p>Lahore, Pakistan</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;