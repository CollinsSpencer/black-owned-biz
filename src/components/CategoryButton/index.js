import React from 'react';
import './style.css';

// TODO: Figure out if Button can be incorporated here
export const CategoryButton = (props) => {
    const { IconComponent, name, imagePath } = props;

    return (
        <div className='category-button'>
            <div className='category-button-image' style={{ backgroundImage: `url('${imagePath}')` }}>
                <IconComponent style={{ fontSize: 96 }} />
            </div>
            <div className='category-button-label'>
                {name.toUpperCase()}
            </div>
        </div>
    );
};
