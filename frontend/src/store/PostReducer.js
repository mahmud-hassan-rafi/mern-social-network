export const initialPostState = {
  posts: [],
  loading: false,
  error: null,
  user: {
    id: null,
    name: "Mahmud Hassan",
  },
};

export default function PostReducer(state, action) {
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [action.payload.posts, ...state.posts],
    };
  } else if (action.type === "DELETE_POST") {
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post.id !== action.payload.postId;
      }),
    };
  } else if (action.type === "HIT_REACTION") {
    return;
  } else {
    console.log("Something went wrong!");
  }
}
