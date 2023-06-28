import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mission: [],
  joinedMission: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    getMission: (state, action) => {
      state.mission = action.payload;
      state.joinedMission = false;
    },
  },
});

export default missionSlice.reducer;
export const { getMission } = missionSlice.actions;
