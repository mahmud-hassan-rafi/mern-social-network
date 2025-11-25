import PostTab from "./PostTab/PostTab";
import StorySection from "./StorySection/StorySection";
import styles from "./PostSection.module.css";
import Post from "./Post/Post";
import React, { useState } from "react";
import CreatePostPopUp from "./PostPopUp/PostPopUp";
import { IsWantToPostContext } from "../../../../store/IsWantToPostContext";
import { PostProvider } from "../../../../store/PostContext";
import {
  PostPhotoURLProvider,
  PostTextProvider,
} from "../../../../store/contextAPI";

function PostSection() {
  const [isWantToPost, setIsWantToPost] = useState(false);
  // const { postState } = usePost();

  return (
    <PostProvider>
      <PostTextProvider>
        <PostPhotoURLProvider>
          <div className={styles.postSection}>
            <IsWantToPostContext.Provider
              value={{ isWantToPost, setIsWantToPost }}
            >
              <PostTab />
              {isWantToPost === true && <CreatePostPopUp />}
              <StorySection />
              <Post />
            </IsWantToPostContext.Provider>
          </div>
        </PostPhotoURLProvider>
      </PostTextProvider>
    </PostProvider>
  );
}

export default React.memo(PostSection);
