import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/hl7-norway.png';

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Norway</title>;
  return getHead({ title });
};

export default function Hl7Norway({ location }) {
  const roles = demos['hl7-norway'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1><a href="https://hl7.no/"><img src={logo} alt="HL7 Norway" /></a></h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>
          See the current activities on the <a href="https://www.hl7.no/">HL7 Norway home page</a>.
        </p>
      </section>
    </Demo>
  );
};
