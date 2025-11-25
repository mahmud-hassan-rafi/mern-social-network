import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  birthday: "",
  gender: "",
  profilePicture: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfilePicture: (state, action) => {
      return { ...state, profilePicture: action.payload.profilePicture };
    },
  },
});

export const { setProfilePicture } = userSlice.actions;

export default userSlice.reducer;
