import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

function EducationDetails() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customCourseName, setCustomCourseName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseChange = (e) => {
    const value = e.target.value;
    setSelectedCourse(value);
    if (value === "Custom") {
      setIsCustomModalOpen(true);
    }
  };

  const handleSaveCustomCourse = () => {
    setSelectedCourse(customCourseName);
    setIsCustomModalOpen(false);
  };

  return (
    <>
      <div className="w-[90%] bg-white border border-black rounded-md p-6 shadow-md m-3 relative">
        <div className="flex flex-row items-center justify-between space-x-4 mb-5">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl cursor-pointer">⋮⋮</span>
            <h4 className="text-[#1E293B]">Education</h4>
          </h1>
          <CiCircleInfo size={24} className="text-gray-600 cursor-pointer" />
        </div>

        <div className="grid grid-cols-6 gap-3 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Institution Name</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Institution Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Course Name</label>
            <select
              value={selectedCourse}
              onChange={handleCourseChange}
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
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Marks"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Total Marks</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Total"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Percentage</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Percentage"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">From</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Year"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">To</label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Year"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-gray-800 to-blue-600 hover:from-blue-700 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center"
          >
            Add More
          </button>
        </div>

        {/* Custom Course Modal */}
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
    </>
  );
}

export default EducationDetails;
