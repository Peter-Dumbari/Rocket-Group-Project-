import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mission: [],
  joinedMission: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    getMission: (state, action) => {
      state.mission = action.payload;
    },
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.mission.find(
        (mission) => mission.mission_id === missionId,
      );
      if (mission) {
        mission.reserved = true;
        state.joinedMission.push(mission);
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.mission = state.mission.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false }
        : mission));
      state.joinedMission = state.joinedMission.filter(
        (mission) => mission.mission_id !== missionId,
      );
    },
  },
});

export default missionSlice.reducer;
export const { getMission, joinMission, leaveMission } = missionSlice.actions;
