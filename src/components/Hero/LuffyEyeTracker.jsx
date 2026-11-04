import { useEffect, useRef, useState } from "react";
import luffyBase from "../../assets/images/hero/luffy_base.png";
import pupilLeft from "../../assets/images/hero/luffy_pupil_left.png";
import pupilRight from "../../assets/images/hero/luffy_pupil_right.png";
import maskLeft from "../../assets/images/hero/eye_mask_left.png";
import maskRight from "../../assets/images/hero/eye_mask_right.png";
import "./LuffyEyeTracker.css";

/**
 * Interactive Eye-Tracking Character Portal Component
 * Calculates vector angle & distance between mouse cursor and pupil centers,
 * smoothly moving the pupils within Luffy's eye sockets.
 */
export default function LuffyEyeTracker() {
  const containerRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [pupilPos, setPupilPos] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic natural anime blinking
  useEffect(() => {
    let blinkTimer;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 160);

      // Next blink between 3.5s and 7s
      const nextDelay = 3500 + Math.random() * 3500;
      blinkTimer = setTimeout(triggerBlink, nextDelay);
    };

    blinkTimer = setTimeout(triggerBlink, 4000);
    return () => clearTimeout(blinkTimer);
  }, []);

  // Global window cursor tracking
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!leftEyeRef.current || !rightEyeRef.current) return;

      const leftRect = leftEyeRef.current.getBoundingClientRect();
      const rightRect = rightEyeRef.current.getBoundingClientRect();

      // Eyeball centers on screen
      const lCenterX = leftRect.left + leftRect.width / 2;
      const lCenterY = leftRect.top + leftRect.height / 2;

      const rCenterX = rightRect.left + rightRect.width / 2;
      const rCenterY = rightRect.top + rightRect.height / 2;

      // Max allowable pupil displacement in pixels
      const maxRadiusX = 14;
      const maxRadiusY = 11;

      // Left eye vector calculation
      const dxL = e.clientX - lCenterX;
      const dyL = e.clientY - lCenterY;
      const angleL = Math.atan2(dyL, dxL);
      const distL = Math.hypot(dxL, dyL);
      // Normalized distance factor (smooth clamp up to 500px screen distance)
      const factorL = Math.min(distL / 320, 1);
      const leftX = Math.cos(angleL) * maxRadiusX * factorL;
      const leftY = Math.sin(angleL) * maxRadiusY * factorL;

      // Right eye vector calculation
      const dxR = e.clientX - rCenterX;
      const dyR = e.clientY - rCenterY;
      const angleR = Math.atan2(dyR, dxR);
      const distR = Math.hypot(dxR, dyR);
      const factorR = Math.min(distR / 320, 1);
      const rightX = Math.cos(angleR) * maxRadiusX * factorR;
      const rightY = Math.sin(angleR) * maxRadiusY * factorR;

      setPupilPos({
        left: { x: leftX, y: leftY },
        right: { x: rightX, y: rightY },
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className={`luffy-tracker-container ${isBlinking ? "is-blinking" : ""}`} ref={containerRef}>
      {/* Base Layer: Luffy without pupils */}
      <img
        src={luffyBase}
        alt="Monkey D. Luffy"
        className="luffy-base-layer"
        loading="eager"
      />

      {/* Left Eye Socket & Moving Pupil (Viewer Left) */}
      <div
        className="luffy-eye-socket eye-socket-left"
        ref={leftEyeRef}
        style={{
          WebkitMaskImage: `url(${maskLeft})`,
          maskImage: `url(${maskLeft})`,
        }}
      >
        <img
          src={pupilLeft}
          alt=""
          className="luffy-pupil pupil-left"
          style={{
            transform: `translate3d(${pupilPos.left.x}px, ${pupilPos.left.y}px, 0)`,
          }}
        />
      </div>

      {/* Right Eye Socket & Moving Pupil (Viewer Right) */}
      <div
        className="luffy-eye-socket eye-socket-right"
        ref={rightEyeRef}
        style={{
          WebkitMaskImage: `url(${maskRight})`,
          maskImage: `url(${maskRight})`,
        }}
      >
        <img
          src={pupilRight}
          alt=""
          className="luffy-pupil pupil-right"
          style={{
            transform: `translate3d(${pupilPos.right.x}px, ${pupilPos.right.y}px, 0)`,
          }}
        />
      </div>

      {/* Blink Eyelid Overlay for Natural Expression */}
      <div className="luffy-eyelid eyelid-left" />
      <div className="luffy-eyelid eyelid-right" />
    </div>
  );
}

