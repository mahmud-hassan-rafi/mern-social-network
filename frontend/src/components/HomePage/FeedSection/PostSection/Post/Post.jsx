import React, { useEffect, useState } from "react";
import styles from "./Post.module.css";
import NumOfReactions from "./PostComponents/NumOfReactions/NumOfReactions";
import PostContent from "./PostComponents/PostContent/PostContent";
import PostHead from "./PostComponents/PostHead/PostHead";
import PostTitle from "./PostComponents/PostTitle/PostTitle";
import ReactionIcon from "./PostComponents/ReactionIcon/ReactionIcon";

function Post() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();

    (async function () {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/posts/?page=${page || 1}&limit=10`,
        { credentials: "include", signal: controller.signal },
      );
      const data = await response.json();
      setPosts((preData) => [...preData, ...data]);
    })();

    return () => controller.abort();
  }, [page]);
  console.log(page);
  console.log(posts);
  return (
    <>
      {posts &&
        posts.map((post, idx) => {
          return (
            <div className={styles.post} key={idx}>
              <PostHead post={post} />
              <PostTitle post={post} />
              <PostContent postPhotoLink={post.media[0].url} />
              <NumOfReactions post={post} />
              <hr />

              <ReactionIcon />
            </div>
          );
        })}
      <center>
        <button
          onClick={() => {
            setPage((pre) => pre + 1);
          }}
        >
          Load more
        </button>
      </center>
    </>
  );
}

export default Post;
