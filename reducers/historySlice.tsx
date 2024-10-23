import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
  name: "history",
  initialState: [],
  reducers: {
    addHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addHistory } = historySlice.actions;
export default historySlice.reducer;