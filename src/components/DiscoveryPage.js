import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';
import { Navigation } from '.';

export const DiscoveryPage = (props) => {
    const params = useParams();

    return (
        <>
            <Navigation {...params} />
            <Container disableGutters>
                <Box my={12}>
                    <Typography variant='h2'>{props.title}</Typography>
                    <Typography variant='h6'>{props.subtitle}</Typography>
                </Box>
                {props.children}
            </Container>
        </>
    );
};
