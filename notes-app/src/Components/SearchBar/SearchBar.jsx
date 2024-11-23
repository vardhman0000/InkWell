// import React from 'react'
// import { FaMagnifyingGlass } from 'react-icons/fa6'
// import { IoMdClose } from 'react-icons/io'


// function SearchBar({value, onChange, handleSearch, onClearSearch}) {

//   return (
//     <div className='w-full flex items-center justify-center px-4 bg-slate-100 rounded-md'>
//         <input
//           type="text"
//           placeholder='Search Notes'
//           className='w-96 h-10 bg-transparent text-xs py-[11px] outline-none'
//           value={value}
//           onChange={onChange} 
//           onKeyDown={(e) => e.key === 'Enter' && handleSearch()}  
//         />

//         {value && (
//             <IoMdClose
//             className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3'
//             onClick={onClearSearch}/>
//         )}

//         <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={handleSearch} />
//     </div>
//   )
// }

// export default SearchBar;




import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'


function SearchBar({value, onChange, handleSearch, onClearSearch}) {

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex items-center justify-center px-4 bg-slate-100 rounded-xl border-gray-400 border-2'>
        <input
          type="text"
          placeholder='Search Notes'
          className='w-[35vw] h-12 bg-transparent text-md py-[11px] outline-none'
          value={value}
          onChange={onChange} 
          onKeyPress={handleKeyPress}
        />

        {value && (
            <IoMdClose
            className='text-slate-500 text-xl cursor-pointer hover:text-black mr-3'
            onClick={onClearSearch}/>
        )}

        <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={handleSearch} />
    </div>
  )
}

export default SearchBar;