import { createSlice } from "@reduxjs/toolkit";

export const resultReducer = createSlice({
  name: "result",
  initialState: {
    userId: null,
    result: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushResultAction: (state, action) => {
      state.result.push(action.payload);
    },
    // updateResultAction: (state, action) => {
    //   const { trace, checked } = action.payload;
    //   console.log(trace, "trace reduced ");
    //   console.log(checked, "check reducer");
    //   state.result.fill(checked, trace, trace + 1);
    //   console.log(state.result.fill(checked, trace, trace + 1));
    // },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      // Ensure that the result array has enough length to store the selected options
      console.log(state.result.length, "dfsf");
      while (state.result.length <= trace) {
        state.result.push(null); // Use null or another appropriate value as the default
      }

      // Update the selected option for the specific question
      state.result[trace] = checked;
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
  },
});

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  updateResultAction,
} = resultReducer.actions;

export default resultReducer.reducer;
