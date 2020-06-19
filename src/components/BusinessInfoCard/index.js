import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';

export const BusinessInfoCard = ({ business }) => {
  const {
    address,
    category,
    city,
    description,
    email,
    facebook,
    name,
    phone,
    state,
    website,
  } = business;

  const AddressButton = address
    ? () => {
        const fullAddress = `${address} ${city}, ${state}`;
        const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          fullAddress
        )}`;
        return (
          <Button
            component={Link}
            href={googleMapsSearchUrl}
            color='inherit'
            startIcon={<BusinessIcon />}
            target='_blank'
          >
            {fullAddress}
          </Button>
        );
      }
    : () => <></>;

  const PhoneButton = phone
    ? () => {
        const phoneLink = `tel:${phone}`;
        return (
          <Button
            component={Link}
            href={phoneLink}
            color='inherit'
            startIcon={<PhoneIcon />}
            target='_blank'
          >
            {phone}
          </Button>
        );
      }
    : () => <></>;

  const EmailButton = email
    ? () => {
        const emailLink = `mailto:${email}`;
        return (
          <Button
            component={Link}
            href={emailLink}
            color='inherit'
            startIcon={<EmailIcon />}
            target='_blank'
          >
            {email}
          </Button>
        );
      }
    : () => <></>;

  const FacebookButton = facebook
    ? () => (
        <Button
          component={Link}
          href={facebook}
          color='inherit'
          startIcon={<FacebookIcon />}
          target='_blank'
        >
          Facebook
        </Button>
      )
    : () => <></>;

  const WebsiteButton = website
    ? () => (
        <Button
          component={Link}
          href={website}
          color='inherit'
          startIcon={<LinkIcon />}
          target='_blank'
        >
          Website
        </Button>
      )
    : () => <></>;

  return (
    <Card>
      <CardContent>
        <Grid container spacing={4} direction='column'>
          <Grid item>
            <CardHeader
              title={<Typography variant='h3'>{name}</Typography>}
              subheader={<Chip size='small' label={category} />}
            />
          </Grid>

          <Divider variant='middle' />

          <Grid item container direction='column' alignItems='flex-start'>
            <AddressButton />
            <PhoneButton />
            <EmailButton />
            <FacebookButton />
            <WebsiteButton />
          </Grid>

          {description && (
            <>
              <Divider variant='middle' />

              <Grid item>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {description}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
