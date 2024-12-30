import * as React from 'react';
import { RolesContextProvider } from './src/components/Roles';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <RolesContextProvider {...props}>
      {element}
    </RolesContextProvider>
  );
};
