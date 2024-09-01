import React, { useState, useEffect, useContext, createContext } from 'react';
import './Notes.css';
import search from '../assets/search.png'
import edit from '../assets/edit.png'
import deleteIcon from '../assets/deleteIcon.png'
import cross from '../assets/cross.png'
import pin1 from '../assets/pin1.png'
import pin2 from '../assets/pin2.png'
import addImage2 from '../assets/addImage2.png'
import noteBg3 from '../assets/noteBg3.png'
import noteBg4 from '../assets/noteBg4.png'
import noteBg5 from '../assets/noteBg5.png'
import noteBg6 from '../assets/noteBg6.png'
import noteBg7 from '../assets/noteBg7.png'
import removeBg from '../assets/removeImage.png'
import sideBarMenu from '../assets/sideBarMenu.png'

import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import SingleNote from './SingleNote';
import SingleNoteCard from './NoteCard/SingleNoteCard';

const Notes = () => {

    const [userInfo, setUserInfo] = useState(null)
    const navigate = useNavigate();

    // Get User Info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if(response.data && response.data.user){
                setUserInfo(response.data.user);
            }
        } catch (error) {
            if(error.response.status === 401){
                localStorage.clear();
                navigate("/login");
            }
        }
    }

    useEffect(() => {
      getUserInfo();
    
      return () => {};
    }, [])
    

    
    const images = {
        0: removeBg,
        1: noteBg3,
        2: noteBg4,
        3: noteBg5,
        4: noteBg6,
        5: noteBg7
    };
    console.log(`CLICKING IMAGES : ${images[0]}`)

    const [notes, setNotes] = useState([]);        
    const [searchQuery, setSearchQuery] = useState('');         
    const [showWrapper, setShowWrapper] = useState(true);
    const [hidePinned, setHidePinned] = useState(true);        
    const [hideAppear, setHideAppear] = useState(true);        
    const [noteCount, setNoteCount] = useState(0);        
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");

    const [notePop, setNotePop] = useState(false);
    const [selectedNote, setSelectedNote] = useState(['num', 'title', 'description', 'date', 'backgroundImage']);


    useEffect(() => {
        setNotes(storedNotes);
        setNoteCount(storedNotes.length); 
    }, []);
    
    

    
    let [show, setShow] = useState(false);
    const [pinned, setPinned] = useState(false);

    useEffect(() => { 
        const plusIcon = document.querySelector(".plusIcon");
        const popUpBox = document.querySelector(".popUpBox")
        const popUp = document.querySelector(".popUp")
        const popUpTitle = document.querySelector("header p")
        const crossNote = document.querySelector(".crossNote");
        const addBtn = document.querySelector(".addBtn")
        const title = document.querySelector(".titleInput")
        const desc = document.querySelector("textarea")
        const otherContainer = document.querySelector(".otherContainer")
        const appearHere = document.querySelector(".appearHere")

        const monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const notes = JSON.parse(localStorage.getItem("notes") || "[]")

        let isUpdate = false;
        let updateId;

        plusIcon.addEventListener('click', () => { 
            popUpBox.classList.remove("pointer-events-none")
            popUp.classList.remove("pointer-events-none")
            popUp.classList.remove("opacity-0")
            popUpBox.classList.remove("opacity-0")
            console.log("plus icon clicked")
        })
        crossNote.addEventListener('click', () => { 
            title.value = ""
            desc.value = ""
            popUpBox.classList.add("pointer-events-none")
            popUp.classList.add("pointer-events-none")
            popUp.classList.add("opacity-0")
            popUpBox.classList.add("opacity-0")
            addBtn.innerText = "Add Note";
            popUpTitle.innerText = "Add a Note";
        })

        
        function pinCard(noteCard){

            
            const pinnedSection = document.querySelector(".pinnedContainer .cardContainer");
            const pinFilled = noteCard.querySelector(".pinFilled");
        
            if (noteCard.classList.contains("pinnedTrue")) {
                // If the card is already pinned, move it back to the others section
                otherContainer.appendChild(noteCard);
                pinFilled.classList.remove("opacity-100");
                noteCard.classList.remove("pinnedTrue");
            } else {
                // If the card is not pinned, move it to the pinned section
                pinnedSection.appendChild(noteCard);
                pinFilled.classList.add("opacity-100");
                noteCard.classList.add("pinnedTrue");
            }

            const pinnedCards = document.querySelectorAll(".pinnedTrue");
            console.log(pinnedCards.length)

            setHideAppear(pinnedCards.length === 0) // yeh much better hai below written code se
        

        }

        function deleteNote(noteId){
            console.log(`Index of Note ${noteId}`);
            console.log("Outside Delete Note Function");

            notes.splice(noteId, 1);

            localStorage.setItem("notes", JSON.stringify(notes));
            // setCardCount(cardCount+1);
            // updateSidebar();
            showNotes();
        }

        function editNote(noteId, noteTitle, noteDesc){
            isUpdate = true;
            updateId = noteId;
            console.log(noteId);
            console.log(noteTitle);
            console.log(noteDesc);
            addBtn.click() // yeh isliye taki addBtn wala event hit ho aand wo title and desc update krde
            plusIcon.click(); // popUp box show krane ke liye
            addBtn.innerText = "Update Note";
            popUpTitle.innerText = "Update a Note";
            title.value = noteTitle;
            desc.value = noteDesc;
        }

        function showNotes(){

            // otherContainer.innerHTML = '';

            const filteredNotes = notes.filter(note => 
                note.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            setHidePinned(searchQuery.trim() === '');
        
            if(filteredNotes.length == 0) {
                const noNotes = document.createElement('div');
                noNotes.className = "noNotes";
                console.log("NO NOTES")
                setShowWrapper(false)
                
            }



            filteredNotes.forEach((note, index) => {
                const noteCard = document.createElement('div');
                noteCard.className = "noteCard bg-gray-100 p-4 rounded-lg shadow-sm w-[100%] mb-5 break-inside-avoid border-2 border-black bg-cover bg-center";

                // if(note.bg) {
                //     noteCard.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${note.bg})`;
                //     noteCard.classList.remove('bg-gray-100');  // Remove the default background color if an image is set
                // } else {
                //     noteCard.style.backgroundImage = 'none';
                //     noteCard.classList.add('bg-gray-100');
                // }
        
                noteCard.innerHTML = `
                    <div class="flex items-center justify-between">
                        <h3 class="title text-2xl font-bold text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[80%]">${note.title}</h3>
                        <span class='pinHollow opacity-0 cursor-pointer relative' onclick="pinCard()">
                            <img src=${pin1} alt="" class='pinIcon w-8' />
                            <img src=${pin2} alt="" class='pinFilled w-8 absolute top-0' />
                        </span>
                    </div>
                    <div class="mt-4">
                        <p class="content text-black break-words">${note.description}</p>
                    </div>
                    <hr class="h-[2px] my-2 bg-slate-400"/>
                    <div class="bottom-content flex flex-row justify-between">
                        <div class="date text-slate-500">${note.date}</div>
                        <div class="settings flex justify-center items-center px-1 cursor-pointer relative">
                            <div class="imageIcon">
                                <img src=${addImage2} alt="" class="add-image h-5 px-[4px] relative"/>

                                <ul class="imageList absolute top-[-65px] left-[-90%] p-2 flex flex-row gap-x-2 rounded-lg bg-white h-15 overflow-hidden border-black border-2" >

                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-6 flex items-center justify-center">
                                        <img class="w-5 rounded-sm" src=${removeBg} />
                                    </li>

                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                                        <img class="h-10 rounded-sm" src=${noteBg6} />
                                    </li>

                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                                        <img class="h-10 rounded-sm" src=${noteBg4} />
                                    </li>

                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                                        <img class="h-10 rounded-sm" src=${noteBg5} />
                                    </li>
                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                                        <img class="h-10 rounded-sm" src=${noteBg3} />
                                    </li>
                                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                                        <img class="h-10 rounded-sm" src=${noteBg7} />
                                    </li>

                                </ul>
                            </div>
                            <img src=${edit} alt="" class="editBtn h-5 px-[4px]"/>
                            <img src=${deleteIcon} alt="" class="deleteBtn h-5 px-[4px]"/>
                        </div>
                    </div>
                `;
        
                otherContainer.appendChild(noteCard);


                const imageList = noteCard.querySelector('.imageList');
                // Add event listener to each image in the imageList
                imageList.querySelectorAll('img').forEach((img, imgIndex) => {
                    img.addEventListener('click', () => {
                        // Check if it's the first image being clicked
                        if (imgIndex === 0) {
                            // If it's the first image, set background color in local storage
                            localStorage.setItem('backgroundColor', 'bg-gray-100');
                            // Remove background image
                            noteCard.style.backgroundImage = 'none';
                            // Apply background color
                            noteCard.classList.add('bg-gray-100');
                        } else {
                            // If it's not the first image, get the source URL of the clicked image
                            const imageUrl = img.getAttribute('src');
                            // Store the background image URL in local storage
                            localStorage.setItem('backgroundImage', imageUrl);
                            // Set background image with 70% opacity
                            noteCard.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${localStorage.getItem("backgroundImage")})`;
                            // Apply brightness to background image
                            noteCard.style.filter = 'brightness(100%)';
                            // Remove any background color
                            noteCard.classList.remove('bg-gray-100');
                        }
                    });
                });

                


                const pinHollow = noteCard.querySelector(".pinHollow")
                pinHollow.addEventListener('click', () => { 
                    pinCard(noteCard); // pinCard actually yha se trigger ho rha hai
                });

                // yeh hai delete button
                const deleteBtn = noteCard.querySelector(".deleteBtn")
                deleteBtn.addEventListener('click', () => { 
                    console.log("Clicked Delete Btn!!")
                    deleteNote(index)
                })

                // yeh aagya edit button
                const editBtn = noteCard.querySelector('.editBtn')
                editBtn.addEventListener('click', () => { 
                    console.log("Edit Button Clicked!!")
                    editNote(index, note.title, note.description)
                })

                // yha pr bg image add karenge
                const addBg = noteCard.querySelector('.add-image')
                addBg.addEventListener('click', () => { 
                    console.log("Add Image Clicked!!")
                })

            });
        
            showSideBar();
        }
        showNotes();


        // function showSideBar() {
        //     const titleContainer = document.querySelector(".titleContainer");
        //     titleContainer.innerHTML = ""; // Clear the existing sidebar content
        
        //     notes.forEach(note => {

        //         const title = document.createElement('div');
        //         title.className = "titleCells bg-gray-100 mb-1 font-semibold overflow-hidden text-ellipsis cursor-pointer";
        //         title.innerHTML = note.title;
        //         titleContainer.appendChild(title);
        //         title.addEventListener("click", () => {

        //             const clickedTitle = title.innerText;
        //             console.log(`GOT TITLE : ${clickedTitle}`);

        //             const clickedNote = notes.find(note => note.title == clickedTitle);
        //             console.log(`CLICKED NOTE : ${clickedNote}`)

        //             setSelectedNote([clickedNote.title, clickedNote.description, clickedNote.date])
        //             setNotePop(!notePop)
                    
        //         })
        //     });
        // }

        function showSideBar() {
            const titleContainer = document.querySelector(".titleContainer");
            titleContainer.innerHTML = ""; // Clear the existing sidebar content
        
            notes.forEach(note => {
                const title = document.createElement('div');
                title.className = "titleCells bg-gray-100 mb-1 font-semibold overflow-hidden text-ellipsis cursor-pointer";
                title.innerHTML = note.title;
                titleContainer.appendChild(title);
                title.addEventListener("click", () => {
                    const clickedTitle = title.innerText;
                    console.log(`GOT TITLE : ${clickedTitle}`);
        
                    const clickedNote = notes.find(note => note.title == clickedTitle);
                    console.log(`CLICKED NOTE : ${clickedNote.num}`)
        
                    setSelectedNote([clickedNote.num, clickedNote.title, clickedNote.description, clickedNote.date, clickedNote.bg])
        
                    // Apply the background image when displaying the note
                    // const cardPopup = document.querySelector('.cardPop_inner');
                    // if (clickedNote.bg) {
                    //     cardPopup.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(${clickedNote.bg})`;
                    // } else {
                    //     cardPopup.style.backgroundImage = 'none';
                    // }
        
                    // setShowCardPopup(true);
                    setNotePop(!notePop)
                    crossNote.click();
                });
            });
        }
        showSideBar();



        // addBtn.addEventListener('click', () => { 
        //     let noteTitle = title.value;
        //     let noteDesc = desc.value;

        //     if(noteTitle && noteDesc){ // bug to be fixed
        //         let dateObj = new Date();
        //         let month = monthes[dateObj.getMonth()],
        //         day = dateObj.getDate(),
        //         year = dateObj.getFullYear();

        //         let noteInfo = {
        //             num : notes.length,
        //             title : noteTitle,
        //             description : noteDesc,
        //             date : `${month} ${day}, ${year}`,
        //             bg : localStorage.getItem("backgroundImage")
        //         }

        //         if(!isUpdate){
        //             notes.push(noteInfo) // Adding New Note
        //         } else {
        //             notes[updateId] = noteInfo; // Updating Specified Note
        //         }

        //         localStorage.setItem("notes", JSON.stringify(notes))

        //         crossNote.click();
        //         showNotes();
        //     }
        // })


        addBtn.addEventListener('click', () => { 
            let noteTitle = title.value;
            let noteDesc = desc.value;
        
            if(noteTitle && noteDesc) {
                let dateObj = new Date();
                let month = monthes[dateObj.getMonth()],
                day = dateObj.getDate(),
                year = dateObj.getFullYear();
        
                let noteInfo = {
                    num: notes.length,
                    title: noteTitle,
                    description: noteDesc,
                    date: `${month} ${day}, ${year}`,
                    bg: localStorage.getItem("backgroundImage") || images[0]  // Store the background image URL or an empty string if not set
                }
        
                if(!isUpdate){
                    notes.push(noteInfo); // Adding New Note
                } else {
                    notes[updateId] = noteInfo; // Updating Specified Note
                }
        
                localStorage.setItem("notes", JSON.stringify(notes))
        
                crossNote.click();
                showNotes();
            }
        });
        



    }, [pinned, searchQuery, notes, localStorage.getItem("backgroundImage")]);

    function addBGI(noteTitle){
        const clickedTitle = notes.find(note => note.title == noteTitle);
        const clickedImage = clickedTitle;
        console.log(`GOT CLICKED BG FROM IMAGE : ${clickedTitle}`);
    }

    const currImg = localStorage.getItem("backgroundImage");
    console.log(`CURRENT STORED IMAGE : ${currImg}`)




    
    return (
        <>
            <div className='searchBar filter border-4 border-red-600 py-3 px-5 flex flex-row items-center justify-center gap-x-4 h-[9vh]'>

                <div className="search h-12 md:16 border-[2px] border-black rounded-full flex flex-row justify-between items-center px-5">
                    <form action="" method="" className='flex flex-row'>
                        <input type="text" 
                            placeholder="Search for Notes..." 
                            name="" 
                            className='border-none outline-none w-[40vw]'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        /> 
                        <button type="submit" className='flex flex-row justify-center items-center'>
                            <img src={search} alt="" className='w-6' />
                        </button>
                    </form>
                </div>

            </div>


            {
            // showWrapper && 
            (<div className="wrapper relative">

                <div className='plusIcon bg-black w-16 h-16 rounded-xl fixed right-8 bottom-8 sm:right-16 sm:bottom-16 flex justify-center items-center text-5xl shadow-2xl shadow-slate-500 z-50'>
                    <button className='text-white'>+</button>
                </div>

                <div className="subWrapper flex">

                    <div className="sideBar hidden sm:block lg:w-[15vw] md:w-[20vw] h-[81vh] overflow-scroll overflow-x-hidden">
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

                    <div className="mainContainer w-[100vw] overflow-x-hidden sm:w-[85vw] h-[81vh] overflow-y-scroll">

                        {hidePinned && (
                        <section className='pinnedContainer m-2 sm:m-5 rounded-lg border-4 border-green-500'>

                            <h3 className='my-5'>
                                PINNED
                            </h3>
                            <div className="cardContainer mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4">
                                {hideAppear && (<p className='appearHere text-slate-600 pl-5 w-[100vw] lg:w-[50vw]'>
                                    Pinned Cards will appear here...
                                </p>)}

                            </div>
                            
                        </section>)}

                        <section className='others m-2 sm:m-5 rounded-lg border-4 border-orange-500'>

                            <h3 className='my-5'>
                                OTHERS
                            </h3>
                            <div className="otherContainer mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4">

                                <SingleNoteCard/>
                                
                            </div>


                            
                        </section>
                    </div>

                </div>
            </div>)}
                
            <div className="popUpBox pointer-events-none opacity-0 transition-all duration-250 ease fixed top-0 left-0 h-full w-full bg-black bg-opacity-40 z-20">
                <div className="popUp pointer-events-none opacity-0 transition-all duration-250 ease absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 max-w-96 w-full flex justify-center items-center">
                    <div className="content bg-white rounded-md w-[calc(100%-15px)]">
                        <header className='flex items-center py-4 px-6 border-b-2 border-slate-200 justify-between'>
                            <p className='text-xl font-medium'>Add a new Note</p>
                            <img src={cross} alt="" className='crossNote w-5 opacity-50 cursor-pointer'/>
                        </header>
                        <form action="#" className='mx-6'>
                            <div className="row title mb-5">
                                <label className='block text-lg my-2'>Title</label>
                                <input type="text" className='titleInput w-full rounded-md border-2 outline-none px-4 h-12 text-base'/>
                            </div>
                            <div className="row description mb-5">
                                <label className='block text-lg my-2'>Description</label>
                                <textarea className='w-full rounded-md border-2 outline-none px-4 py-2 text-base resize-none h-36'></textarea>
                            </div>
                            <button className='addBtn w-full h-12 rounded-md mb-6 bg-black text-base text-white cursor-pointer'>Add Note</button>
                        </form>
                    </div>
                </div>
            </div>

            {notePop && (
                <div className='cardPopUp border-2 border-black absolute top-[10vh] left-0 w-[99vw] h-[90vh] bg-black bg-opacity-40 flex items-center justify-center'>
                    <div className="cardPop_inner flex flex-col items-center justify-center bg-white w-[80vw] md:w-[30vw] p-10 px-10 relative rounded-lg">
                        <img onClick={() => setNotePop(!notePop)} src={cross} alt="closePopUp" className='h-7 absolute right-5 top-5 cursor-pointer' />
                        <div className="flex items-center justify-between w-full mb-4">
                            <h3 className="title text-2xl font-bold text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[80%]">{selectedNote[1]}</h3>
                            <span className='pinHollow opacity-0 cursor-pointer relative' onClick={() => pinCard(selectedNote)}>
                                <img src={pin1} alt="pinIcon" className='pinIcon w-8' />
                                <img src={pin2} alt="pinFilled" className='pinFilled w-8 absolute top-0' />
                            </span>
                        </div>
                        <div className="w-[100%] overflow-y-auto overflow-x-hidden mb-2">
                            <p className="content text-black break-words  p-2">{selectedNote[2]}</p>
                        </div>
                        <hr className="h-[2px] my-2 bg-slate-400 w-full" />
                        <div className="bottom-content flex flex-row justify-between w-full">
                            <div className="date text-slate-500">{selectedNote[3]}</div>
                            {/* <div className="settings flex justify-center items-center px-[1px] cursor-pointer relative">
                                <div className="imageIcon">
                                    <img src={addImage2} alt="addImage2" className="add-image h-5 px-[4px] relative" />
                                    <ul className="imageList absolute top-[40px] left-0 sm:top-[-65px] sm:left-[-90%] p-2 flex flex-col gap-y-2 columns-2 md:flex-row gap-x-2 rounded-lg bg-white h-15 overflow-hidden border-black border-2">
                                        <li className="overflow-hidden border-2 h-10 border-black rounded-md hover:scale-110 w-6 flex items-center justify-center">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg w-5 rounded-sm" src={images[0]} alt="removeBg" />
                                        </li>
                                        <li className="overflow-hidden border-2 w-6 border-black rounded-md hover:scale-110">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg h-10 rounded-sm" src={images[4]} alt="noteBg6" />
                                        </li>
                                        <li className="overflow-hidden border-2 w-6 border-black rounded-md hover:scale-110">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg h-10 rounded-sm" src={images[2]} alt="noteBg4" />
                                        </li>
                                        <li className="overflow-hidden border-2 w-6 border-black rounded-md hover:scale-110">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg h-10 rounded-sm" src={images[3]} alt="noteBg5" />
                                        </li>
                                        <li className="overflow-hidden border-2 w-6 border-black rounded-md hover:scale-110">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg h-10 rounded-sm" src={images[1]} alt="noteBg3" />
                                        </li>
                                        <li className="overflow-hidden border-2 w-6 border-black rounded-md hover:scale-110">
                                            <img onClick={() => addBGI(selectedNote[0])} className="bgImg h-10 rounded-sm" src={images[5]} alt="noteBg7" />
                                        </li>
                                    </ul>
                                </div>
                                <img src={edit} alt="edit" className="editBtn h-5 px-[4px]" />
                                <img src={deleteIcon} alt="deleteIcon" className="deleteBtn h-5 px-[4px]" />
                            </div> */}
                        </div>
                    </div>
                </div>
            )}



        </>
    );
};

export default Notes;



