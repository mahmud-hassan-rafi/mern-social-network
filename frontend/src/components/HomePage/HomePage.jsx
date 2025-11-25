import Feed from "./FeedSection/Feed/Feed";
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";
import styles from "./HomePage.module.css";
import React from "react";

function HomePage() {
  return (
    <div className={styles.homeContainer} id="homePage">
      <LeftSection />
      <Feed />
      <RightSection />
    </div>
  );
}

export default React.memo(HomePage);
