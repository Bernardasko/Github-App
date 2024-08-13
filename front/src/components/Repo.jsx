import { FaCodeBranch } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa6";
import moment from "moment";
import { toast } from "react-hot-toast";
import { PROGRAMING_LANGUAGES } from "../utils/constants";

function Repo({ repo }) {
  const date = moment(repo.created_at).format("ll");

  const handleCloneClick = async (repo) => {
    try {
      await navigator.clipboard.writeText(repo.clone_url);
      toast.success("URL copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy URL");
    }
  };
  return (
    <li className="mb-10 ms-7">
      <span className="absolute flex items-center justify-centerw-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
        <FaCodeBranch className="w-5 h-5 text-blue-800" />
      </span>
      <div className="flex gap-2 items-center flex-wrap">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          {repo.name}
        </a>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaRegStar /> {repo.stargazers_count}
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <FaCodeFork /> {repo.forks_count}
        </span>
        <span
          onClick={() => handleCloneClick(repo)}
          className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1 cursor-pointer"
        >
          <FaCopy /> Clone
        </span>
      </div>

      <time className="my-1 text-xs font-normal leading-none text-gray-400">
        Released on {date}
      </time>
      <p>{repo.description ? repo.description : "No description"}</p>
      {PROGRAMING_LANGUAGES[repo.language] ? (
        <img
          src={PROGRAMING_LANGUAGES[repo.language]}
          className="h-8"
          alt="language"
        />
      ) : null}
    </li>
  );
}

export default Repo;
