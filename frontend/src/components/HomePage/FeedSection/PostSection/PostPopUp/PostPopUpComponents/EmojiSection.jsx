import styles from "../PostPopUp.module.css";
import { BiSmile } from "react-icons/bi";
import aaSquareIcon from "../../../../../../assets/svg_icons/Aa_square.png";

export default function EmojiSection() {
  return (
    <div className={`${styles.flex} ${styles.emoji_section}`}>
      <img src={aaSquareIcon} alt="Text style" width={"35px"} height={"35px"} />
      <BiSmile />
    </div>
  );
}
