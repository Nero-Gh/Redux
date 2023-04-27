import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Nero",
  },
  pending: false,
  error: false,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload.name;
    },
    updateStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { changeName, updateStart, updateSuccess, updateFailure } =
  userSlice.actions;

export default userSlice;
