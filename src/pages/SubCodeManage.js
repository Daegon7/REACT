import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const SubCodeManage = () => {
  const totalSlides = 18;
  const visibleCards = 5;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) =>
        prev + 1 > totalSlides - visibleCards ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? totalSlides - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 > totalSlides - visibleCards ? 0 : prev + 1
    );
  };

  const slides = Array.from({ length: totalSlides }, (_, i) => ({
    title: `${i + 1}번째 카드`,
    description: `${i + 1}번째 카드입니다.`,
    image: `https://picsum.photos/200/300?random=${i + 1}`,
  }));

  return (
    <div style={styles.container}>
      <button onClick={handlePrev} style={styles.button}>◀</button>
      <div style={styles.slider}>
        {slides.slice(startIndex, startIndex + visibleCards).map((slide, i) => (
          <div key={i} style={styles.cardWrapper}>
            <Card {...slide} />
          </div>
        ))}
      </div>
      <button onClick={handleNext} style={styles.button}>▶</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "40px",
  },
  button: {
    background: "rgba(0,123,255,0.8)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    fontSize: "20px",
    cursor: "pointer",
  },
  slider: {
    display: "flex",
    overflow: "hidden",
    gap: "16px",
    width: "1140px",
    transition: "transform 0.4s ease",
  },
  cardWrapper: {
    flex: "0 0 220px",
  },
};

export default SubCodeManage;