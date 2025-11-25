import styles from "../../Post.module.css";

export default function PostTitle({ post }) {
  return <div className={styles.postTitle}>{post.content}</div>;
}
