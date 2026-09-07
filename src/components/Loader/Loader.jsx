import "./Loader.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import splashVideo from "../../assets/Videos/splashscreen animation.mp4";

function Loader({ children }) {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks sound before user gesture, start muted and unmute immediately on first gesture
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => { });
          }
        });
      }
    }

    // Unmute immediately on any gesture
    const unmute = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
      }
    };

    window.addEventListener("pointerdown", unmute, { passive: true });
    window.addEventListener("click", unmute, { passive: true });
    window.addEventListener("touchstart", unmute, { passive: true });
    window.addEventListener("keydown", unmute, { passive: true });

    // Safety fallback timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("pointerdown", unmute);
      window.removeEventListener("click", unmute);
      window.removeEventListener("touchstart", unmute);
      window.removeEventListener("keydown", unmute);
    };
  }, []);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  const handleScreenClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            onClick={handleScreenClick}
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
              },
            }}
          >
            <video
              ref={videoRef}
              src={splashVideo}
              className="loader-video"
              autoPlay
              playsInline
              onEnded={handleVideoEnd}
              onError={() => setLoading(false)}
            />

            <div className="loader-overlay" />

            <motion.div
              className="loader-content"
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
            >
              <h2 className="rubik-dirt-regular">Nihar   Puthran</h2>
              <p>Web Developer</p>

              <div className="loading-bar">
                <motion.div
                  className="loading-progress"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 4.8,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <div className="loader-controls">
              <button
                type="button"
                className="loader-btn skip-btn"
                onClick={() => setLoading(false)}
              >
                Skip ➔
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}

export default Loader;