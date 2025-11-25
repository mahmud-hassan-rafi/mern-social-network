import ProfilePicture from "../../../../Universal Components/Profile Picture/ProfilePicture";
import styles from "./Story.module.css";

export default function Story({ src }) {
  return (
    <div className={styles.story}>
      <img src={src} alt="" className={styles.storyImg} />
      <ProfilePicture />
      <p className={styles.userName}>Mahmud Hassan</p>
    </div>
  );
}
