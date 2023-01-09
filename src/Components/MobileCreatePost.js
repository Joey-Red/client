import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faImage } from "@fortawesome/free-solid-svg-icons";
import img from "../pic.png";
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
function MobileCreatePost(props) {
  let {
    setNavState,
    setFooterState,
    setCreatePostState,
    setPostContainerState,
    userToken,
    username,
    userId,
    setSuccessNotif,
    userPic,
  } = props;
  let [currPost, setCurrPost] = useState("");
  let config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  let createPost = () => {
    // console.log("ran");
    // console.log(currPost, username, userId, userToken);
    axios
      .post(
        "http://localhost:8080/create-post",
        {
          postBody: currPost,
          username: username,
          postUserId: userId,
          userPic: userPic,
          sharedPostId: "123",
          picNum: userPic,
        },
        config
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setCreatePostState(false);
          setNavState(true);
          setFooterState(true);
          setPostContainerState(true);
          setCreatePostState(false);
          setSuccessNotif(true);
        }
      })
      .catch();
  };
  // TESTING
  let createPosts = () => {
    // console.log("ran");
    // console.log(currPost, username, userId, userToken);
    for (let i = 0; i < 6; i++) {
      axios
        .post(
          "http://localhost:8080/create-post",
          {
            postBody: i,
            username: username,
            postUserId: userId,
            userPic: userPic,
            sharedPostId: "123",
          },
          config
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log("posted");
          }
        })
        .catch();
    }
  };
  // TESTING

  let handleClick = () => {
    setNavState(true);
    setFooterState(true);
    setPostContainerState(true);
    setCreatePostState(false);
  };
  if (userPic === "imgOne") {
    img = imgOne;
  }
  if (userPic === "imgTwo") {
    img = imgTwo;
  }
  if (userPic === "imgThree") {
    img = imgThree;
  }
  if (userPic === "imgFour") {
    img = imgFour;
  }
  if (userPic === "imgFive") {
    img = imgFive;
  }
  if (userPic === "imgSix") {
    img = imgSix;
  }
  if (userPic === "imgSeven") {
    img = imgSeven;
  }
  if (userPic === "imgEight") {
    img = imgEight;
  }
  if (userPic === "imgNine") {
    img = imgNine;
  }
  return (
    <div className="w-full px-4">
      <div className="flex w-full justify-between h-[53px] items-center">
        {/* top bar */}
        <button onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="flex" />
        </button>
        {/* <button
          onClick={() => createPosts()}
          className="bg-red-500 rounded-2xl text-white min-w-14 min-h-8 px-4"
        >
          Postsss
        </button> */}
        <button
          onClick={() => createPost()}
          className="bg-red-500 rounded-2xl text-white min-w-14 min-h-8 px-4"
        >
          Post!
        </button>
      </div>
      <div className="flex justify-center">
        <div className="pt-1 pr-3">
          <img
            src={img}
            className="max-h-12 max-w-12 w-12 h-12 rounded-full"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="border-red-300 border rounded-full w-fit flex h-min px-2 py-1 text-xs font-medium text-red-500">
            Everyone can see this
          </div>
          <div className="mt-6">
            <textarea
              type="text"
              className="text-lg font-medium"
              placeholder="What's happening?"
              onChange={(e) => setCurrPost(e.target.value)}
            />
          </div>
          <button
            className="flex justify-center items-center text-white bg-red-500 rounded-2xl
          "
          >
            <p>Add an image?</p>
            <FontAwesomeIcon icon={faImage} className="ml-3" />
          </button>
        </div>
      </div>
      <div className=" border-light-gray border-b max-w-[90%] mt-3"></div>
    </div>
  );
}

export default MobileCreatePost;
