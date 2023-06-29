import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rocket/rocketSlice';
import missionReducer from './Mission/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    mission: missionReducer,
  },
});

export default store;
