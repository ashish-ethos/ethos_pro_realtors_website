import React from "react";
import Residentials from "./Residentials";
import Commercial from "./Commercial";

const Project = () => {
  return (
    <div className="pt-4 px-4">
      <section
        id="residential"
        className="scroll-mt-24 py-10 border-t border-gray-200"
      >
        <Residentials />
      </section>
      <section
        id="commercial"
        className="scroll-mt-24 py-16 border-t border-gray-200"
      >
        <Commercial />
      </section>
    </div>
  );
};

export default Project;
