import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import solitaLogo from '../images/solita.jpg';

export function Head() {
  const title = <title>FHIR Demo 2025: Solita</title>;
  return getHead({ title });
};

export default function Solita({ location }) {
  const roles = demos.solita.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.solita.fi/">
          <img src={solitaLogo} alt="Solita" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <h2>Solita - We harness human insight and intelligent technologies to impact many
        lives</h2>
        <p>At Solita we want to build impactful services that lead to a better life for all of us.
        We do that by harnessing human insight and intelligent technologies.</p>
        <p>Solita uses the HL7 FHIR specification in almost all healthcare integration and
        interoperability implementations in both the public and private sectors. The FHIR standard
        is used both as an interface technology for medical MDR devices and for integrations in
        patient registry systems.</p>
      </section>
      <section id="omaolo">
        <h2>Omaolo - Finland's national symptom assessment service</h2>
        <p>Solita has developed a symptom assessment service <a
        href="https://www.omaolo.fi/">Omaolo</a> for DigiFinland, a state-owned development
        company.</p>
        <p>In Omaolo, you can find social and health services quickly and without barriers,
        24 hours a day - even if you are at home! The recommendations provided by Omaolo are always
        personal. They are based on the most up-to-date scientific evidence and nationally
        determined criteria.</p>
        <p>Omaolo is a CE marked medical device, and has thus been developed according to ISO 13485
        quality management system principles.</p>
        <h4>Already 4 Million users, over ⅔ of population</h4>
        <p>Omaolo utilizes the <strong>FHIR standard</strong> extensively in the system's
        microservice architecture for both internal and external integrations.</p>
      </section>
      <section id="kotidigi">
        <h2>Kotidigi - Solita homecare platform for wellness data</h2>
        <p><strong>Opportunity:</strong> Treating patients at their own home instead of at the
        hospital has a lot of benefits: it's much more comfortable for the patients, and it can
        save a lot of money for the society.</p>
        <p><strong>Problem:</strong> There are all kinds of data-intensive wellbeing related
        equipment in the market, both for professionals and consumers. But there hasn't been a
        standard way to gather different information together and available for healthcare
        professionals (HCPs). Thus, patients have still needed to be taken care at the
        hospital.</p>
        <p><strong>Solution:</strong> The Solita HomeCare Platform aims to solve this problem, by
        being the central place to gather the data, and having the ability to create automatic
        alert levels for HCPs to check and act on.</p>
        <p>The platform is being developed and piloted in collaboration with Pirkanmaa welfare
        district. <strong>HL7 FHIR</strong> is used as both integration façade and data strorage
        for the device data.</p>
        <p>Solita co-owns the IPRs for the platform, thus it can be used to develop a specific
        solution in other countries as well.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Janne Kaartinen</h3>
          <p>Senior Consultant</p>
          <address>
            <a href="mailto:janne.kaartinen@solita.fi">janne.kaartinen@solita.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
