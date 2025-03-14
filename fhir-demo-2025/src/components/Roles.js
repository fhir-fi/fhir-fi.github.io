import * as React from "react";

import Role from "./Role";
import RoleList from "../components/RoleList";
import { demos } from '../config/data';


export const availableRoles = RoleList.filter(
  f => Object.values(demos).some(d => d.roles.some(s => s === f))
);

export const allRolesSelected = RoleList.reduce((o, s) => ({ ...o, [s]: true }), {});

export const RolesContext = React.createContext({});

export function RolesContextProvider({
  children = <React.Fragment />,
  //  initialState = allRolesSelected,
  initialState = {},
  location
}) {

  const [selectedRoles, setRoles] = React.useState(initialState);

  function setSelectedRoles(roles) {
    if (Object.keys(roles).lenght === 0) {
      setRoles(allRolesSelected);
    } else {
      setRoles(roles);
    }
  }

  const state = Object.freeze({
    selectedRoles,
    setSelectedRoles,
  });

  // Init roles from the URL...
  React.useEffect(() => {
    const { search } = location;
    const rolesUrlParam = search.match(/[?&]roles=([^&]+)/) || [];
    const decoded = decodeURIComponent(rolesUrlParam[1] || '');
    if (decoded.length) {
      const urlState = decoded.split(',').reduce((o, f) => {
        o[f] = true;
        return o;
      }, {});
      setRoles(urlState);
    } else {
      setRoles({});
    }
  }, [location, setRoles]);

  return (
    <RolesContext.Provider value={state}>
      {children}
    </RolesContext.Provider>
  );
};

export function RoleFilter() {
  return (
    <>
      <hr />
      <h3>Filter demos by roles:</h3>
      <ul className="roles">
        {availableRoles.map(f => (
          <React.Fragment key={f}><Role role={f} />{' '}</React.Fragment>
        ))}
      </ul>
      <hr />
    </>
  );
}

export default function Roles({ list, targetPage, targetFragment }) {
  if (!list?.length) {
    return null;
  }
  return (
    <ul className="hashtags" title="Hashtags">
      {list.map(f => (
      <React.Fragment key={f}>
        <Role role={f} targetPage={targetPage} targetFragment={targetFragment}/>{' '}
      </React.Fragment>))}
    </ul>
  );
};
