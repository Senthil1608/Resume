import React from "react"
import Logo from "../../assets/images/Logo.png"
import senthil from "../../assets/images/senthilphoto.png"
function DashboardNavBar()
{
    return(
        <>
         <div className="flex flex-row items-center justify-between px-4  bg-white py-2 border-b-black border-b-1">
         <a href="/"><img src={Logo} className="h-14 w-auto"/></a>
         <div className="flex flex-row items-center px-8">
            <h2 className="text-2xl">P S Senthil Srinivas</h2>
            <div className="w-12 h-12 bg-white border-2 border-black rounded-full ml-4 overflow-hidden flex items-center justify-center">
                <img src={senthil} className="w-full h-full object-cover" />
            </div>
        </div>

      
         </div>
        </>
    )

}
export default DashboardNavBar