import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import duodecimLogo from '../images/duodecim.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Duodecim</title>;
  return getHead({ title });
};

export default function Duodecim({ location }) {
  const roles = demos.duodecim.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://duodecim.fi/">
          <img src={duodecimLogo} alt="Duodecim" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          Duodecim demonstrates the use of CDS Hooks services for providing real-time Clinical
          Decision Support. The CDS Hooks concept can radically change how Clinical Decision
          Support is used in the health record systems. It enables a new level of
          context-sensitivity and support for clinician's workflow.
        </p>
        <p>
          Duodecim has been on the CDS market for over a decade with its EBMEDS Clinical Decision
          Support solution with integrations to several health record systems. It returns
          reminders, therapeutic suggestions (including drug databases), and links to guidelines.
          It also provides various tools, such as clinical calculators. EBMEDS is a medical device,
          class IIa, according to the EU MDR 2017/745.
        </p>
        <p>
          Our technological strategy relies firmly on HL7 FHIR. We expect to provide an increasing
          amount of clinical content completely based on FHIR. In <a
          href="https://fhir.fi/en/demo2023/duodecim/">FHIR demo 2023</a> we implemented SMART App
          Launch support for calculators and forms.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Joonas Mäkinen</h3>
          <p>Product Owner</p>
          <address>
            <a href="mailto:joonas.makinen@duodecim.fi">joonas.makinen@duodecim.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
