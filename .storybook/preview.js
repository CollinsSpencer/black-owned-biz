import React from 'react';
import { MemoryRouter } from 'react-router';
import { fakeAuthDecorator } from './fakeAuthDecorator';
import { themeDecorator } from './themeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  panelPosition: 'right',
};
export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
  fakeAuthDecorator,
  themeDecorator,
];
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  user: {
    name: 'User',
    description: 'Global user',
    defaultValue: 'user',
    toolbar: {
      icon: 'lock',
      items: ['user', 'admin'],
    },
  },
  isAuthLoading: {
    name: 'Auth Loading State',
    description: 'Global auth loading status',
    defaultValue: false,
    toolbar: {
      icon: 'hourglass',
      items: [
        { value: true, title: 'True' },
        { value: false, title: 'False' },
      ],
    },
  },
};
