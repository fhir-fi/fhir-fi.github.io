import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/Vitec_Acute.png';
import acute from '../images/vitec_acute_digiklinikka_3.jpg';

export function Head() {
  const title = <title>FHIR Demo 2025: Vitec Acute</title>;
  return getHead({ title });
};

export default function Vitec({ location }) {
  const roles = demos.vitec.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.vitec-acute.com/en/"><img src={logo} alt="Vitec Acute" /></a>
      </h1>
      <Roles list={roles} />
      <section className="about">
        <p>
          Our end-to-end cloud solution, Acute, provides you with easy access to all the tools you
          need, without having to worry about installation, backup, and data security.
        </p>
      </section>
      <img className="decoration no-scale" src={acute} alt="" />
      <section className="description">
        <h2>Peace of mind and well-being</h2>
        <h3>The dream tool for your daily work</h3>
        <p>
          Acute gives you more time to engage with your customers, increasing the freedom and
          mobility of your work.
        </p>
        <h3>Open, extended interface</h3>
        <p>Acute is a modern, easily customisable application platform.</p>
        <h3>Grows with your business</h3>
        <p>Developing the system network does not bind your business to one IT provider only.</p>
      </section>
      <section className="fhir">
        <h2>FHIR Support</h2>
        <p>
          The Acute system has a rich API supporting integrations with third party systems. We have
          worked with <Link to="/intersystems">InterSystems</Link> to expose the API as a FHIR API
          to external apps.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juho Kunnari</h3>
          <p>Tietohallinto- ja teknologiajohtaja</p>
          <address>
            <a href="mailto:juho.kunnari@vitecsoftware.com">juho.kunnari@vitecsoftware.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
