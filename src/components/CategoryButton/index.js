import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    categoryButton: {
        display: 'flex',
        flexDirection: 'column',
        width: '512px',
        height: '256px'
    },
    categoryButtonImage: {
        height: '192px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px 10px 0 0',
        background: theme.palette.common.black,
        color: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: props => `url('${props.imagePath}')`
    },
    categoryButtonIcon: {
        fontSize: '96px'
    },
    categoryButtonLabel: {
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.common.black,
        color: theme.palette.common.white,
        borderRadius: '0 0 10px 10px',
        fontSize: '16px'
    }
}));

// TODO: Add hover styles
export const CategoryButton = (props) => {
    const { IconComponent, name, code } = props;
    const style = useStyles(props);
    const { url } = useRouteMatch();

    return (
        <Link component={RouterLink} to={`${url}/${code}`}>
            <div className={style.categoryButton}>
                <div className={style.categoryButtonImage}>
                    <IconComponent className={style.categoryButtonIcon} />
                </div>
                <div className={style.categoryButtonLabel}>
                    {name.toUpperCase()}
                </div>
            </div>
        </Link>
    );
};
