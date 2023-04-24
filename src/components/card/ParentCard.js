import React from 'react';

const ParentCard = ({title,children}) => {
    return (
        <div className='bg-white parent-card mb-4'>
            <h2 className='h2'>{title}</h2>
            <div className="d-md-flex align-items-center justify-content-around flex-column gap-4 flex-md-row">
            {
                children
            }
            </div>
        </div>
    );
}

export default ParentCard;
