import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

// create slicer now
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
    state.currentUser = action.payload;
      state.loading = false,
       //data that we get from backend
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//export action
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;
//export reducer
export default userSlice.reducer;

// import userReducer in store.js
