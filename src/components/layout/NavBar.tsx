// Navigation bar for the application includes
// 1. Home 
// 2. Editor Page
// 3. Sign Up
// 4. Sign In


import React from "react"
import { useState } from "react"
function NavBar(){
    const [heading,setHeading] = useState("Untitled Document")
    return(
        <>
            <div className="flex flex-row items-center px-4 pt-2 space-x-4">
                
                <div className="flex flex-row items-center space-x-4 bg-blue-800 p-2 w-full">

            
                <h1 className="text-3xl text-white">Untitled Document </h1>
                
                <button className="bg-green-500 text-white font-semibold border-1 border-black  w-auto px-4 py-1 ">Download</button>
                <a href="/" className="bg-red-500 text-white font-semibold border-1 border-black  w-auto px-4 py-2 ">Logout</a>
                </div>
            </div>
        </>
    )
}

export default NavBar