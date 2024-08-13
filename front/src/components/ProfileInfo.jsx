import { FaEye } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiUserFollowFill } from "react-icons/ri";
import { RiGitRepositoryFill } from "react-icons/ri";
import moment from 'moment';


const ProfileInfo = ({ userProfile }) => {
  const memberSince = moment(userProfile?.created_at).format("ll");

  return (
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-3 items-center">
          {/* User Avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              alt="me"
              className="rounded-md w-24 h-24 mb-2"
            />
          </a>
          {/* View on Github */}
          <div className="flex gap-2 items-center flex-col">
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
        </div>
        {/* User Bio */}
        {userProfile?.bio ? (
          <div className="flex gap-2 items-center">
            <TfiThought />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* Location */}
        {userProfile?.location ? (
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p className="text-sm">{userProfile?.location}</p>
          </div>
        ) : null}

        {/* Twitter Username */}
        {userProfile?.twitter_username ? (
          <a
          href={`https://twitter.com/${userProfile?.twitter_username}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-sky-500" 
          >
          <FaXTwitter />
           {userProfile?.twitter_username}
          </a>
        ) : null}
        {/* Member Since Date */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Member since</p>
          <p>{memberSince}</p>
        </div>
        {/* Email address */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Email address</p>
          <p>{userProfile?.email}</p>
        </div>
        {/* Full Name */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Full name</p>
          <p>{userProfile?.name}</p>
        </div>
        {/* Username */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Username</p>
          <p>{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers count */}
        <div className="flex gap-2 items-center bg-glass p-2 rounded-lg flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following count */}
        <div className="flex gap-2 items-center bg-glass p-2 rounded-lg flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/* Public repos count */}
        <div className="flex gap-2 items-center bg-glass p-2 rounded-lg flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
        </div>

        {/* Public gists count */}
        <div className="flex gap-2 items-center bg-glass p-2 rounded-lg flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
