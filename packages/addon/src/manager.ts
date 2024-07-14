import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, ADDON_TITLE, PANEL_ID } from './constants';
import { Panel } from './Panel';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    match: ({ viewMode }) => viewMode === 'story',
    render: Panel,
  });
});
