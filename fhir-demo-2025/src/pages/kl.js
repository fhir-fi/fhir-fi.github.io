import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import klLogo from '../images/kl.png';

export function Head() {
  const title = <title>FHIR Demo 2025: KLGateway</title>;
  return getHead({ title });
};

export default function KLGateway({ location }) {
  const roles = demos.kl.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.kl.dk/">
          <img src={klLogo} alt="KL" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
      <p>
        <a href="https://fhir.kl.dk/gateway/index.html">KLGateway</a>, which is an add-on to the
        FUT infrastructure, is implemented to support reporting from the 98 Danish municipalities.
      </p>
      <p>
        The reporting is for secondary use, such as statistics and management information, which
        can be used to improve elderly- and childcare across the municipalities. The reporting
        information is transferred using FHIR profiles, and they do inherit from DK Core.
      </p>
      <p>
        The Danish Local Government Association (<i lang="dk">DK: Kommunernes Landsforening</i>) is
        responsible for the solution.
      </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Morten Ejlersen</h3>
          <address>
            <a href="mailto:moe@kl.dk">moe@kl.dk</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
