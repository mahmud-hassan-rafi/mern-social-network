import styles from "./ProfilePicture.module.css";
import rafiImage from "../../../assets/rafi.PNG";

export default function ProfilePicture() {
  return (
    <img src={rafiImage} alt="Profile" className={styles.profilePicture} />
  );
}
