import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function MobileFooter(props) {
  let { loggedIn, setSignUpModalState, setLogInModalState } = props;
  let handleSignUpState = () => {
    setSignUpModalState(true);
    setLogInModalState(false);
  };
  let handleLoginState = () => {
    setLogInModalState(true);
    setSignUpModalState(false);
  };
  return (
    <div className="bg-white fixed bottom-0 right-0 left-0 border-light-gray border-t h-[52px]">
      {loggedIn ? (
        <div className="flex flex-row p-2 h-full">
          <button className="flex m-auto">
            <FontAwesomeIcon
              icon={faHouse}
              size="xl"
              className="flex m-auto text-red-500"
            />
          </button>
          <button className="flex m-auto">
            <FontAwesomeIcon
              icon={faSearch}
              size="xl"
              className="flex m-auto"
            />
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
      ) : (
        <div className="flex gap-4 h-full px-3.5">
          <button
            onClick={handleLoginState}
            className="min-w-9 grow px-4 my-auto h-8 border text-red-500 border-red-500 rounded-full"
          >
            Log in
          </button>
          <button
            onClick={handleSignUpState}
            className="min-w-9 grow px-4 my-auto h-8 text-white bg-red-500 rounded-full"
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}

export default MobileFooter;
