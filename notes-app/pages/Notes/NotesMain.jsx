import React from "react";
import Navbar from "../../src/Components/Navbar";
import SearchBar from "../../src/Components/SearchBar/SearchBar";
import { useState , useEffect} from "react";
import SingleNote from "../../src/Components/SingleNote";
import SingleNoteCard from "../../src/Components/NoteCard/SingleNoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import axiosInstance from "../../utils/axiosInstance";

function NotesMain() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  const [openAddEditModal, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const handleEdit = (noteDetails) => {
    setOpenAddEditModel({isShown : true, data : noteDetails, type : "edit"})
  }

  // Get All Notes
  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/get-notes");

      if(response.data && response.data.notes){
        setAllNotes(response.data.notes);
      }

    } catch (error) {
      console.log("An unexpected error occurred...Try Again!!");
      
    }
  }

  useEffect(() => {
    getAllNotes();
  
    return () => {}
  }, [])
  

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

          {allNotes.map((item, index) => (
            <SingleNoteCard
            key={item._id}
            title={item.title}
            date={item.createdOn}
            content={item.content}
            tags={item.tags}
            isPinned={item.isPinned}
            onEdit={() => handleEdit(item)}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          ))}

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
          }} 
          getAllNotes={getAllNotes}
        />
      </Modal>
    </>
  );
}

export default NotesMain;
