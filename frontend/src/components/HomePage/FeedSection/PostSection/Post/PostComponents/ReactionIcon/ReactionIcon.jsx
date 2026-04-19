import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../Post.module.css";
import likeIcon from "../../../../../../../assets/svg_icons/like.svg";
import loveIcon from "../../../../../../../assets/svg_icons/love.svg";
import careIcon from "../../../../../../../assets/svg_icons/care.svg";
import hahaIcon from "../../../../../../../assets/svg_icons/haha.svg";
import wowIcon from "../../../../../../../assets/svg_icons/wow.svg";
import sadIcon from "../../../../../../../assets/svg_icons/sad.svg";
import angryIcon from "../../../../../../../assets/svg_icons/angry.svg";
import likedIcon from "../../../../../../../assets/svg_icons/liked.svg";
import commentsIcon from "../../../../../../../assets/svg_icons/Comments.png";
import shareIcon from "../../../../../../../assets/svg_icons/share.svg";

export default function ReactionIcon() {
  const emojiList = [
    likeIcon,
    loveIcon,
    careIcon,
    hahaIcon,
    wowIcon,
    sadIcon,
    angryIcon,
  ];
  const [show, setShow] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const reactions = useRef(null);

  const handleMouseEnter = () => {
    const rect = reactions.current.getBoundingClientRect();
    setCoords({
      x: rect.left + rect.width - 20,
      y: rect.top - 60,
    });
    setShow(true);
  };

  useEffect(() => {
    const feed = document.querySelector("#feed");

    const handleScroll = () => {
      setShow(false);
    };

    feed.addEventListener("scroll", handleScroll);

    return () => {
      feed.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const FloatingBox = show
    ? ReactDOM.createPortal(
        <div
          className={styles.floatingBox}
          style={{
            top: `${coords.y}px`,
            left: `${coords.x}px`,
            transform: "translate(-50%, 0)",
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {emojiList.map((emoji, i) => (
            // <span key={i} >
            //   {emoji}
            // </span>
            <img src={emoji} key={i} alt="" className={styles.emoji} />
          ))}
        </div>,
        document.body,
      )
    : null;

  return (
    <div className={styles.reactionIcon}>
      {FloatingBox}

      <span
        ref={reactions}
        onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <img src={likedIcon} alt="Like" height="20" width="20" />
        Like
      </span>

      <span>
        <img src={commentsIcon} alt="Comment" height="20" width="20" />
        Comment
      </span>

      <span>
        <img src={shareIcon} alt="Share" height="20" width="20" />
        Share
      </span>
    </div>
  );
}
