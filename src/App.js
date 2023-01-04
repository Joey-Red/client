import React, { useState, useEffect } from "react";
import "./index.css";
import MobileNav from "./Components/MobileNav";
import MobilePost from "./Components/MobilePost";
import MobileFooter from "./Components/MobileFooter";
import PostButton from "./Components/PostButton";
import MobileCreatePost from "./Components/MobileCreatePost";
import MobileViewPostFS from "./Components/MobileViewPostFS";
import TempLoginButton from "./Components/TempLoginButton";
import LogInModal from "./Components/LogInModal";
import SignUpModal from "./Components/SignUpModal";
import SuccessNotification from "./Components/SuccessNotification";
function App() {
  let [loggedIn, setLoggedIn] = useState(false);
  let [navState, setNavState] = useState(true);
  let [postContainerState, setPostContainerState] = useState(true);
  let [createPostState, setCreatePostState] = useState(false);
  let [createPostHB, setCreatePostHB] = useState(true);
  let [postStateFS, setPostStateFS] = useState(false);
  let [footerState, setFooterState] = useState(true);
  let [userToken, setUserToken] = useState("");
  let [logInModalState, setLogInModalState] = useState(false);
  let [signUpModalState, setSignUpModalState] = useState(false);
  let [userId, setUserId] = useState("");
  let [username, setUsername] = useState("");
  let [successNotif, setSuccessNotif] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      setCreatePostHB(true);
      setLogInModalState(false);
      setSignUpModalState(false);
    } else {
      setCreatePostHB(false);
    }
  }, [loggedIn]);

  return (
    <div className="w-full">
      {successNotif && (
        <SuccessNotification setSuccessNotif={setSuccessNotif} />
      )}
      {logInModalState && (
        <LogInModal
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
          setUserToken={setUserToken}
          setLoggedIn={setLoggedIn}
          setUserId={setUserId}
          setUsername={setUsername}
        />
      )}
      {signUpModalState && (
        <SignUpModal
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
        />
      )}
      {navState ? (
        <>
          <MobileNav loggedIn={loggedIn} />
          <div className="mb-[53px]"></div>
        </>
      ) : null}
      {postContainerState && (
        <div>
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
          <MobilePost />
        </div>
      )}
      {createPostState && (
        <MobileCreatePost
          setCreatePostState={setCreatePostState}
          setNavState={setNavState}
          setFooterState={setFooterState}
          setPostContainerState={setPostContainerState}
          userToken={userToken}
          userId={userId}
          username={username}
          setSuccessNotif={setSuccessNotif}
        />
      )}
      {postStateFS && <MobileViewPostFS />}
      {footerState && (
        <MobileFooter
          loggedIn={loggedIn}
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
        />
      )}
      {createPostHB && (
        <PostButton
          setCreatePostState={setCreatePostState}
          setNavState={setNavState}
          setFooterState={setFooterState}
          setPostContainerState={setPostContainerState}
        />
      )}
      {!loggedIn && (
        <TempLoginButton
          setUserToken={setUserToken}
          setLoggedIn={setLoggedIn}
        />
      )}
    </div>
  );
}

export default App;
