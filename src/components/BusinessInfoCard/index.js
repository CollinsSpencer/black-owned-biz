import React from 'react';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';

export const BusinessInfoCard = (props) => {
  const {
    address,
    city,
    description,
    email,
    facebook,
    name,
    phone,
    state,
    website,
    lastUpdated
  } = props.business;

  const AddressButton = () => {
    const fullAddress = `${address} ${city}, ${state}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

    return (
      <Button component={Link} href={url} startIcon={<BusinessIcon />} target='_blank' disabled={!address}>
        {address ? fullAddress : 'No address provided'}
      </Button>
    );
  };

  const PhoneButton = () => {
    const phoneLink = `tel:${phone}`;

    return (
      <Button component={Link} href={phoneLink} startIcon={<PhoneIcon />} target='_blank' disabled={!phone}>
        {phone ? phone : 'No phone number provided'}
      </Button>
    );
  };

  const EmailButton = () => {
    const emailLink = `mailto:${email}`;

    return (
      <Button component={Link} href={emailLink} startIcon={<EmailIcon />} target='_blank' disabled={!email}>
        {email ? 'Email' : 'No email provided'}
      </Button>
    );
  };

  const FacebookButton = () => (
    <Button component={Link} href={facebook} startIcon={<FacebookIcon />} target='_blank' disabled={!facebook}>
      {facebook ? 'Facebook profile' : 'No Facebook profile provided'}
    </Button>
  );

  const WebsiteButton = () => (
    <Button component={Link} href={website} startIcon={<LinkIcon />} target='_blank' disabled={!website}>
      {website ? 'Website' : 'No website provided'}
    </Button>
  );

  return (
    <Grid container direction='column'>
      <Grid item>
        <Typography variant='subtitle2'>Last Updated: {new Date(lastUpdated.seconds * 1000).toLocaleDateString()}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='h3'>{name}</Typography>
      </Grid>
      <Grid item container>
        <Grid item sm={6} xs={12}><AddressButton /></Grid>
        <Grid item sm={6} xs={12}><PhoneButton /></Grid>
        <Grid item sm={6} xs={12}><EmailButton /></Grid>
        <Grid item sm={6} xs={12}><FacebookButton /></Grid>
        <Grid item sm={6} xs={12}><WebsiteButton /></Grid>
      </Grid>
      <Grid item>
        <Typography variant='body1'>{description ? description : 'No description provided'}</Typography>
      </Grid>
    </Grid>
  )
};
