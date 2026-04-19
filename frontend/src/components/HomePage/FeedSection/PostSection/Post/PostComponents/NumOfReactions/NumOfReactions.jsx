import styles from "../../Post.module.css";
import loveIcon from "../../../../../../../assets/svg_icons/love.svg";
import careIcon from "../../../../../../../assets/svg_icons/care.svg";
import likeIcon from "../../../../../../../assets/svg_icons/like.svg";
import commentsIcon from "../../../../../../../assets/svg_icons/Comments.png";
import shareIcon from "../../../../../../../assets/svg_icons/share.svg";

export default function NumOfReactions({ post }) {
  const postReaction = post.reactions;
  return (
    <div className={styles.numOfReactions}>
      <span>
        <div>
          <img
            src={loveIcon}
            alt="Love reaction"
            height={"20px"}
            width={"20px"}
            style={{ zIndex: 3 }}
            className={styles.firstReaction}
          />
          <img
            src={careIcon}
            alt="Care reaction"
            height={"20px"}
            width={"20px"}
            style={{ zIndex: 2 }}
            className={styles.secondReaction}
          />
          <img
            src={likeIcon}
            alt="Like reaction"
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
        <img src={commentsIcon} alt="Comments" height={"20px"} width={"20px"} />
      </span>

      <span>
        {post.shares_count}
        <img src={shareIcon} alt="Share" height={"20px"} width={"20px"} />
      </span>
    </div>
  );
}
