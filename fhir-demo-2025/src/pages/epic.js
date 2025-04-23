import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import epicLogo from '../images/epic.png';
import epicOnFhir from '../images/EpicOnFHIR.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Epic</title>;
  return getHead({ title });
};

export default function Epic({ location }) {
  const roles = demos.epic.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.epic.com">
          <img src={epicLogo} alt="Epic on FHIR" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          Epic is a strong supporter of the HL7® FHIR® standard as the future of REST-based
          interoperability. We support over 500 FHIR APIs across 57 resources in accordance with
          the HL7 FHIR standard. This spans the DSTU2, STU3, and R4 versions of the FHIR
          specification. We continue to regularly grow our number of supported FHIR APIs.
          Organizations can grant access to these resources via the search and read/write RESTful
          APIs that are defined by FHIR.
        </p>
      </section>
      <section id="nordics">
        <h2>Epic in the Nordics</h2>
        <p>
          Sites live on Epic in Denmark, Finland, and Norway make use of Epic's integration
          capabilities - FHIR and beyond - every day. You can find out more at <a
          href="https://open.epic.com/CountrySpecific/">https://open.epic.com/CountrySpecific/</a>.
        </p>
      </section>
      <section id="IPS">
        <h2>International Patient Summary</h2>
        <p>
          Epic will be among the first organizations to support the International Patient Summary
          (IPS) FHIR specification starting with our May 2025 release. IPS will improve care for
          patients by making it simpler for healthcare organizations to exchange data securely
          across international borders. IPS builds on Epic's existing Care Everywhere and CDA
          workflows to help customers coordinate care with groups that exclusively use FHIR. Learn
          more about <a
          href="https://fhir.epic.com/Documentation?docId=internationalpatientsummary">Epic & IPS
          at fhir.epic.com</a>.
        </p>
      </section>
      <section id="SMART">
        <h2>SMART on FHIR</h2>
        <p>
          Our SMART on FHIR App Launch Framework provides a contextual and secure way to embed
          third-party applications into your Epic system. The framework supports apps for use by
          clinicians and patients, and uses OAuth 2.0 as a reliable, secure authorization protocol,
          and OpenID Connect for modern, standard authentication.
        </p>
      </section>
      <section id="cds-hooks">
        <h2>CDS Hooks</h2>
        <p>
          HL7's CDS Hooks enables real-time, remote, provider-facing clinical decision support.
          Within a variety of workflows, Epic supports displaying external CDS services' info
          cards, SMART app links and a limited number of discrete, actionable suggestions. See <a
          href="https://fhir.epic.com">fhir.epic.com</a> for an up-to-date list of supported
          suggestions.
        </p>
      </section>
      <section id="FHIR">
        <strong>
          <p>
            To learn more about Epic's support for FHIR, please visit <a
            href="https://fhir.epic.com">fhir.epic.com</a> for developer documentation and a
            testing sandbox!
          </p>
        </strong>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <img src={epicOnFhir} alt="Epic On FHIR" />
          <address>
            <a href="mailto:open@epic.com ">open@epic.com </a>
            <br />
            <a href="https://fhir.epic.com">fhir.epic.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
