import React, { createContext } from 'react';

type ContextProps<T> = { permissions: T } | null;

export const RbacContext = createContext<ContextProps<unknown>>(null);

export function RbacProvider({
  children,
  permissions,
}: {
  children: any;
  permissions: any;
}) {
  return (
    <RbacContext.Provider value={permissions}>{children}</RbacContext.Provider>
  );
}
