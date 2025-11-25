import styles from "../../Post.module.css";

export default function NumOfReactions({ post }) {
  const postReaction = post.reactions;
  return (
    <div className={styles.numOfReactions}>
      <span>
        <div>
          <img
            src="../src/assets/svg_icons/love.svg"
            alt=""
            height={"20px"}
            width={"20px"}
            style={{ zIndex: 3 }}
            className={styles.firstReaction}
          />
          <img
            src="../src/assets/svg_icons/care.svg"
            alt=""
            height={"20px"}
            width={"20px"}
            style={{ zIndex: 2 }}
            className={styles.secondReaction}
          />
          <img
            src="../src/assets/svg_icons/like.svg"
            alt=""
            height={"20px"}
            width={"20px"}
            style={{ zIndex: 0 }}
            className={styles.thirdReaction}
          />
        </div>
        {Object.keys(postReaction)
          .map((key) => postReaction[key])
          .reduce((pre, curr) => pre + curr)}
      </span>
      <span>
        {post.comments_count}
        <img
          src="../src/assets/svg_icons/comments.png"
          alt=""
          height={"20px"}
          width={"20px"}
        />
      </span>

      <span>
        {post.shares_count}
        <img
          src="../src/assets/svg_icons/share.svg"
          alt=""
          height={"20px"}
          width={"20px"}
        />
      </span>
    </div>
  );
}
