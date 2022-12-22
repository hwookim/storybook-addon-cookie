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
  const entries: [string, string][] = Object.keys(cookies).map((key) => [
    key,
    cookies[key],
  ]);
  for (const [key, value] of entries) {
    document.cookie = `${key}=${value}`;
  }
}

function clearCookies() {
  const cookies = document.cookie.split(';');

  cookies.forEach((cookie) => {
    const equalPos = cookie.indexOf('=');
    const key = equalPos > -1 ? cookie.substring(0, equalPos) : cookie;
    document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
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
