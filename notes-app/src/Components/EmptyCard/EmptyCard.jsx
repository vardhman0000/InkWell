import React from 'react'
import { RiStickyNoteAddLine } from "react-icons/ri";


function EmptyCard() {
  return (
    // <RiStickyNoteAddLine />
    <div className='mt-24 flex flex-col items-center justify-center' style={{ minHeight: "calc(100vh - 35vh)" }}>
        <img src="https://static.thenounproject.com/png/3720828-200.png" alt=""/>
        <p className='w-96 leading-7 font-extrabold text-center'>It looks like you haven't created any notes yet. Start capturing your thoughts and ideas—your first note is just a click away!</p>
    </div>
  )
}

export default EmptyCard