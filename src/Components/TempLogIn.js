import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";

function TempLogIn(props) {
  let {
    setLogInModalState,
    setLoggedIn,
    setUserToken,
    setUserId,
    setUsername,
    setUserPic,
  } = props;
  let logInCall = () => {
    axios
      .post("http://localhost:8080/user/log-in", {
        username: "Admin",
        password: "12",
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUserToken(res.data.token);
          setLoggedIn(true);
          setLogInModalState(false);
          setUserId(res.data.user._id);
          setUsername(res.data.user.username);
          setUserPic(res.data.user.picNum);
        }
      })
      .catch();
  };
  return (
    <div>
      <button
        className="flex z-50 absolute top-3 right-[50px] bg-red-600 rounded-full p-1 font-bold text-white"
        onClick={() => logInCall()}
      >
        <FontAwesomeIcon icon={faHippo} className="p-2" />
      </button>
    </div>
  );
}

export default TempLogIn;
