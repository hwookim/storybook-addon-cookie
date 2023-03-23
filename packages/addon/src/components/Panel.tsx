import React from 'react';
import { AddonPanel } from '@storybook/components';
import { API } from '@storybook/api';

interface PanelProps {
  active: boolean;
  api: API;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return <AddonPanel {...props}>Cookie Addon!</AddonPanel>;
};
