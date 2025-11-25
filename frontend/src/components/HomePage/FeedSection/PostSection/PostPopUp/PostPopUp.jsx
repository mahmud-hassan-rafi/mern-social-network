import styles from "./PostPopUp.module.css";
import CreatePostPopUpHead from "./PostPopUpComponents/CreatePostPopUpHead";
import PostVisibility from "./PostPopUpComponents/PostVisibility";
import PostWriting from "./PostPopUpComponents/PostWriting";
import EmojiSection from "./PostPopUpComponents/EmojiSection";
import AddEvent from "./PostPopUpComponents/AddEvent";
import PostBtn from "./PostPopUpComponents/PostBtn";
import PreviewPostImg from "./PostPopUpComponents/PreviewPostImg";
import { PostText, usePostURL } from "../../../../../store/contextAPI";
import { useContext } from "react";
import { IsWantToPostContext } from "../../../../../store/IsWantToPostContext";

export default function CreatePostPopUp() {
  const { postText, setPostText } = useContext(PostText);
  const { postPhotoURL, setPostPhotoURL } = usePostURL();
  const { setIsWantToPost } = useContext(IsWantToPostContext);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("content", postText);
    formData.append("media", postPhotoURL);

    const res = await fetch("http://localhost:5000/api/posts/create-post", {
      method: "post",
      body: formData,
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    setPostText(null);
    setPostPhotoURL({});
    setIsWantToPost(false);
  };
  return (
    <div className={styles.postPopUp}>
      <form
        className={styles.popupContent}
        method="POST"
        onSubmit={handleOnSubmit}
      >
        <CreatePostPopUpHead />
        <hr />
        <PostVisibility />
        <PostWriting />
        {Object.keys(postPhotoURL).length > 0 && <PreviewPostImg />}
        <EmojiSection />
        <AddEvent />
        <PostBtn />
      </form>
    </div>
  );
}
