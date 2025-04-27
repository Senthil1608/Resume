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
            <EditorNavbar/>
            <ToolKit/>
            <div className="flex flex-row w-full"> 
                <div className="w-{20%}">
                <SectionBar/>
                </div>
                <div className="w-{25%}">
                <Profile/>
                <ExecutiveSummary/>
                <EducationDetails/>
                </div>
                <div className="w-{35%}">
                    <PreviewPanel/>
                </div>
            </div>
            
            
        </>
    )
}

export default ResumeEditor