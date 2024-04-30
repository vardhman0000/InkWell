import React from 'react'
import { useState, useEffect } from 'react';
import sideBarMenu from '../assets/sideBarMenu.png'

import './Sidebar.css'


const Sidebar = ({updateCardCount}) => {

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        document.querySelector('.titleContainer').innerHTML = "";
        notes.forEach(note => {
            const title = document.createElement('div');
            title.className = "titleCells bg-gray-100 mb-1 font-semibold overflow-hidden text-ellipsis";
            title.innerHTML = note.title;
            document.querySelector('.titleContainer').appendChild(title);
            console.log(note.title);
        });
    }, [updateCardCount]);


    return (
        <div>

            <div className="sidebarContainer p-3 pt-0">
                <div className="upperPart sticky top-0 pt-3 bg-white">    
                    <div className="headSection flex justify-between items-center bg-white">
                        <p className='text-2xl font-semibold'>Notes</p>
                        <img src={sideBarMenu} alt="" className='w-7' />
                    </div>

                    <hr className='h-[2px] my-3 border-none outline-none bg-slate-300' />
                </div>


                <div className="titleContainer">
                    
                </div>

            </div>

        </div>
    )
}

export default Sidebar

// const Sidebar = ({ updateCardCount }) => {
//     const [titles, setTitles] = useState([]);
//     const [length, setLength] = useState(0)

//     useEffect(() => {
//         const notes = JSON.parse(localStorage.getItem("notes") || "[]");
//         console.log(`CARD COUNT IN SIDEBAR : ${notes.length}`);
//         setLength(notes.length);
//         const titles = notes.map((note) => note.title);
//         setTitles(titles);
//     }, [updateCardCount, localStorage.getItem("notes"), length]);

//     return (
//         <div>
//             <div className="sidebarContainer p-3 pt-0">
//                 <div className="upperPart sticky top-0 pt-3 bg-white">
//                     <div className="headSection flex justify-between items-center bg-white">
//                         <p className='text-2xl font-semibold'>Notes</p>
//                         <img src={sideBarMenu} alt="" className='w-7' />
//                     </div>
//                     <hr className='h-[2px] my-3 border-none outline-none bg-slate-300' />
//                 </div>
//                 <div className="titleContainer">
//                     {titles.map((title, index) => (
//                         <div key={index} className="titleCells bg-gray-100 mb-1 font-semibold overflow-hidden text-ellipsis">
//                             {title}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
