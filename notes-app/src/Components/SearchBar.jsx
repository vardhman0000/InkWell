import React from 'react'

function SearchBar() {
    return (
        <div className="search h-12 md:16 border-[2px] border-black rounded-full flex flex-row justify-between items-center px-5">
                <form action="" method="" className='flex flex-row'>
                    <input
                        type="text"
                        placeholder="Search for Notes..."
                        name=""
                        className='border-none outline-none w-[50vw]'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className='flex flex-row justify-center items-center'>
                        <img src={search} alt="" className='w-6' />
                    </button>
                </form>
            </div>
    )
}

export default SearchBar
