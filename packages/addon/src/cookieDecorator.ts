import { DecoratorFunction, StoryContext } from '@storybook/addons';
import { CookieParameter } from './types';
import { clearCookies, setCookies } from './utils';
import { useState } from 'react';

export interface DecoratorContext extends StoryContext {
  parameters: StoryContext['parameters'] & CookieParameter;
}

export const cookieDecorator: DecoratorFunction = (
  storyFn,
  { parameters }: DecoratorContext,
) => {
  const [flag, setFlag] = useState<boolean>(true);

  if (flag) {
    clearCookies();
    if (parameters && parameters.cookie) {
      setCookies(parameters.cookie);
    }
    setFlag(false);
  }

  return storyFn();
};
