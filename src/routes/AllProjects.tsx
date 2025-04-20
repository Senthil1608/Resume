import React from "react"
import { FaShare } from "react-icons/fa6"
import DashboardOptionsWindow from "../components/layout/DashboardOptionsWindow"
import DashboardNavBar from "../components/layout/DashboardNavBar"
import { MdModeEdit } from "react-icons/md"
import ProjectEditBar from "../components/layout/ProjectsSection"

function AllProjects()
{
    return(
        <>
             <div className="h-screen flex flex-col overflow-hidden ">
                <DashboardNavBar />
                <div className="flex flex-row">
                    <DashboardOptionsWindow />
                    <ProjectEditBar />
                </div>
            </div>
        </>
    )
}

export default AllProjects