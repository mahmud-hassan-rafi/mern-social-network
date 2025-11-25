import React, { useEffect, useRef, useState } from "react";
import styles from "./Post.module.css";
import NumOfReactions from "./PostComponents/NumOfReactions/NumOfReactions";
import PostContent from "./PostComponents/PostContent/PostContent";
import PostHead from "./PostComponents/PostHead/PostHead";
import PostTitle from "./PostComponents/PostTitle/PostTitle";
import ReactionIcon from "./PostComponents/ReactionIcon/ReactionIcon";

function Post() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    (async function () {
      const data = await PostData(page);
      setPosts((preData) => [...preData, ...data]);
    })();
    // prevPage.current = posts.length;
  }, [setPosts, page]);
  console.log(page);
  console.log(posts);
  return (
    <>
      {posts.map((post, idx) => {
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

export default React.memo(Post);

export const PostData = async (page) => {
  const response = await fetch(
    `http://localhost:5000/api/posts/?page=${page || 1}&limit=10`
  );
  const data = await response.json();
  return data;
};
