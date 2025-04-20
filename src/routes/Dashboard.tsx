import Button from "../components/common/Button";
import "../App.css"
import React from "react"
import DashboardNavBar from "../components/layout/DashboardNavBar";
import DashboardOptionsWindow from "../components/layout/DashboardOptionsWindow";
import { FaShare } from "react-icons/fa6";
import AllProjects from "./AllProjects";
function Dashboard()
{
    return(
        <>
           <AllProjects />
        </>
    )
}

export default Dashboard