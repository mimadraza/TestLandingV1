import React from "react";

function Contact() {
  return (
    <div className="auth-page">
      <div className="contact-card">

        <div className="contact-left">
          <h2>Contact Us</h2>
          <p className="auth-subtitle">
            Have questions or need support? Our team is here to help.
          </p>

          <div className="contact-info">
            <p><strong>Email:</strong> support@aibuilder.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Office:</strong> San Francisco, CA</p>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5"></textarea>
            </div>

            <button className="auth-button">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
