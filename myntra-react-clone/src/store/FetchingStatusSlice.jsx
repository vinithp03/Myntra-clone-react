import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Just modify the draft
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});


export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
