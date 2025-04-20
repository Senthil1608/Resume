import React, { useState } from "react"
import { FaDownload, FaShare } from "react-icons/fa6"
import { MdModeEdit, MdOutlineFileDownload } from "react-icons/md"

function ProjectView()
{
    const handleEditClick = () => {
        setIsEditing(true);
      };
      const handleInputChange = (e) => {
        setTempText(e.target.value);
      };
      const handleInputBlur = () => {
        setDisplayText(tempText);
        setIsEditing(false);
      };
    
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          setDisplayText(tempText);
          setIsEditing(false);
        }
      };
    
    
    const [displayText, setDisplayText] = useState("My Resume - Software");
    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(displayText);
    return(
        <>
            <div className="bg-white border-black border-1 p-4 mx-8 flex flex-row justify-between items-center">
                <div className="flex flex-row items-center px-4 space-x-4">
                {isEditing ? (
                    <input
                        type="text"
                        value={tempText}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        className="text-2xl border-b border-black focus:outline-none"
                    />
                 ) : (
                <>
                <h3 className="text-2xl">{displayText}</h3>
                <MdModeEdit className="text-3xl text-[#000000] cursor-pointer" onClick={handleEditClick} />
            </>
        )}
                </div>
                 <div className="flex flex-row items-center px-4 space-x-8">
                    <MdOutlineFileDownload className="text-4xl text-green-600" />
                    <FaShare className="text-3xl text-gray-800"  />
                    <button className="bg-[#fd1d1d] py-2 px-10 text-xl text-white ">Delete </button>
                    <a className="bg-[#3B5C92] py-2 px-10 text-xl text-white " href="/Editor">Edit </a>
                </div>
            </div>
        </>
    )
}

export default ProjectView