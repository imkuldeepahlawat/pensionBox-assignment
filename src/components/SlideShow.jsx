import React, { useRef, useEffect } from "react";
import img1 from "../assets/slide/img1.jpg";
import img2 from "../assets/slide/img2.jpg";
import img3 from "../assets/slide/img3.webp";
import img4 from "../assets/slide/img4.jpg";
import img5 from "../assets/slide/img5.jpg";


const SlideShow = () => {
  const images = [img1, img2, img3, img4, img5];
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up scroll snapping
    const container = containerRef.current;
    if (container) {
      container.style.scrollSnapType = "x mandatory";
    }

    // Infinite scroll effect
    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth - container.clientWidth;
        if (scrollLeft === scrollWidth) {
          // When scrolled to the end, jump back to the beginning without animation
          container.scrollTo({ left: 0 });
        }
      }
    };

    const interval = setInterval(handleScroll, 2000); // Adjust the scroll interval as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full flex scroll-container" ref={containerRef}>
        {images.map((imgSrc, i) => (
          <img
            key={`contimage${i}`}
            src={imgSrc}
            alt={`image${i}`}
            className="w-[650px] h-[700px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
