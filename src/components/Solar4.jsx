import solar4 from '../assets/img/solar4.jpg';
import PropTypes from 'prop-types';

export const Solar4 = (props) => {
    return (
        <img src={ solar4 } alt="NASA Solar 4"
        className={props.className}
        />
    )
}

Solar4.propTypes = {
    className: PropTypes.string
}