import * as React from 'react';

export const ExampleContainer = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <div>{children}</div>;
};
