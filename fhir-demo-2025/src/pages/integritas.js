import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import integritasLogo from '../images/integritas.svg';
import pirkko from '../images/Pirkko2_FHIR.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Integritas</title>;
  return getHead({ title });
};

export default function Integritas({ location }) {
  const roles = demos.integritas.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.integritas.fi/">
          <img src={integritasLogo} alt="Integritas" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="pirkko-care-optimizer">
        <h2>PIRKKO<sup>&reg;</sup> Care Optimizer</h2>
        <p>PIRKKO<sup>&reg;</sup> is a secure medical web application for managing care plans for
        medical care processes provided as a Software as a Service solution to customers. It
        includes elements from Enterprise Resource Planning to improve health care resource
        planning and outcomes.</p>
        <a href={pirkko}><img src={pirkko} alt="Ruutukaappaus Pirkko-järjestelmästä" /></a>
        <p>Current patient health record systems are usually only intended to record notes from
        individual patient visits.</p>
        <p>Care plans are entered as plain text and even when they have a structured form, patient
        health record systems don’t offer any means to <em>track the execution of the care
        plan.</em></p>
      </section>
      <section id="pirkko-intervention">
        <h2>PIRKKO<sup>&reg;</sup> Intervention</h2>
        <p>The core innovation at the heart of PIRKKO<sup>&reg;</sup> is the concept of an
        <em>intervention template</em>. An intervention template is a structured care plan template
        where the care provider defines the services it offers to patients.</p>
        <p>The intervention template includes the name, intended clinical scope, recommended
        duration and visit frequency of an individual clinical service process as well as
        associated goals and questionnaires for measuring efficacy of the service.</p>
      </section>
      <section id="questionnaires">
        <h2>Electronic Questionnaires</h2>
        <p>PIRKKO<sup>&reg;</sup> includes a system for administering questionnaires as electronic
        Patient Reported Outcome (ePRO) measures for assessing the efficacy of care. Patients can
        answer the questionnaires with a smartphone, desktop computer or a tablet.</p>
        <p>Clinicians can choose from a variety of scientifically validated outcome and symptom
        questionnaires. ePROs can be attached to individual intervention templates for
        standardizing their assessment. Examples include, but are not limited to, patient
        self-assessment of symptoms of illness before, during and after treatment.</p>
      </section>
      <section id="pirkko-integration">
        <h2>PIRKKO<sup>&reg;</sup> Integration</h2>
        <ul>
          <li>
            PIRKKO<sup>&reg;</sup> integration provides seamless data exchange and minimum
            context management between the patient health record system and PIRKKO®.
          </li>
          <li>PIRKKO<sup>&reg;</sup> can now also export enriched data to data pool.</li>
          <li>
            HL7 FHIR based integration option was developed in collaboration with Cerner.
          </li>
        </ul>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Kalle Horjamo</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:kalle.horjamo@integritas.fi">kalle.horjamo@integritas.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
