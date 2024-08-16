import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const LikesPage = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const getLikes = async () => {
      try {
        const res = await fetch("/api/users/likes", {
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        
        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLikes();
  }, []);
  
  return (
    <div className="relative overflow-x-hidden shadow-md rounded-lg px-4">
      <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden">
        <thead className="text-xs uppercase bg-glass">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">No</div>
            </th>
            <th scope="col" className="p-6 py-3">
              Username
            </th>
            <th scope="col" className="p-6 py-3">
              Date
            </th>
            <th scope="col" className="p-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-glass border-b">
            <td className="w-4 p-4">
              <div className="flex items-center">
                <span>
                  1
                </span>
              </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap">
              <img src={"data:image/jpeg;base64,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"} className="w-10 h-10 rounded-full" alt="John" />
              <div className="ps-3">
                <div className="text-base font-semibold">JohnDoe</div>
              </div>
            </th>
            <td className="px-6 py-4">das</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <FaHeart size={22} className="mx-2 text-red-500" />
                Liked your profile
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LikesPage;
