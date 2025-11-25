import { createContext, useContext, useReducer } from "react";
import PostReducer, { initialPostState } from "./PostReducer";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, dispatchPostState] = useReducer(
    PostReducer,
    initialPostState
  );
  return (
    <PostContext.Provider value={{ postState, dispatchPostState }}>
      {children}
    </PostContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePost = () => useContext(PostContext);
