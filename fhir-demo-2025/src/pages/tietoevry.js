import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import tietoevryLogo from '../images/tietoevry.png';

export function Head() {
  const title = <title>FHIR Demo 2025: TietoEVRY</title>;
  return getHead({ title });
};

export default function TietoEVRY({ location }) {
  const roles = demos.tietoevry.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://unaoy.fi/">
          <img src={tietoevryLogo} alt="TietoEVRY" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="intro">
        <h1>Tietoevry Care - Examples of Practical FHIR Implementations</h1>
      </section>
      <section id="health-village">
        <h2>Health Village</h2>
        <p>Tietoevry Care has been a long-term development partner for the Health Village project
        (e.g. Omapolku, Terveyskylä Pro) since 2018 and has been implementing application
        development, architectural design and service design in a multi-vendor environment
        coordinated by HUS. Tietoevry Care has implemented a FHIR-based integration interface for
        Omapolku software based on the <strong>FHIR Smart App Launch</strong>. This enables both
        the patient and the professional to have smooth access directly from the Omapolku
        application to another application used by the patient alongside Omapolku, for example to
        the <Link to="../meallogger">Meallogger</Link> application. In addition to the FHIR Smart
        App Launch, Tietoevry Care has also implemented direct FHIR-based integrations between
        Health Village and the electronic health record (EHR) system.</p>
        <p>FHIR has also been identified as playing a key role in integrations related to
        IoMT/self- measurements and monitoring data. In connection with this, different ways of
        implementing data-based integrations of medical measuring devices to Omapolku have been
        studied so that the patient's data and the devices linked to him or her and their
        measurement results can be obtained in a single view. FHIR-based Azure Health Data Services
        APIs have been utilized in the implementation of self-measurements data databases.</p>
      </section>
      <section id="lifecare">
        <h2>Lifecare Customer and Patient Information System</h2>
        <p>For Lifecare EHR, work has been done on FHIR-based modelling, in which FHIR's resources
        are utilized as part of the development of patient administration and home care functions
        and interfaces. The wider utilisation and implementation of FHIR interfaces will be
        included through national FHIR profiling and projects. To accelerate FHIR and API coverage
        in general, an API Management solution has been chosen that provides tools for agile
        interface implementations. Experiments have already been conducted to integrate the
        wellbeing application into the workflow of the customer and patient information system
        using SMART App Launch.</p>
      </section>
      <section id="future">
        <h2>FHIR as part of future development work</h2>
        <p>Tietoevry Care's open data model for care data is based on OpenEHR, and the FHIR
        interfaces complement the whole by providing standardised and widely used/usable interfaces
        for utilising data as part of the social and health care system environment. In our
        opinion, OpenEHR and FHIR fit well together and complement each other as part of the
        overall solutions. In the future, various built-in FHIR applications that significantly
        facilitate and speed up healthcare-related application development will be even more
        interesting.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilona Raitakari</h3>
          <p>Head of Digital Health<br />Tietoevry Care, Finland</p>
          <address>
            <a href="mailto:Ilona.Raitakari@tietoevry.com">Ilona.Raitakari@tietoevry.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
