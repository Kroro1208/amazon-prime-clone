import { FaSearch } from "react-icons/fa";
import profile from "../images/profile.png";

const NavBar = () => {
    return (
        <div className='bg-black flex items-center w-screen justify-between p-5'>
            <div className="flex items-center ml-36">
                <h1 className='text-white font-semibold text-2xl'>Prime Video</h1>
                <h1 className='ml-20 text-lg text-gray-300'>Home</h1>
            </div>
            <div className="flex items-center gap-10">
                <h1 className='text-gray-300 text-lg'>Category</h1>
                <FaSearch className="text-gray-300" />
                <img src={profile} className="w-10 h-10 mr-36" />
            </div>
        </div>
    )
}

export default NavBar