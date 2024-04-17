import React, { useState, useEffect } from 'react';
import './Notes.css';
import sort from '../assets/sort.png'
import filter from '../assets/filter.png'
import search from '../assets/search.png'

const Notes = () => {
    let [hidden, setHidden] = useState(false)
    const toggleAddNote = () => { 
        setHidden(!hidden)
    }
    
    useEffect(() => {
        const plusIcon = document.querySelector(".plusIcon");
        const crossIcon = document.querySelector(".crossIcon");

        const handleClick = () => {
            toggleAddNote();
        };

        if (plusIcon) {
            plusIcon.addEventListener('click', handleClick);
        }

        if (crossIcon) {
            crossIcon.addEventListener('click', handleClick);
        }

        return () => {
            if (plusIcon) {
                plusIcon.removeEventListener('click', handleClick);
            }
            if (crossIcon) {
                crossIcon.removeEventListener('click', handleClick);
            }
        };
    }, [hidden]);

    

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

            <div className="wrapper relative">

                <div className="takeInput flex justify-center m-5">
                    <input type="text" placeholder='Take a note...' className='border-2 border-black px-2 h-10 w-[400px] rounded-lg'/>
                </div>
                <div className='plusIcon bg-black w-16 h-16 rounded-xl fixed right-16 bottom-16 flex justify-center items-center text-5xl shadow-2xl shadow-slate-500'>
                    <button className='text-white'>+</button>
                </div>

                <section className='pinned m-5 rounded-lg'>

                    <h3 className='m-5'>
                        PINNED
                    </h3>
                    <div className="cardContainer w-[90vw] mx-auto columns-4 gap-x-10">

                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quibusdam!
                                </p>
                            </div>
                        </div>

                    </div>
                    
                </section>

                <section className='others m-5 rounded-lg'>

                    <h3 className='m-5'>
                        OTHERS
                    </h3>
                    <div className="cardContainer w-[90vw] mx-auto md:columns-4 columns-1 gap-x-10">

                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quibusdam!
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit explicabo, nihil deserunt sit consequatur deleniti quos. Dolores labore nisi fugit?
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis itaque accusamus excepturi temporibus, quas omnis sunt architecto quos culpa accusantium harum, at deserunt? Repellat?
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit architecto magni, nulla vero repellendus beatae incidunt laudantium laborum eligendi. Provident itaque sequi, minima odio, eveniet ad perspiciatis facere vel fugit exercitationem tenetur officia maiores!
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum ullam cupiditate dicta in quod debitis fugit est deserunt ipsa dolorum, delectus corrupti! Error voluptatibus reprehenderit voluptatem? Suscipit, iste ipsa. Obcaecati, quidem doloremque ipsa dolorum voluptatum quasi illum numquam necessitatibus.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, doloremque? Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, beatae.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication.
                                </p>
                            </div>
                        </div>
                        <div className="noteCard bg-gray-100 p-4 rounded-2xl shadow-sm w-[22vw] mb-5 break-inside-avoid border-2 border-black">
                            <div class="flex items-center justify-between">
                                <h3 class="title text-xl font-bold text-gray-900">
                                    IMP Concepts in Pipeline
                                </h3>
                            </div>
                            <div class="mt-4">
                                <p class="content text-gray-700 ">
                                    IMP Concepts in Pipeline is a series of technologies that are used in the construction and operation of pipelines. These technologies include port forwarding, DNS snooping, ARP snooping, port forwarding with nglog, daisy chaining, DMARC compliance in email authentication. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consectetur. Perspiciatis consectetur consequatur magnam non quidem culpa incidunt fugit, repellendus recusandae, temporibus voluptates adipisci voluptas aut id reiciendis veritatis odit omnis officiis laudantium error, ipsum ullam rerum exercitationem? Atque voluptatem exercitationem consectetur, quae ullam provident sapiente excepturi ipsum doloribus repellat autem consequuntur? Maiores excepturi repudiandae placeat quis tempora, blanditiis aliquid.
                                </p>
                            </div>
                        </div>

                    </div>
                    
                </section>
            </div>

            {hidden && (<div className="addNote z-10 h-[100vh] w-[100vw] bg-black absolute top-0 left-0 flex justify-center items-center">
                <div className="addContainer relative flex flex-col items-center p-10 opacity-100 z-40 bg-red-500 h-[40vh] w-[40vw] border-black border-4 shadow-2xl shadow-black">
                    <div className="crossIcon flex justify-center items-center text-white absolute top-2 right-2 w-10 h-10 border-black border-2">
                        <button className='text-3xl p-2'>X</button>
                    </div>
                    <div>
                        Title Here
                    </div>
                    <div>
                        Add a Note ...
                    </div>
                </div>
            </div>)}
            



        </>
    );
};

export default Notes;
