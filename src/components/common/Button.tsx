import '../../App.css'
//component to call button which help to navigate to a desired route
interface Props{
    routeLocation : string
    displayText : string
}
function Button(props: Props){
    return(

   
    <>

<a
  href={props.routeLocation}
  className="block w-1/2 bg-gradient-to-r from-[#426fda] to-[#1E293B] text-white py-2 rounded-lg hover:opacity-90 transition text-center"
>
  {props.displayText}
</a>
    </>
     )
}

export default Button