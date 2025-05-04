import { RiAddBoxLine } from "react-icons/ri";
import "../../App.css";
import React from "react";

function SectionBar() {
  const sections = [
    "Experience",
    "Skills",
    "Internship",
    "Projects",
    "Publication",
    "Achievements",
    "Certifications",
    "Custom Section",
  ];

  return (
    <div className="p-4 items-center m-3 w-67 border-1 border-black rounded-lg">
      <h2 className="transform -translate-x-1 text-2xl text-blue-500 mb-4">
        Build Your Basement here!!
      </h2>

      
      <div className="max-h-[70vh] overflow-y-hidden space-y-4 pr-1">
        {sections.map((section, index) => (
          <div key={index}>
            <button className="bg-white text-black text-xl w-56 flex justify-between p-2 cursor-pointer border-2 border-black">
              {section}
              <RiAddBoxLine className="text-2xl" />
            </button>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default SectionBar;
