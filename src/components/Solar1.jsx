import solar1 from '../assets/img/solar1.jpg';
import PropTypes from 'prop-types';

export const Solar1 = (props) => {
    return (
        <img src={ solar1 } alt="NASA Solar 1"
        className={props.className}
        />
    )
}

Solar1.propTypes = {
    className: PropTypes.string
}