import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/cambio.svg'
import martin from '../images/MartinGrundberg.jpeg'

export function Head() {
  const title = <title>FHIR Demo 2024: Cambio</title>;
  return getHead({ title });
};

export default function Cambio({ location }) {
  const roles = demos.cambio.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.cambiogroup.com/cambio"><img src={logo} alt="Cambio" /></a>
      </h1>
      <Roles list={roles} />
      <section className="about">
        <p>
          Cambio develops innovative digital solutions for the complete care chain within health
          care.
        </p>
        <ul>
        <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-cosmic/">Cambio COSMIC</a> is
            an innovative and safe medical record system, developed in collaboration with health
            care professionals.
          </li>
          <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-viva/">Cambio VIVA</a> is a
            powerful tool for municipal documentation, and a secure knowledge and decision support.
          </li>
          <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-viva/">Cambio VIVA</a> is a
            powerful tool for municipal documentation, and a secure knowledge and decision support.
          </li>
          <li>
            <a
              href="https://www.cambiogroup.com/our-solutions/cambio-cds-clinical-decision-support/"
            >Cambio CDS</a> is a computerised clinical decision support service. It combines
            information that is specific to an individual patient, with regulations based on
            medical evidence, to provide guidance on compliance or advise on what is the best
            treatment for the patient.
          </li>
          <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-cis/">Cambio CIS</a> is a
            comprehensive IT support system for anesthesiology and intensive care Patient Data
            Management Systems (PDMS), developed to manage, store, and deliver data from various
            types of medical equipment.
          </li>
          <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-device-connectivity/">Cambio
            Device Connectivity</a> connects all medical device data onto a single platform so that
            real time patient data is easier to store, cheaper to retrieve and safer to share.
          </li>
          <li>
            <a href="https://www.cambiogroup.com/our-solutions/cambio-open-services/">Cambio Open
            Services</a> create an ecosystem for digital innovations, where new ideas to improve
            care can thrive.
          </li>
        </ul>
      </section>
      <section className="fhir">
        <h2>HL7 FHIR</h2>
        <p>
          Cambio has been active in the collaborative effort to create the FHIR base profiles for
          Sweden.
        </p>
        <p>
          We have several integrations using FHIR, and it is Cambio's default standard for
          integrations and partners. Some examples are integration with ambulance EHRs (<a
          href="https://www.ortivus.com/">Ortivus</a> & <a href="https://omda.com/">Omda</a> are
          the companies) that supports the handover from the ambulance to ED. Another example is
          the company <a
          href="https://www.stretch.se/insights/region-skane-och-bla-appen/">StretchCare</a> (“Blå
          appen” is the app), who use FHIR to support patient questionnaires within children's
          mental health. This removes double documentation.
        </p>
        <p>
          Cambio's strategy is to expose our EHR capabilities via FHIR, for new interfaces it is
          only FHIR (assuming there is a FHIR fit).
        </p>
        <p>
          We are also looking at SMART on FHIR for future application integrations into our EHR
          client.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={martin} />
            <img
              className="roundProfilePicture"
              src={martin}
              alt=""
            />
          </picture>
          <h3>Martin Grundberg</h3>
          <p>Product Manager</p>
          <address>
            <a href="mailto:martin.grundberg@cambio.se">martin.grundberg@cambio.se</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
