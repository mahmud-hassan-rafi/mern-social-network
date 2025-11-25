import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { IsWantToPostContext } from "../../../../../../store/IsWantToPostContext";
import styles from "../PostPopUp.module.css";
import { usePostURL } from "../../../../../../store/contextAPI";

export default function CreatePostPopUpHead() {
  const { setIsWantToPost } = useContext(IsWantToPostContext);
  const { setPostPhotoURL } = usePostURL();
  return (
    <div className={styles.createPostPopUpHead}>
      Create post
      <span
        className={styles.closeBtn}
        onClick={() => {
          setIsWantToPost(false);
          setPostPhotoURL({});
        }}
      >
        <MdClose />
      </span>
    </div>
  );
}
