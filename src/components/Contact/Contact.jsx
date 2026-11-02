import { useState } from "react";
import "./Contact.css";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("niharputhran03@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        {/* Left Side */}
        <div className="contact-info" data-aos="fade-right">
          <span className="section-tag">GET IN TOUCH</span>

          <h2>Let's Build Something Amazing.</h2>

          <p>
            I'm always open to discussing new projects, freelance work,
            collaborations, or exciting full-time opportunities. Feel free to
            reach out anytime!
          </p>

          <div className="contact-item" onClick={handleCopyEmail} style={{ cursor: "pointer" }} title="Click to copy email">
            <Mail size={22} />
            <span>niharputhran03@gmail.com</span>
            <button
              type="button"
              className="copy-badge-btn"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} className="text-green" /> : <Copy size={16} />}
              <span className="copy-label">{copied ? "Copied!" : "Copy"}</span>
            </button>
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

        {/* Right Side: Form */}
        <form
          className="contact-form"
          action="https://formsubmit.co/niharputhran03@gmail.com"
          method="POST"
          data-aos="fade-left"
        >
          {/* Hidden Settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Portfolio Contact Submission!" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project, idea or inquiry..."
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message ➔
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;