<h1 align="center">Storybook Addon Cookie</h1>

## Features

- Set `document.cookie` for each Storybook.

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

Enable MSW in Storybook by initializing MSW and providing the MSW decorator in `./storybook/preview.js`:

```js
import { cookieDecorator } from 'storybook-addon-cookie';

export const decorators = [cookieDecorator];
```

## Usage

You can pass cookie object into `cookies` parameter.

```jsx
export default {
  component: Example,
  title: 'Example',
}

const Template = () => <Example/>

export const WithCookie = Template.bind({});
WithCookie.parameters = {
  cookies: {
    test: 'TEST!',
  }
}

export const WithOutCookie = Template.bind({});
```

Each Story has independent cookies.