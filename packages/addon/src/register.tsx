import React from 'react';
import { addons, types } from '@storybook/addons';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './constants';
import { Panel } from './components/Panel';

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    render: ({ active, key }) => (
      <Panel key={key} active={!!active} api={api} />
    ),
  });
});
