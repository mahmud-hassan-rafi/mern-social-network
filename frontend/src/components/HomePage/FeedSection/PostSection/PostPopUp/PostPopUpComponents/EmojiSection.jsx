import styles from "../PostPopUp.module.css";
import { BiSmile } from "react-icons/bi";

export default function EmojiSection() {
  return (
    <div className={`${styles.flex} ${styles.emoji_section}`}>
      <img
        src="../src/assets/svg_icons/Aa_square.png"
        alt=""
        width={"35px"}
        height={"35px"}
      />
      <BiSmile />
    </div>
  );
}
