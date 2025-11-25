import { FaHome, FaUserFriends } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { SiFacebookgaming } from "react-icons/si";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.iconList}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <FaHome />
      </NavLink>
      <NavLink
        to={"/find-friend"}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <FaUserFriends />
      </NavLink>
      <NavLink
        to={"/watch"}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <MdOutlineOndemandVideo />
      </NavLink>
      <NavLink
        to={"/marketplace"}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <CiShop />
      </NavLink>
      <NavLink
        to={"/game-store"}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <SiFacebookgaming />
      </NavLink>
    </div>
  );
}
