import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import epicLogo from '../images/epic.png';
import epicOnFhir from '../images/EpicOnFHIR.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Epic</title>;
  return getHead({ title });
};

export default function EskoSystems({ location }) {
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
          interoperability. We support over 450 FHIR APIs across 55 resources in accordance with
          the HL7 FHIR standard. This spans the DSTU2, STU3, and R4 versions of the FHIR
          specification. We continue to develop support for the latest versions of the FHIR
          standard. Organizations can grant access to these resources via the search and read/write
          RESTful APIs that are defined by FHIR.
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
          href="https://fhir.epic.com">fhir.epic.com</a> for an up-to-date list of supported suggestions.
        </p>
      </section>
      <section id="FHIRcast">
        <h2>FHIRcast</h2>
        <p>
          FHIRcast is an emerging HL7 standard for context synchronization. Built on FHIR, it uses
          modern communication methods such as HTTP and websockets. Epic's Hyperdrive browser
          supports the role of a FHIRcast Hub, with the ability to synchronize patient, encounter,
          and imaging study contexts. Through our leadership role in HL7, Epic continues to lead
          the health IT industry in the support and development of this standard.
        </p>
      </section>
      <section id="FHIR">
        <strong>
          <p>
            To learn more about Epic's support for FHIR, please visit <a
            href="https://fhir.epic.com">fhir.epic.com</a> for developer documentation and a testing
            sandbox!
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
