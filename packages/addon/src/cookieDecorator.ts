import type {
  Renderer,
  PartialStoryFn as StoryFunction,
  StoryContext,
} from '@storybook/types';
import { useState } from '@storybook/preview-api';

import { CookieParameter } from './types';
import { clearCookies, setCookies } from './utils';

export interface DecoratorContext extends StoryContext<Renderer> {
  parameters: StoryContext['parameters'] & CookieParameter;
}

export const cookieDecorator = (
  storyFn: StoryFunction<Renderer>,
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
