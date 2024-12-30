import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import w2eLogo from '../images/w2e.jpeg';

export function Head() {
  const title = <title>FHIR Demo 2024: W2E</title>;
  return getHead({ title });
};

export default function W2e({ location }) {
  const roles = demos.w2e?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://w2e.fi/">
          <img src={w2eLogo} alt="W2E" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Timo Aaltonen</h3>
          <p>CTO</p>
          <address>
            <a href="mailto:timo.aaltonen@w2e.fi">timo.aaltonen@w2e.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
