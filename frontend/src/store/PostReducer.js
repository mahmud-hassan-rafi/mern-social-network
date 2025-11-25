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

/* 
{
        postText: "",
    postPhotoLink: "",
    like_reaction: 7,
    love_reaction: 12,
    care_reaction: 9,
    angry_reaction: 0,
    wow_reaction: 0,
    haha_reaction: 0,
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
    }
*/
