import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';

export function Head() {
  const title = <title>FHIR Demo 2025: BSA</title>;
  return getHead({ title });
};

export default function BSA({ location }) {
  const roles = demos.bsa.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>BSA</h1>
      <Roles list={roles} />
      <section className="intro">
      <p>
        Bed-side application (BSA) for colorectal cancer is developed by Center for Surgical
        Science in Region Zealand and DTU. The BSA includes an AI-model to assess risks of
        readmission, complications and mortality and is trained on data from Danish registries.
      </p>
      <p>
        FHIR API's are used to get data from the hospital's electronic patient record into the BSA,
        to create an individual risk profile for the patient.
      </p>
      <p>
        The BSA does not use profiles from DK Core.
      </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3></h3>
          <address>
            <a href="https://centerforsurgicalscience.dk/suh/">https://centerforsurgicalscience.dk/suh/</a>
            <br />
            <a href="https://www.dtu.dk/">https://www.dtu.dk/</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
