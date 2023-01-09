import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import MobilePost from "./MobilePost";
function PostFetcher(props) {
  let [listOfPosts, setListOfPosts] = useState([]);
  let [postsLoaded, setPostsLoaded] = useState(false);
  // let [removedPostId, setRemovedPostId] = useState("");
  let {
    setClickedPostWithSharedId,
    username,
    userId,
    loggedIn,
    setLogInModalState,
    setPostStateFS,
    setClickedPostId,
    changeLike,
    setChangeLike,
    setShareModal,
    setSuccessNotif,
    setShareOptions,
  } = props;
  // Check every post the user has liked...
  // Or check every like the post has..
  useEffect(() => {
    axios
      .get("http://localhost:8080/retrieve-posts")
      .then((res) => {
        setListOfPosts(res.data);
        setPostsLoaded(true);
        // console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log("ran");
  //   listOfPosts.filter((x) => x !== removedPostId);
  // }, [removedPostId, listOfPosts]);
  // console.log(listOfPosts);
  return (
    <>
      {listOfPosts.map((post) => {
        return (
          <div key={uuidv4()}>
            <MobilePost
              setClickedPostWithSharedId={setClickedPostWithSharedId}
              setSuccessNotif={setSuccessNotif}
              username={username}
              postBody={post.postBody}
              postUser={post.postUser}
              postUserId={post.postUserId}
              dateAdded={post.dateAdded}
              picNum={post.picNum}
              numShares={post.numShares}
              numLikes={post.numLikes}
              numComments={post.numComments}
              sharedPostId={post.sharedPostId}
              userId={userId}
              postId={post._id}
              likedByUsers={post.likedByUsers}
              loggedIn={loggedIn}
              setLogInModalState={setLogInModalState}
              setPostStateFS={setPostStateFS}
              setClickedPostId={setClickedPostId}
              changeLike={changeLike}
              setShareModal={setShareModal}
              setChangeLike={setChangeLike}
              setShareOptions={setShareOptions}
            />
          </div>
        );
      })}
    </>
  );
}

export default PostFetcher;
