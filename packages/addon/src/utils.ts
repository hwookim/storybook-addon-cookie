import { Cookie } from './types';

export function setCookie(name: string, value: string) {
  if (typeof value === 'string') {
    document.cookie = `${name}=${value};`;
  } else {
    document.cookie = `${name}=${JSON.stringify(value)};`;
  }
}

export function setCookies(cookie: Cookie) {
  const entries: [string, string][] = Object.keys(cookie).map((name) => [
    name,
    cookie[name],
  ]);
  entries.forEach(([name, value]) => setCookie(name, value));
}

export function clearCookies() {
  const cookie = document.cookie.split(';');

  cookie.forEach((cookie) => {
    const equalPos = cookie.indexOf('=');
    const name = equalPos > -1 ? cookie.substring(0, equalPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
}
