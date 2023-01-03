import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faImage } from "@fortawesome/free-solid-svg-icons";
import img from "../pic.png";
function MobileCreatePost() {
  return (
    <div className="w-full px-4">
      <div className="flex w-full justify-between h-[53px] items-center">
        {/* top bar */}
        <button>
          <FontAwesomeIcon icon={faArrowLeft} className="flex" />
        </button>
        <button className="bg-red-500 rounded-2xl text-white min-w-14 min-h-8 px-4">
          Post!
        </button>
      </div>
      <div className="flex justify-center">
        <div className="pt-1 pr-3">
          <img
            src={img}
            className="max-h-12 max-w-12 w-12 h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="border-red-300 border rounded-full w-fit flex h-min px-2 py-1 text-xs font-medium text-red-500">
            Everyone can see this
          </div>
          <div className="mt-6">
            <textarea
              type="text"
              className="text-lg font-medium"
              placeholder="What's happening?"
            />
          </div>
          <button
            className="flex justify-center items-center text-white bg-red-500 rounded-2xl
          "
          >
            <p>Add an image?</p>
            <FontAwesomeIcon icon={faImage} className="ml-3" />
          </button>
        </div>
      </div>
      <div className=" border-light-gray border-b max-w-[90%] mt-3"></div>
    </div>
  );
}

export default MobileCreatePost;
