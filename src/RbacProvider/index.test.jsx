import React from 'react';
import { RbacProvider } from './index';
import { render } from '@testing-library/react';

const permissions = {
  regularSettings: {
    user: ['r', 'u'],
    admin: ['r', 'u'],
  },
  advancedSettings: { user: ['r'], admin: ['u', 'r'] },
};
describe('Rbac provider renders child', () => {
  it('renders child', () =>
    render(
      <RbacProvider permissions={permissions}>
        <div>Hello</div>
      </RbacProvider>
    ));
});
