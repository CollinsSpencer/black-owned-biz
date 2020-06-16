import React from 'react';
import { Page } from '../components';
import { Box, Typography, Grid } from '@material-ui/core';
import Picture from "../maryellens.jpg";

export const Contact = () => {
  return (
    <Page>
      <Box my={12}>
        <Grid container spacing={3}>
            <Grid item xs>
                <Typography variant='h4' style={{ fontWeight: 'bold' }}>We'd love to hear from you! If you have any ideas for how we can improve the site, let us know at rrgahan@gmail.com.</Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={Picture} alt="Mary Ellen's Food Truck" width="600"/>
            </Grid>
        </Grid>
      </Box>
    </Page>
  );
};