import { FaBold, FaItalic, FaListOl, FaListUl, FaRedo, FaSearch, FaUnderline, FaUndo } from "react-icons/fa"
import { MdFormatColorText } from "react-icons/md"
import "../../App.css"



function ToolKit() {
  return (
    <div className="sticky flex items-center w-full px-4 py-2 border-y-2 border-black bg-white">

    <div className="flex items-center gap-6">
      <button className="cursor-pointer"> 
        <FaUndo />
      </button >
      <button className="cursor-pointer">
        <FaRedo />
      </button>
      <button className="cursor-pointer">
        <FaBold />
      </button>
      <button className="cursor-pointer">
        <FaItalic />
      </button>
      <button className="cursor-pointer">
        <FaUnderline />
      </button>
      <button  className="cursor-pointer">
        <FaListUl />
      </button>
      <button className="cursor-pointer">
        <FaListOl />
      </button>
      <button className="cursor-pointer"    >
        <MdFormatColorText />
      </button>
      
      
      
      <select className="py-2 px-3 border border-gray-300 rounded-md text-black bg-white w-44 me-2" defaultValue="">
        <option disabled value="">Font Style</option>
        {['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Trebuchet MS', 'Tahoma', 
    'Courier New', 'Lucida Sans', 'Roboto', 'Open Sans', 'Poppins', 'Lato',
    'Montserrat', 'Playfair Display', 'Raleway', 'Merriweather', 'Oswald', 
    'Droid Sans', 'Roboto Slab', 'Ubuntu', 'Source Sans Pro', 'Quicksand', 
    'Fira Sans', 'Lora', 'Noto Sans', 'Cabin', 'Bitter', 'PT Sans'
        ].map((font) => (
          <option key={font} value={font}>{font}</option>
        ))}
      </select>
  
      
      <select className="py-2 px-3 border border-gray-300 rounded-md text-black bg-white w-32 me-32" defaultValue="">
        <option disabled value="">Font Size</option>
        {Array.from({ length: 100 }, (_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center bg-gray-300 max-w-sm border border-black p-2 shadow-sm rounded ml-2 me-8 justify-center">
    <input
      type="text"
      placeholder="Search here"
      className="flex-grow outline-none bg-transparent text-black placeholder-black"
    />
    <button
      className="text-white hover:text-black"
    >
      <FaSearch />
    </button>
  </div>
  
   
    <div className="flex items-center gap-3 ml-auto">
    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-0.5">Compile</button>
      <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-0.5">Covert Template</button>
      
    </div>
  </div>
  
  );
}

export default ToolKit;
