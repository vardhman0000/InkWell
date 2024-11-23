// import React, { useState } from "react";
// import TagInput from "../../src/Components/Input/TagInput";
// import { MdClose } from "react-icons/md";
// import axiosInstance from "../../utils/axiosInstance";

// function AddEditNotes({noteData, type, getAllNotes, onClose, showToastMessage}) {

//     const [title, setTitle] = useState(noteData?.title || "");
//     const [content, setContent] = useState(noteData?.content || "");
//     const [tags, setTags] = useState(noteData?.tags || []);

//     const [error, setError] = useState(null);
    
//     // Add Note
//     const addNewNote = async () => {
//       try {
//         const response = await axiosInstance.post("/add-note", {
//           title,
//           content,
//           tags
//         })

//         if(response.data && response.data.note){
//           showToastMessage("Note Added Successfully");
//           getAllNotes();
//           onClose();
//         }

//       } catch (error) {
//         if(
//           error.response &&
//           error.response.data &&
//           error.response.data.message
//         ){
//           setError(error.response.data.message);
//         }
//       }
//     }

//     // Edit Note
//     const editNote = async () => {

//       const noteId = noteData._id;
//       try {
//         const response = await axiosInstance.put("/edit-note/" + noteId, {
//           title,
//           content,
//           tags
//         })

//         if(response.data && response.data.note){
//           showToastMessage("Note Updated Successfully");
//           getAllNotes();
//           onClose();
//         }

//       } catch (error) {
//         if(
//           error.response &&
//           error.response.data &&
//           error.response.data.message
//         ){
//           setError(error.response.data.message);
//         }
//       }
//     }


//     const handleAddNote = () => {
//         if(!title){
//             setError("Please enter the title");
//             return;
//         }
        
//         if(!content){
//             setError("Please enter the content");
//             return;
//         }

//         setError("");

//         if(type === 'edit'){
//             editNote();
//         } else {
//             addNewNote();
//         }
//     }


//   return (
//     <div className="w-screen h-screen flex items-center justify-center">
//       <div className="w-96 relative bg-white rounded-lg flex flex-col items-center p-10">

//         <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
//           <button className=" rounded-full flex items-center justify-centerhover:bg-slate-50" onClick={onClose}>
//               <MdClose className="text-xl text-slate-400"/>
//           </button>
//         </div>

//           <div className="flex flex-col gap-2">
//             <label className="input-label text-sm text-slate-700">TITLE</label>
//             <input
//               type="text"
//               className="text-2xl text-slate-950 outline-none"
//               placeholder="Enter Title ..."
//               value={title}
//               onChange={({target}) => setTitle(target.value)}
//             />
//           </div>

//           <div className="flex flex-col gap-2 mt-4 w-full">
//             <label className="input-label text-sm text-slate-700">CONTENT</label>
//             <textarea
//               type="text"
//               className="text-sm border text-slate-950 outline-none bg-slate-50 p-2 rounded"
//               placeholder="Content Here ..."
//               rows={10}
//               value={content}
//               onChange={({target}) => setContent(target.value)}
//             />
//           </div>

//           <div className="mt-3 mb-3 w-full">
//             <label className="text-xs text-slate-400">TAGS</label>
//             <TagInput tags={tags} setTags={setTags} />
//           </div>

//           {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

//           <button className="bg-black text-white w-[100%] rounded-lg font-medium mt-5 p-3" onClick={handleAddNote}>
//             {type === 'edit' ? 'UPDATE' : 'ADD'}
//           </button>
//       </div>
//     </div>
//   );
// }

// export default AddEditNotes;




import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TagInput from "../../src/Components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

function AddEditNotes({ noteData, type, getAllNotes, onClose, showToastMessage }) {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || ""); // Fixed this to use `content` directly
  const [tags, setTags] = useState(noteData?.tags || []);
  const [error, setError] = useState(null);

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
    ["clean"], // remove formatting button
  ];

  const modules = {
    toolbar: toolbarOptions, // Fixed `module` to `modules`
  };

  // Add Note
  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post("/add-note", {
        title,
        content, // Fixed to store Quill's formatted content
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  // Edit Note
  const editNote = async () => {
    const noteId = noteData._id;
    try {
      const response = await axiosInstance.put("/edit-note/" + noteId, {
        title,
        content, // Fixed to store Quill's formatted content
        tags,
      });

      if (response.data && response.data.note) {
        showToastMessage("Note Updated Successfully");
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }

    if (!content) {
      setError("Please enter the content");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[50vw] relative bg-white rounded-lg flex flex-col items-center p-10">
        <div className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center">
          <button className="rounded-full flex items-center justify-center hover:bg-slate-50" onClick={onClose}>
            <MdClose className="text-xl text-slate-400" />
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="input-label text-sm text-slate-700">TITLE</label>
          <input
            type="text"
            className="text-2xl text-slate-950 outline-none w-full"
            placeholder="Enter Title ..."
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="input-label text-sm text-slate-700">CONTENT</label>
          <ReactQuill
          className=""
            modules={modules}
            theme="snow"
            placeholder="Write your content here..."
            value={content} // Fixed this to use `content` directly
            onChange={setContent}
          />
        </div>

        <div className="mt-3 mb-3 w-full">
          <label className="text-xs text-slate-400">TAGS</label>
          <TagInput tags={tags} setTags={setTags} />
        </div>

        {error && <p className="text-red-500 text-xs pt-4">{error}</p>}

        <button
          className="bg-black text-white w-[100%] rounded-lg font-medium mt-5 p-3"
          onClick={handleAddNote}
        >
          {type === "edit" ? "UPDATE" : "ADD"}
        </button>
      </div>
    </div>
  );
}

export default AddEditNotes;