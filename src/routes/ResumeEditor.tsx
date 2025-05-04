import EditorNavbar from "../components/layout/EditorNavbar.tsx"
import SectionBar from "../components/layout/Sectionbar.tsx"
import ToolKit from "../components/layout/ToolKit.tsx"
import Profile from "../components/layout/Profile.tsx"
import PreviewPanel from "../components/layout/PreviewPanel.tsx"
import ExecutiveSummary from "../components/layout/ExecutiveSummary.tsx"
import EducationDetails from "../components/layout/EducationDetails.tsx"


function ResumeEditor()
{
    return(
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <EditorNavbar/>
            </div>

            <div className="fixed top-[60px] left-0 right-0 z-45">
            <ToolKit/>
            </div>       
            
            <div className="flex flex-row w-full pt-[120px]"> 
                <div className="fixed top-[120px] left-0 w-[25%] overflow-y-hidden">
                <SectionBar/>
                </div>
                <div className="ml-[18%] w-[50%] h-[calc(100vh-120px)] overflow-y-auto ps-2">
                <Profile/>
                <ExecutiveSummary/>
                <EducationDetails/>
                </div>
                <div className="fixed top-[130px] w-[25%] -right-[-80px] h-[calc(100vh-60px)] overflow-y-hidden">
                    <PreviewPanel/>
                </div>
            </div>
            
            
        </>
    )
}

export default ResumeEditor