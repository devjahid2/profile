import React from 'react';
import { images } from '../../assets/images/images';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className="d-flex align-items-center topbar justify-content-between my-3">
            <div className="d-flex align-items-center">
            <img src={images.user_circle} alt="user circle" />
                <h3 className='h5'>ZOHAIB HASSAN</h3>
            </div>
            <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img className='plus-icon' src={images.plus} alt="" />
                <h3 className='h5 text-dark'>ADD NEW PROMPT</h3>
            </Link>
            
        </div>
    );
}

export default Topbar;
