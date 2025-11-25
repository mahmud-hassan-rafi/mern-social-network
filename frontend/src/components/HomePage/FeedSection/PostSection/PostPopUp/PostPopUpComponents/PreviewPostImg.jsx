import { usePostURL } from "../../../../../../store/contextAPI";
import styles from "../PostPopUp.module.css";

export default function PreviewPostImg() {
  const { postPhotoURL } = usePostURL();

  return (
    <div className={styles.previewPostImage} id="previewImgInCreatePost">
      <span className={styles.closePreviewPostImg}>x</span>
      <img src={postPhotoURL} alt="" id="postImg" />
    </div>
  );
}
