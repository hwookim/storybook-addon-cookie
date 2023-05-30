export * from './cookieDecorator';

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}

export function config(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('./preview')];
}

export function managerEntries(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('./manager')];
}
