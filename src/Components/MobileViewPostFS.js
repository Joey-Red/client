import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../pic.png";
import imgOne from "../resources/BearDALLE.png";
import imgTwo from "../resources/ElephantDALLE.png";
import imgThree from "../resources/GreyAnimalDALLE.png";
import imgFour from "../resources/Monkey2DALLE.png";
import imgFive from "../resources/MonkeyDALLE.png";
import imgSix from "../resources/PandaDALLE.png";
import imgSeven from "../resources/RaccoonDALLE.png";
import imgEight from "../resources/RobotDALLE.png";
import imgNine from "../resources/SkunkDALLE.png";
import {
  faArrowLeft,
  faCheck,
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import MobilePostReply from "./MobilePostReply";
function MobileViewPostFS(props) {
  let [postInfo, setPostInfo] = useState();
  let [postLoaded, setPostLoaded] = useState(false);
  let [editDate, setEditDate] = useState("");
  let [displayTime, setDisplayTime] = useState();
  let [displayDate, setDisplayDate] = useState();
  let {
    setPostStateFS,
    clickedPostId,
    setLogInModalState,
    loggedIn,
    userId,
    setChangeLike,
    clickedPostWithSharedId,
  } = props;
  let [userHasLiked, setUserHasLiked] = useState(false);
  let [pseudoLikes, setPseudoLikes] = useState();
  let [sharedPost, setSharedPost] = useState(false);
  let [sharedDate, setSharedDate] = useState();
  let [sharedUsername, setSharedUsername] = useState();
  let [sharedPostBody, setSharedPostBody] = useState();
  let [sharedImg, setSharedImg] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/retrieve-post", {
        headers: { clickedPostId: clickedPostId },
      })
      .then((res) => {
        setPostInfo(res.data);
        setPostLoaded(true);
        setEditDate(res.data.dateAdded);
        setPseudoLikes(res.data.numLikes);
        // console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  // console.log(postInfo);

  let hideFS = () => {
    setPostStateFS(false);
  };
  useEffect(() => {
    if (editDate !== "") {
      // getting time from date
      let splitInfo = editDate.split(" ");
      let timeSlice = splitInfo.slice(4, 5).toString();
      let removeSecSplit = timeSlice.split(":");
      let removeSec = removeSecSplit.slice(0, 2);
      setDisplayTime(removeSec[0] + ":" + removeSec[1]);
      // isolating date
      let dateSlice = splitInfo.slice(1, 3);
      setDisplayDate(dateSlice);
    }
  }, [editDate]);
  useEffect(() => {
    if (postLoaded) {
      if (postInfo.likedByUsers.includes(userId) && userId.length > 4) {
        setUserHasLiked(true);
      }
    }
  }, [postLoaded]);

  let sharePost = (e) => {
    // 1st Get post ID
    // Pop up modal with textbox
    // post button which does the following:
    // increases shares by 1
    // Saves shared post ID to post SCHEMA
    // Mobile post & MobileViewPostFS will need to check for sharedPostID's
  };

  let likePost = (e) => {
    if (!loggedIn) {
      // You must log in to like a post
      setLogInModalState(true);
      return;
    }
    if (!userHasLiked && loggedIn) {
      axios
        .post("http://localhost:8080/like-post", {
          // need post ID and user ID
          postId: clickedPostId,
          userId: userId,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setUserHasLiked(true);
          }
        })
        .catch
        // if like FAILS, notify user
        ();
    } else if (userHasLiked && loggedIn) {
      // set color back to black to pseudo unlike post
      axios
        .post("http://localhost:8080/unlike-post", {
          // need post ID and user ID
          postId: clickedPostId,
          userId: userId,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setUserHasLiked(false);
          }
        })
        .catch(console.log("err"));
    }
    if (e.target.classList.contains("text-red-500")) {
      e.target.classList.remove("text-red-500");
      e.target.classList.add("text-black");
      setPseudoLikes(pseudoLikes - 1);
      setChangeLike(clickedPostId);
    } else {
      e.target.classList.remove("text-black");
      e.target.classList.add("text-red-500");
      setPseudoLikes(pseudoLikes + 1);
      setChangeLike(clickedPostId);
    }
  };
  useEffect(() => {
    if (
      clickedPostWithSharedId !== "" &&
      clickedPostWithSharedId !== "123" &&
      clickedPostWithSharedId !== undefined &&
      clickedPostWithSharedId !== null
    ) {
      axios
        .get("http://localhost:8080/retrieve-post", {
          headers: { clickedPostId: clickedPostWithSharedId },
        })
        .then((res) => {
          // getting time from date
          let splitInfo = res.data.dateAdded.split(" ");
          // isolating date
          let dateSlice = splitInfo.slice(1, 3);
          setSharedDate(dateSlice[0] + " " + dateSlice[1]);
          setSharedUsername(res.data.postUser);
          setSharedPostBody(res.data.postBody);
          if (res.data.picNum === "imgOne") {
            setSharedImg(imgOne);
          }
          if (res.data.picNum === "imgTwo") {
            setSharedImg(imgTwo);
          }
          if (res.data.picNum === "imgThree") {
            setSharedImg(imgThree);
          }
          if (res.data.picNum === "imgFour") {
            setSharedImg(imgFour);
          }
          if (res.data.picNum === "imgFive") {
            setSharedImg(imgFive);
          }
          if (res.data.picNum === "imgSix") {
            setSharedImg(imgSix);
          }
          if (res.data.picNum === "imgSeven") {
            setSharedImg(imgSeven);
          }
          if (res.data.picNum === "imgEight") {
            setSharedImg(imgEight);
          }
          if (res.data.picNum === "imgNine") {
            setSharedImg(imgNine);
          }
          setSharedPost(true);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      {!postLoaded && <>loading...</>}
      {postLoaded && (
        <div className="w-full px-4">
          <div className="flex w-full justify-between h-[53px] items-center">
            <div className="flex">
              <button onClick={hideFS}>
                <FontAwesomeIcon icon={faArrowLeft} className="flex" />
              </button>
              <p className="ml-10">View Post</p>
            </div>
            <div className="border rounded-2xl min-w-14 min-h-8 px-4 flex items-center">
              The App
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <div className="mr-3">
                  <img
                    src={img}
                    className="min-h-12 min-w-12 max-h-12 max-w-12 rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium">{postInfo.postUser}</p>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="flex ml-1 text-red-500"
                    />
                  </div>
                  <p className="text-neutral-600">@{postInfo.postUser}</p>
                </div>

                <div className="ml-auto">
                  <button>
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="text-neutral-600"
                    />
                  </button>
                </div>
              </div>
              <div className=" border-light-gray border-b">
                {postInfo.postBody !== "SHARED_POST" && (
                  <p className="text-xl">{postInfo.postBody}</p>
                )}
                {sharedPost && (
                  <div className="border-[rgb(207, 217, 222)] border rounded-xl mt-4">
                    <div className="p-4 flex flex-col">
                      <div className="text-sm flex flex-row w-full justify-between">
                        <div className="border border-red-500 max-h-[20x] min-h-[20px] min-w-[20px] max-w-[20px] rounded-full mr-2">
                          <img src={sharedImg} alt="" />
                        </div>
                        <p className="font-bold mr-[1ch]">{sharedUsername}</p>
                        <p className="mr-[1ch] text-neutral-600">
                          @{sharedUsername}
                        </p>
                        {/* low char limit here */}
                        <p className="text-neutral-600 text-[6px] my-auto">●</p>
                        <p className="text-neutral-600">{sharedDate}</p>
                      </div>
                      <p className="text-sm">{sharedPostBody}</p>
                    </div>
                  </div>
                )}
                <div className="text-neutral-600 flex gap-2 my-4">
                  {/* post data */}
                  <p>{displayTime}</p>
                  <p className="text-2 flex my-auto">●</p>
                  <p>{displayDate}</p>
                </div>
              </div>
              <div className="py-4 border-light-gray border-b flex justify-evenly text-neutral-600">
                <div className="flex">
                  Reposts
                  <div className="ml-2">
                    {postInfo.numShares > 0 ? (
                      postInfo.numShares
                    ) : (
                      <div className="mr-[1ch]"></div>
                    )}
                  </div>
                </div>
                <div className="flex">
                  Likes
                  <div className="ml-2">
                    {pseudoLikes > 0 ? (
                      pseudoLikes
                    ) : (
                      <div className="mr-[1ch]"></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex text-neutral-500 justify-evenly px-1 h-12 border-light-gray border-b">
                <div className="flex h-min my-auto">
                  <FontAwesomeIcon icon={faComment} className="flex m-auto" />
                </div>
                <div className="flex h-min my-auto">
                  <button onClick={(e) => sharePost(e)}>
                    <FontAwesomeIcon icon={faRetweet} className="flex m-auto" />
                  </button>
                </div>
                <div className="flex h-min my-auto">
                  <button
                    onClick={(e) => likePost(e)}
                    className="hover:text-red-500 hover:scale-125 mr-1"
                  >
                    {userHasLiked && (
                      <div className="text-red-500">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="flex m-auto pointer-events-none"
                        />
                      </div>
                    )}
                    {!userHasLiked && (
                      <div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="flex m-auto pointer-events-none"
                        />
                      </div>
                    )}
                  </button>
                  {/* <FontAwesomeIcon icon={faHeart} className="flex m-auto" /> */}
                </div>
                <div className="flex h-min my-auto">
                  <FontAwesomeIcon icon={faShare} className="flex m-auto" />
                </div>
              </div>
              {/* here */}
              <div className="flex py-3 border-light-gray border-b">
                <img
                  src={img}
                  className="min-h-12 mr-3 min-w-12 max-h-12 max-w-12 rounded-full"
                  alt=""
                />
                <div className="flex justify-between items-center">
                  <textarea
                    type="text"
                    placeholder="Reply"
                    className="max-h-[23px] text-left"
                  />
                  <button className="bg-red-500 text-white rounded-full min-w-[36px] min-h-[36px] ml-3 px-4 flex items-center">
                    Reply
                  </button>
                </div>
              </div>
              {/* Here is where reply */}
              <div id="last-child">
                <MobilePostReply />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileViewPostFS;
