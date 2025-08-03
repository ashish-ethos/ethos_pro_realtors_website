import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Residentials from "./Residentials";
import Commercial from "./Commercial";

const Project = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("all");

  useEffect(() => {
    const hash = location.hash;

    if (hash === "#residential") {
      setActiveSection("residential");
    } else if (hash === "#commercial") {
      setActiveSection("commercial");
    } else {
      setActiveSection("all");
    }

    // Only query selector if hash is non-empty
    if (hash) {
      const scrollTarget = document.querySelector(hash);
      if (scrollTarget) {
        setTimeout(() => {
          scrollTarget.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="pt-16 px-4">
      {/* Render Residential only if selected or all */}
      {(activeSection === "residential" || activeSection === "all") && (
        <section id="residential" className="py-10 border-t border-gray-200">
          <Residentials />
        </section>
      )}

      {/* Render Commercial only if selected or all */}
      {(activeSection === "commercial" || activeSection === "all") && (
        <section id="commercial" className="py-16 border-t border-gray-200">
          <Commercial />
        </section>
      )}
    </div>
  );
};

export default Project;