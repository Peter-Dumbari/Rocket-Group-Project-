import { configureStore } from '@reduxjs/toolkit';

import missionReducer from './Mission/missionSlice';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
import rocketSlice from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;

