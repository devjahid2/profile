import React from 'react';
import { images } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const SingleConversion = () => {
    return (
        <Link to="/" className='d-flex align-items-center gap-2 single-conversion rounded-4 text-decoration-none'>
            
            <div className='conversion-user-profile'>
            <img  src={images.user_white} alt="user" />
            </div>
            <div>
                <h5 className='text-white'>Devid</h5>
                <p className='text-white'><span className='text-secondary'>You:</span> Hello Devid</p>
            </div>
        </Link>
    );
}

export default SingleConversion;
