import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/hl7-sweden.png'

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Sweden</title>;
  return getHead({ title });
};

export default function Hl7Sweden({ location }) {
  const roles = demos['hl7-sweden'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.se/"><img src={logo} alt="HL7 Sweden" /></a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>
          See the current activities on the <a href="https://hl7.se/">HL7 Sweden home page</a>.
        </p>
      </section>
    </Demo>
  );
};
