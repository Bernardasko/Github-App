import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Spinner from "../components/Spinner";
const Homepage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sortType, setSortType] = useState("recent");

  const getUserProfileAndRepos = useCallback(
  async (username = "bernardasko") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/profile/${username}`);
      
      // Check if response is ok (status code 200-299)
      if (!res.ok) throw new Error("Failed to fetch user profile");

      const data = await res.json();

      // Validate data structure
      if (!data || !data.userProfile || !data.repos) {
        throw new Error("Invalid data format from API");
      }

      const { userProfile, repos } = data;

      // Sort repositories by date (most recent first)
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setRepos(repos);
      setUserProfile(userProfile);
      
      return { userProfile, repos };
      
    } catch (error) {
      toast.error(error.message || "An error occurred while fetching the user data.");
      return { userProfile: null, repos: [] }; // Return empty objects to prevent destructuring errors
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    getUserProfileAndRepos();
  }, [getUserProfileAndRepos]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfileAndRepos(username);
    setUserProfile(userProfile);
    setRepos(repos);
    setLoading(false);
    setSortType("recent");
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.startgazers_count - a.startgazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
        {!loading && <Repos repos={repos} />}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Homepage;
