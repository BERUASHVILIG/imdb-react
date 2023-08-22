import React, { useState, useEffect } from "react";

const BacktoTop = () => {
  const [backtoTop, setBacktoTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktoTop(true);
      } else {
        setBacktoTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backtoTop && (
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            width: " 40px",
            height: "40px",
            backgroundColor: "yellow",
            border: "3px solid #yellow",
            borderRadius: " 8px",
            right: "20px",
            bottom: "50px",
            fontSize: "24px",
            cursor: "pointer",
            transition: "opacity 0.3s, transform 0.3s",
            color: "black",
          }}
          onClick={scrollUp}
        >
          &#8679;
        </button>
      )}
    </div>
  );
};

export default BacktoTop;
