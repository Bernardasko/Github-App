const SortRepos = () => {
  return (
    <div className="mb-2 flex justify-center lg:justify-end">
        <button className="py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass">
            Most Recent
        </button>
        <button className="py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass">
            Most Start
        </button>
        <button className="py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass">
            Most Fork
        </button>
    </div>
  )
}

export default SortRepos