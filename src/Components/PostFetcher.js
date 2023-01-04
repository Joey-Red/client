import React, { useEffect, useState } from "react";
import axios from "axios";
function PostFetcher() {
  useEffect(() => {
    axios
      .get("GET ALL POSTS")
      .then((res) => {
        // setListOfPosts(res.data);
        // setPostsLoaded(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* {verifiedPosts.map((post) => {
        return (
          <div className="postContainerContainer" key={uuidv4()}>
            <div className="singlePost">
              <EventPlaceholder
                eventTitle={post.eventTitle}
                eventDescription={post.eventDescription}
                eventCreator={post.eventCreator}
                dateCreated={post.dateCreated}
                emailRegistry={post.emailRegistry}
                eventAdmins={post.eventAdmins}
                eventUpdatePosts={post.eventUpdatePosts}
                hostEmail={post.hostEmail}
                postId={post._id}
                eventDate={post.eventDate}
                eventTime={post.eventTime}
              />
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default PostFetcher;
