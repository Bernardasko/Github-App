import { FaCodeBranch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";

function Repo() {
    return ( 
        <li className="mb-10 ms-7">
          <span className="absolute flex items-center justify-centerw-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <FaCodeBranch className="w-5 h-5 text-blue-800"/>
          </span>
          <div className="flex gap-2 items-center flex-wrap">
            <a 
            href={"https://github.com/Bernardasko/Tour-Vilnius"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-lg font-semibold">
                Tour-Vilnius
            </a>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaRegStar /> 167
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCodeFork /> 25
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <FaCopy/> Clone
            </span>
          </div>

          <time className="my-1 text-xs font-normal leading-none text-gray-400">
            Released on January 1, 2021
            <p>
                Real time Chat App | MERN && Socket.io && JWT
            </p>
            <img src={"/javascript.svg"} alt="javascript" className="h-8" />
          </time>
        </li>
     );
}

export default Repo;