import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import cgiLogo from '../images/cgi.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: CGI</title>;
  return getHead({ title });
};

export default function Cgi({ location }) {
  const roles = demos.cgi.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.cgi.com/fi/">
          <img src={cgiLogo} alt="CGI" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="omni360">
        <h2>OMNI360</h2>
        <p>
          <a href="https://www.cgi.com/fi/fi/tuoteratkaisut/omni360">OMNI360</a> is a modular and
          modern solution for healthcare, socialcare and specialized care.
        </p>
        <p>
          CGI has a strong commitment to use HL7 FHIR within our product portfolio and therefore
          we already have a wide range of different FHIR resources implemented. Future roadmap also
          contains our next FHIR development targets.
        </p>
        <p>
          FHIR resources already <strong>in production</strong> or <i>being implemented</i> are:
        </p>
        <ul>
          <li><strong>Appointment</strong></li>
          <li><strong>Binary</strong></li>
          <li><strong>Bundle</strong></li>
          <li><strong>CarePlan</strong></li>
          <li><strong>Condition</strong></li>
          <li><strong>Consent</strong></li>
          <li><strong>Encounter</strong></li>
          <li><strong>HealthcareService</strong></li>
          <li><strong>Immunization</strong></li>
          <li><strong>Location</strong></li>
          <li><strong>Observation</strong></li>
          <li><strong>Organization</strong></li>
          <li><strong>Patient</strong></li>
          <li><strong>Practitioner</strong></li>
          <li><i>Procedure</i></li>
          <li><strong>RelatedPerson</strong></li>
          <li><strong>Schedule</strong></li>
          <li><strong>ServiceRequest</strong></li>
          <li><strong>Slot</strong></li>
          <li><strong>Task</strong></li>
        </ul>
      </section>
      <section id="other-products">
        <h2>Other Products</h2>
        <p>
          In addition to OMNI360, CGI uses FHIR API's in <strong>AVPH</strong> scheduling solution
          and in <strong>Hyvis</strong> patient portal.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Markus Vehmanen</h3>
          <p>Vice President, Healthcare & Social Care IT</p>
          <address>
            <a href="mailto:markus.vehmanen@cgi.com">markus.vehmanen@cgi.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
