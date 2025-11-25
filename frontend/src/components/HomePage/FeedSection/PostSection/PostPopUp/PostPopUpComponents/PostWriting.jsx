import { useContext } from "react";
import styles from "../PostPopUp.module.css";
import { PostText } from "../../../../../../store/contextAPI";

export default function PostWriting() {
  const { setPostText } = useContext(PostText);

  return (
    <>
      <div className={styles.postWriting}>
        <textarea
          type="text"
          placeholder="What's on your mind?"
          onChange={(event) => setPostText(event.target.value)}
        />
      </div>
    </>
  );
}
