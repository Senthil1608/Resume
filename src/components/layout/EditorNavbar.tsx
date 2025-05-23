import { FaSave } from "react-icons/fa"
import Logo from "../../assets/images/Logo.png"
import { useState } from "react"
import Photo from "../../assets/images/senthilphoto.png"


function EditorNavbar() {

    const [heading,setheading]=useState("UNTITLED DOCUMENT")
    return (
        <>
            <div className="flex flex-row items-center space-x-4 py-0.15 w-auto">
                <a href="/"><img src={Logo} className="h-14 w-auto px-2" /></a>
                <div 
                    className="flex flex-row items-center p-2 w-full"
                    style={{
                        background: 'linear-gradient(to right, #1E293B 0%, #2A3A53 24%, #374B6C 48%, #5270A1 100%)'
                    }}
                >
                    {/* Title */}
                        <input className="text-white text-xl ps-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" value={heading}
                        onChange={(e) => setheading(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                            //   e.target.blur();  // to enable enter and shift focus ???
                             }
                        }}/>
                          

                    
                    <div className="flex flex-row items-center space-x-4  ml-auto gap-3">
                        <FaSave className="text-3xl text-yellow-400 cursor-pointer" />
                        <button type="button" className="text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1">Download CV</button>
                        <button type="button" className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-1">Logout</button>
                        <button className="cursor-pointer rounded-full bg-white w-9.5 h-9.5 overflow-hidden p-0 m-1">
                            <img src={Photo} className="w-full h-full object-cover"></img>
                        </button>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default EditorNavbar 