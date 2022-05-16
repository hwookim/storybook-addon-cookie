<h1 align="center">Storybook Addon Cookie</h1>

## Features

- Set `document.cookie` for each Storybook.

[Live demo](https://www.chromatic.com/library?appId=6208f3782689be003ab39da3)

## Installing and Setup

### Install addon

With npm:

```sh
npm i storybook-addon-cookie -D
```

Or with yarn:

```sh
yarn add storybook-addon-cookie -D
```

### Configure the addon

Provide `cookieDecorator` to Storybook by editing `./storybook/preview.js`:

```js
import { cookieDecorator } from 'storybook-addon-cookie';

export const decorators = [cookieDecorator];
```

## Usage

You can pass cookie object into `cookie` parameter.

```jsx
export default {
  component: Example,
  title: 'Example',
}

const Template = () => <Example/>

export const WithCookie = Template.bind({});
WithCookie.parameters = {
  cookie: {
    test: 'TEST!',
  }
}

export const WithOutCookie = Template.bind({});
```

Each Story has independent cookie.
