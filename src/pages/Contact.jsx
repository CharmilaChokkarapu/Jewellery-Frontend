import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <p>GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>
          Have questions about our jewellery? We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Contact Information</h2>

          <h4>PHONE NUMBER</h4>
          <p>+91 9898989898</p>

          <h4>EMAIL ADDRESS</h4>
          <p>support@fashionways.com</p>

          <h4>OPENING HOURS</h4>
          <p>Monday - Saturday</p>
          <p>10:00 AM - 7:00 PM</p>

          <button>Visit Store</button>

        </div>

        <div className="contact-form">

          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Enter your message..."
          ></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </div>
  );
}

export default Contact;