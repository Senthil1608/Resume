import Button from "../components/common/Button";
import "../App.css"
import React from "react"
function HomePage()
{
    return(
        <>
            <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#426fda] to-[#1E293B] ">
                <Button routeLocation="Dashboard/AllProjects" displayText="Login" />
            </div>
        </>
    )
}

export default HomePage