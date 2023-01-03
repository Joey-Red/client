import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheck,
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import img from "../pic.png";
import MobilePostReply from "./MobilePostReply";
function MobileViewPost() {
  return (
    <div className="w-full px-4">
      <div className="flex w-full justify-between h-[53px] items-center">
        <div className="flex">
          <button>
            <FontAwesomeIcon icon={faArrowLeft} className="flex" />
          </button>
          <p className="ml-10">View Post</p>
        </div>
        <div className="border rounded-2xl min-w-14 min-h-8 px-4 flex items-center">
          The App
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="mr-3">
              <img
                src={img}
                className="min-h-12 min-w-12 max-h-12 max-w-12 rounded-full"
                alt=""
              />
            </div>
            <div>
              <div className="flex items-center">
                <p className="font-medium">Joey Dalrymple</p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="flex ml-1 text-red-500"
                />
              </div>
              <p className="text-neutral-600">@JoeyDalrymple_</p>
            </div>

            <div className="ml-auto">
              <button>
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="text-neutral-600"
                />
              </button>
            </div>
          </div>
          <div className=" border-light-gray border-b">
            <p className="text-xl">
              I can't believe LastPass was hacked. Now, I have to spend the
              night changing all my passwords.
            </p>
            <div className="text-neutral-600 flex gap-2 my-4">
              {/* post data */}
              <p>8:35pm</p>
              <p className="text-2 flex my-auto">●</p>
              <p>Dec 23, 2022</p>
            </div>
          </div>
          <div className="py-4 border-light-gray border-b flex justify-evenly text-neutral-600">
            <div className="flex">
              Reposts
              <p className="ml-2">52</p>
            </div>
            <div className="flex">
              Likes
              <p className="ml-2">52</p>
            </div>
          </div>
          <div className="flex text-neutral-500 justify-evenly px-1 h-12 border-light-gray border-b">
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
          {/* here */}
          <div className="flex py-3 border-light-gray border-b">
            <img
              src={img}
              className="min-h-12 mr-3 min-w-12 max-h-12 max-w-12 rounded-full"
              alt=""
            />
            <div className="flex justify-between items-center">
              <textarea
                type="text"
                placeholder="Reply"
                className="max-h-[23px] text-left"
              />
              <button className="bg-red-500 text-white rounded-full min-w-[36px] min-h-[36px] ml-3 px-4 flex items-center">
                Reply
              </button>
            </div>
          </div>
          {/* Here is where reply */}
          <div id="last-child">
            <MobilePostReply />
            <MobilePostReply />
            <MobilePostReply />
            <MobilePostReply />
            <MobilePostReply />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileViewPost;
