import { createSlice } from '@reduxjs/toolkit';

const courseworkSlice = createSlice({
  name: 'coursework',
  initialState: {
    files: [],
    details: {},
    evaluations: [],
  },
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload);
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    addEvaluation: (state, action) => {
      state.evaluations.push(action.payload);
    },
  },
});

export const { addFile, setDetails, addEvaluation } = courseworkSlice.actions;
export default courseworkSlice.reducer;
