import { FaClosedCaptioning, FaCross, FaCrosshairs } from "react-icons/fa";
import ProfilePicture from "../../../../../../Universal Components/Profile Picture/ProfilePicture";
import styles from "./PostHead.module.css";
import PostTime from "./PostTime";
import { MdClose, MdMenu } from "react-icons/md";
import { usePost } from "../../../../../../../store/PostContext";

export default function PostHead({ post }) {
  const { dispatchPostState } = usePost();
  // const post = postState.posts;

  return (
    <div className={styles.postHead}>
      <img
        src={post.user.avatar}
        alt=""
        style={{
          height: "45px",
          width: "45px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
      <PostTime post={post} />
      <span>···</span>
      <MdClose
        onClick={() => {
          dispatchPostState({
            type: "DELETE_POST",
            payload: { postId: post.id },
          });
        }}
      />
    </div>
  );
}
