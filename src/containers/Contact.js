import React from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { Page } from '../components';
import Assets from '../assets';

export const Contact = () => {
  return (
    <Page>
      <Box my={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Typography variant='h4' style={{ fontWeight: 'bold' }}>
              We'd love to hear from you! If you have any ideas for how we can
              improve the site, let us know at rrgahan@gmail.com.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img
              src={Assets.contactBanner}
              alt="Mary Ellen's Food Truck"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};
