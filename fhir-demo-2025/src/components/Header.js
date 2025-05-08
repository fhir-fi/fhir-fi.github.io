import * as React from 'react';
import { Link } from 'gatsby';

export const Header = ({ children, ...rest }) => {
  return (
      <nav id="headerNav">
        <ul>
          <li>
            <Link to="/">
              FHIR Demo 2025
            </Link>
          </li>
          <li>
            <Link to="/#participants">
              Participants
            </Link>
          </li>
          <li>
            <Link to="/#events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/#participate">
              Get Listed!
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  );
};