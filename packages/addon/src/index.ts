export * from './cookieDecorator';

export function config(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('./preview')];
}

export function managerEntries(entry: unknown[] = []): unknown[] {
  return [...entry, require.resolve('./manager')];
}
