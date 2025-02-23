import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import systematicLogo from '../images/systematic.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Systematic</title>;
  return getHead({ title });
};

export default function Systematic({ location }) {
  const roles = demos.systematic.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://systematic.com/">
          <img src={systematicLogo} alt="Systematic" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
        <p>
          <a href="https://systematic.com/da-dk/brancher/healthcare/hospital/columna-cis/">Columna
          CIS</a> and <a
          href="https://systematic.com/da-dk/brancher/healthcare/kommune/columna-cura/">Columna
          Cura</a> are electronic patient records used at hospitals and in municipalities,
          respectively. The systems are developed by Systematic and support the daily work for many
          healthcare professionals.
        </p>
        <p>
          They use different versions of FHIR and RESTful, and do not inherit from DK Core.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Thomas Nordild</h3>
          <address>
            <a href="mailto:thomas.nordild@systematic.com">thomas.nordild@systematic.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
