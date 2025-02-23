import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import medcomLogo from '../images/medcom.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: MedCom</title>;
  return getHead({ title });
};

export default function MedCom({ location }) {
  const roles = demos.medcom.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://medcom.dk/">
          <img src={medcomLogo} alt="MedCom" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
      <p>
        Since the late 1990'ies, MedCom has standardized the way data is exchanged between parties
        within Danish healthcare.
      </p>
      <p>
        MedCom has now begun a modernization of the old standards to improve new business requires.
        This modernization further involves using FHIR to specify the content in the standards.
      </p>
      <p>
        Currently, this has resulted in three FHIR standards with more to come. These three
        standards are based on FHIRs messaging paradigm and are being implemented by vendors.
      </p>
      <p>
        <a href="https://medcomdk.github.io/MedComLandingPage/">MedCom's FHIR-standards</a> are a
        further profiling of DK Core.
      </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Rikke Vestesen Christiansen</h3>
          <address>
            <a href="mailto:rch@medcom.dk">rch@medcom.dk</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
