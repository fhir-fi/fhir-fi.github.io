import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import apottiLogo from '../images/apotti.png';
import ecosystemImage from '../images/apotti-ecosystem.jpg';

export function Head() {
  const title = <title>FHIR Demo 2025: Apotti</title>;
  return getHead({ title });
};

export default function Apotti({ location }) {
  const roles = demos.apotti.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.apotti.fi/">
          <img src={apottiLogo} alt="Apotti" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="intro">
        <p>
          The Apotti system is the first data processing and enterprise resource planning system in
          the world that is shared by social care and health care. It is built on the Epic system
          platform in Finland.
        </p>
        <p>
          The Apotti system has approximately 47,000 social care and health care users in the
          Uusimaa region in Finland. It also provides the Maisa client portal that offers smoother
          services for citizens &mdash; the social care and health care services are accessible for
          them anytime, anywhere.
        </p>
        <p>
          The enterprise Oy Apotti Ab is owned by the city of Helsinki, the HUS Group, the
          wellbeing services county of Vantaa and Kerava and the wellbeing services counties of
          Eastern, Western and Central Uusimaa.
        </p>
      </section>
      <section id="ecosystem">
        <h2>
          Apotti ecosystem is an environment where our partners can grow and expand internationally
        </h2>
        <p>
          The Apotti ecosystem is a place for experimentation and development. Within the ecosystem
          it is possible to innovate, test and develop digital social care and health care
          services.
        </p>
        <p>
          The ecosystem provides a unique opportunity to reach organizations providing health care
          and social care services, both in Finland and abroad. It strives to aid the ecosystem
          partners to brainstorm, pilot and fully commercialize their products.
        </p>
        <p>
        When an ecosystem partner gets a client reference from Apotti, it is a strong indicator of
        Epic integration and therefore a significant aid in entering the global market. Therefore,
        the Apotti ecosystem offers Finnish health and welfare technology businesses a great
        opportunity to expand to the international market.
        </p>
      </section>
      <img src={ecosystemImage} alt="" />
      <section id="sandbox">
        <h2>It's safe to practice in the Sandbox environment</h2>
        <p>
          The Apotti system can be complemented with innovative health and welfare technology
          applications. The most important technical tool for the integration testing of these
          applications is the Sandbox environment (Apotti Online Sandbox) which is, in essence, the
          Apotti system without real patient/client data.          
        </p>
        <p>
          Apotti has numerous different technologies available for integrations. HL7 FHIR is the
          recommended and default option for all new integrations.
        </p>
        <p>
          The Sandbox environment has been in use since spring 2023, and the ecosystem partners can
          test their services with so called synthetic data which is artificial Finnish patient and
          client data. Services can benefit from new data that is produced in real time and
          utilised in new ways.
        </p>
        <p>
          If a tool or software developed by a third party works in the Apotti test environment, it
          is most likely compatible with and functions in the international Epic system which is
          used in many top-ranking hospitals around the world.
        </p>
      </section>
      <section id="join">
        <h2>Are you interested?</h2>
        <p>
          You can join the Apotti ecosystem by contacting us at <a
          href="ekosysteemi@apotti.fi">ekosysteemi@apotti.fi</a> and setting up a meeting to
          present your service or application. The cooperation between Apotti and the ecosystem
          partner will then become tighter and more specified according to a defined process.
        </p>
        <p>
          The goal of the process is to verify the benefits of the service or application for
          social care and health care professionals who use the Apotti system and to confirm the
          technical integration capacity of the ecosystem partner.          
        </p>
        <p>
          You can also read the <strong>Apotti Online Sandbox instructions</strong> that are
          available on the <a
          href="https://www.apotti.fi/en/the-apotti-ecosystem/">Apotti ecosystem</a> page.
        </p>
        <p>There are already over a hundred Apotti ecosystem partners. Welcome on board!</p>
        <p>Don't hesitate to be in touch!</p>
      </section>
 
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilkka Tiainen</h3>
          <p>Ecosystem Specialist</p>
          <address>
            <a href="mailto:ilkka.tiainen@apotti.fi">ilkka.tiainen@apotti.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
