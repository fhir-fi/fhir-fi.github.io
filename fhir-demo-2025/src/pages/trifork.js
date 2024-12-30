import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import triforkLogo from '../images/trifork.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Trifork</title>;
  return getHead({ title });
};

export default function Trifork({ location }) {
  const roles = demos.trifork.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://trifork.com/">
          <img src={triforkLogo} alt="Trifork" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="intro">
        <p>Trifork offers Platform-as-a-Service (PaaS) and consultancy.</p>
        <h2>Platform</h2>
        <ul>
          <li><Link to="#thp">Trifork Health Platform</Link></li>
        </ul>
        <h2>Consultancy</h2>
        <ul>
          <li><Link to="#fut">Fælles Udbredelse af Telemedicin (FUT)</Link></li>
          <li><Link to="#gravitate">Gravitate Health</Link></li>
          <li><Link to="#rkkp">Regionernes Kliniske Kvalitetsudviklingsprogram (RKKP)</Link></li>
        </ul>
      </section>
      <section id="thp">
        <h2>Trifork Health Platform</h2>
        <p>
          The Trifork Health Platform is a curated piece of FHIR infrastructure based on existing
          open source components. It brings the best of the open source world together with the
          knowhow and expertise of Trifork's competences and love for agnostic cloud technology.
          The Trifork Health Platform focuses on the following key points:
        </p>
        <ul>
          <li>
            <strong>Scalablility:</strong> Central pieces of infrastructure needs scaling and so
            does the Trifork Health Platform. That's why we've combined it with the use of Apache
            Kafka and the agnosticism of Kubernetes.
          </li>
          <li>
            <strong>Security:</strong> Having deployed, maintained and run several different
            projects with or without FHIR the experience of running large scale infrastructure
            comes down to the same set of compentences. Trifork brings that expertise to its
            Health Platform and reuses all the knowhow and knowledge obtained from having done
            this since the dawn of the Danish Shared Medication Record in 2013.
          </li>
          <li>
            <strong>Openness:</strong> The Trifork Health Platform is as open about its API's as
            the FHIR specifiction aims to be.
          </li>
          <li>
            <strong>Ease of Use:</strong> The Trifork Health Platform aims to take the complexity
            of the shoulders of the developers though services and components for common use in
            healthcare.
          </li>
        </ul>
      </section>

      <section id="fut">
        <h2>FUT</h2>
        <p>
          Trifork is one of vendors having built the future telemedicine infrastructure in Denmark
          called FUT. The infrastructure is heavily based on FHIR and aims to support current and
          future telemedicine applications on top of the infrastructure. The documentation to the
          infrastructure can be found <a
          href="https://docs.ehealth.sundhed.dk/latest/ig/index.html">here</a>. The FUT
          infrastructure uses roughly +40 different FHIR resource profiles and integrates to +15
          Danish national registries and systems. The FUT infrastructure is owned and governed by
          Danish municipalities and Danish regions.
        </p>
      </section>

      <section id="gravitate">
        <h2>Gravitate Health</h2>
        <p>
          The Gravitate Health is a public - private partnership with 41 members from Europe and
          the US, co-led by University of Oslo (coordinator) and Pfizer (industry lead), funded by
          the Innovative Medicines Initiative (IMI) - a joint undertaking of the European
          Commission, the European Federation of Pharmaceutical Industries and Associations
          (EFPIA), IMI2 Associated Partners. Triforks role in Gravitate Health is to provide expert
          HL7 FHIR competences in building the future international standard for leafleats
          (found <a href="https://hl7.org/fhir/uv/emedicinal-product-info/">here</a>) as well as
          extending the Danish Medicin Card app with a a prototype supporting the Gravitate Health
          specific <code>$lens</code> operation found <a
          href="https://build.fhir.org/ig/hl7-eu/gravitate-health/index.html">here</a> on top of
          existing danish infrastructure.
        </p>
      </section>

      <section id="rkkp">
        <h2>Regionernes Kliniske Kvalitetsudviklingsprogram (RKKP)</h2>
        <p>
          Trifork has successfully transformed RKKP's quality reporting platform from a traditional
          data model to the Fast Healthcare Interoperability Resources (FHIR) model, which
          exemplifies the next era of healthcare data in Denmark and in the modern, data-driven
          world. We have also successfully inspired them in container-based architecture, and the
          platform is both futureproof and easier to manage for the customer and is also more more
          cost-efficient. The platform primarily uses Questionnaires and QuestionnaireResponses and
          maintains and curates all +300 valuesets and codesystems in designated FHIR
          Implementation Guides.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Jens Kristian Villadsen</h3>
          <p>CTO, Digital Health, Trifork</p>
          <address>
            <a href="mailto:jvi@trifork.com">jvi@trifork.com</a>
            <br />
            <a href="tel:+4523373806">+45 23 37 38 06</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Torben Hagensen</h3>
          <p>Principal Architect, Digital Health, Trifork</p>
          <address>
            <a href="mailto:tmha@trifork.com">tmha@trifork.com</a>
            <br />
            <a href="tel:+4520781122">+45 20 78 11 22</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
