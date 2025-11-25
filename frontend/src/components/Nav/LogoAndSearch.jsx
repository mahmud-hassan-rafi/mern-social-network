import { FaFacebook } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import styles from "./Nav.module.css";

export default function LogoAndSearch() {
  return (
    <div className={styles.logoAndSearch}>
      <div className={styles.logo}>
        <FaFacebook />
      </div>
      <div className={`${styles.searchBox} input-group`}>
        <span
          className={`input-group-text ${styles.searchIcon}`}
          id="searchIcon"
        >
          <IoIosSearch />
        </span>
        <input
          type="search"
          className={`${styles.searchInput} form-control`}
          placeholder="Search here"
          name=""
          id=""
          aria-describedby="searchIcon"
        />
      </div>
    </div>
  );
}
