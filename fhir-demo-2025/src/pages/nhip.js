import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import { Link } from 'gatsby';
import medicinDkLogo from '../images/Medicin.dk_Logo_RGB.svg';
import fassLogo from '../images/fass.jpg';
import pharmacaLogo from '../images/pharmaca.jpg';
import fkLogo from '../images/felleskatalogen.png';
import '../styles/nhip.css';

export function Head() {
  const title = <title>FHIR Demo 2024: Nordic Health Information Partnership</title>;
  return getHead({ title });
};

export default function NHIP({ location }) {
  const roles = demos.nhip.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1 className="nhip">Nordic Health Information Partnership</h1>
      <Roles list={roles} />
      <section id="about">
        <h2>About the Nordic Health Information Partnership</h2>
        <p>
          The Nordic Health Information Partnership is the cooperation of the pharmaceutical
          product compendia of the Nordic countries: <Link to="../medicin-dk">Medicin.dk</Link
          > (Denmark), <a href="https://pharmaca.fi/en/">Pharmaca</a> (Finland), <Link
            to="../felleskatalogen">Felleskatalogen</Link> (Norway), and <a
            href="https://www.fass.se/">FASS</a> (Sweden).
        </p>
        <p className="nhip-company-logos">
          <img className="nhip-company-logo" src={medicinDkLogo} alt="Logo for Medicin.dk"/>
          <br/>
          <img className="nhip-company-logo" src={pharmacaLogo} alt="Logo for Pharmaca"/>
          <br/>
          <img className="nhip-company-logo" src={fkLogo} alt="Logo for Felleskatalogen"/>
          <br/>
          <img className="nhip-company-logo" src={fassLogo} alt="Logo for FASS"/>
        </p>
      </section>
      <section id="nordic-fhir-epi">
        <h2>Nordic FHIR ePI</h2>
        <p>
          The four compendia have launched a joint project to supply electronic package
          leaflets (ePIL) in the Nordic languages for the testing scenarios of <a
          href="https://www.gravitatehealth.eu/">Gravitate Health</a>. The structured, electronic
          package leaflets are taken from the compendia's internal repositories, converted from
          their proprietary formats to a common standard based on HL7 FHIR, and delivered through
          a shared repository to Gravitate Health. The use of HL7 FHIR, an established
          international standard for data exchange format, reduces the implementation effort
          needed for Gravitate Health's end-user applications and helps to achieve consistent
          handling of the content across languages, and at the same time prepares the software
          ecosystem for consuming the future FHIR ePIs from EMA.
        </p>
        <p>
          The common Nordic standard that each Nordic ePIL is expected to conform to is represented
          in computable form as a FHIR implementation guide (IG). The project's IG documents the
          resource profiles, code systems, and value sets, building on the HL7 Vulcan Accelerator's
          global <a href="https://hl7.org/fhir/uv/emedicinal-product-info/STU1/">Electronic
          Medicinal Product Information (ePI) FHIR Implementation Guide</a>, with the stated goal
          of being compatible with the electronic package leaflets that are expected to be
          available from the <a href="https://plm-portal.ema.europa.eu/ePIAll/">EMA ePI pilot
          system</a>.
        </p>
        <p>
          While the project scope is limited to the package leaflets used by Gravitate Health for
          testing scenarios, the conversion and cooperation gives the compendia the opportunity to
          explore the emerging European common standard for ePI, and to give feedback into the
          development of the standard based on implementer experience. Knowledge of, and
          contribution to the development of the standard can strengthen the compendia's position
          as the future distribution channel of the electronic package leaflets, both for human
          and machine consumption.
        </p>
      </section>
      <section id="nordic-fhir-exchange">
        <h2>Nordic FHIR data exchange</h2>
        <p>
          The Nordic compendia already have some established interfaces for data exchange, both
          with each other and with various private and public partners in the Nordic countries.
          Most of these interfaces are developed for certain integrations and use structures
          developed for specific use cases. Cooperation in a project based on HL7 FHIR has the
          potential to facilitate transitioning these APIs toward standardized data exchange,
          in alignment with development trends in the industry and regulatory authorities.
        </p>
        <p>
          Experience with standardization and engagement with the HL7 community can encourage
          each compendium to participate in the work done by national HL7 affiliates, such as the
          creation of national or Nordic base profiles, and in the larger regional or
          international HL7 organizations.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ádám Z. Kövér</h3>
          <p><b>Technical Contact</b></p>
          <address>
            <a href="mailto:adam.kover@felleskatalogen.no">adam.kover@felleskatalogen.no</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Bente Jansen</h3>
          <p><b>Management Contact</b></p>
          <address>
            <a href="mailto:bente.jansen@felleskatalogen.no">bente.jansen@felleskatalogen.no</a>
            <br/>
            <a href="mailto:post@felleskatalogen.no">post@felleskatalogen.no</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Essi Kariaho</h3>
          <p><b>Management Contact</b></p>
          <address>
            <a href="mailto:essi.kariaho@pharmaca.fi">essi.kariaho@pharmaca.fi</a>
            <br/>
            <a href="mailto:info@pharmaca.fi">info@pharmaca.fi</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Tina Hou Marer</h3>
          <p><b>Management Contact</b></p>
          <address>
            <a href="mailto:thm@medicin.dk">thm@medicin.dk</a>
            <br/>
            <a href="mailto:kontakt@medicin.dk">kontakt@medicin.dk</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Anna Wessling</h3>
          <p><b>Management Contact</b></p>
          <address>
            <a href="mailto:anna.wessling@fass.se">anna.wessling@fass.se</a>
            <br/>
            <a href="mailto:info@fass.se">info@fass.se</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
