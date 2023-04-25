import React from 'react';
import { images } from '../../assets/images/images';
import SingleConversion from '../singleConversion/SingleConversion';

const Conversion = () => {
    return (
        <div className='conversion rounded'>
            <div className="conversion-head d-flex align-items-center gap-2">
                <img className='pointer-event' src={images.plus_circle} alt="" />
                <h5 className='text-white'>Start New Conversation</h5>
            </div>
            <div className="conversion-content rounded">
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
                <SingleConversion/>
            </div>
        </div>
    );
}

export default Conversion;
