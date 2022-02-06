# react-rbac

> role based access control for react apps

[![NPM](https://img.shields.io/npm/v/@phyolim/react-rbac.svg)](https://www.npmjs.com/package/@phyolim/react-rbac) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [Demo](https://www.phyolim.dev/react-rbac)

https://www.phyolim.dev/react-rbac

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

Example from demo page:

````tsx
export default function ReactRbacContainer() {
  const permissions = {
    'accounts-management': {
      'Regular User': ['r'],
      'Account Manager': ['r', 'u'],
      'Administrator': ['c', 'r', 'u', 'd'],
    },
  };
  return (
    <RbacProvider permissions={permissions}>
      <RbacDemo />
    </RbacProvider>
  );
}

const RbacComponent = () => {
  const access = useRbac('admin', "accounts-management");

  return (
    <>
      {access.includes("c") && <button type="button">Create</button>}
      <table>
        <thead>
        <tr>
          <th scope="col">Company Name</th>
          <th scope="col">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
        </thead>
        <tbody>
        {companies.map((company) => (
          <tr key={company.name}>
            <td>{company.name}</td>
            <td>
              {access.includes("r") && <a href="#">View</a>}
              {access.includes("u") && <a href="#">Edit</a>}
              {access.includes("d") && <a href="#">Delete</a>}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

```

## License

MIT © [phyolim](https://github.com/phyolim)
````
