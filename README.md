# react-rbac

> role based access control for react apps

[![NPM](https://img.shields.io/npm/v/@phyolim/react-rbac.svg)](https://www.npmjs.com/package/@phyolim/react-rbac) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @phyolim/react-rbac
```

## Usage

Define permissions config in context provider.

```tsx
const App = () => {
  const permissions = {
    regularSettings: {
      user: ['r', 'u'],
      admin: ['r', 'u'],
    },
    advancedSettings: { user: ['r'], admin: ['u', 'r'] },
  };

  return (
    <RbacProvider permissions={permissions}>
      <ExampleRbacComponent />
    </RbacProvider>
  );
};
```


At the component level, you can use `useRbac` hook to get permissions.
```tsx
export const ExampleRbacComponent = () => {
  const options = {
    undefined: <div>You have no access</div>,
    null: <div>You have no access</div>,
    [['r'].toString()]: <div>You have read only access</div>,
    [['r', 'u'].toString()]: <div>You have read and write access</div>,
  };
  const access = useRbac('admin', 'advancedSettings');

  return options[access.sort()];
};
```

## License

MIT © [phyolim](https://github.com/phyolim)
