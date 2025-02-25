import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import glucostratusLogo from '../images/glucostratus.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Glucostratus</title>;
  return getHead({ title });
};

export default function Glucostratus({ location }) {
  const roles = demos.glucostratus?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.glucostratus.com/">
          <img src={glucostratusLogo} alt="Glucostratus" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>The aim is to implement the <strong>SMART App Launch</strong> from <Link
      to="../una">Una</Link>.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Pekka Mäkelä</h3>
          <p>CEO, Co-Founder</p>
          <address>
            <a href="mailto:pekka.makela@glucostratus.com">pekka.makela@glucostratus.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
