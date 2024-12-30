import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import fkLogo from '../images/felleskatalogen.png';
import fkEpil from '../images/felleskatalogen-epil-info.jpg';
import fkContactAk from '../images/felleskatalogen-ak.png';
import fkContactBj from '../images/felleskatalogen-bj.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Felleskatalogen</title>;
  return getHead({ title });
};

export default function Felleskatalogen({ location }) {
  const roles = demos.felleskatalogen.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.felleskatalogen.no/">
          <img src={fkLogo} alt="Felleskatalogen AS" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <h2>About Felleskatalogen</h2>
        <p>
          The mission of Felleskatalogen (The Norwegian Pharmaceutical Product Compendium) is
          to provide healthcare personnel with structured, updated and easily available information
          about pharmaceutical products on the Norwegian market. The company was established in
          1958 and has since become the number one information source for all groups of healthcare
          personnel in Norway.
        </p>
        <p>Felleskatalogen has for many years also provided structured electronic package leaflets
          for all pharmaceutical products on the Norwegian market. We are currently participating
          in an <a
          href="https://www.felleskatalogen.no/medisin/digitale-pakningsvedlegg">information
          campaign</a> to facilitate the transition to electronic package leaflets.
        </p>
        <a href={fkEpil}>
          <img src={fkEpil} alt="Electronic package leaflet information campaign" />
        </a>
      </section>
      <section id="epi">
        <h2>Gravitate Health and Nordic FHIR ePI</h2>
        <p>
          Building on our experience with content structuring and our role as the document
          repository for electronic package leaflets, we are participating in a cross-border
          cooperation of the Nordic pharmaceutical product compendia to provide the testing
          scenarios of Gravitate Health with updated, quality controlled, electronic package
          leaflets (ePIL) in the Nordic languages.
        </p>
        <p>The Norwegian package leaflets are converted from our proprietary XML structure to the
          HL7 FHIR format. Our goal is to be compatible with the EMA ePI implementation guide, and
          conform to the HL7 Vulcan Accelerator's global <a
          href="https://hl7.org/fhir/uv/emedicinal-product-info/STU1/">Electronic Medicinal Product
          Information (ePI) FHIR Implementation Guide</a>.
        </p>
      </section>
      <section id="fhir">
        <h2>Data exchange using HL7 FHIR</h2>
        <p>To be able to fulfill our mission to provide healthcare personnel with pharmaceutical
          product information, we are dependent on being an active hub of electronic data exchange,
          with both private and governmental partners. As a provider of structured data, we have
          recently launched Felleskatalogen's first FHIR API, and we assume that our use of FHIR
          will continue to increase, both as consumers and providers of data.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={fkContactBj} />
            <img
              className="roundProfilePicture"
              src={fkContactBj}
              alt=""
            />
          </picture>
          <h3>Bente Jansen</h3>
          <p><b>Managing Director</b></p>
          <address>
            <a href="mailto:bente.jansen@felleskatalogen.no">bente.jansen@felleskatalogen.no</a>
          </address>
        </div>
        <div className="business-card">
          <picture>
            <source srcSet={fkContactAk} />
            <img
              className="roundProfilePicture"
              src={fkContactAk}
              alt=""
            />
          </picture>
          <h3>Ádám Z. Kövér</h3>
          <p><b>Technical Lead</b><br />Nordic FHIR ePI</p>
          <address>
            <a href="mailto:adam.kover@felleskatalogen.no">adam.kover@felleskatalogen.no</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
