import { Cookie } from './types';

export function setCookie(name: string, value: string, encoding?: boolean) {
  let cookieValue;
  if (typeof value === 'string') {
    cookieValue = encoding ? encodeURIComponent(value) : value;
  } else {
    cookieValue = JSON.stringify(value);
    encoding && (cookieValue = encodeURIComponent(cookieValue));
  }
  document.cookie = `${name}=${cookieValue};`;
}

export function setCookies(cookie: Cookie, encoding?: boolean) {
  const entries: [string, string][] = Object.keys(cookie).map((name) => [
    name,
    cookie[name],
  ]);
  entries.forEach(([name, value]) => setCookie(name, value, encoding));
}

export function clearCookies() {
  const cookie = document.cookie.split(';');

  cookie.forEach((cookie) => {
    const equalPos = cookie.indexOf('=');
    const name = equalPos > -1 ? cookie.substring(0, equalPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });
}
