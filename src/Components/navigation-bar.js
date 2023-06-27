import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="../img/planet.png" alt="" />
        <p className="campany-name">Space Travels Hub</p>
      </div>
      <ul>
        <li><Link to="/" className="Link">Rocket</Link></li>
        <li><Link to="/mission" className="Link">Mission</Link></li>
        <li className=""><Link to="/myprofile" className="Link last">My Profile</Link></li>
      </ul>
    </div>
  );
}

export default NavigationBar;
