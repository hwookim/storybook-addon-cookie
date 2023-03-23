import React from 'react';
import { ComponentStory } from '@storybook/react';

import PanelContent from './PanelContent';

export default {
  component: PanelContent,
  title: 'PanelContent',
};

const Template: ComponentStory<typeof PanelContent> = (args) => (
  <PanelContent {...args} />
);

export const Default = Template.bind({});
