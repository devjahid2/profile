import React, { useContext } from 'react';
import { images } from '../../assets/images/images';
import Search from '../../components/search/Search';
import { AppContext } from '../../App';

const ResponsiveHeader = () => {
    const [context,setContext] = useContext(AppContext)
    return (
        <div className='d-flex align-items-center justify-content-between p-3'>
            <div className="pointer">
                <img onClick={() => setContext({...context,leftMenuOpen:true})} className='menu-icon' src={images.menu} alt="menu icon" />
            </div>
            <Search/>
        </div>
    );
}

export default ResponsiveHeader;
