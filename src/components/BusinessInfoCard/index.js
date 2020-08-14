import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Link, Typography } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';

const BusinessInfoCard = ({ business }) => {
  const {
    address,
    city,
    description,
    email,
    facebook,
    lastUpdated,
    name,
    phone,
    state,
    website,
  } = business;

  const AddressButton = () => {
    const fullAddress = `${address} ${city}, ${state}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      fullAddress,
    )}`;

    return address ? (
      <Button
        component={Link}
        href={url}
        startIcon={<BusinessIcon />}
        target="_blank"
      >
        {address}
      </Button>
    ) : (
      <></>
    );
  };

  const PhoneButton = () => {
    const phoneLink = `tel:${phone}`;
    return phone ? (
      <Button
        component={Link}
        href={phoneLink}
        startIcon={<PhoneIcon />}
        target="_blank"
      >
        {phone}
      </Button>
    ) : (
      <></>
    );
  };

  const EmailButton = () => {
    return email ? (
      <Button
        component={Link}
        href={`mailto:${email}`}
        startIcon={<EmailIcon />}
        target="_blank"
      >
        Email
      </Button>
    ) : (
      <></>
    );
  };

  const FacebookButton = () => {
    return facebook ? (
      <Button
        component={Link}
        href={facebook}
        startIcon={<FacebookIcon />}
        target="_blank"
      >
        Facebook profile
      </Button>
    ) : (
      <></>
    );
  };

  const WebsiteButton = () => {
    return website ? (
      <Button
        component={Link}
        href={website}
        startIcon={<LinkIcon />}
        target="_blank"
      >
        Website
      </Button>
    ) : (
      <></>
    );
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="subtitle2">
          Last Updated:{' '}
          {new Date(lastUpdated._seconds * 1000).toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      <Grid item container>
        <Grid item xs={12}>
          <AddressButton />
        </Grid>
        <Grid item xs={12}>
          <PhoneButton />
        </Grid>
        <Grid item xs={12}>
          <EmailButton />
        </Grid>
        <Grid item xs={12}>
          <FacebookButton />
        </Grid>
        <Grid item xs={12}>
          <WebsiteButton />
        </Grid>
      </Grid>
      {description && (
        <Grid item>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

BusinessInfoCard.propTypes = {
  business: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    facebook: PropTypes.string,
    lastUpdated: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    state: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
};

export default BusinessInfoCard;
