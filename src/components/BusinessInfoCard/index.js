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
        {email ? email : 'No email provided'}
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
      {website ? website : 'No website provided'}
    </Button>
  );

  return (
    <Grid container>
      <Grid item>
        <Typography variant='h1'>{name}</Typography>
      </Grid>
      <Grid item container>
        <Grid item sm={6} xs={12}><AddressButton /></Grid>
        <Grid item sm={6} xs={12}><PhoneButton /></Grid>
        <Grid item sm={6} xs={12}><EmailButton /></Grid>
        <Grid item sm={6} xs={12}><FacebookButton /></Grid>
        <Grid item sm={6} xs={12}><WebsiteButton /></Grid>
      </Grid>
      <Grid item>
        {description ? description : 'No description provided'}
      </Grid>
    </Grid>
  )
};
