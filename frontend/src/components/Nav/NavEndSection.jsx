import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import styles from "./Nav.module.css";
import ProfilePicture from "../Universal Components/Profile Picture/ProfilePicture";

export default function NavEndSection() {
  return (
    <div className={styles.navEndSection}>
      <a href="#">
        <CgMenuGridO />
      </a>
      <a href="#">
        <FaFacebookMessenger />
      </a>
      <a href="#">
        <IoMdNotifications />
      </a>
      <ProfilePicture height="45px" width="45x" />
    </div>
  );
}
