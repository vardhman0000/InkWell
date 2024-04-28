    import React, { useState, useEffect } from 'react';
    import './Notes.css';
    import sort from '../assets/sort.png'
    import filter from '../assets/filter.png'
    import search from '../assets/search.png'
    import menu from '../assets/menu.png'
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
    import removeBg from '../assets/removeImage.png'

    import Sidebar from './Sidebar';

    const Notes = () => {

        const [notes, setNotes] = useState([]);
        const [sortBy, setSortBy] = useState('');
        let [noteAdd, setNoteAdd] = useState(false);
        const [cardCount, setCardCount] = useState(0);

        const [searchQuery, setSearchQuery] = useState(''); 

        const [showWrapper, setShowWrapper] = useState(true);

        const [hidePinned, setHidePinned] = useState(true);

        const [hideAppear, setHideAppear] = useState(true);


        useEffect(() => {
            // Function to fetch notes from local storage and set state
            const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
            setNotes(storedNotes);
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
                title.focus();    // ABHI PTANI KYU HAI YEH YAHA .......................................
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
            
                // Remove the card from the "Others" section
                // otherContainer.removeChild(noteCard);

                const pinnedCards = document.querySelectorAll(".pinnedTrue");
                console.log(pinnedCards.length)

                setHideAppear(pinnedCards.length === 0) // yeh much better hai below written code se

                // if(pinnedCards.length > 0){
                //     appearHere.classList.add("hidden")
                // }
                // if(pinnedCards.length < 0) {
                //     appearHere.classList.remove("hidden")
                // }
            
                // Update the pinned state
                // setPinned(!pinned);

            }

            function deleteNote(noteId){
                console.log(`Index of Note ${noteId}`);
                console.log("Outside Delete Note Function");

                notes.splice(noteId, 1);

                localStorage.setItem("notes", JSON.stringify(notes));
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
                
                otherContainer.innerHTML = '';

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
                                    <img src=${addImage2} alt="" class="add-image h-5 px-2 relative"/>

                                    <ul class="imageList absolute top-[-65px] left-[-30%] p-2 flex flex-row gap-x-2 rounded-lg bg-white h-15 overflow-hidden border-black border-2" >

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

                                    </ul>
                                </div>
                                <img src=${edit} alt="" class="editBtn h-5 px-2"/>
                                <img src=${deleteIcon} alt="" class="deleteBtn h-5 px-2"/>
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
                                noteCard.style.backgroundImage = `url(${imageUrl})`;
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
            
            
            }
            showNotes();

            addBtn.addEventListener('click', () => { 
                let noteTitle = title.value;
                let noteDesc = desc.value;

                if(noteTitle && noteDesc){ // bug to be fixed
                    let dateObj = new Date();
                    let month = monthes[dateObj.getMonth()],
                    day = dateObj.getDate(),
                    year = dateObj.getFullYear();

                    let noteInfo = {
                        title : noteTitle,
                        description : noteDesc,
                        date : `${month} ${day}, ${year}`
                    }

                    if(!isUpdate){
                        notes.push(noteInfo) // Adding New Note
                    } else {
                        notes[updateId] = noteInfo; // Updating Specified Note
                    }

                    localStorage.setItem("notes", JSON.stringify(notes))

                    crossNote.click();
                    showNotes();
                    setNoteAdd(!noteAdd) // yeh sidebar me title add kr rha hai jab mai koi nya card add hone pe
                }
            })



        }, [pinned, searchQuery]);


        const updateSidebar = () => {
            setCardCount(cardCount + 1);
            console.log(`Card Count : ${cardCount}`)
        };
        
        

        return (
            <>
                <div className='filter border-4 py-3 px-5 flex flex-row items-center gap-x-4 h-[9vh]'>

                    <div className="sortDiv">
                        <button className="sort relative border-2 flex flex-row rounded-xl justify-center items-center md:px-3 px-0">
                            <img src={sort} alt="" className='w-6 absolute left-2 md:w-8' />
                            <div className="flex justify-center p-2 gap-x-4 w-16 md:p-3 rounded-full">
                                <select name="" id="" className='w-8 md:w-20 bg-transparent ml-1 border-none outline-none' value={sortBy}>
                                    <option value=""></option>
                                    <option value="increasing">Alphabetically Increasing</option>
                                    <option value="decreasing">Alphabetically Decreasing</option>
                                    <option value="new">Newest First</option>
                                    <option value="old">Oldest First</option>
                                </select>
                            </div>
                        </button>
                    </div>

                    {/* <div className='clearAll flex items-center justify-center border-2 rounded-xl px-4'>
                        <button>
                            Clear Filters
                        </button>
                    </div> */}

                    <div className="search h-12 md:16 border-[2px] border-black rounded-full flex flex-row justify-center items-center px-5">
                        <form action="" method="" className='flex flex-row'>
                            <input type="text" 
                                placeholder="Search..." 
                                name="" 
                                className='border-none outline-none'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            /> 
                            <button type="submit" className='flex flex-row justify-center items-center'>
                                <img src={search} alt="" className='w-6' />
                            </button>
                        </form>
                    </div>

                </div>

                {showWrapper && (<div className="wrapper relative">

                    <div className='plusIcon bg-black w-16 h-16 rounded-xl fixed right-8 bottom-8 sm:right-16 sm:bottom-16 flex justify-center items-center text-5xl shadow-2xl shadow-slate-500 z-50'>
                        <button className='text-white'>+</button>
                    </div>

                    <div className="subWrapper flex">

                        <div className="sideBar hidden sm:block lg:w-[15vw] md:w-[20vw] h-[81vh] overflow-scroll overflow-x-hidden">
                            <Sidebar updateCardCount={updateSidebar}/>
                        </div>

                        <div className="mainContainer w-[100vw] overflow-x-hidden sm:w-[85vw] h-[81vh] overflow-y-scroll">

                            {hidePinned && (
                            <section className='pinnedContainer m-2 sm:m-5 rounded-lg'>

                                <h3 className='my-5'>
                                    PINNED
                                </h3>
                                <div className="cardContainer mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4">
                                    {hideAppear && (<p className='appearHere text-slate-600 pl-5 w-[100vw] lg:w-[50vw]'>
                                        Pinned Cards will appear here...
                                    </p>)}

                                </div>
                                
                            </section>)}

                            <section className='others m-2 sm:m-5 rounded-lg'>

                                <h3 className='my-5'>
                                    OTHERS
                                </h3>
                                <div className="otherContainer mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4">

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

                <div className="confirmDel absolute top-0 left-0">

                    {show && (<div className="delContainer z-[0] h-screen w-screen bg-black bg-opacity-50 absolute top-0 left-0 flex items-center justify-center">

                        <div className="delPopUp h-[30vh] w-[30vw] p-10 shadow-2xl flex flex-col items-center gap-y-8 rounded-xl bg-white relative">
                            <header>
                                <img src={cross} alt="" className='delCross absolute right-5 top-5 crossNote w-5 opacity-50 cursor-pointer'/>
                            </header>
                            <p className='text-black text-2xl font-semibold'>Are you sure you want to delete this note ?</p>
                            <div className="confirmBtn flex items-center justify-around gap-x-20">
                                <button className='cnfBtnYes p-3 w-28 rounded-xl border-2 border-black text-xl bg-gray-200'>Yes</button>
                                <button className='cnfBtnNo p-3 w-28 rounded-xl border-2 border-black text-xl bg-gray-200'>No</button>
                            </div>

                        </div>

                    </div>)}

                </div>


            </>
        );
    };

    export default Notes;