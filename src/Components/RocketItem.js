import '../redux/Rocket/rocket.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelationRocket } from '../redux/Rocket/rocketSlice';

const RocketItem = ({ data }) => {
  const {
    id, name, description, flickr_images: images, reserved,
  } = data;
  const dispatch = useDispatch();
  const handleClick = () => {
    if (reserved) {
      dispatch(cancelationRocket(id));
    } else dispatch(reserveRocket(id));
  };

  return (
    <div className="container">
      <div className="img-container">
        <img src={images} className="rocket-img" alt="Rocket" />
      </div>
      <div className="details-container">
        <h2>{name}</h2>
        <p className="rocket-desc">
          {' '}
          {data?.reserved && (
            <span type="button" className="badge">
              Reserved
            </span>
          )}
          {description}
        </p>
        <button
          className={reserved ? 'reserved-btn' : 'rocket-btn'}
          type="button"
          onClick={handleClick}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  data: PropTypes.shape([]).isRequired,
};
