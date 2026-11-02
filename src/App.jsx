import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";

import Loader from "./components/Loader/Loader";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    // Initialize silky-smooth Lenis scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <Loader>
      <Home />
    </Loader>
  );
}

export default App;