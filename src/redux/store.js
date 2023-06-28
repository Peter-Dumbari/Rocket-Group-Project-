import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Mission/missionSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
