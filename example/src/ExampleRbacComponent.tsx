import { useRbac } from 'react-rbac';
import React from 'react';

export const ExampleRbacComponent = () => {
  const options = {
    undefined: <div>You have no access</div>,
    null: <div>You have no access</div>,
    [['r'].toString()]: <div>You have read only access</div>,
    [['r', 'u'].toString()]: <div>You have read and write access</div>,
  };
  const access = useRbac('admin', 'advancedSettings');

  console.log(access);
  return options[access.sort()];
};
