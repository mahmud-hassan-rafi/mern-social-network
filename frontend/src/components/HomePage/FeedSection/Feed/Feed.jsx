import styles from "../../HomePage.module.css";
import PostSection from "../PostSection/PostSection";
import React from "react";

function Feed() {
  return (
    <div className={styles.feed} id="feed">
      <PostSection />
    </div>
  );
}

export default React.memo(Feed);
