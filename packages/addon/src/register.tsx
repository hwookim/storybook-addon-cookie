import React from 'react';
import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './constants';
import PanelContent from './components/PanelContent';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    render: ({ active, key }) => (
      <AddonPanel key={key} active={!!active}>
        <PanelContent />
      </AddonPanel>
    ),
  });
});
