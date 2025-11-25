import { BiWorld } from "react-icons/bi";
import styles from "./PostHead.module.css";

export default function PostTime({ post }) {
  const isoString = post.created_at;
  const date = new Date(isoString);

  const formatted = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.postTime}>
      <div>
        <p>{post.user.name}</p> · <p>Follow</p>
      </div>
      <div>
        <p>{formatted}</p> ·
        <BiWorld />
      </div>
    </div>
  );
}
