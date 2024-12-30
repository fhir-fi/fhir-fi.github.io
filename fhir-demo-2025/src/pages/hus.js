import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/hus.svg'

export function Head() {
  const title = <title>FHIR Demo 2024: HUS</title>;
  return getHead({ title });
};

export default function HUS({ location }) {
  const roles = demos.hus.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.hus.fi/en"><img src={logo} alt="HUS" /></a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          HUS is Finland's largest provider of specialized medical care. Our 27,000 professionals
          treat almost 700,000 patients every year.
        </p>
        <p>
          From the point of view of HUS' operation, it is significant that the building of
          integrations between applications both within HUS and with partners is efficient.
        </p>
      </section>
      <section id="fhir">
        <h2>FHIR First</h2>
        <p>
          FHIR-capable information systems are directly interoperable - and there is no longer need
          for traditional integrations. The end result is a revolutionary improvement in the speed
          and cost-effectiveness of implementations. 
        </p>
        <p>
          For this reason, HUS has created the <strong>FHIR FIRST</strong> policy, on the basis of
          which HUS primarily uses and requires from its partners standard interfaces in accordance
          with the FHIR standard in implementing the interoperability (integrations) of information
          systems.
        </p>
        <p>
          By using the FHIR standard, which is based on an international standard, HUS also
          supports the access of Finnish startup companies and other operators to international
          markets.
        </p>
      </section>
      <section id="collaboration">
        <h2>Collaboration</h2>
        <p>
          Success depends on national cooperation in uniform use of the standard. HUS considers it
          very important that the harmonization work carried out within the framework of <Link
          to="/hl7-finland">HL7 Finland</Link> progresses rapidly.
        </p>
      </section>
    </Demo>
  );
};
