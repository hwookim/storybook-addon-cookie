import React, { useEffect, useState } from 'react';
import {
  useGlobals,
  useParameter,
  useStorybookState,
} from '@storybook/manager-api';
import Icons from '@storybook/icons';
import { ObjectControl } from '@storybook/blocks';

import { PARAM_ENCONDING_KEY, PARAM_KEY } from '../constants';
import { Cookie } from '../types';
import { clearCookies, setCookies } from '../utils';

export const PanelContent: React.FC = () => {
  const { path } = useStorybookState();
  const defaultCookie = useParameter<Cookie>(PARAM_KEY, {}); // TODO: Doesn't work on initial load
  const encoding = useParameter<boolean>(PARAM_ENCONDING_KEY, false);

  const [story, setStory] = useState<string>();
  const [value, setValue] = useState<Cookie>();
  const [globals, updateGlobals] = useGlobals();

  const initCookie = () => {
    setStory(path);
    setValue(defaultCookie);
    clearCookies();
    setCookies(defaultCookie, encoding);
  };

  useEffect(() => {
    if (story !== path) {
      initCookie();
    }
  }, [path, story]);

  const handleChange = (newValue: Cookie) => {
    clearCookies();
    setCookies(newValue, encoding);
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
        <Icons.TrashIcon style={{ marginRight: '5px' }} />
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
