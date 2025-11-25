import ProfilePicture from "../../../Universal Components/Profile Picture/ProfilePicture";
import styles from "./ComponentPack.module.css";
import BottomList from "./components/bottomList";

export default function ComponentPack() {
  return (
    <div className={styles.list}>
      <a href="#" key={Math.random() * Math.random()}>
        <ProfilePicture />
        <p>Mahmud Hassan</p>
      </a>
      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.friendIcon}></i>
        <p>Friends</p>
      </a>
      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.memoriesIcon}></i>
        <p>Memories</p>
      </a>

      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.savedIcon}></i>
        <p>Saved</p>
      </a>

      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.groupIcon}></i>
        <p>Groups</p>
      </a>

      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.videoIcon}></i>
        <p>Videos</p>
      </a>

      <a href="#" key={Math.random() * Math.random()}>
        <i
          data-visualcompletion="css-img"
          className={styles.marketplaceIcon}
        ></i>
        <p>Marketplace</p>
      </a>

      {/* --------------------- */}
      <a href="#" key={Math.random() * Math.random()}>
        <img
          draggable="false"
          height="36"
          width="36"
          alt=""
          src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeEFJ0RloNJw3a2ajFiT8M2PF-F-rSS5bMUX4X6tJLlsxW9bMuDyG2TDaGVPGo8Dqm0GS117AxDu7hE8X-zyGDCQ"
        />
        <p>Feeds</p>
      </a>
      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.eventIcon}></i>
        <p>Events</p>
      </a>
      <a href="#" key={Math.random() * Math.random()}>
        <i
          data-visualcompletion="css-img"
          className={styles.adsManagerIcon}
        ></i>
        <p>Ads Manager</p>
      </a>
      <a href="#" key={Math.random() * Math.random()}>
        <i data-visualcompletion="css-img" className={styles.gamesIcon}></i>
        <p>Play Games</p>
      </a>

      {/* see more icon */}
      <a href="#" key={Math.random() * Math.random()}>
        <svg
          viewBox="0 0 16 16"
          width="20"
          height="20"
          fill="currentColor"
          aria-hidden="true"
          // class="x14rh7hd x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq"
          // style="--x-color: var(--primary-icon);"
        >
          <g fillRule="evenodd" transform="translate(-448 -544)">
            <path
              fillRule="nonzero"
              d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
            ></path>
          </g>
        </svg>
        <p>See more</p>
      </a>
      <BottomList />
    </div>
  );
}
