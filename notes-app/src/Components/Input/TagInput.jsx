import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full">
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded" >
              # {tag}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-2 mt-3">
        <input
          type="text"
          value={inputValue}
          className="text-sm w-full bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add Tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="w-10 h-9 flex items-center justify-center rounded border border-black hover:bg-black"
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-black hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export default TagInput;
