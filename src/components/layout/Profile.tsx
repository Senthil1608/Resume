import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

function Profile() {
  const [LinkedInIsOpen, setLinkedInIsOpen] = useState(false);
  const [LinkedIndisplayText, setLinkedInDisplayText] = useState("");
  const [LinkedInLink, setLinkedInLink] = useState("");
  const [GithubIsOpen,setGithubIsOpen]=useState(false);
  const[GithubDisplayText,setGithubDisplayText]=useState("")
  const[GithubLink,setGithubLink]=useState("")

  const handleSave = () => {
    setLinkedInIsOpen(false);
    setGithubIsOpen(false);
  };

  const LinkedInopenModal = () => setLinkedInIsOpen(true);
  const LinkedIncloseModal = () => setLinkedInIsOpen(false);
  const GithubopenModal =() => setGithubIsOpen(true);
  const GithubcloseModal =()=> setGithubIsOpen(false);

  return (
    <div className="w-[90%] bg-white border border-black rounded-lg p-6 ms-3 mt-3 mb-3 relative">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <span className="text-2xl cursor-pointer">⋮⋮</span>
          <h4 className="text-[#1E293B]">Profile</h4>
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

      <div className="flex justify-end gap-4">
        <button
          type="button"
          className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2"
          onClick={LinkedInopenModal}
        >
          LinkedIn
        </button>

        <button
          type="button"
          onClick={GithubopenModal}
          className="cursor-pointer text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2"
        >
          Github
        </button>
      </div>

      {LinkedInIsOpen && (
        <div className="absolute top-15 left-1/2 transform -translate-x-1/2  bg-white p-6 rounded-lg w-[350px] shadow-lg border border-gray-300 z-50">
          <h2 className="text-xl font-bold text-[#1E293B] mb-4">Add LinkedIn</h2>

          <label className="block mb-1 text-gray-700">Link Title</label>
          <input
            type="text"
            value={LinkedIndisplayText}
            onChange={(e) => setLinkedInDisplayText(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-1 text-gray-700">LinkedIn Link</label>
          <input
            type="text"
            value={LinkedInLink}
            onChange={(e) => setLinkedInLink(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={handleSave}
              type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            
              Save
              </button>
            
              <button onClick={LinkedIncloseModal}type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>

          </div>
        </div>
      )}

        {GithubIsOpen && (
        <div className="absolute top-15 left-1/2 transform -translate-x-1/2  bg-white p-6 rounded-lg w-[350px] shadow-lg border border-gray-300 z-50">
          <h2 className="text-xl font-bold text-[#1E293B] mb-4">Add Github</h2>

          <label className="block mb-1 text-gray-700">Link Title</label>
          <input
            type="text"
            value={GithubDisplayText}
            onChange={(e) => setGithubDisplayText(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-1 text-gray-700">Github Link</label>
          <input
            type="text"
            value={GithubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex justify-end gap-3">
            <button
              onClick={handleSave}
              type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            
              Save
              </button>
            
              <button onClick={GithubcloseModal}type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Close</button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Profile;
