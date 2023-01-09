import React, { useState, useEffect } from "react";
import { faArrowLeft, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../pic.png";
import axios from "axios";
function SharePost(props) {
  let {
    setShareModal,
    setSuccessNotif,
    clickedPostId,
    username,
    userId,
    userPic,
    userToken,
  } = props;
  let [currPost, setCurrPost] = useState("");
  let [postInfo, setPostInfo] = useState();
  let [postLoaded, setPostLoaded] = useState(false);
  let [editDate, setEditDate] = useState("");
  let [displayDate, setDisplayDate] = useState("");
  useEffect(() => {
    console.log(clickedPostId);
    axios
      .get("http://localhost:8080/retrieve-post", {
        headers: { clickedPostId: clickedPostId },
      })
      .then((res) => {
        setPostInfo(res.data);
        setPostLoaded(true);
        setEditDate(res.data.dateAdded);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    // console.log(editDate);
    if (editDate !== "" && editDate !== undefined) {
      // getting time from date
      let splitInfo = editDate.split(" ");
      // isolating date
      let dateSlice = splitInfo.slice(1, 3);
      setDisplayDate(dateSlice);
    }
  }, [editDate]);
  let config = {
    // method: "post",
    // url: "http://localhost:8080/create-post",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  let createPost = () => {
    axios
      .post(
        "http://localhost:8080/create-post",
        {
          sharedPostId: clickedPostId,
          postBody: currPost,
          username: username,
          postUserId: userId,
          picNum: userPic,
        },
        config
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setShareModal(false);
          setSuccessNotif(true);
        }
      })
      .catch();
  };

  let handleClick = () => {
    setShareModal(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex z-[9999] bg-white overflow-hidden">
      <div className="w-full px-4">
        <div className="flex w-full justify-between h-[53px] items-center">
          {/* top bar */}
          <button onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="flex" />
          </button>
          <button
            onClick={() => createPost()}
            className="bg-red-500 rounded-2xl text-white min-w-14 min-h-8 px-4"
          >
            Quote & Post
          </button>
        </div>
        <div className="flex justify-center">
          <div className="pt-1 pr-3">
            <img
              src={img}
              className="max-h-12 max-w-12 w-12 h-12 rounded-full min-w-[48px]"
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
                className="text-lg font-medium h-[120px]"
                placeholder="Add a comment"
                onChange={(e) => setCurrPost(e.target.value)}
              />
            </div>
            <div className="border-[rgb(207, 217, 222)] border rounded-xl mb-3">
              {postLoaded ? (
                <div className="p-4 flex flex-col">
                  <div className="text-sm flex flex-row w-full justify-between">
                    <div className="border border-red-500 max-h-[20x] min-h-[20px] min-w-[20px] max-w-[20px] rounded-full mr-2">
                      <img src={img} alt="" className="rounded-full" />
                    </div>
                    <p className="font-bold mr-[1ch]">{postInfo.postUser}</p>
                    <p className="mr-[1ch] text-neutral-600">
                      {postInfo.postUser}
                    </p>
                    {/* low char limit here */}
                    <p className="text-neutral-600 text-[6px] my-auto">●</p>
                    <p className="text-neutral-600">{displayDate}</p>
                  </div>
                  <p className="text-sm">{postInfo.postBody}</p>
                </div>
              ) : (
                <>Loading..</>
              )}
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
      </div>
    </div>
  );
}

export default SharePost;
