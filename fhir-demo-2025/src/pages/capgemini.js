import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import capgeminiLogo from '../images/capgemini.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Capgemini</title>;
  return getHead({ title });
};

export default function Capgemini({ location }) {
  const roles = demos.capgemini.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.capgemini.com/dk-en/">
          <img src={capgeminiLogo} alt="Capgemini" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
        <p>
          <a href="https://www.capgemini.com/dk-en/services/digital-sundhed/">Bookplan</a>,
          developed by Capgemini, is a booking system and overview of appointment for healthcare
          professionals, and it further has a user interface for patients and relatives.
        </p>
        <p>
          Bookplan is used in three of the five Danish regions to make appointments at hospitals.
          It has a FHIR-based integration for several external systems, where approximately 20 FHIR
          profiles are used. However, none of the profiles inherits from DK Core, as DK Core wasn't
          established at the time Bookplan was developed.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Kim Frederiksen</h3>
          <address>
            <a href="mailto:kim.frederiksen@capgemini.com">kim.frederiksen@capgemini.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
