// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import courseworkReducer from './feature/coursework/courseworkSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    coursework: courseworkReducer,
  },
});

