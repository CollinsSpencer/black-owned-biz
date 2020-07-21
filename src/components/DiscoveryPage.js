import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, makeStyles } from '@material-ui/core';
import { Navigation } from '.';
import Assets from '../assets';

const useStyles = makeStyles((theme) => ({
  discoveryPageTitle: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundImage: `url('${Assets.discoveryPageTitleBanner}')`,
    backgroundRepeat: 'no-repeat',
    height: '256px'
  }
}));

export const DiscoveryPage = (props) => {
  const params = useParams();
  const style = useStyles();

  const flexColCC = { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' };

  return (
    <>
      <Navigation {...params} />
      <Container>
        <Box {...flexColCC} my={12} className={style.discoveryPageTitle}>
          <Typography variant='h2' align='center'>{props.title}</Typography>
          <Typography variant='subtitle1' align='center'>{props.subtitle}</Typography>
        </Box>
        {props.children}
      </Container>
    </>
  );
};
