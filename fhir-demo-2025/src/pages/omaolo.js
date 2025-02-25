import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import omaoloLogo from '../images/omaolo.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Omaolo (DigiFinland)</title>;
  return getHead({ title });
};

export default function Omaolo({ location }) {
  const roles = demos.omaolo?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.omaolo.fi/">
          <img src={omaoloLogo} alt="Omaolo" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juha Eerola</h3>
          <p>Product Owner</p>
          <address>
            <a href="mailto:juha.eerola@digifinland.fi">juha.eerola@digifinland.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
