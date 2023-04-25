import React from 'react';

const Card = ({title,description}) => {
    return (
        <div className='text-card rounded'>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Card;
