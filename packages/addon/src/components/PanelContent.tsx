import React, { useState } from 'react';
import {
  useGlobals,
  useParameter,
  useStorybookState,
} from '@storybook/manager-api';
import { Icons } from '@storybook/components';
import { ObjectControl } from '@storybook/blocks';

import { PARAM_KEY } from '../constants';
import { Cookie } from '../types';
import { clearCookies, setCookies } from '../utils';

export const PanelContent: React.FC = () => {
  const { path } = useStorybookState();
  const defaultCookie = useParameter<Cookie>(PARAM_KEY, {});

  const [story, setStory] = useState<string>(path);
  const [value, setValue] = useState<Cookie>();
  const [globals, updateGlobals] = useGlobals();

  if (path !== story && value) {
    setStory(path);
    setValue(defaultCookie);
  }

  const handleChange = (newValue: Cookie) => {
    clearCookies();
    setCookies(newValue);
    setValue(newValue);
    updateGlobals({ ...globals });
  };

  const handleClear = () => {
    clearCookies();
    setValue({});
    updateGlobals({ ...globals });
  };

  return (
    <div style={{ padding: '10px 20px' }}>
      <button style={{ marginBottom: '5px' }} onClick={handleClear}>
        <Icons style={{ marginRight: '5px' }} icon="trash" />
        Clear All Cookies
      </button>
      <ObjectControl
        name="cookie"
        onChange={handleChange}
        value={value || defaultCookie}
        theme=""
      />
    </div>
  );
};
