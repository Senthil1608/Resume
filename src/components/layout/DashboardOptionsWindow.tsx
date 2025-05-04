
function DashboardOptionsWindow()
{
    return(
        <>
            <div className="w-86 flex-grow h-screen bg-gradient-to-b from-[#1E293B] to-[#5270A1]">
                <div className="flex flex-col justify-center space-y-8 my-8 items-center">
                 <button className="bg-white py-2 px-6 w-fit text-2xl font-medium"> New Project</button>
                 <button className="bg-[#3B5C92] py-2 px-10 w-56 text-xl text-white "> All Projects</button>
                 <button className="bg-white py-1 px-10 w-56 text-xl "> My Projects</button>
                 <button className="bg-white py-1 px-10 w-56 text-xl "> Shared Projects</button>
                 <button className="bg-white py-1 px-10 w-56 text-xl text-red-600 "> Deleted Projects</button>
                </div>
            </div>
        </>
    )
}

export default DashboardOptionsWindow