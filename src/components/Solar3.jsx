import solar3 from '../assets/img/solar3.jpg';
import PropTypes from 'prop-types';

export const Solar3 = ({className}) => {
    return (
        <img src={ solar3 } alt="NASA Solar 3"
        className={className}
        />
    )
}

Solar3.propTypes = {
    className: PropTypes.string
}