import "./Loader.css";


import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>

        {loading && (

          <motion.div
            className="loader"

            initial={{ opacity: 1 }}

            exit={{
              opacity: 0,
              transition: {
                duration: .8,
              },
            }}
          >

            <motion.div
              className="loader-content"

              initial={{
                scale: .9,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}
            >

              
<h2 className="rubik-dirt-regular">
    Nihar Puthran
</h2>
              <p>Web Developer</p>

              <div className="loading-bar">

                <motion.div
                  className="loading-progress"

                  initial={{ width: 0 }}

                  animate={{ width: "100%" }}

                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                />

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {!loading && children}
    </>
  );
}

export default Loader;