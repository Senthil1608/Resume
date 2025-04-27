import { useState } from "react"
import { CiCircleInfo } from "react-icons/ci"

function Profile() {

  const[LinkedInIsOpen,setLinkedInIsOpen]= useState(false);

  const LinkedInopenModal =()=>setLinkedInIsOpen(true);
  const LinkedIncloseModal =() =>setLinkedInIsOpen(false);
  return (
    <div className="w-[90%] bg-white border-1 border-black rounded-lg p-6 m-3">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-2xl cursor-pointer">⋮⋮</span> <h4 className="text-[#1E293B]">Profile</h4>
        </h1>
        <CiCircleInfo size={24} className="text-gray-600 cursor-pointer" />
      </div>

     
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div>
          <label className="block mb-1 text-gray-700">First Name</label>
          <input
            type="text"
            placeholder=""
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Last Name</label>
          <input
            type="text"
            placeholder=""
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Enter location here"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-7">
        <div>
          <label className="block mb-1 text-gray-700">E-Mail</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Phone</label>
          <input
            type="number"
            placeholder="(+91) (XXXXX XXXXX)"
            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>


      <div className="flex justify-end gap-4    ">
      <button type="button" className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={LinkedInopenModal}>LinkedIn</button>

      {LinkedInIsOpen && (

        <div></div>
      )}
      <button type="button" className="cursor-pointer text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Github</button>
      </div>
    </div>
  )
}

export default Profile
