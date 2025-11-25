import styles from "../PostPopUp.module.css";
import ProfilePicture from "../../../../../Universal Components/Profile Picture/ProfilePicture";

export default function PostVisibility() {
  return (
    <div className={styles.postVisibility}>
      <ProfilePicture />
      <span>
        <h3>Mahmud Hassan</h3>
        <select name="" id="">
          <option value="public">public</option>
          <option value="only_friends">friends</option>
          <option value="privet">private</option>
        </select>
      </span>
    </div>
  );
}
