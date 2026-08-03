import "./Cursor.css";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  const [text, setText] = useState("");

  useEffect(() => {

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    const register = (selector, label) => {

      document.querySelectorAll(selector).forEach((el) => {

        el.addEventListener("mouseenter", () => setText(label));

        el.addEventListener("mouseleave", () => setText(""));

      });

    };

    register(".project-card", "VIEW");
    register(".hero-btn", "CLICK");
    register(".cta-btn", "TALK");
    register(".github-btn", "CODE");
    register(".live-btn", "LIVE");

    return () => {

      window.removeEventListener("mousemove", move);

    };

  }, []);

  return (

    <motion.div
      className={`cursor ${text ? "active" : ""}`}
      style={{
        x,
        y,
      }}
    >

      <span>{text}</span>

    </motion.div>

  );

}

export default Cursor;