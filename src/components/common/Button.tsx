import React from 'react'
import '../../App.css'
//component to call button which help to navigate to a desired route
interface Props{
    routeLocation : string
    displayText : string
}
function Button(props: Props){
    return(

   
    <>
        <a href= {props.routeLocation} 
        className="bg-green-600 text-2xl text-white p-2 px-4 border-2 border-black rounded-xl"  >
            {props.displayText}
        </a>
    </>
     )
}

export default Button