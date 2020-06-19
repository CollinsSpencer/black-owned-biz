import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Link } from '@material-ui/core';
import './style.css';

// TODO: Figure out if Button can be incorporated here
export const CategoryButton = (props) => {
    const { IconComponent, name, imagePath, code } = props;
    const { url } = useRouteMatch();

    return (
        <Link component={RouterLink} to={`${url}/${code}`}>
            <div className='category-button'>
                <div className='category-button-image' style={{ backgroundImage: `url('${imagePath}')` }}>
                    <IconComponent style={{ fontSize: 96 }} />
                </div>
                <div className='category-button-label'>
                    {name.toUpperCase()}
                </div>
            </div>
        </Link>
    );
};
