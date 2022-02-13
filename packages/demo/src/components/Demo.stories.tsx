import React from 'react';
import Demo from './Demo';
import { ComponentStory } from '@storybook/react';

export default {
  component: Demo,
  title: 'Demo',
};

const Template: ComponentStory<typeof Demo> = () => <Demo />;

export const WithCookie = Template.bind({});
WithCookie.parameters = {
  cookie: {
    test: 'TEST!',
  },
};
export const WithOutCookie = Template.bind({});
