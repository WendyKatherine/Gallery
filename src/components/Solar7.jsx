import solar7 from '../assets/img/solar7.jpg';
import PropTypes from 'prop-types';

export const Solar7 = ({className}) => {
    return (
        <img src={ solar7 } alt="NASA Solar 7"
        className={className}
        />
    )
}

Solar7.propTypes = {
    className: PropTypes.string
}