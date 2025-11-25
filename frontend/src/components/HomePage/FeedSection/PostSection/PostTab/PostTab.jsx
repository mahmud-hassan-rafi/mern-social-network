import { useContext } from "react";
import ProfilePicture from "../../../../Universal Components/Profile Picture/ProfilePicture";
import PhotoActivity from "./PhotoActivity";
import styles from "./PostTab.module.css";
import { IsWantToPostContext } from "../../../../../store/IsWantToPostContext";

export default function PostTab() {
  const { setIsWantToPost } = useContext(IsWantToPostContext);

  return (
    <div className={styles.post}>
      <div className={styles.postTextStatus}>
        <ProfilePicture height="40px" width="40x" />
        <input
          type="text"
          className={styles.TextStatusBox}
          readOnly
          placeholder="What's on your mind, Mahmud?"
          onClick={() => {
            setIsWantToPost(true);
          }}
        />
      </div>
      <hr />
      <div className={styles.photoActivity}>
        <PhotoActivity />
      </div>
    </div>
  );
}
