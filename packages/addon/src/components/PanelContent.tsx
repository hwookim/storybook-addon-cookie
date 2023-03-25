import React, { useState } from 'react';
import { Cookie } from '../types';
import { ObjectControl } from '@storybook/components';
import { clearCookies, setCookies } from '../utils';
import { useGlobals, useParameter } from '@storybook/api';
import { PARAM_KEY } from '../constants';

const PanelContent: React.FC = () => {
  const cookie = useParameter<Cookie>(PARAM_KEY, {});

  const [value, setValue] = useState<Cookie>();
  const [_, updateGlobals] = useGlobals();

  const handleChange = (newValue: Cookie) => {
    clearCookies();
    setCookies(newValue);
    setValue(newValue);
    updateGlobals({});
  };

  return (
    <ObjectControl
      name="cookie"
      onChange={handleChange}
      theme=""
      value={value || cookie}
    />
  );
};

export default PanelContent;
