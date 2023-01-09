import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEllipsis,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import DeletedNotif from "./DeletedNotif";
function MobilePost(props) {
  let {
    postBody,
    postUser,
    dateAdded,
    postImg,
    picNum,
    numShares,
    numLikes,
    numComments,
    postId,
    userId,
    likedByUsers,
    loggedIn,
    setLogInModalState,
    setPostStateFS,
    setClickedPostId,
    changeLike,
    setChangeLike,
    setShareModal,
    sharedPostId,
    username,
    setSuccessNotif,
    postUserId,
    setShareOptions,
    setClickedPostWithSharedId,
    // setRemovedPostId,
  } = props;
  let [userHasLiked, setUserHasLiked] = useState(false);
  let [pseudoLikes, setPseudoLikes] = useState(numLikes);
  let [sharedPost, setSharedPost] = useState(false);
  let [sharedDate, setSharedDate] = useState();
  let [sharedUsername, setSharedUsername] = useState();
  let [sharedPostBody, setSharedPostBody] = useState();
  let [sharedImg, setSharedImg] = useState();
  let [hidePost, setHidePost] = useState(false);

  useEffect(() => {
    if (likedByUsers.includes(userId) && userId.length > 4) {
      setUserHasLiked(true);
    }
  }, []);
  useEffect(() => {
    if (
      sharedPostId !== "" &&
      sharedPostId !== "123" &&
      sharedPostId !== undefined &&
      sharedPostId !== null
    ) {
      axios
        .get("http://localhost:8080/retrieve-post", {
          headers: { clickedPostId: sharedPostId },
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

  let sharebutton = document.getElementById(`${postId}share`);
  useEffect(() => {
    if (
      username !== "" &&
      username !== null &&
      username !== undefined &&
      username === postUser &&
      sharedPostId !== "" &&
      sharedPostId !== "123" &&
      sharedPostId !== null &&
      sharedPostId !== undefined &&
      sharebutton !== "" &&
      sharebutton !== null &&
      sharebutton !== undefined
    ) {
      sharebutton.style.color = "#22c55e";
    }
  });

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
          postId: postId,
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
      // console.log("made it here #1");
      axios
        .post("http://localhost:8080/unlike-post", {
          // need post ID and user ID
          postId: postId,
          userId: userId,
        })
        .then((res) => {
          // console.log(res);
          // console.log("made it here");
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

      // setUserHasLiked(false);
    } else {
      e.target.classList.remove("text-black");
      e.target.classList.add("text-red-500");
      setPseudoLikes(pseudoLikes + 1);
      // setUserHasLiked(true);
    }
  };

  let stringDate = dateAdded.toString();
  let timeFromDate = stringDate.split(" ")[4];
  let splitTime = timeFromDate.split(":");
  let displayTime = splitTime[0] + ":" + splitTime[1];
  let today = new Date();
  if (
    today.toString().split(" ")[1] + today.toString().split(" ")[2] !==
    dateAdded.toString().split(" ")[1] + dateAdded.toString().split(" ")[2]
  ) {
    displayTime =
      dateAdded.toString().split(" ")[1] +
      " " +
      dateAdded.toString().split(" ")[2];
  }

  let displayHandle = postUser;
  let displayName = postUser;
  if (displayName.length > 10) {
    displayName = displayName.slice(0, 8) + "...";
  }
  if (displayHandle.length > 6) {
    displayHandle = displayHandle.slice(0, 4) + "...";
    // console.log(displayHandle);
  }
  if (picNum === "imgOne") {
    img = imgOne;
  }
  if (picNum === "imgTwo") {
    img = imgTwo;
  }
  if (picNum === "imgThree") {
    img = imgThree;
  }
  if (picNum === "imgFour") {
    img = imgFour;
  }
  if (picNum === "imgFive") {
    img = imgFive;
  }
  if (picNum === "imgSix") {
    img = imgSix;
  }
  if (picNum === "imgSeven") {
    img = imgSeven;
  }
  if (picNum === "imgEight") {
    img = imgEight;
  }
  if (picNum === "imgNine") {
    img = imgNine;
  }
  let openFullScreen = () => {
    setPostStateFS(true);
    setClickedPostId(postId);
    if (
      sharedPostId !== "" &&
      sharedPostId !== "123" &&
      sharedPostId !== undefined &&
      sharedPostId !== null
    ) {
      setClickedPostWithSharedId(sharedPostId);
    }
  };
  let sharePost = (e) => {
    setClickedPostId(postId);
    if (e.target.classList.contains("text-green-500")) {
      e.target.classList.remove("text-green-500");
      e.target.classList.add("text-black");
    } else {
      e.target.classList.remove("text-black");
      e.target.classList.add("text-green-500");
    }
    setShareOptions(true);
  };
  let deletePost = async () => {
    await axios
      .delete(
        `http://localhost:8080/delete-post/${postId}&${userId}&${postUserId}`
      )
      .then((res) => {
        if (res.status === 200) {
          setHidePost(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {hidePost === false ? (
        <div
          className="flex w-full border-light-gray border-b"
          id={`${postId}container`}
        >
          <article className="px-4 flex w-full">
            <div className="w-full flex flex-col">
              <div className="pt-3"></div>
              <div className="flex flex-row w-full">
                <img
                  src={img}
                  alt=""
                  className="border border-red-500 max-h-[48px] min-h-[48px] min-w-[48px] max-w-[48px] rounded-full mr-3"
                />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between max-w-[283px] min-w-[283px]">
                    <p>{displayName}</p>{" "}
                    <p className="text-neutral-600 ml-1 text-[8px] my-auto">
                      ●
                    </p>
                    {/* <FontAwesomeIcon
                  icon={faCheck}
                  className=" ml-1 flex my-auto"
                /> */}
                    <p className="text-neutral-600 ml-1 ">@{displayHandle}</p>{" "}
                    {/* limit username length .. */}
                    <p className="text-neutral-600 ml-1 text-[8px] my-auto">
                      ●
                    </p>
                    <p className="text-neutral-600 ml-1 ">{displayTime}</p>
                    <p className="ml-[20px] text-neutral-600">
                      <button onClick={deletePost}>
                        {/* will be changed, just like this for testing */}
                        <FontAwesomeIcon icon={faEllipsis} />
                      </button>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div onClick={openFullScreen}>
                      {postBody !== "SHARED_POST" && <p>{postBody}</p>}
                      {sharedPost && (
                        <div className="border-[rgb(207, 217, 222)] border rounded-xl">
                          <div className="p-4 flex flex-col">
                            <div className="text-sm flex flex-row w-full justify-between">
                              <div className="border border-red-500 max-h-[20x] min-h-[20px] min-w-[20px] max-w-[20px] rounded-full mr-2">
                                <img src={sharedImg} alt="" />
                              </div>
                              <p className="font-bold mr-[1ch]">
                                {sharedUsername}
                              </p>
                              <p className="mr-[1ch] text-neutral-600">
                                @{sharedUsername}
                              </p>
                              {/* low char limit here */}
                              <p className="text-neutral-600 text-[6px] my-auto">
                                ●
                              </p>
                              <p className="text-neutral-600">{sharedDate}</p>
                            </div>
                            <p className="text-sm">{sharedPostBody}</p>
                          </div>
                        </div>
                      )}
                      <div className="mt-3">
                        {/* <img src={img} alt="" className="" /> */}
                        {postImg !== undefined ? (
                          <img
                            src={img}
                            alt=""
                            className="rounded-2xl max-w-[279px] max-w-[279px]"
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex">
                        <FontAwesomeIcon
                          icon={faComment}
                          className="flex m-auto mr-1"
                        />
                        <div>
                          {numComments > 0 ? (
                            numComments
                          ) : (
                            <div className="mr-[1ch]"></div>
                          )}
                        </div>
                      </div>
                      <div className="flex">
                        <button onClick={(e) => sharePost(e)}>
                          <FontAwesomeIcon
                            icon={faRetweet}
                            id={`${postId}share`}
                            className="flex m-auto mr-1"
                          />
                          <div>
                            {numShares > 0 ? (
                              numShares
                            ) : (
                              <div className="mr-[1ch]"></div>
                            )}
                          </div>
                        </button>
                      </div>
                      <div className="flex">
                        <button
                          onClick={(e) => likePost(e)}
                          className="hover:text-red-500 hover:scale-125 mr-1"
                        >
                          {userHasLiked && (
                            <div className="text-red-500">
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="flex m-auto pointer-events-none"
                                id="heart"
                              />
                            </div>
                          )}
                          {!userHasLiked && (
                            <div>
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="flex m-auto pointer-events-none"
                                id="heart"
                              />
                            </div>
                          )}
                        </button>
                        <div>{pseudoLikes}</div>
                        {/* <div>{numLikes}</div> */}
                      </div>
                      <div className="flex">
                        <FontAwesomeIcon
                          icon={faShare}
                          className="flex m-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <>
          <DeletedNotif />
        </>
      )}
    </>
  );
}

export default MobilePost;
