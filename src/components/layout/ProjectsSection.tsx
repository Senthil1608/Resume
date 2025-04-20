import React from "react"
import { FaShare } from "react-icons/fa6"
import { MdModeEdit } from "react-icons/md"
import ProjectView from "./ProjectView"

function ProjectsSection()
{
    return(
        <>
        <div className=" w-full space-y-4 overflow-y-auto h-[calc(100vh-15vh)]">
                        <h1 className="m-8 text-3xl">All Projects</h1>
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
                        <ProjectView />
        </div>
        </>
    )
}
export default ProjectsSection