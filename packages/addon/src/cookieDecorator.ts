import { DecoratorFunction, StoryContext } from '@storybook/addons';

export type Cookies = {
  [keys in string]: string;
};

export type DecoratorParameters = {
  cookie?: Cookies;
};

export interface DecoratorContext extends StoryContext {
  parameters: StoryContext['parameters'] & DecoratorParameters;
}

function setCookies(cookies: Cookies) {
  for (const [key, value] of Object.entries(cookies)) {
    document.cookie = `${key}=${value}`;
  }
}

function clearCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

export const cookieDecorator: DecoratorFunction = (
  storyFn,
  { parameters }: DecoratorContext,
) => {
  clearCookies();
  if (parameters && parameters.cookie) {
    setCookies(parameters.cookie);
  }
  return storyFn();
};
