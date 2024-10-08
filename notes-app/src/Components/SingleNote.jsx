import React from "react";
import search from "../assets/search.png";
import edit from "../assets/edit.png";
import deleteIcon from "../assets/deleteIcon.png";
import cross from "../assets/cross.png";
import pin1 from "../assets/pin1.png";
import pin2 from "../assets/pin2.png";
import addImage2 from "../assets/addImage2.png";
import noteBg3 from "../assets/noteBg3.png";
import noteBg4 from "../assets/noteBg4.png";
import noteBg5 from "../assets/noteBg5.png";
import noteBg6 from "../assets/noteBg6.png";
import noteBg7 from "../assets/noteBg7.png";
import removeBg from "../assets/removeImage.png";
import sideBarMenu from "../assets/sideBarMenu.png";

function SingleNote({
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

    <div className="noteCard bg-gray-100 p-4 rounded-lg shadow-sm w-[100%] mb-5 break-inside-avoid border-2 border-black bg-cover bg-center">
        <div class="flex items-center justify-between">
            <h3 class="title text-2xl font-bold text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap w-[80%]">
                {title}
                {/* First Note */}
            </h3>
            <span
            class="pinHollow opacity-0 cursor-pointer relative"
            onclick="pinCard()"
            >
            <img src={pin1} alt="" class="pinIcon w-8" />
            <img src={pin2} alt="" class="pinFilled w-8 absolute top-0" />
            </span>
        </div>

        <div class="mt-4">
            <p class="content text-black break-words">
            {content}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, porro. */}
            </p>
        </div>

        <hr class="h-[2px] my-2 bg-slate-400" />

        <div class="bottom-content flex flex-row justify-between">
            <div class="date text-slate-500">
                {/* 01 Sep 2024 */}
                {date}
            </div>

            <div class="settings flex justify-center items-center px-1 cursor-pointer relative">
            <div class="imageIcon">
                <img
                src={addImage2}
                alt=""
                class="add-image h-5 px-[4px] relative"
                />

                <ul class="imageList absolute top-[-65px] left-[-90%] p-2 flex flex-row gap-x-2 rounded-lg bg-white h-15 overflow-hidden border-black border-2">
                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-6 flex items-center justify-center">
                        <img class="w-5 rounded-sm" src={removeBg} />
                    </li>

                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                        <img class="h-10 rounded-sm" src={noteBg6} />
                    </li>

                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                        <img class="h-10 rounded-sm" src={noteBg4} />
                    </li>

                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                        <img class="h-10 rounded-sm" src={noteBg5} />
                    </li>
                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                        <img class="h-10 rounded-sm" src={noteBg3} />
                    </li>
                    <li class="overflow-hidden border-2 border-black rounded-md hover:scale-110 w-auto">
                        <img class="h-10 rounded-sm" src={noteBg7} />
                    </li>
                </ul>
            </div>
            <img src={edit} alt="" class="editBtn h-5 px-[4px]" />
            <img src={deleteIcon} alt="" class="deleteBtn h-5 px-[4px]" />
            </div>
        </div>
    </div>
  );
}

export default SingleNote;
