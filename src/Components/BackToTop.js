import React, { useState, useEffect } from "react";

function BackToTop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={scrollY > 150 ? "show" : "hide"} onClick={handleClick}>
      Back to Top
    </button>
  );
}

export default BackToTop;
