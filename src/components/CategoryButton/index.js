import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    categoryButton: {
        padding: 0,
        overflow: 'hidden'
    },
    categoryButtonImage: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: props => `url('${props.imagePath}')`
    },
    categoryButtonIcon: {
        fontSize: '6rem'
    }
}));

export const CategoryButton = (props) => {
    const { IconComponent, name, code } = props;
    const style = useStyles(props);
    const { url } = useRouteMatch();

    // TODO: Incorporate these into a larger design system possibly maybe
    const flexCol = { display: 'flex', flexDirection: 'column' };
    const flexRowCC = { display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' };

    return (
        <Button component={RouterLink} to={`${url}/${code}`} fullWidth variant='contained' color='secondary' className={style.categoryButton}>
            <Box { ...flexCol } flexGrow={1} overflow='hidden' height='256px'>
                <Box { ...flexRowCC } flexGrow={3} className={style.categoryButtonImage}>
                    <IconComponent className={style.categoryButtonIcon} />
                </Box>
                <Box { ...flexRowCC } flexGrow={1}>
                    <Typography variant='button'>{name.toUpperCase()}</Typography>
                </Box>
            </Box>
        </Button>
    );
};
