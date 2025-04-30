import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import fujitsuLogo from '../images/fujitsu.svg';
import fujitsuhomedialysis from '../images/fujitsu_homedialysis.png';
import hl7fhirlogo from '../images/hl7_fhir_logo.webp';
import newlifelogo from '../images/newlife_logo.png';
import euflag from '../images/eu_flag.png';
import chipsjulogo from '../images/chips_ju_logo.jpg';
import joni from '../images/joni_hirviniemi.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Fujitsu</title>;
  return getHead({ title });
};

export default function Fujitsu({ location }) {
  const roles = demos.fujitsu.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.fujitsu.com/fi/">
          <img src={fujitsuLogo} alt="Fujitsu" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>
        With over 40 years of experience, Fujitsu Finland develops intelligent, human-centered
        services in cooperation with customers, research institutes and universities.
      </p>
      <section id="remote-health">
        <h2>Fujitsu Remote Health</h2>
        <p>Radically increase effectiveness of care both domestically and globally, offering citizens
          the opportunity to actively participate in their own care by putting together scattered
          services, offering capabilities for home care and monitoring, and at the same time saving
          resources for all parties.</p>
        <p>Fujitsu Remote Health solutions include <strong>Home Dialysis</strong> and <strong>eMOM</strong> solutions
          that are using HL7 FHIR. We have integrated solutions to Epic with <strong>SMART App Launch</strong> and
          using Epic’s <strong>FHIR resources</strong>.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img src={fujitsuhomedialysis} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <h3>Fujitsu Integration Platform as a Service (IPaaS)</h3>
        <p>With this part of the Fujitsu Remote Health, we offer customers a 24/7 monitored service
          with extensive support of HL7 standards. It is a strong foundation for the development of
          digital services and innovations, including AI solutions and remote care, empowering
          organizations to stay ahead of the curve.</p>
        <p>If you need InterSystems IRIS based FHIR Server as a Service or some other technology to save data from your health-focused
          devices and sensors, just contact us.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img src={hl7fhirlogo} alt="" style={{ maxWidth: '300px', height: 'auto' }} />
        </div>
        <h3>FHIR Demo 2025</h3>
        <p>We will showcase the advanced capabilities of FHIR in the context of new remote,
          non-invasive monitoring solutions designed to ensure the health of mothers and newborns
          before and after birth. These solutions have been developed within the framework of the <a href="https://www.newlife-kdt.eu/"><strong>Newlife EU project</strong></a>.</p>
        <p>In collaboration with our partners, we have developed the Smart Baby Bed, and during the
          demonstration, we will also present the <a href="https://zoundream.com/"><strong>Zoundream</strong></a> cry analysis sensor, which utilizes FHIR
          in accordance with the <strong>Implementation Guide (IG)</strong> Fujitsu has created during the project. Newlife platform consists of
          hybrid architecture leveraging technologies such as InterSystems and Azure's API management and data storage.</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img src={newlifelogo} alt="" style={{ flex: 1, maxWidth: '150px', height: 'auto', margin: '0 10px' }} />
          <img src={euflag} alt="" style={{ flex: 1, maxWidth: '100px', height: 'auto', margin: '0 10px' }} />
          <img src={chipsjulogo} alt="" style={{ flex: 1, maxWidth: '150px', height: 'auto', margin: '0 10px' }} />
        </div>
      </section >
      <section id="contact">
        <h3>Contact</h3>
        <div className="white business-card">
          <picture>
            <img src={joni} alt="" />
          </picture>
          <h3>Joni Hirviniemi</h3>
          <p>Integration Lead</p>
          <address>
            <a href="mailto:joni.hirviniemi@fujitsu.com">joni.hirviniemi@fujitsu.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
