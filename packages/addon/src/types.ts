export type Cookie = Record<string, string>;

export type CookieParameter = {
  cookie?: Cookie;
  cookieEncoding?: boolean;
};
