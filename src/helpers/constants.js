import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

export const categories = {
  FOOD_AND_DRINK: {
    name: 'Food and Drink',
    key: 'food_and_drink',
    Icon: (props) => <LocalDiningIcon {...props} />,
  },
  NON_PROFITS: {
    name: 'Nonprofits',
    key: 'nonprofits',
    Icon: (props) => (
      <SvgIcon {...props}>
        <FontAwesomeIcon icon={faHandHoldingHeart} />
      </SvgIcon>
    ),
  },
  RETAIL: {
    name: 'Retail',
    key: 'retail',
    Icon: (props) => <LocalOfferIcon {...props} />,
  },
  SERVICES: {
    name: 'Services',
    key: 'services',
    Icon: (props) => <EmojiPeopleIcon {...props} />,
  },
};

// Source: https://gist.github.com/mshafrir/2646763
export const states = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District Of Columbia',
  FM: 'Federated States Of Micronesia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};
