import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActive(section.id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const navItems = [
    "home",
    "projects",
    "services",
    "about",
    "experience",
    "skills",
    "contact",
  ];

  return (

    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <div className="container nav-container">

        <div className="logo">
          N<span>.</span>
        </div>

        <nav>

          <ul className="nav-links">

            {navItems.map((item) => (

              <li key={item}>

                <a
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>

              </li>

            ))}

          </ul>

        </nav>

        <a href="#contact" className="cta-btn">
          Let's Talk ↗
        </a>

      </div>

    </header>

  );
}

export default Navbar;