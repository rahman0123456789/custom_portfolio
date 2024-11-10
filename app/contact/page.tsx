import React from 'react';
import '../styles/contact.css'; // Make sure to import the custom CSS

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="container">
          <div className="text-center">
            <h1 className="title">Contact Me</h1>
          </div>
          <div className="form-container">
            <div className="form-wrapper">
              <div className="form-item">
                <label htmlFor="name" className="label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                />
              </div>
              <div className="form-item">
                <label htmlFor="email" className="label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                />
              </div>
              <div className="form-item">
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"
                  defaultValue={""}
                />
              </div>
              <div className="form-item">
                <button className="submit-btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
