import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/oracle.svg';
import marketplace from '../images/oh-code-marketplace.avif';

export function Head() {
  const title = <title>FHIR Demo 2024: Oracle Health (Cerner)</title>;
  return getHead({ title });
};

export default function Oracle({ location }) {
  const roles = demos.oracle.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.oracle.com/health/"><img src={logo} alt="Oracle Health" /></a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          Connected technologies and unified data empower individuals and enable the health
          ecosystem to accelerate innovation and influence health outcomes. Oracle Health is
          building an open healthcare platform with intelligent tools for data-driven,
          human-centric healthcare experiences to connect consumers, healthcare providers, payers,
          and public health and life sciences organizations.
        </p>
      </section>
      <section id="for-developers">
        <h2>Oracle Health Developer Program</h2>
        <p>
          APIs unlock powerful opportunities for healthcare organizations to transform care
          delivery and operational efficiency. The Oracle Health Developer Program provides access,
          tools, and resources to connect apps and devices to Oracle Health Millennium Platform.
        </p>
        <p>
          Explore the <a href="https://www.oracle.com/health/developer/program/">developer
          resources</a>!
        </p>
      </section>
      <section id="ecosystem">
        <h2>Benefits of the Oracle Health open ecosystem</h2>
        <p>
          Leverage API capabilities native to Millennium Platform. Build your own apps or integrate
          with independent software vendors.
        </p>
        <h3>Access tools and training to help you build</h3>
        <p>
          Find robust API documentation, best practices, and developer tools.
        </p>
        <h3>Grow your business with Oracle</h3>
        <p>See all the ways to partner with Oracle and find the best one for you.</p>
        <h3>Extend your EHR capabilities with our ecosystem partners</h3>
        <p>Browse apps and devices to enhance your workflows.</p>
      </section>
      <section id="marketplace">
        <h2>Browse Oracle Healthcare Marketplace</h2>
        <img
          className="no-scale"
          src={marketplace}
          alt="Oracle Health Marketplace presents a selection of validated apps utilizing Oracle Health APIs"
        />
        <p>
          Explore a selection of validated apps to see how technology partners have used Oracle
          Health APIs to bring their ideas to life. Connect with technology partners to schedule a
          demo, get a price quote, or request more information.
        </p>
        <p>
          Explore the <a
          href="https://cloudmarketplace.oracle.com/marketplace/product/health">Oracle Health
          Marketplace</a>!
        </p>
      </section>
    </Demo>
  );
};
