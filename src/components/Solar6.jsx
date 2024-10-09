import solar6 from '../assets/img/solar6.jpg';
import PropTypes from 'prop-types';

export const Solar6 = ({className}) => {
    return (
        <img src={ solar6 } alt="NASA Solar 6"
        className={className}
        />
    )
}

Solar6.propTypes = {
    className: PropTypes.string
}