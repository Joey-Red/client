import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
function PostButton(props) {
  let {
    setNavState,
    setFooterState,
    setCreatePostState,
    setPostContainerState,
  } = props;
  let handleClick = () => {
    setNavState(false);
    setFooterState(false);
    setPostContainerState(false);
    setCreatePostState(true);
  };
  return (
    <button onClick={handleClick} className="fixed bottom-[70px] right-5">
      <div className="bg-red-500 h-14 w-14 rounded-full flex justify-center items-center shadow-md">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-white"
          size="lg"
        />
      </div>
    </button>
  );
}

export default PostButton;
