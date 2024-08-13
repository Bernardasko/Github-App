import Repo from "./Repo";
function Repos({repos}) {
    return ( 
        <div className="lg:w-2/3 w-full bg-glass px-8 py-6">
            <ol className="relative border-s border-gray-200">
               {repos.map((repo) => <Repo repo={repo} key={repo.id} />)}
               {repos.length === 0 && <p className="text-center">No repos found</p>}
            </ol>
        </div>
     );
}

export default Repos;