import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import balansioIllustration from '../images/ProWellness_Balansio.png';
import cdmsIllustration from '../images/ProWellness_CDMS.png';
import prowellnessLogo from '../images/prowellness.png';

export function Head() {
  const title = <title>FHIR Demo 2025: ProWellness</title>;
  return getHead({ title });
};

export default function ProWellness({ location }) {
  const roles = demos.prowellness.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.prowellness.com/">
          <img src={prowellnessLogo} alt="ProWellness" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>
          ProWellness offers innovative digital health ICT solutions for the prevention and care of
          chronic diseases, e.g., diabetes, cardiovascular and heart diseases, COPD and chronic
          respiratory diseases, and endocrine disorders.
        </p>
        <p>
          We offer a clinical specialist system (<Link to="#cdms">CDMS</Link>) to public and
          private health services providers, health districts, hospitals and care communities, and
          a smart mobile digital self-management solution with supervised AI for patients (<Link
          to="#balansio">Balansio</Link>).
        </p>
      </section>
      <section id="balansio">
        <h2>Balansio</h2>
        <p>
          Balansio, a smart, mobile, 24/7 <strong>automated</strong> self-care system used by
          individuals with chronic diseases, transforms chronic care from clinic-based solutions to
          a next generation, digitalised and automated remote care solution for all stakeholders.
        </p>
        <a href={balansioIllustration}>
          <img src={balansioIllustration} alt="Illustration: Smart 24/7 Chronic Care Automation" />
        </a>
        <p>
          Balansio has been integrated with <Link to="/epic">Epic</Link> through the <strong>SMART
          App Launch</strong> mechanism. Balansio also useds the <strong>Observations</strong> and
          {' '}<strong>MedicalAdministration</strong> FHIR resources.
        </p>
      </section>
      <section id="cdms">
        <h2>CDMS</h2>
        <p>
          CDMS is a clinical specialist system used by healthcare professionals in day-to-day
          patient care. CDMS enables identifying trends in patients and performing early
          interventions to prevent complications from developing.
        </p>
        <a href={cdmsIllustration}>
          <img src={cdmsIllustration} alt="Illustration: Holistic integrated chronic care" />
        </a>
        <p>
          CDMS can be launched from an EHR using the <strong>SMART App Launch</strong> mechanism.
        </p>
      </section>
      <section id="references">
        <h2>Benefits & References</h2>
        <p>
          ProWellness solutions are used in health districts in Finland, in the United Kingdom and
          Ireland.
        </p>
        <p>
          Operations launched in 2022/2023 in United Arab Emirates with a Dubai-based business
          partner. Agreements signed for covering 10 other countries in addition to UAE
          (step-by-step rollout).
        </p>
        <p>
          British ThorasicSociety's (BTS) award to NHS hospital for improving COPD care, supported
          by ProWellness CDMS.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mika Sipilä</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:mika.sipila@prowellness.com">mika.sipila@prowellness.com</a>
            <br />
            <a href="tel:+358405725249">+358 40 572 5249</a>            
          </address>
        </div>
      </section>
    </Demo>
  );
};
