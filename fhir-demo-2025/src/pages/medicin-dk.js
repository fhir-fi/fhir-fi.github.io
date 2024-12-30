import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import medicinDkLogo from '../images/Medicin.dk_Logo_RGB.svg';
import tina from '../images/TinaHouMarer.png';
import christoffer from '../images/ChristofferJonJensen.png';
import anette from '../images/AnettePetersen.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Medicin.dk</title>;
  return getHead({ title });
};

export default function MedicinDK({ location }) {
  const roles = demos['medicin-dk']?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1><a href="https://medicin.dk/"><img src={medicinDkLogo} alt="Medicin.dk" /></a></h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          Medicin.dk is providing scientific, structured, and always updated pharmaceutical
          information about pharmaceuticals at the Danish Market - to both healthcare professionals
          and the public in Denmark. And we have been doing so almost 50 years, since 1976.
          Medicin.dk is the number one information source about pharmaceuticals in Denmark. 
        </p>
        <p>
          Since 2016 Medicin.dk has provided structured electronic package leaflets for all
          pharmaceutical products on the Danish market at the website <a
          href="https://www.indlaegssedler.dk/">indlægssedler.dk</a>. We are a part of the ongoing
          process around facilitating the transition to electronic package leaflets in Denmark - in
          collaboration with the Danish authorities and pharmaceutical companies among others.
        </p>
      </section>
      <section id="epi">
        <h2>Gravitate Health and Nordic FHIR ePI</h2>
        <p>
          Building on our experience with content structuring and our role as the provider of
          electronic package leaflets in Denmark, we are participating in an international
          cooperation of the Nordic pharmaceutical product compendia to provide the testing
          scenarios of Gravitate Health with updated, quality controlled, electronic package
          leaflets (ePIL) in the Nordic countries. 
        </p>
        <p>
          The Danish package leaflets are converted from our proprietary XML structure to the HL7
          FHIR format. Our goal is to be compatible with the EMA ePI implementation guide, and
          conform to the HL7 Vulcan Accelerator's global <a
          href="https://hl7.org/fhir/uv/emedicinal-product-info/STU1/">Electronic Medicinal Product
          Information (ePI) FHIR Implementation Guide</a>. 
        </p>
      </section>
      <section id="fhir">
        <h2>Data exchange using HL7 FHIR</h2>
        <p>
          To be able to fulfill our continuous mission to provide healthcare professionals with the
          best pharmaceutical product information, it is crucial being part of an active hub of
          electronic data exchange, with both private and governmental partners. 
        </p>
        <p>It is our goal to continue to increase our use of FHIR intensively the coming years.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={tina} />
            <img
              className="roundProfilePicture"
              src={tina}
              alt=""
            />
          </picture>
          <h3>Tina Hou Marer</h3>
          <p>Director,<br/><small>Dansk Lægemiddel Information A/S,</small><br/>Medicin.dk</p>
          <address>
            <a href="mailto:thm@medicin.dk">thm@medicin.dk</a>
          </address>
        </div>
        <div className="business-card">
          <picture>
            <source srcSet={christoffer} />
            <img
              className="roundProfilePicture"
              src={christoffer}
              alt=""
            />
          </picture>
          <h3>Christoffer Jon Jensen</h3>
          <p>
            Software developer,<br/><small>Dansk Lægemiddel Information A/S,</small><br/>Medicin.dk
          </p>
          <address>
            <a href="mailto:cjj@dli.dk">cjj@dli.dk</a>
          </address>
        </div>
        <div className="business-card">
          <picture>
            <source srcSet={anette} />
            <img
              className="roundProfilePicture"
              src={anette}
              alt=""
            />
          </picture>
          <h3>Anette Petersen</h3>
          <p>
            Head of IT-development,<br/>
            <small>Dansk Lægemiddel Information A/S,</small><br/>
            Medicin.dk
          </p>
          <address>
            <a href="mailto:ap@dli.dk">ap@dli.dk</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
