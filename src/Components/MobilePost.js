import React from "react";
import img from "../pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
function MobilePost() {
  return (
    <div className="flex w-full border-light-gray border-b">
      <article className="px-4 flex w-full">
        <div className="w-full flex flex-col">
          <div className="pt-3"></div>
          <div className="flex flex-row w-full">
            <div>
              <img
                src={img}
                alt=""
                className="max-h-12 min-h-12 min-w-12 max-w-12 rounded-full mr-3"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p>Joey Dalrymple</p>{" "}
                {/* Gonna need JS to limit username length */}
                <FontAwesomeIcon
                  icon={faCheck}
                  className=" ml-1 flex my-auto"
                />
                <p className="text-neutral-600 ml-1 ">@Joey_</p>{" "}
                <p className="text-neutral-600 ml-1 text-[8px] my-auto">●</p>
                <p className="text-neutral-600 ml-1 ">22h</p>
                <p className="ml-[20px] text-neutral-600">
                  <FontAwesomeIcon icon={faEllipsis} />
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <p>
                    Wow very much content mmhm wow Wow very much content mmhm
                    wow Wow very much content mmhm wow Wow very much content
                    mmhm wow wow Wow very much content mmhm wow wow Wow very
                    much content mmhm wow wo
                  </p>
                  <div className="mt-3">
                    <img
                      src={img}
                      alt=""
                      className="rounded-2xl max-w-[279px] max-w-[279px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="flex m-auto mr-1"
                    />
                    <div>12</div>
                  </div>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faRetweet}
                      className="flex m-auto mr-1"
                    />
                    <div>8</div>
                  </div>
                  <div className="flex">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="flex m-auto mr-1"
                    />
                    <div>233</div>
                  </div>
                  <div className="flex">
                    <FontAwesomeIcon icon={faShare} className="flex m-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MobilePost;
