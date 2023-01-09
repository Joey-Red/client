import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import imgOne from "../resources/BearDALLE.png";
import imgTwo from "../resources/ElephantDALLE.png";
import imgThree from "../resources/GreyAnimalDALLE.png";
import imgFour from "../resources/Monkey2DALLE.png";
import imgFive from "../resources/MonkeyDALLE.png";
import imgSix from "../resources/PandaDALLE.png";
import imgSeven from "../resources/RaccoonDALLE.png";
import imgEight from "../resources/RobotDALLE.png";
import imgNine from "../resources/SkunkDALLE.png";
function SignUpModal(props) {
  let { setLogInModalState, setSignUpModalState, setAvatarNotif } = props;
  let [usernameField, setUsernameField] = useState("");
  let [passwordField, setPasswordField] = useState("");
  let [picNum, setPicNum] = useState();
  let signUpCall = () => {
    if (picNum !== undefined && picNum.length !== 1) {
      console.log(picNum);
      axios
        .post("http://localhost:8080/user/sign-up", {
          username: usernameField,
          password: passwordField,
          picNum: picNum,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setSignUpModalState(false);
          }
        })
        .catch();
    } else {
      setAvatarNotif(true);
    }
  };
  let handleClose = () => {
    setSignUpModalState(false);
  };
  let handleLogInClick = () => {
    setLogInModalState(true);
    setSignUpModalState(false);
  };
  let chosenAv = null;
  let allAvs = document.getElementsByClassName(
    "pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
  );
  let selectPicture = (e) => {
    // console.log(allAvs);
    for (let i = 0; i < allAvs.length; i++) {
      allAvs[i].style.backgroundColor = "white";
    }
    // allAvs.style.backgroundColor = "white";
    // oldAv.style.backgroundColor = "white";
    let makeString = e.target.value.toString();
    // setPicNum(e.target.value).toString();
    setPicNum(makeString);
    console.log(makeString);
    chosenAv = document.getElementById(e.target.value);
    chosenAv.style.backgroundColor = "rgb(239 68 68)";
    // chosenAv.style.transform = "scale(1.1)";
    // chosenAv.style.border = "2px solid red";
  };
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-white z-20 px-8">
      <div className="mx-1.5 flex justify-center flex-col h-full">
        <button onClick={handleClose} className="fixed top-5 left-5">
          <FontAwesomeIcon icon={faX} />
        </button>
        <div className="flex flex-col">
          <div className="text-xl font-bold py-4">Join APPNAME</div>
          <div className="py-4">
            <input
              type="text"
              placeholder="Enter username"
              className="rounded border w-full p-2"
              onChange={(e) => setUsernameField(e.target.value)}
            />
          </div>
          <div className="py-4">
            <input
              type="password"
              placeholder="Enter password"
              className="rounded border w-full p-2"
              onChange={(e) => setPasswordField(e.target.value)}
            />
          </div>
          <div>
            <div className="text-lg font-bold py-4">Choose your avatar</div>
            <div className="grid grid-rows-3 grid-cols-3">
              <button
                onClick={(e) => selectPicture(e)}
                value="imgOne"
                className="flex justify-center my-2"
              >
                <img
                  id="imgOne"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgOne}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgTwo"
                className="flex justify-center my-2"
              >
                <img
                  id="imgTwo"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgTwo}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgThree"
                className="flex justify-center my-2"
              >
                <img
                  id="imgThree"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgThree}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgFour"
                className="flex justify-center my-2"
              >
                <img
                  id="imgFour"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgFour}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgFive"
                className="flex justify-center my-2"
              >
                <img
                  id="imgFive"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgFive}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgSix"
                className="flex justify-center my-2"
              >
                <img
                  id="imgSix"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgSix}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgSeven"
                className="flex justify-center my-2"
              >
                <img
                  id="imgSeven"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgSeven}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgEight"
                className="flex justify-center my-2"
              >
                <img
                  id="imgEight"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgEight}
                  alt=""
                />
              </button>
              <button
                onClick={(e) => selectPicture(e)}
                value="imgNine"
                className="flex justify-center my-2"
              >
                <img
                  id="imgNine"
                  className="pointer-events-none border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full"
                  src={imgNine}
                  alt=""
                />
              </button>
            </div>
          </div>

          <div className="py-4">
            <button
              onClick={signUpCall}
              className="border-light-gray font-bold bg-black text-white border rounded-full w-full p-2"
            >
              Sign up
            </button>
          </div>
          <div className="py-4">
            <p className="text-gray-400">
              Already have an account?{" "}
              <button className="text-blue-400" onClick={handleLogInClick}>
                Log In
              </button>
            </p>
          </div>
          {/* Forgot password? */}
        </div>
      </div>
    </div>
  );
}

export default SignUpModal;
