import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Project = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // Give time for DOM to fully render
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    scrollToHash();
  }, [location]);

  return (
    <div className="pt-32 px-4">
      <h1 className="text-3xl font-bold mb-6">Our Projects</h1>

      <section id="residential" className="py-16 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">Residential Projects</h2>
        <p>Details about residential projects...</p>
      </section>

      <section id="commercial" className="py-16 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">Commercial Projects</h2>
        <p>Details about commercial projects...</p>
      </section>
    </div>
  );
};

export default Project;
