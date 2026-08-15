import "./Hero.css";
import heroImage from "../../assets/images/hero/hero2.jpg";
import heroBg from "../../assets/images/hero/hero-bg.png";
import { motion } from "framer-motion";

import {
  FaReact,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiFirebase,
  SiVercel,
} from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Hero() {
  return (
    <section className="hero" id="home">
<div
  className="hero-background"
  style={{ backgroundImage: `url(${heroBg})` }}
></div>
      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.span
            className="hero-tag"
            variants={item}
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1
            className="hero-title"
            variants={item}
          >
            Nihar <br />
            
          </motion.h1>
          <motion.h1
            className="hero-titlee"
            variants={item}
          >
            Puthran
          </motion.h1>

          <motion.h3
            className="hero-role"
            variants={item}
          >
            Frontend Developer &
            <span> UI Designer</span>
          </motion.h3>

          <motion.p
            className="hero-text"
            variants={item}
          >
            I create beautiful, responsive,
            high-performance websites and
            modern web applications using
            React, Firebase and the latest
            web technologies.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={item}
          >

            <motion.a
              href="#projects"
              className="hero-btn primary"
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="resume.pdf"
              target="_blank"
              className="hero-btn secondary"
              whileHover={{
                scale: 1.06,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Download CV
            </motion.a>

          </motion.div>

          <motion.div
            className="hero-stack"
            variants={item}
          >

            <motion.div
              whileHover={{
                y: -10,
                rotate: 15,
                scale: 1.2,
              }}
            >
              <FaReact />
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                rotate: -15,
                scale: 1.2,
              }}
            >
              <FaJsSquare />
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                rotate: 15,
                scale: 1.2,
              }}
            >
              <SiFirebase />
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                rotate: -15,
                scale: 1.2,
              }}
            >
              <FaGithub />
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                rotate: 15,
                scale: 1.2,
              }}
            >
              <SiVercel />
            </motion.div>

          </motion.div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: .3,
          }}
        >

          <motion.div
            className="hero-image"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="hero-glow"></div>

            <motion.img
              src={heroImage}
              alt="Nihar Puthran"
              whileHover={{
                scale: 1.03,
              }}
            />

            <motion.div
              className="status-badge"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >

              <span className="dot"></span>

              Available for Work

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;