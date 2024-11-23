// import React from "react";
// import {
//   MdOutlinePushPin,
//   MdCreate,
//   MdDelete,
//   MdAdd,
//   MdEdit,
// } from "react-icons/md";
// import AddEditNotes from "../../../pages/Notes/AddEditNotes";
// import moment from "moment";
// import { IoTrashOutline } from "react-icons/io5";
// import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";

// function SingleNoteCard({
//   title,
//   date,
//   content,
//   tags,
//   isPinned,
//   onEdit,
//   onDelete,
//   onPinNote,
// }) {
//   return (
//     <>
//       <div className="noteCard bg-gray-100 p-4 rounded-lg shadow-sm w-[100%] mb-5 break-inside-avoid border-2 border-black bg-cover bg-center">
//         <div className="flex items-center justify-between relative">
//           <div>
//             <h3 className="text-xl font-bold text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[100%] mb-1">
//               {title}
//             </h3>

//             <div className="text-sm text-slate-600">
//               {tags.map((item) => `#${item} `)}
//             </div>
//           </div>

//           <div className="absolute top-0 right-0 ">
//             <BsPinAngle
//               className={`icon-btn ${isPinned ? "text-black" : "text-slate-300"}`}
//               onClick={onPinNote}
//             />
//           </div>
//         </div>

//         <div className="mt-2">
//           <p className="text-black break-words">{content?.slice(0, 160)}</p>
//         </div>

//         <hr className="h-[2px] my-2 bg-slate-400" />

//         <div className="flex items-center justify-between mt-2">
//           <span className="text-xs text-slate-500">
//             {moment(date).format("Do MMM YYYY")}
//           </span>
//           <div className="flex items-center gap-2">
//             <MdEdit
//               className="icon-btn hover:text-green-600"
//               onClick={onEdit}
//             />
//             <IoTrashOutline
//               className="icon-btn hover:text-red-500"
//               onClick={onDelete}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SingleNoteCard;




import { React, useState } from "react";
import {
  MdOutlinePushPin,
  MdCreate,
  MdDelete,
  MdAdd,
  MdEdit,
} from "react-icons/md";
import AddEditNotes from "../../../pages/Notes/AddEditNotes";
import moment from "moment";
import { IoTrashOutline } from "react-icons/io5";
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";

import Modal from "react-modal";
Modal.setAppElement("#root");

function SingleNoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="noteCard bg-gray-100 p-4 rounded-lg shadow-sm w-[100%] mb-5 break-inside-avoid border-2 border-black bg-cover bg-center"
        onClick={handleCardClick}
      >
        <div className="flex items-center justify-between relative">
          <div>
            <h3 className="text-xl font-bold text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[100%] mb-1">
              {title}
            </h3>

            <div className="text-sm text-slate-600">
              {tags.map((item) => `#${item} `)}
            </div>
          </div>

          <div className="absolute top-0 right-0 ">
            <BsPinAngle
              className={`icon-btn ${
                isPinned ? "text-black" : "text-slate-300"
              }`}
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering the modal
                onPinNote();
              }}
            />
          </div>
        </div>

        {/* <div className="mt-2">
          <p
            className="text-black break-words line-clamp-5"
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ whiteSpace: "pre-wrap" }}
          >
            {content?.slice(0, 160)}
          </p>
        </div> */}

        <div className="mt-2">
          <div
            className="text-black break-words line-clamp-5"
            dangerouslySetInnerHTML={{ __html: content }} // Render content as HTML
          ></div>
        </div>

        <hr className="h-[2px] my-2 bg-slate-400" />

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
          <div className="flex items-center gap-2">
            <MdEdit
              className="icon-btn hover:text-green-600"
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
            />
            <IoTrashOutline
              className="icon-btn hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal / Dialog-Box */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <button
              className="close-btn text-black float-right"
              onClick={closeModal}
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-1">{title}</h3>

            <p className="text-sm text-gray-500 mb-3">
              {moment(date).format("Do MMM YYYY")}
            </p>

            <hr className="h-1 mt-2 border-1" />

            {/* <p
              className="text-black p-2 overflow-x-hidden break-words max-h-[45vh]"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {content}
            </p> */}

            <div className="mt-2">
              <div
                className="text-black break-words"
                dangerouslySetInnerHTML={{ __html: content }} // Render content as HTML
              ></div>
            </div>

            {tags.length > 0 && (
              <div className="text-sm text-slate-600 my-2">
                {tags.map((item) => `#${item} `)}
              </div>
            )}

            <div className="mt-5 flex flex-row justify-between">
              <div className="flex gap-4">
                <div
                  className="flex flex-row gap-1 items-center px-3 py-2 bg-gray-700 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    onEdit();
                    closeModal();
                  }}
                >
                  <button>Edit</button>
                  <MdEdit />
                </div>

                <div
                  className="flex flex-row gap-1 items-center px-3 py-2 bg-gray-700 text-white rounded hover:bg-red-700"
                  onClick={onDelete}
                >
                  <button>Delete</button>
                  <MdDelete />
                </div>
              </div>

              <div>
                <button
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-slate-700"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleNoteCard;
