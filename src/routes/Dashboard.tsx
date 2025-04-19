import Button from "../components/common/Button";
import "../App.css"
import React from "react"
import DashboardNavBar from "../components/layout/DashboardNavBar";
import DashboardOptionsWindow from "../components/layout/DashboardOptionsWindow";
function Dashboard()
{
    return(
        <>
            <div className="h-screen flex flex-col overflow-hidden">
            <DashboardNavBar />
            <DashboardOptionsWindow />
            </div>
        </>
    )
}

export default Dashboard