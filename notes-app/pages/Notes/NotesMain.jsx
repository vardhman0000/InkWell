import React from "react";
import Navbar from "../../src/Components/Navbar";
import SearchBar from "../../src/Components/SearchBar/SearchBar";
import { useState } from "react";
import SingleNote from "../../src/Components/SingleNote";
import SingleNoteCard from "../../src/Components/NoteCard/SingleNoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

function NotesMain() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  const [openAddEditModal, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />

      <div className="h-72 p-20 flex items-center justify-center border-4 border-green-400">
        <div className="h-16 flex items-center justify-center">
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            handleSearch={handleSearch}
            onClearSearch={onClearSearch}
          />
        </div>
      </div>

      <div className="p-20 border-blue-400 border-4">
        <div
          className="container mx-auto columns-2 lg:columns-4 md:columns-3 sm:columns-2 gap-x-3 lg:gap-x-6 md:gap-x-5 sm:gap-x-4 border-red-500 border-4"
          style={{ minHeight: "calc(100vh - 19vh)" }}
        >
          <SingleNoteCard
            title="First Note"
            date="3rd November 2024"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <SingleNoteCard
            title="First Note"
            date="3rd November 2024"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <SingleNoteCard
            title="First Note"
            date="3rd November 2024"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <SingleNoteCard
            title="First Note"
            date="3rd November 2024"
            content="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black hover:bg-gray-700 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModel({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll "
      >
        <AddEditNotes
        type={openAddEditModal.type}
        noteData={openAddEditModal.data}
        onClose={() => {
            setOpenAddEditModel({isShown:false, type:"add", data:null});
        }} />
      </Modal>
    </>
  );
}

export default NotesMain;
