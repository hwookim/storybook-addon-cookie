<h1 align="center">Storybook Addon Cookie</h1>

<p align="center">
  <img src="../../assets/demo.gif" align="center" alt="demo"/>
</p>

### Support Storybook v8

Starting with storybook-addon-cookie v4.0.0, it supports storybook v8.

storybook v7 -> storybook-addon-cookie v3.x

storybook v6 -> storybook-addon-cookie v2.x

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

Add package to storybook configuration.

```javascript
// .storybook/main.js
module.exports = {
  addons: [
    // ..other addons
    'storybook-addon-cookie',
  ],
};
```

## Usage

You can pass cookie object into `cookie` parameter.

Or control cookie by addon panel.

```jsx
export default {
  component: Example,
  title: 'Example',
};

const Template = () => <Example />;

export const WithCookie = Template.bind({});
WithCookie.parameters = {
  cookie: {
    test: 'TEST!',
  },
};

export const WithOutCookie = Template.bind({});
```

Each Story has independent cookie.

### Encoding cookie

If you want to encode the cookies on the panel, you can use the `cookieEncoding` option.

```jsx
export const WithEncodedCookie: Story = {
  parameters: {
    cookie: {
      test: 'TEST!',
    },
    cookieEncoding: true,
  },
};
```

This option defaults to `false`.

You can use this option after `v3.1.0`

### Preserve existing cookies

If you want to preserve existing cookies, you can use the `cookiePreserve` option.

Preserve existing cookies, but only manipulate the ones you specify via parameters.

```jsx
export const PreserveCookies: Story = {
  parameters: {
    cookie: {
      test: 'TEST!',
    },
    cookiePreserve: true,
  },
};
```

This option defaults to `false`.

You can use this option after `v3.2.0`
