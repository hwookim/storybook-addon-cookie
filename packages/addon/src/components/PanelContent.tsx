import React, { useState } from 'react';
import { useGlobals, useParameter, useStorybookState } from '@storybook/api';
import { IconButton, Icons, ObjectControl } from '@storybook/components';

import { PARAM_KEY } from '../constants';
import { Cookie } from '../types';
import { clearCookies, setCookies } from '../utils';

const PanelContent: React.FC = () => {
  const { path } = useStorybookState();
  const defaultCookie = useParameter<Cookie>(PARAM_KEY, {});

  const [story, setStory] = useState<string>(path);
  const [value, setValue] = useState<Cookie>();
  const [_, updateGlobals] = useGlobals();

  if (path !== story && value) {
    setStory(path);
    setValue(defaultCookie);
  }

  const handleChange = (newValue: Cookie) => {
    clearCookies();
    setCookies(newValue);
    setValue(newValue);
    updateGlobals({});
  };

  const handleClear = () => {
    clearCookies();
    setValue({});
    updateGlobals({});
  };

  return (
    <div style={{ padding: '10px 20px' }}>
      <IconButton style={{ marginBottom: '5px' }} onClick={handleClear}>
        <Icons style={{ marginRight: '5px' }} icon="trash" />
        Clear All Cookies
      </IconButton>
      <ObjectControl
        name="cookie"
        onChange={handleChange}
        value={value || defaultCookie}
        theme=""
      />
    </div>
  );
};

export default PanelContent;
