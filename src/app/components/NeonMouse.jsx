"use client";
import { useState, useEffect } from "react";

export default function() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <div
        className="w-24 h-24 bg-[#ff00ff] rounded-full pointer-events-none"
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          filter: "blur(150px)",
          mixBlendMode: "screen",
        }}
      ></div>
    );
};
