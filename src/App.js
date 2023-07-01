import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import NavigationBar from './Components/navigation-bar';
import Rockect from './Components/Rockect';
import Mission from './Components/Missions/Mission';
import Myprofile from './Components/MyProfile';
import { getMission } from './redux/Mission/missionSlice';
import { getData } from './redux/Rocket/rocketSlice';
import Url from './redux/Mission/MissionUrl';

function App() {
  const rocketUrl = 'https://api.spacexdata.com/v3/rockets';
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(Url)
      .then((res) => {
        dispatch(getMission(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  React.useEffect(() => {
    axios
      .get(rocketUrl)
      .then((respond) => {
        dispatch(getData(respond.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Rockect />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </div>
  );
}

export default App;
