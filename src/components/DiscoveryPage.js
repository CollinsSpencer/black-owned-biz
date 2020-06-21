import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import { Navigation } from '.';
import Assets from '../assets';

const useStyles = makeStyles((theme) => ({
    discoveryPageTitle: {
        color: theme.palette.common.black,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundImage: `url('${Assets.discoveryPageTitleBanner}')`,
        backgroundRepeat: 'no-repeat',
        height: '256px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

export const DiscoveryPage = (props) => {
    const params = useParams();
    const style = useStyles();

    return (
        <>
            <Navigation {...params} />
            <Container>
                <Box my={12} className={style.discoveryPageTitle}>
                    <Typography variant='h1' align='center'>{props.title}</Typography>
                    <Typography variant='h6' align='center'>{props.subtitle}</Typography>
                </Box>
                {props.children}
            </Container>
        </>
    );
};
