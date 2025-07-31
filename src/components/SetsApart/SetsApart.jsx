
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
  { value: "2+", label: "Years of Experience", numericValue: 2 },
  { value: "2,000+", label: "Happy Clients", numericValue: 2000 },
  { value: "40+", label: "Affiliate Partners", numericValue: 40 },
  { value: "1,200+", label: "Properties Sold", numericValue: 1200 },
];

const StatCard = ({ value, label, delay, numericValue }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    // Counter animation
    let start = 0;
    const end = numericValue;
    const duration = 2;
    const incrementTime = (duration * 1000) / end;

    const counter = setInterval(() => {
      start += Math.ceil(end / (duration * 1000 / incrementTime));
      if (start >= end) {
        setDisplayValue(value);
        clearInterval(counter);
      } else {
        setDisplayValue(
          start >= 1000
            ? `${Math.floor(start / 1000)},${(start % 1000).toString().padStart(3, "0")}+`
            : `${start}+`
        );
      }
    }, incrementTime);

    // Card entrance animation
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.6, -0.05, 0.01, 0.99] },
    });

    return () => clearInterval(counter);
  }, [numericValue, value, delay, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 15px 25px rgba(30, 30, 60, 0.3)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() =>
        contentControls.start({
          y: -5,
          transition: { duration: 0.2, ease: "easeOut" },
        })
      }
      onHoverEnd={() =>
        contentControls.start({
          y: 0,
          transition: { duration: 0.2, ease: "easeOut" },
        })
      }
      className="stat-card relative bg-white/10 backdrop-blur-md border-4 border-transparent text-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300"
    >
      <motion.div animate={contentControls} className="text-center">
        <h2 className="text-4xl font-bold mb-2">{displayValue}</h2>
        <p className="text-sm font-medium tracking-wide">{label}</p>
      </motion.div>
    </motion.div>
  );
};

const SetsApart = () => {
  const backgroundControls = useAnimation();

  useEffect(() => {
    // Animate background overlay on mount
    backgroundControls.start({
      opacity: [0.3, 0.5, 0.4],
      scale: [1, 1.02, 1],
      transition: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    });
  }, [backgroundControls]);

  return (
    <div className="relative bg-cover bg-center py-10 px-4 sm:px-8">
      <motion.div
        className="absolute inset-0 bg-black z-0"
        animate={backgroundControls}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        className="relative z-10 max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-black via-[#474236] to-[#c99913] bg-clip-text text-transparent animate-pulse">
          What Sets Us Apart
        </h2>
        
      </motion.div>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            value={item.value}
            label={item.label}
            numericValue={item.numericValue}
            delay={index * 0.2}
          />
        ))}
      </div>
      <style jsx>{`
        .stat-card {
          border-image: linear-gradient(45deg, #c99913, #474236, #000000) 10;
          border-image-slice: 10;
          position: relative;
          overflow: visible;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 24px;
          border: 4px solid transparent;
          background: linear-gradient(45deg, #c99913, #474236, #000000) border-box;
          opacity: 0;
          transition: opacity 0.3s ease-out;
          z-index: -1;
        }
        .stat-card:hover::before {
          
          background:none;
        }
      `}</style>
    </div>
  );
};

export default SetsApart;