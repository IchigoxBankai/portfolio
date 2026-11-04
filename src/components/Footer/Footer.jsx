import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <h2>
          <span className="footer-name-red">NIHAR</span>{' '}
          <span className="footer-name-white">PUTHRAN</span>
          <span className="footer-dot-red">.</span>
        </h2>

        <p>
          Building modern, high-performance web applications with clean code,
          creative UI interactions, and thoughtful user experiences.
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/IchigoxBankai"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nihar-puthran-336029372/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/pain__x9?igsh=ZXdrZWxidzByNnY2"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:niharputhran03@gmail.com"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <button
          className="top-btn"
          onClick={scrollTop}
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>

        <div className="copyright">
          © {new Date().getFullYear()} Nihar Puthran. Crafted with passion &amp; Bankai spirit.
        </div>
      </div>
    </footer>
  );
}

export default Footer;