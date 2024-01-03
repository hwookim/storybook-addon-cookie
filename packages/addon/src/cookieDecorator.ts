import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from '@storybook/types';
import { useState } from '@storybook/preview-api';

import { CookieParameter } from './types';
import { clearCookies, setCookies } from './utils';
import { PARAM_KEY, PARAM_PRESERVE_KEY } from './constants';

export interface DecoratorContext extends StoryContext<Renderer> {
  parameters: StoryContext['parameters'] & CookieParameter;
}

export const cookieDecorator = (
  storyFn: StoryFunction<Renderer>,
  { parameters }: DecoratorContext,
) => {
  const [flag, setFlag] = useState<boolean>(true);

  if (flag) {
    setFlag(false);
    if (!parameters) return storyFn();

    if (parameters[PARAM_PRESERVE_KEY] !== true) {
      clearCookies();
    }

    if (parameters[PARAM_KEY]) {
      setCookies(parameters.cookie, parameters.cookieEncoding);
    }
  }

  return storyFn();
};
