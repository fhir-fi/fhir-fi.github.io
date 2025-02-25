import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import dedalusLogo from '../images/dedalus.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Dedalus</title>;
  return getHead({ title });
};

export default function Dedalus({ location }) {
  const roles = demos.dedalus.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.dedalus.com">
          <img src={dedalusLogo} alt="Dedalus" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
      <p>
        <a href="https://www.dedalus.com/ne/da/our-offer/products/amphi-praehospital/">Dedalus'
        Pre-hospital Record</a> is the national pre-hospital patient record (PPR) in Denmark, in
        which doctors, paramedics, ambulance rescuers and other pre-hospital staff can document
        information about the patient, the patient's condition and treatment given at the scene of
        accident, in the ambulance or the medical helicopter.
      </p>
      <p>
        Information registered in PPR is transferred from the tablet in the ambulance to the
        receiving hospital's emergency room and the clinicians. The data is exchanged using the
        RESTful interface and FHIR profiles, used to support real-time exchange of events. The
        profiles do not inherit from DK Core but are highly inspired hereby.
      </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Signe Hejgaard Kristoffersen</h3>
          <address>
            <a href="mailto:shejgaardkri@dedalus.com">shejgaardkri@dedalus.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
