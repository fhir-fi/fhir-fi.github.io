import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import atostekLogo from '../images/atostek.png';
import atostekFHIR from '../images/atostek-fhir-2024.jpg';
import fhirLogo from '../images/fhir.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Atostek</title>;
  return getHead({ title });
};

export default function Atostek({ location }) {
  const roles = demos.atostek.roles;
  
  const solutionAltText = `Flowchart: both organizations and citizens access data in a national
  data store. E-prescription data in Clinibus, patient data, social care data, and personal
  health and wellbeing data in Clinibus.`;
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://atostek.com/">
          <img src={atostekLogo} alt="Atostek" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
        <p>
          <a href="https://clinibus.com/">Clinibus</a> is a regional eHealth platform, based on
          principles of Finnish National Health Record. <a
          href="https://recibus.com/">Recibus</a> is an electronic prescription system that can be
          deployed as a nationwide turnkey solution. They replicate the advanced national
          architecture in use in Finland, but can be deployed anywhere in the world.
        </p>
        <p>
          The platforms include both the back-end components needed for an organization-wide,
          regional, or national electronic health care or welfare record infrastructure. They also
          include the application programming interfaces and even web-based user interfaces
          required by integrating systems, and users such as doctors, hospitals, and pharmacies.
        </p>
        <p>
          Clinibus and Recibus are based on one of the world's leading national health care
          information architectures - the national Kanta services of Finland. Both products share
          codebase with Atostek's ERA solution, which is used in Finland to connect clinical
          systems to Finnish national health record Kanta, as well as provide direct use of Kanta
          data via ERA's user interfaces. Today, over 40 different systems, 900 healthcare
          organisations, and thousands of users connect to Kanta via ERA service. Over 2,8 million
          citizens' data has been handled with the ERA system.
        </p>
      </section>
      <figure>
        <a href={atostekFHIR}>
          <img src={atostekFHIR} alt={solutionAltText} />
        </a>
      </figure>
      <section className="fhir-resources">
        <p>
          Atostek is developing FHIR interfaces to Clinibus and Recibus with support for following
          resources:
        </p>
        <ul>
          <li>ClinicalDocument</li>
          <li>Composition</li>
          <li>Condition</li>
          <li>Encounter</li>
          <li>Immunization</li>
          <li>Observation</li>
          <li>Organization</li>
          <li>Patient</li>
          <li>Practitioner</li>
          <li>Procedure</li>
          <li>RelatedPerson</li>
        </ul>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
      <section className="company">
        <p>
          <a href="https://atostek.com">ATOSTEK</a> is an innovative software company from Finland.
          The company has more than 20 years of experience in Finnish healthcare digital solutions.
          Atostek connects over 20 different electronic medical records and clinical systems to the
          Finnish National Health Register. Atostek was chosen to be a vendor for a nationwide
          integration solution in 2019.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mika Torhola</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:Mika.Torhola@atostek.com">Mika.Torhola@atostek.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
