import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

function EducationDetails() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customCourseName, setCustomCourseName] = useState("");
  const [educationFields, setEducationFields] = useState([
    { institution: "", course: "", marks: "", total: "", percentage: "", from: "", to: "" }
  ]);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  const handleAddMore = () => {
    setEducationFields([
      ...educationFields,
      { institution: "", course: "", marks: "", total: "", percentage: "", from: "", to: "" }
    ]);
  };

  const handleCourseChange = (index, value) => {
    const updatedFields = [...educationFields];
    updatedFields[index].course = value;
    setEducationFields(updatedFields);
    if (value === "Custom") {
      setSelectedCourseIndex(index);
      setIsCustomModalOpen(true);
    }
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...educationFields];
    updatedFields.splice(index, 1);
    setEducationFields(updatedFields);
  };
  

  const handleSaveCustomCourse = () => {
    const updatedFields = [...educationFields];
    updatedFields[selectedCourseIndex].course = customCourseName;
    setEducationFields(updatedFields);
    setIsCustomModalOpen(false);
    setCustomCourseName("");
  };

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...educationFields];
    updatedFields[index][field] = value;
    setEducationFields(updatedFields);
  };

  return (
    <div className="w-[90%] bg-white border border-black rounded-md p-6 shadow-md ms-3 mb-3 relative">
      <div className="flex flex-row items-center justify-between space-x-4 mb-5">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-2xl cursor-pointer">⋮⋮</span>
          <h4 className="text-[#1E293B]">Education</h4>
        </h1>
        <CiCircleInfo size={24} className="text-gray-600 cursor-pointer" />
      </div>

      {/* All Education Fieldsets */}
      {educationFields.map((edu, index) => (
        <div key={index} className="grid grid-cols-6 gap-3 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Institution Name</label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => handleInputChange(index, "institution", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Institution Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Course Name</label>
            <select
              value={edu.course}
              onChange={(e) => handleCourseChange(index, e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="SSLC">SSLC</option>
              <option value="HSC">HSC</option>
              <option value="UG">UG</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Secured Marks</label>
            <input
              type="text"
              value={edu.marks}
              onChange={(e) => handleInputChange(index, "marks", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Marks"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Total Marks</label>
            <input
              type="text"
              value={edu.total}
              onChange={(e) => handleInputChange(index, "total", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Total"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Percentage</label>
            <input
              type="text"
              value={edu.percentage}
              onChange={(e) => handleInputChange(index, "percentage", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="%"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">From</label>
            <input
              type="text"
              value={edu.from}
              onChange={(e) => handleInputChange(index, "from", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Year"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              type="text"
              value={edu.to}
              onChange={(e) => handleInputChange(index, "to", e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Year"
            />
          </div>
                       {/* Cancel button */}
  {educationFields.length > 1 && (
    <button
      type="button"
      onClick={() => handleRemoveField(index)}
      className="absolute top-1 right-2 text-black p-1 cursor-pointer"

    >
      X
    </button>
  )}

        <div>
          
        </div>
        </div>
      ))}

      {/* Add More Button Centered */}
      <div className="flex justify-center mt-4">
        <button
          type="button"
          onClick={handleAddMore}
          className="text-white bg-gradient-to-r from-gray-800 to-blue-600 hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
        >
          Add More
        </button>
      </div>


      {isCustomModalOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg w-[350px] shadow-lg border border-gray-300 z-50">
          <h2 className="text-xl font-bold text-[#1E293B] mb-4">Course Name</h2>

          <label className="block mb-1 text-gray-700">Course Name</label>
          <input
            type="text"
            value={customCourseName}
            onChange={(e) => setCustomCourseName(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={handleSaveCustomCourse}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save
            </button>
            <button
              onClick={() => setIsCustomModalOpen(false)}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Close
            </button>



          </div>
        </div>
      )}
    </div>
  );
}

export default EducationDetails;
