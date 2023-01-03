import React from "react";
import img from "../pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
function MobileNav() {
  return (
    <div className="px-4 w-full flex h-[53px] flex-row fixed top-0 right-0 left-0 bg-white/[99%]">
      <div className="flex h-full justify-center shrink min-w-14">
        <img src={img} className="rounded-full my-auto h-8" alt="yep" />
      </div>
      <div className="my-auto grow max-w-[456px]">
        <h1 className="my-auto text-bold text-lg">Home</h1>
      </div>
      <div className="min-w-14 flex justify-center shrink items-end">
        <FontAwesomeIcon
          icon={faMagicWandSparkles}
          className="h-5 w-5 flex my-auto"
        />
      </div>
    </div>
  );
}

export default MobileNav;
