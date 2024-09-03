import React from "react";
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
  return (
    <>
      <div className="noteCard bg-gray-100 p-4 rounded-lg shadow-sm w-[100%] mb-5 break-inside-avoid border-2 border-black bg-cover bg-center">
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
              className={`icon-btn ${isPinned ? "text-black" : "text-slate-300"}`}
              onClick={onPinNote}
            />
          </div>
        </div>

        <div className="mt-2">
          <p className="text-black break-words">{content?.slice(0, 160)}</p>
        </div>

        <hr className="h-[2px] my-2 bg-slate-400" />

        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-slate-500">
            {moment(date).format("Do MMM YYYY")}
          </span>
          <div className="flex items-center gap-2">
            <MdEdit
              className="icon-btn hover:text-green-600"
              onClick={onEdit}
            />
            <IoTrashOutline
              className="icon-btn hover:text-red-500"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleNoteCard;
