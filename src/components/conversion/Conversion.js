import React from 'react';
import { images } from '../../assets/images/images';

const Conversion = () => {
    return (
        <div className='conversion rounded'>
            <div className="conversion-head d-flex align-items-center gap-2">
                <img src={images.plus_circle} alt="" />
                <h5 className='text-white'>Start New Conversation</h5>
            </div>
            <div className="conversion-content">

            </div>
        </div>
    );
}

export default Conversion;
