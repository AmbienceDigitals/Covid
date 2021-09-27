import { configureStore } from '@reduxjs/toolkit';
import covidReducer from '../features/covidSlice'

export const store = configureStore({
  reducer: {
    covid: covidReducer
  },
});
