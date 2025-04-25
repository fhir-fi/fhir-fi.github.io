import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import tietoevryLogo from '../images/tietoevry.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Tietoevry</title>;
  return getHead({ title });
};

export default function Tietoevry({ location }) {
  const roles = demos.tietoevry.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h2>
        <a href="https://www.tietoevry.com/">
          <img src={tietoevryLogo} alt="Tietoevry" />
        </a>
      </h2>
      <Roles list={roles} />
      <section id="intro">
        <h2>Modernizing Nordic health and care</h2>
        <p>
          Tietoevry Care is modernizing the Nordic health and social care sector with modular,
          open, and interoperable software. We put citizens and patients at the center, simplifying
          everyday life for all, and providing the tools required to transition towards increased
          self- and preventive care and lower cost-of-care settings.
        </p>
      </section>
      <section id="lifecare-mobile">
        <h2>Use case: Lifecare Mobile – FHIR APIs supporting efficient care</h2>
        <p>
          Lifecare Mobile for healthcare provides a solution for efficient and high-quality mobile
          care. Patient information is always available with modern, secure and easy to use mobile
          application. Main features include
        </p>
        <ul>
          <li>Sote smart card login</li>
          <li>
            Patient information
            <ul>
              <li>Demographic information</li>
              <li>Risks, diagnosis, medication, laboratory results</li>
            </ul>
          </li>
          <li>Journal view and observations</li>
          <li>
            Data entry (openEHR)
            <ul>
              <li>Journal entries</li>
              <li>Physiological measurements</li>
            </ul>
          </li>
          <li>Calendar and appointments</li>
          <li>Messages and notes</li>
        </ul>
        <p>
          The implementation of the Lifecare Mobile solution utilizes a set of FHIR APIs to
          establish connections between the mobile application and the functionalities and data of
          the Lifecare healthcare Information system (HIS).
        </p>
        <p>
          As mobile solution supports the mobile network usage, the integration with the backend
          services of the Lifecare HIS operates with similar rules as any system integration. Using
          FHIR APIs enabled the use of ready-made industry data transfer specifications when
          designing and implementing the services of the mobile solution. The implementation
          utilizes capabilities of Lifecare HIS API Management technology for FHIR APIs.
        </p>
        <p>
          Benefits of FHIR implementation
        </p>
        <ul>
          <li>Compliance with industry standard solution</li>
          <li>Increase FHIR capabilities of the Lifecare HIS</li>
          <li>Increase FHIR competence</li>
          <li>Possible utilization of interfaces for other use cases</li>
        </ul>
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
        <h2>FHIR as part of future Lifecare development work</h2>
        <p>
          Tietoevry Care utilizes openEHR open data model for care data, and FHIR interfaces
          complement the whole by providing standardised interfaces for utilising data as part of
          the social and health care system environment. In our opinion, openEHR and FHIR fit well
          together and complement each other as part of the overall solutions. We see that this
          combination of standard approaches significantly facilitates and speeds up
          healthcare-related application development.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Janne Mönkkönen</h3>
          <p>Head of Solution Architecture<br />Tietoevry Care</p>
          <address>
            <a href="mailto:janne.monkkonen@tietoevry.com">janne.monkkonen@tietoevry.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
