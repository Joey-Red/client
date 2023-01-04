import React from "react";
import img from "../pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagicWandSparkles,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
function MobileNav(props) {
  let { loggedIn } = props;
  return (
    <div className="px-4 w-full flex h-[53px] flex-row fixed top-0 right-0 left-0 bg-white/[99%]">
      <div className="flex h-full justify-center shrink min-w-[56px]">
        {/* Is logged in use img, else use logo */}
        {loggedIn && (
          <img src={img} className="rounded-full my-auto h-8" alt="yep" />
        )}
        {!loggedIn && (
          <FontAwesomeIcon
            icon={faMusic}
            className="text-red-500 my-auto"
            size="xl"
          />
        )}
      </div>
      <div className="my-auto grow max-w-[456px]">
        <h1 className="my-auto text-bold text-lg">Home</h1>
      </div>
      <div className="min-w-14 flex justify-center shrink items-end">
        {/* this is supposed to be */}
        {/* some sort of filtering, we will see. */}
        <FontAwesomeIcon
          icon={faMagicWandSparkles}
          className="h-5 w-5 flex my-auto"
        />
      </div>
    </div>
  );
}

export default MobileNav;
