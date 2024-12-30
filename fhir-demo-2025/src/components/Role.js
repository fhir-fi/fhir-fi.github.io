import * as React from "react";
import { Link } from "gatsby";
import { RolesContext } from "./Roles";

export default function Role({ role, targetPage = '/', targetFragment = '#participants' }) {
  const { selectedRoles, setSelectedRoles } = React.useContext(RolesContext);
  let newRoles;

  if (selectedRoles[role]) {
    const { [role]: deleted, ...rest } = selectedRoles;
    newRoles = { ...rest };
  } else {
    newRoles = {
      ...selectedRoles,
      [role]: true,
    };
  }

  const roleList = Object.keys(newRoles);
  const roleSearch = roleList.length
  ? `?roles=${encodeURIComponent(roleList.join(','))}`
  : '';

  return (
    <Link
      className={`${selectedRoles[role] ? 'selected ' : ''}role`}
      onClick={() => {
        setSelectedRoles(newRoles);
      }}
      to={`${targetPage}${roleSearch}${targetFragment}`}
    >
      #{role}
    </Link>
  );
}