import { AiOutlineDownload } from "react-icons/ai"
import Resume from "../../assets/images/Logo.png"
function PreviewPanel()
{
    return(
        <>
        <div className="h-[calc(100vh-25vh)] //25 w-[24.5vw] m-1 border-black border-1 rounded-lg flex flex-col items-center justify-start">
        
        <div className="flex flex-row items-center space-x-8">
            <button className="bg-blue-500 text-white p-2 border-2 border-black ">View ATS Score</button>
            <AiOutlineDownload className="text-4xl text-green-600"/>
        </div>

        </div>

        </>
    )
}

export default PreviewPanel