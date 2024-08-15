import { FaHeart } from "react-icons/fa";
function LikeProfile() {

    const handleLikeProfile = async () => {
        // send to server
    }
    return ( 
        <button className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
        onClick={handleLikeProfile}
        >
          <FaHeart size={16}/> Like Profile
        </button>
     );
}

export default LikeProfile;