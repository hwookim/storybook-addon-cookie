import React, { useEffect, useState } from 'react';
import { useGlobals, useParameter } from '@storybook/manager-api';
import Icons from '@storybook/icons';
import { ObjectControl } from '@storybook/blocks';

import { PARAM_ENCODING_KEY, PARAM_KEY } from '../constants';
import { Cookie } from '../types';
import { clearCookies, setCookies } from '../utils';

export const PanelContent: React.FC = () => {
  const defaultCookie = useParameter<Cookie>(PARAM_KEY, null);
  const encoding = useParameter<boolean>(PARAM_ENCODING_KEY, false);

  const [value, setValue] = useState<Cookie>();
  const [globals, updateGlobals] = useGlobals();

  const updateCookieValue = (newValue: Cookie | null) => {
    setValue(newValue ?? {});
    clearCookies();
    if (newValue) {
      setCookies(newValue, encoding);
    }
    updateGlobals({ ...globals });
  };

  useEffect(() => {
    if (!defaultCookie && !value) {
      return;
    }
    updateCookieValue(defaultCookie);
  }, [defaultCookie, encoding]);

  const handleChange = (newValue: Cookie) => {
    updateCookieValue(newValue);
  };

  const handleClear = () => {
    updateCookieValue(null);
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
        value={value}
        theme=""
      />
    </div>
  );
};
