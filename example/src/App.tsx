import React from 'react';
import { ExampleComponent, RbacProvider } from 'react-rbac';
import 'react-rbac/dist/index.css';
import { ExampleRbacComponent } from './ExampleRbacComponent';

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

export default App;
