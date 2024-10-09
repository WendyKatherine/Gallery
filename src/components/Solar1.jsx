import solar1 from '../assets/img/solar1.jpg';
import PropTypes from 'prop-types';

export const Solar1 = ({className}) => {
    return (
        <img src={ solar1 } alt="NASA Solar 1"
        className={className}
        />
    )
}

Solar1.propTypes = {
    className: PropTypes.string
}