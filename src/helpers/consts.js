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
