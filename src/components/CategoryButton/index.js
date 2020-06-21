import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Link, makeStyles, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    categoryButton: {
        width: '512px',
        height: '256px'
    },
    categoryButtonImage: {
        height: '192px',
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
        background: theme.palette.common.black,
        color: theme.palette.common.white,
        borderRadius: '0 0 10px 10px'
    }
}));

// TODO: Add hover styles
export const CategoryButton = (props) => {
    const { IconComponent, name, code } = props;
    const style = useStyles(props);
    const { url } = useRouteMatch();

    // TODO: Incorporate these into a larger design system possibly maybe
    const flexCol = { display: 'flex', flexDirection: 'column' };
    const flexRowCC = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' };

    return (
        <Link component={RouterLink} to={`${url}/${code}`}>
            <Box { ...flexCol } className={style.categoryButton}>
                <Box { ...flexRowCC } className={style.categoryButtonImage}>
                    <IconComponent className={style.categoryButtonIcon} />
                </Box>
                <Box { ...flexRowCC } className={style.categoryButtonLabel}>
                    <Typography variant='h6'>{name.toUpperCase()}</Typography>
                </Box>
            </Box>
        </Link>
    );
};
