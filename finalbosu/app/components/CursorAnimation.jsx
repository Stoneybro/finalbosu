"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

const CursorAnimation = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorText = document.querySelectorAll(".cursor-text span");
    const radius = 60; // Adjust cursor size as needed

    // Initialize cursor size and style
    gsap.set(cursor, {
      width: radius * 2,
      height: radius * 2,
      borderRadius: "50%",
      position: "fixed",
      pointerEvents: "none",
      zIndex: 9999,
    });

    // Position the circular text
    const setCursorTextPosition = () => {
      cursorText.forEach((char, i) => {
        const rotation = i * (360 / cursorText.length);
        gsap.set(char, {
          transformOrigin: `0px ${radius}px`,
          x: radius,
          rotate: rotation,
          position: "absolute",
        });
      });
    };

    let posX = 0, posY = 0; // Cursor position
    let mouseX = 0, mouseY = 0; // Mouse position

    // Update mouse coordinates on move
    const mouseMove = (e) => {
      mouseX = e.pageX - window.scrollX;
      mouseY = e.pageY - window.scrollY;
    };

    // Smoothly update cursor position using gsap tick
    gsap.ticker.add(() => {
      posX += (mouseX - posX) * 0.2; // Adjust the trailing effect by changing the factor (0.2)
      posY += (mouseY - posY) * 0.2;

      gsap.set(cursor, {
        x: posX - radius,
        y: posY - radius,
      });
    });

    setCursorTextPosition(); // Position text
    window.addEventListener("mousemove", mouseMove);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", mouseMove);
      gsap.ticker.remove();
    };
  }, []);

  return (
    <div className="cursor hidden lg:block">
      <div className="cursor-text text-[#e61949] font-poppins font-black ">
        {"against-all-odds-".split("").map((char, index) => (
          <span key={index} className="font-black">{char}</span>
        ))}
      </div>
    </div>
  );
};

export default CursorAnimation;
