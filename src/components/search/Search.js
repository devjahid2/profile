import React from 'react';
import { images } from '../../assets/images/images';

const Search = () => {
    return (
        <div className='my-3 mt-4 pt-1 search position-relative'>
           <input type="text" name="search" id="search"  placeholder="Search Prompt library"/>
           <img src={images.search} alt="" />
        </div>
    );
}

export default Search;
