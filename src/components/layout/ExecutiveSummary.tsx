import { CiCircleInfo } from "react-icons/ci";

function ExecutiveSummary() {
  return (
    <>
      <div className="w-[90%] bg-white border border-black rounded-md shadow-md p-6 ms-3 mb-3">
        <div className="flex flex-row justify-between items-center space-x-4 mb-5">
          <h1 className="text-3xl font-bold text-grey-800 flex items-center gap-2">
            <span className="text-2xl cursor-pointer">⋮⋮</span><h4 className="text-[#1E293B]">Executive Summary</h4>
            </h1>
          <CiCircleInfo size={24} className="text-gray-600 cursor-pointer" />
        </div>

        <textarea
          placeholder="Provide the details here............"
          className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        />
      </div>
    </>
  );
}

export default ExecutiveSummary;
