import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <h2>Nihar Puthran.</h2>

        <p>
          Building modern websites with creativity,
          performance and clean user experiences.
        </p>

        <div className="footer-socials">

          <a
            href="https://github.com/IchigoxBankai"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/YOURUSERNAME"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

        <button
          className="top-btn"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

        <div className="copyright">
          © {new Date().getFullYear()} Nihar Puthran. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;