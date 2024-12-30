import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/fass.jpg';
import apps from '../images/fass-apps.png';
import anna from '../images/GunillaEnglund.png';
import gunilla from '../images/AnnaWessling.png';


export function Head() {
  const title = <title>FHIR Demo 2024: Fass.se</title>;
  return getHead({ title });
};

export default function Fass({ location }) {
  const roles = demos.fass.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.fass.se/">
          <img src={logo} alt="Fass.se" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          Fass is Sweden's most used channel for pharmaceutical information and is one of the
          country's most well-known brands. Through Fass, the public, healthcare professionals,
          pharmacy staff, pet owners and animal care staff always have access to up-to-date and
          quality-assured information about medicines around the clock.
        </p>
        <p>
          Fass can be viewed on computers, tablets and smartphones. The apps Fass Care, Fass
          General and Fass Animals are available for both iPhone and Android. In addition,
          information from Fass can be integrated directly into other systems via the Fass API.
        </p>
      </section>
      <img
        className="no-scale"
        src={apps}
        alt=""
      />
      <section id="epi">
        <h2>Gravitate Health and Nordic FHIR ePI</h2>
        <p>
          Fass is participating in a cross-border cooperation of the Nordic pharmaceutical product
          compendia to provide the testing scenarios of Gravitate Health with updated, quality
          controlled, electronic package leaflets (ePIL) in the Nordic languages.
        </p>
        <p>
          The package leaflets for medicines approved for the Swedish market are converted from the
          Fass proprietary XML structure to the HL7 FHIR format. Our goal is to be compatible with
          the EMA ePI implementation guide, and conform to the HL7 Vulcan Accelerator's global <a
          href="https://hl7.org/fhir/uv/emedicinal-product-info/STU1/">Electronic Medicinal Product
          Information (ePI) FHIR Implementation Guide</a>.
        </p>
      </section>
      <section id="fhir">
        <h2>Data exchange using HL7 FHIR</h2>
        <p>
          Today Fass provides information to electronic healthcare records, pharmacies and other
          actors, using Fass API. To fulfill our mission to provide healthcare professionals and
          other stakeholders with information on medicines, it is crucial for Fass to be a part of
          the evolving ecosystem of electronic data exchange. We believe that the use of FHIR in
          the European and Swedish ecosystem will increase, and we are taking part in that journey,
          adapting our API to the customer needs.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={anna} />
            <img
              src={anna}
              alt=""
            />
          </picture>
          <h3>Anna Wessling</h3>
          <p>Managing Director</p>
          <address>
            <a href="mailto:anna.wessling@fass.se">anna.wessling@fass.se</a>
          </address>
        </div>
        <div className="business-card">
          <picture>
            <source srcSet={gunilla} />
            <img
              src={gunilla}
              alt=""
            />
          </picture>
          <h3>Gunilla Englund</h3>
          <p>Head of Business Development</p>
          <address>
            <a href="mailto:gunilla.englund@fass.se">gunilla.englund@fass.se</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
