import React, { useState, useEffect } from "react";
import "./index.css";
import MobileNav from "./Components/MobileNav";
import MobilePost from "./Components/MobilePost";
import MobileFooter from "./Components/MobileFooter";
import PostButton from "./Components/PostButton";
import MobileCreatePost from "./Components/MobileCreatePost";
import MobileViewPostFS from "./Components/MobileViewPostFS";
import LogInModal from "./Components/LogInModal";
import SignUpModal from "./Components/SignUpModal";
import SuccessNotification from "./Components/SuccessNotification";
import PostFetcher from "./Components/PostFetcher";
import SelectAvatarNotification from "./Components/SelectAvatarNotification";
import TempLogIn from "./Components/TempLogIn";
import SharePost from "./Components/SharePost";
import ShareOptionsModal from "./Components/ShareOptionsModal";
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
  let [avatarNotif, setAvatarNotif] = useState(false);
  let [userPic, setUserPic] = useState("");
  let [clickedPostId, setClickedPostId] = useState("");
  let [changeLike, setChangeLike] = useState("");
  let [shareModal, setShareModal] = useState(false);
  let [shareOptions, setShareOptions] = useState(false);
  let [clickedPostWithSharedId, setClickedPostWithSharedId] = useState("");
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
      {/* {!loggedIn && (
        <TempLogIn
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
          setUserToken={setUserToken}
          setLoggedIn={setLoggedIn}
          setUserId={setUserId}
          setUsername={setUsername}
          setUserPic={setUserPic}
        />
      )} */}
      {successNotif && (
        <SuccessNotification setSuccessNotif={setSuccessNotif} />
      )}
      {avatarNotif && (
        <SelectAvatarNotification setAvatarNotif={setAvatarNotif} />
      )}
      {logInModalState && (
        <LogInModal
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
          setUserToken={setUserToken}
          setLoggedIn={setLoggedIn}
          setUserId={setUserId}
          setUsername={setUsername}
          setUserPic={setUserPic}
        />
      )}
      {signUpModalState && (
        <SignUpModal
          setLogInModalState={setLogInModalState}
          setSignUpModalState={setSignUpModalState}
          setAvatarNotif={setAvatarNotif}
        />
      )}
      {shareOptions && (
        <ShareOptionsModal
          setShareOptions={setShareOptions}
          setShareModal={setShareModal}
          setSuccessNotif={setSuccessNotif}
          clickedPostId={clickedPostId}
          userId={userId}
          username={username}
          userPic={userPic}
          userToken={userToken}
        />
      )}
      {navState && !postStateFS ? (
        <div className="temp" id="nav-container">
          <MobileNav loggedIn={loggedIn} userPic={userPic} />
          <div className="mb-[53px]"></div>
        </div>
      ) : null}
      {postContainerState && !postStateFS && (
        <div id="post-container" className="temp">
          <PostFetcher
            setClickedPostWithSharedId={setClickedPostWithSharedId}
            setSuccessNotif={setSuccessNotif}
            userId={userId}
            loggedIn={loggedIn}
            setLogInModalState={setLogInModalState}
            setPostStateFS={setPostStateFS}
            setClickedPostId={setClickedPostId}
            changeLike={changeLike}
            setChangeLike={setChangeLike}
            setShareModal={setShareModal}
            username={username}
            setShareOptions={setShareOptions}
          />
        </div>
      )}
      {shareModal && (
        <SharePost
          setShareModal={setShareModal}
          setSuccessNotif={setSuccessNotif}
          clickedPostId={clickedPostId}
          userId={userId}
          username={username}
          userPic={userPic}
          userToken={userToken}
        />
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
          userPic={userPic}
        />
      )}
      {postStateFS && (
        <MobileViewPostFS
          setPostStateFS={setPostStateFS}
          clickedPostId={clickedPostId}
          setLogInModalState={setLogInModalState}
          loggedIn={loggedIn}
          userId={userId}
          setChangeLike={setChangeLike}
          clickedPostWithSharedId={clickedPostWithSharedId}
        />
      )}
      {footerState && !postStateFS && (
        <div className="temp" id="footer-container">
          <div className="mt-[51px]"></div>
          <MobileFooter
            loggedIn={loggedIn}
            setLogInModalState={setLogInModalState}
            setSignUpModalState={setSignUpModalState}
          />
        </div>
      )}
      {createPostHB && (
        <PostButton
          setCreatePostState={setCreatePostState}
          setNavState={setNavState}
          setFooterState={setFooterState}
          setPostContainerState={setPostContainerState}
        />
      )}
    </div>
  );
}

export default App;
