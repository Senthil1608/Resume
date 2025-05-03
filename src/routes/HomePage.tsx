import Button from "../components/common/Button";
import "../App.css"
function HomePage()
{
    return(
        <>
            <div className="h-screen flex justify-center items-center  ">
                <Button routeLocation="Login" displayText="Home" />
            </div>
        </>
    )
}

export default HomePage