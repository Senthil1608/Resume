import { CiCircleInfo } from "react-icons/ci";

function EducationDetails() {
  return (
    <>
      <div className="w-[90%] bg-white border border-black rounded-md p-6 shadow-md m-3">
        <div className="flex flex-row items-center justify-between space-x-4 mb-5">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 ">
            <span className="text-2xl cursor-pointer">⋮⋮</span><h4 className="text-[#1E293B]">Education</h4>
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
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Select</option>
              <option>SSLC</option>
              <option>HSC</option>
              <option>UG</option>
              <option>Custom</option>
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
      </div>
    </>
  );
}

export default EducationDetails;
