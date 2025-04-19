import Button from "../components/common/Button";
import "../App.css"
import React from "react"
function Dashboard()
{
    return(
        <>
            <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#426fda] to-[#1E293B] ">
                <Button routeLocation="Editor" displayText="Editor" />
            </div>
        </>
    )
}

export default Dashboard