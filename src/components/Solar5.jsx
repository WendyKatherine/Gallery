import solar5 from '../assets/img/solar5.jpg';
import PropTypes from 'prop-types';

export const Solar5 = ({className}) => {
    return (
        <img src={ solar5 } alt="NASA Solar 5"
        className={className}
        />
    )
}

Solar5.propTypes = {
    className: PropTypes.string
}