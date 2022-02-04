import { useContext } from 'react';
import { RbacContext } from '../RbacProvider';

export const useRbac = (role: string, permission: string) => {
  const permissions = useContext(RbacContext);
  return permissions?.[permission]?.[role];
};
