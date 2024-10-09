import solar2 from '../assets/img/solar2.jpg';
import PropTypes from 'prop-types';

export const Solar2 = ({className}) => {
    return (
        <img src={ solar2 } alt="NASA Solar 2"
        className={className}
        />
    )
}

Solar2.propTypes = {
    className: PropTypes.string
}