import styles from "../PostPopUp.module.css";

export default function PostBtn() {
  // const { dispatchPostState } = usePost();

  return (
    <>
      <button type="submit" className={` ${styles.postBtn}`}>
        Post
      </button>
    </>
  );
}

/*
() => {
          dispatchPostState({
            type: "ADD_POST",
            payload: {
              posts: {
                postId: Math.random(),
                postText: postText,
                postPhotoLink: postPhotoURL,
                like_reaction: 70,
                love_reaction: 311,
                care_reaction: 124,
                angry_reaction: 0,
                wow_reaction: 4,
                haha_reaction: 4,
                total_reaction() {
                  let total =
                    this.like_reaction +
                    this.love_reaction +
                    this.care_reaction +
                    this.angry_reaction +
                    this.wow_reaction +
                    this.haha_reaction;
                  return total;
                },
                comments: 14,
                share: 7,
              },
            },
          });
          setPostText(null);
          setPostPhotoURL(null);
          
        }
*/
