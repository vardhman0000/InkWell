import React, { useEffect } from 'react';
import './Notes.css';
import sort from '../assets/sort.png'
import filter from '../assets/filter.png'
import search from '../assets/search.png'

const Notes = () => {
    useEffect(() => {
    //     const notesContainer = document.getElementById("app");
    //     const addNoteButton = notesContainer.querySelector(".add-note");

    //     const getNotes = () => {
    //         return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
    //     };

    //     const saveNotes = (notes) => {
    //         localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
    //     };

    //     const createNoteElement = (id, content) => {
    //         const element = document.createElement("textarea");
    //         element.classList.add("note");
    //         element.value = content;
    //         element.placeholder = "Empty Sticky Note";
    //         element.addEventListener("change", () => {
    //             updateNote(id, element.value);
    //         });

    //         element.addEventListener("dblclick", () => {
    //             const doDelete = confirm(
    //                 "Are you sure you wish to delete this sticky note?"
    //             );

    //             if (doDelete) {
    //                 deleteNote(id, element);
    //             }
    //         });

    //         return element;
    //     };

    //     const addNote = () => {
    //         const notes = getNotes();

    //         const noteObject = {
    //             id: Math.floor(Math.random() * 100000),
    //             content: "",
    //         };

    //         const noteElement = createNoteElement(noteObject.id, noteObject.content);
    //         notesContainer.insertBefore(noteElement, addNoteButton);

    //         notes.push(noteObject);
    //         saveNotes(notes);
    //     };

    //     const updateNote = (id, newContent) => {
    //         const notes = getNotes();
    //         const targetNote = notes.find((note) => note.id === id);

    //         if (targetNote) {
    //             targetNote.content = newContent;
    //             saveNotes(notes);
    //         }
    //     };

    //     const deleteNote = (id, element) => {
    //         const notes = getNotes().filter((note) => note.id !== id);

    //         saveNotes(notes);
    //         notesContainer.removeChild(element);
    //     };

    //     getNotes().forEach((note) => {
    //         const noteElement = createNoteElement(note.id, note.content);
    //         notesContainer.insertBefore(noteElement, addNoteButton);
    //     });

    //     addNoteButton.addEventListener("click", addNote);

    //     return () => {
    //         addNoteButton.removeEventListener("click", addNote);
    //     };

        let sortEle = document.querySelector(".sortDiv");
            console.log(`sortEle : ${sortEle.classList}`)
            sortEle.addEventListener("click", () => { 
        })
    }, []);

    

    return (
        <>
            <div className='filter border-4 py-3 px-5 flex flex-row gap-x-3'>

                <div className="sortDiv">
                    <button className="sort border-2 flex flex-row rounded-xl justify-center items-center px-3">
                        <img src={sort} alt="" className='w-8' />
                        <div className="flex justify-center p-3 rounded-full">
                            {/* <label htmlFor="">Sort By</label> */}
                            <select name="" id="" className='w-20 bg-transparent ml-1'>
                                <option value="">Sort By</option>
                                <option value="increasing">Alphabetically Increasing</option>
                                <option value="decreasing">Alphabetically Decreasing</option>
                                <option value="new">New First</option>
                                <option value="old">Old First</option>
                            </select>
                        </div>
                    </button>
                </div>

                <div className="filterDiv">
                    <button className="filter border-2 flex flex-row rounded-xl justify-center items-center px-3">
                        <img src={filter} alt="" className='w-8' />
                        <div className=" flex justify-center p-3 rounded-full">
                            {/* <label htmlFor="">Category</label> */}
                            <select name="" id="" className='bg-transparent ml-1 w-24'>
                                <option value="">Category</option>
                                <option value="">Home</option>
                                <option value="">Office</option>
                            </select>
                        </div>
                    </button>
                </div>

                <div className='clearAll flex items-center justify-center border-2 rounded-xl px-4'>
                    <button>
                        Clear Filters
                    </button>
                </div>

                <div className="search border-[2px] border-black rounded-full flex flex-row justify-center items-center px-5">
                    <form action="" method="" className='flex flex-row'>
                        <input type="text" placeholder="Search..." name="" className=''/>
                        <button type="submit" className='flex flex-row justify-center items-center'>
                            <img src={search} alt="" className='w-6' />
                        </button>
                    </form>
                </div>

            </div>

            {/* <div id="app">
                <button className="add-note" type="button">+</button>
            </div> */}

            {/* <div className='NoteCard m-10'>
                <div className='contentArea border-2 w-52 p-4'>
                    <h2 className=''>
                        <textarea name="" id="" cols="18" rows="1" placeholder='Title' className='border-b-2 '></textarea>
                    </h2>
                    <p>
                        <textarea name="" id="" cols="18" rows="10" placeholder='Note Here...'></textarea>
                    </p>
                </div>
            </div> */}

            <div className="wrapper relative">

                <div className="takeInput flex justify-center m-5">
                    <input type="text" placeholder='Take a note...' className='border-2 border-black px-2 h-10 w-[400px] rounded-lg'/>
                </div>
                <div className='plusIcon bg-black w-16 h-16 rounded-xl fixed right-16 bottom-16 flex justify-center items-center text-5xl shadow-2xl shadow-slate-500'>
                    <button className='text-white'>+</button>
                </div>

                <section className='pinned border-black border-2 m-5 rounded-lg'>
                    <h3 className='m-5'>
                        PINNED
                    </h3>
                    <div className='cardContainer'>
                        <div className='NoteCard m-10'>
                            <div className='contentArea border-2 w-52 p-4'>
                                <h2 className=''>
                                    <textarea name="" id="" cols="18" rows="1" placeholder='Title' className='border-b-2 '></textarea>
                                </h2>
                                <p>
                                    <textarea name="" id="" cols="18" rows="10" placeholder='Note Here...'></textarea>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='others border-black border-2 m-5 rounded-lg'>
                    <h3 className='m-5'>
                        OTHERS
                    </h3>
                    <div className="cardContainer">
                        <div className='NoteCard m-10'>
                            <div className='contentArea border-2 w-52 p-4'>
                                <h2 className=''>
                                    <textarea name="" id="" cols="18" rows="1" placeholder='Title' className='border-b-2 '></textarea>
                                </h2>
                                <p>
                                    <textarea name="" id="" cols="18" rows="10" placeholder='Note Here...'></textarea>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="bg-gray-100 p-4 rounded-md shadow-sm w-48 h-64 m-5 text-ellipsis">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold text-gray-900">IMP Concepts in Pipeline</h3>
                </div>
                <div class="mt-4">
                    <p class="text-gray-700">IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.</p>
                </div>
            </div>
        </>
    );
};

export default Notes;
