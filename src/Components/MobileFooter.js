import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function MobileFooter() {
  return (
    <div className="bg-white fixed bottom-0 right-0 left-0 border-light-gray border-t h-[52px]">
      <div className="flex flex-row p-2">
        <button className="flex m-auto">
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            className="flex m-auto text-red-500"
          />
        </button>
        <button className="flex m-auto">
          <FontAwesomeIcon icon={faSearch} size="xl" className="flex m-auto" />
        </button>
        <button className="flex m-auto">
          <FontAwesomeIcon icon={faBell} size="xl" className="flex m-auto" />
        </button>
        <button className="flex m-auto">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            className="flex m-auto"
          />
        </button>
      </div>
    </div>
  );
}

export default MobileFooter;
