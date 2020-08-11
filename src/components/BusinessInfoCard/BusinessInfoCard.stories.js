import React from 'react';
import BusinessInfoCard from '.';

export default { title: 'Components' };

const business = {
  address: '2810 N 48th St',
  category: 'Service',
  city: 'Lincoln',
  created: 'timestamp',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  email: '72selectbarbershop@gmail.com',
  facebook: 'https://www.facebook.com/72Select-Barber-Shop-328759440541034',
  id: 3,
  lastUpdated: 'timestamp',
  name: '72Select',
  phone: '4027300703',
  state: 'NE',
  website: 'https://72select-barber-shop.business.site/',
};

export const BusinessInfoCardDemo = () => {
  return <BusinessInfoCard business={business} />;
};
