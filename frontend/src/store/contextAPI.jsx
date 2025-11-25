import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostText = createContext("");
const PostPhotoURL = createContext({});

export const PostTextProvider = ({ children }) => {
  const [postText, setPostText] = useState(null);

  return (
    <PostText.Provider value={{ postText, setPostText }}>
      {children}
    </PostText.Provider>
  );
};

export const PostPhotoURLProvider = ({ children }) => {
  const [postPhotoURL, setPostPhotoURL] = useState({});

  return (
    <PostPhotoURL.Provider value={{ postPhotoURL, setPostPhotoURL }}>
      {children}
    </PostPhotoURL.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePostURL = () => useContext(PostPhotoURL);
