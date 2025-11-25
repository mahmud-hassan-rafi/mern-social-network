import styles from "../../Post.module.css";

export default function PostContent({ postPhotoLink }) {
  return (
    <div
      className={`${
        postPhotoLink === null ? styles.noPhotoPost : styles.postContent
      }`}
    >
      <img src={postPhotoLink} alt="" />
    </div>
  );
}
