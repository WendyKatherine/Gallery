import solar3 from '../assets/img/solar3.jpg';
import PropTypes from 'prop-types';

export const Solar3 = (props) => {
    return (
        <img src={ solar3 } alt="NASA Solar 3"
        className={props.className}
        />
    )
}

Solar3.propTypes = {
    className: PropTypes.string
}