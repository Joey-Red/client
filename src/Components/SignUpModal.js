import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function SignUpModal(props) {
  let { setLogInModalState, setSignUpModalState } = props;
  let [usernameField, setUsernameField] = useState("");
  let [passwordField, setPasswordField] = useState("");
  let signUpCall = () => {
    axios
      .post("http://localhost:8080/user/sign-up", {
        username: usernameField,
        password: passwordField,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSignUpModalState(false);
        }
      })
      .catch();
  };

  let handleClose = () => {
    setSignUpModalState(false);
  };
  let handleLogInClick = () => {
    setLogInModalState(true);
    setSignUpModalState(false);
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
