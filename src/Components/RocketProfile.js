import { useSelector } from 'react-redux';
import './rocketProfile.css';

const RocketProfile = () => {
  const { reservedRockets } = useSelector((state) => state.rockets);
  return (
    <>
      {reservedRockets.length === 0 ? (
        <p className="no-rocket">You have not reserved any Rockets yet.</p>
      ) : (
        <div className="rocket-list">
          {reservedRockets.map((rocket) => (
            <p key={rocket.id}>
              <h4>{rocket.name}</h4>
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default RocketProfile;