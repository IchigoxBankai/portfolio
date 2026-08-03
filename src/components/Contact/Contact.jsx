import "./Contact.css";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <span className="section-tag">
            CONTACT
          </span>

          <h2>
            Let's Build Something Amazing.
          </h2>

          <p>
            I'm always open to discussing new projects,
            freelance work, collaborations, or exciting
            opportunities. Feel free to reach out anytime!
          </p>

          <div className="contact-item">
            <Mail size={22} />
            <span>niharputhran03@gmail.com</span>
          </div>

          <div className="contact-item">
            <Phone size={22} />
            <span>+91 85915 75101</span>
          </div>

          <div className="contact-item">
            <MapPin size={22} />
            <span>Mumbai, Maharashtra, India</span>
          </div>

          <div className="socials">

            <a
              href="https://github.com/IchigoxBankai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nihar-puthran-336029372/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/pain__x9?igsh=ZXdrZWxidzByNnY2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <form
          className="contact-form"
          action="https://formsubmit.co/niharputhran03@gmail.com"
          method="POST"
        >

          {/* Hidden Settings */}

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact!"
          />

          <input
            type="hidden"
            name="_template"
            value="table"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;