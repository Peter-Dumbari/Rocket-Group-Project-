import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './Components/navigation-bar';
import Rockect from './Components/Rockect';
import Mission from './Components/Mission';
import Myprofile from './Components/MyProfile';

function App() {
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
