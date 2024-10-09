import { Link } from 'react-router-dom';
import { Solar1 } from './Solar1';
import { Solar7 } from './Solar7';
import { Solar6 } from './Solar6';
import { Solar5 } from './Solar5';
import { Solar4 } from './Solar4';
import { Solar3 } from './Solar3';
import { Solar2 } from './Solar2';

const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/solar1' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar1 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar2' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar2 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar3' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar3 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar4' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar4 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar5' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar5 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar6' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar6 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
      <Link to='/solar7' className='links'>
        <figure className='thumbnail-image-size'>
            <Solar7 />
            <figcaption>Soy un sol verde</figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default Navigation
