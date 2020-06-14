import React from 'react';
import { BusinessInfoCard } from './index';

export default { title: 'Components' };

const business = {
  id: 3,
  name: '72Select',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  address: '2810 N 48th St',
  city: 'Lincoln',
  state: 'NE',
  facebook: 'https://www.facebook.com/72Select-Barber-Shop-328759440541034',
  category: 'beauty',
  lastUpdated: 'timestamp',
  created: 'timestamp',
  phone: '4027300703',
  email: '72selectbarbershop@gmail.com',
  website: 'https://72select-barber-shop.business.site/',
};

export const BusinessInfoCardDemo = () => {
  return <BusinessInfoCard business={business} />;
};
