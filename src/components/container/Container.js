import React from 'react';
import Sidebar from '../../layouts/sidebar/Sidebar';

const Container = ({children}) => {
    return (
        <div className="container">
            <Sidebar/>
            
            <main className='content'>
                {children}
            </main>
        </div>
    );
}

export default Container;
