import React from 'react';
import Search from '../../components/search/Search';
import Conversion from '../../components/conversion/Conversion';
import useWindowWidth from '../../hooks/useWindowWidth';

const RightSide = () => {
    const onSmallScreen = useWindowWidth(575);
    return (
        <>
            {
                onSmallScreen ? '' : <Search/>
            }
            <Conversion/>
        </>
    );
}

export default RightSide;
