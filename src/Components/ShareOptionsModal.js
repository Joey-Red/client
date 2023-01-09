import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRetweet } from "@fortawesome/free-solid-svg-icons";
function ShareOptionsModal(props) {
  let {
    setShareOptions,
    setShareModal,
    setSuccessNotif,
    clickedPostId,
    userId,
    username,
    userPic,
    userToken,
  } = props;
  let openShareModal = () => {
    setShareModal(true);
    setShareOptions(false);
  };
  let config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };
  let sharePostOnly = () => {
    axios
      .post(
        "http://localhost:8080/create-post",
        {
          sharedPostId: clickedPostId,
          postBody: "SHARED_POST",
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
          setShareOptions(false);
          setSuccessNotif(true);
        }
      })
      .catch();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-[#00000066] z-50 flex">
      <div className="mt-auto h-[156px] w-full bg-white rounded-t-3xl flex flex-col mr-auto p-3 gap-4">
        <button onClick={() => sharePostOnly()} className="flex">
          {" "}
          <div className="mr-2 my-auto flex">
            <FontAwesomeIcon icon={faRetweet} />
          </div>
          Share
        </button>
        <button onClick={() => openShareModal()} className="flex">
          <div className="mr-2 my-auto flex">
            <FontAwesomeIcon icon={faPencil} />
          </div>
          Quote & Share
        </button>
        <button
          onClick={() => setShareOptions(false)}
          className="border-gray border rounded-full font-bold p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ShareOptionsModal;
