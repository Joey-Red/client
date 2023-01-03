import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import img from "../pic.png";
function MobilePostReply() {
  return (
    <div className="border-light-gray border-b">
      <div className="pt-3"></div>
      <article className="flex">
        <img
          src={img}
          className="w-12 max-w-12 h-12 max-h-12 rounded-full mr-3"
          alt=""
        />
        <div>
          <div className="flex">
            <div className="flex justify-between w-full">
              <p>Username..</p>
              <p className="text-neutral-600">@Username..</p>
              <p className="text-neutral-600 text-[8px] my-auto">●</p>
              <p className="text-neutral-600">Dec 23</p>
              <button className="text-neutral-600">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
          <div>
            <div className="text-neutral-600 flex">
              <p>Replying to</p>
              <a href="" className="ml-1 text-blue-500 font-medium">
                @Username
              </a>
            </div>
            <p>
              Wouldn't they expect you to change your passwords? Safest thing
              you can do is stand pat.
            </p>
            <div className="flex text-neutral-500 justify-between px-1 h-12 border-light-gray border-b">
              <div className="flex">
                <FontAwesomeIcon icon={faComment} className="flex m-auto" />
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faRetweet} className="flex m-auto" />
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faHeart} className="flex m-auto" />
              </div>
              <div className="flex">
                <FontAwesomeIcon icon={faShare} className="flex m-auto" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MobilePostReply;
