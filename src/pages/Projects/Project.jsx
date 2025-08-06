import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Residentials from "./Residentials";
import Commercial from "./Commercial";

const Project = () => {
  const { section } = useParams(); // 'residential' or 'commercial'
  const [activeSection, setActiveSection] = useState("all");

  useEffect(() => {
    if (section === "residential") {
      setActiveSection("residential");
    } else if (section === "commercial") {
      setActiveSection("commercial");
    } else {
      setActiveSection("all");
    }

    // Smooth scroll to relevant section
    let scrollToId = null;
    if (section === "residential") scrollToId = "residential";
    if (section === "commercial") scrollToId = "commercial";

    if (scrollToId) {
      const scrollTarget = document.getElementById(scrollToId);
      if (scrollTarget) {
        setTimeout(() => {
          const yOffset = -100; // Adjust based on fixed header height
          const y =
            scrollTarget.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <div className="pt-16 px-4">
      {(activeSection === "residential" || activeSection === "all") && (
        <section
          id="residential"
          className="scroll-mt-24 py-10 border-t border-gray-200"
        >
          <Residentials />
        </section>
      )}

      {(activeSection === "commercial" || activeSection === "all") && (
        <section
          id="commercial"
          className="scroll-mt-24 py-16 border-t border-gray-200"
        >
          <Commercial />
        </section>
      )}
    </div>
  );
};

export default Project;
