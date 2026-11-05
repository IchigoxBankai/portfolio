import { useEffect, useRef, useState } from "react";
// Gear 5 Luffy Assets
import gear5Base from "../../assets/images/hero/luffy_base.png";
import gear5PupilLeft from "../../assets/images/hero/luffy_pupil_left.png";
import gear5PupilRight from "../../assets/images/hero/luffy_pupil_right.png";
import gear5MaskLeft from "../../assets/images/hero/eye_mask_left.png";
import gear5MaskRight from "../../assets/images/hero/eye_mask_right.png";

// Straw Hat Luffy Assets
import strawhatBase from "../../assets/images/hero/strawhat_base.png";
import strawhatPupilLeft from "../../assets/images/hero/strawhat_pupil_left.png";
import strawhatPupilRight from "../../assets/images/hero/strawhat_pupil_right.png";
import strawhatMaskLeft from "../../assets/images/hero/strawhat_mask_left.png";
import strawhatMaskRight from "../../assets/images/hero/strawhat_mask_right.png";

import "./LuffyEyeTracker.css";

/**
 * Interactive Eye-Tracking Character Portal Component
 * Supports both Gear 5 (White Hair) and Straw Hat (Red Outfit) Luffy.
 * Calculates vector angle & distance between mouse cursor and pupil centers,
 * smoothly moving the pupils within Luffy's eye sockets.
 */
export default function LuffyEyeTracker({ variant = "gear5" }) {
  const containerRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [pupilPos, setPupilPos] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });

  const [isBlinking, setIsBlinking] = useState(false);

  const isGear5 = variant === "gear5";
  const baseImg = isGear5 ? gear5Base : strawhatBase;
  const pupilLeft = isGear5 ? gear5PupilLeft : strawhatPupilLeft;
  const pupilRight = isGear5 ? gear5PupilRight : strawhatPupilRight;
  const maskLeft = isGear5 ? gear5MaskLeft : strawhatMaskLeft;
  const maskRight = isGear5 ? gear5MaskRight : strawhatMaskRight;
  const altText = isGear5 ? "Gear 5 Monkey D. Luffy" : "Straw Hat Monkey D. Luffy";

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
    <div
      className={`luffy-tracker-container ${isGear5 ? "variant-gear5" : "variant-strawhat"} ${
        isBlinking ? "is-blinking" : ""
      }`}
      ref={containerRef}
    >
      {/* Base Layer: Luffy without pupils */}
      <img
        src={baseImg}
        alt={altText}
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
