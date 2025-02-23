import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/hl7-finland-black.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import vitalisCapture from '../images/Vitalis2023-Nordic_harmonization_of_health_data.png'

export function Head() {
  const title = <title>FHIR Demo 2025: HL7 Finland</title>;
  return getHead({ title });
};

export default function Hl7Finland({ location }) {
  const roles = demos['hl7-finland'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.fi/">
          <img src={logo} alt="HL7 Finland" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="fhir-profiling">
        <h2>FHIR Implementation Guides</h2>
        <p>
          HL7 Finland has published several FHIR implementation guides. Recently published ones are
          the <a href="https://hl7.fi/fhir/finnish-base-profiles/">Finnish Base Profiles
          implementation guide</a> that specifies the Finnish base profiles for FHIR, and the <a
          href="https://hl7.fi/fhir/finnish-smart/">Finnish Implementation Guide for SMART App
          Launch</a> that specifies guidelines for and examples of using the SMART App Launch
          mechanism in Finland.
        </p>
        <p>
          HL7 Finland has also done some early mapping of Nordic FHIR Base Profiles. See the <a
          href="https://hl7.fi/fhir/finnish-base-profiles/Vitalis2023-Nordic_harmonization_of_health_data.pdf"
          >presentation slides</a> of the session <a
          href="https://invitepeople.com/public/events/edd1776c4a/seminars/ca0805fa9c">Nordic
          harmonization of health data</a>, given in
          the <a href="https://vitalis.nu/">Vitalis</a> conference in May, 2023. They include an
          initial comparison of the Danish, Finnish, Norwegian, and Swedish base profile
          specifications. There will be a <a
          href="https://invitepeople.com/public/events/ae499c7a48/seminars/da00c15a72"
          >session on the topic</a> this year too, with other Nordic HL7 affiliates.
        </p>
        <figure>
          <a href={vitalisCapture}>
            <img
              src={vitalisCapture}
              alt="Capture of slide 14 of the Vitalis presentation mentioned above"
            />
          </a>
          <figcaption>
            In 2023, Denmark had profiled 5 resource types, Finland and Norway both 20, and Sweden
            4 resource types. Only three resource types (Organization, Patient, and Practitioner)
            were profiled by all countries.
          </figcaption>
        </figure>
        <p>
          This year one of the main activities is to consolidate the previously published
          scheduling related implementation guides into one guide, also including the recent input
          from Kanta implementation guide for appointment record stored to Kanta.
        </p>
        <p>
          More information is available at <a href="https://hl7.fi/fhir/">hl7.fi/fhir</a>.
        </p>
      </section>
      <section id="workgroups">
        <h2>Working Groups</h2>
        <p>
          HL7 Finland has several active working groups, all of which have some FHIR related
          activities this year.
        </p>
        <ul>
          <li>
            <strong>Technical Committee</strong> oversees the ballot process of FHIR implementation
            guides published by HL7 Finland and coordinates voting in ballots of HL7 International
            and HL7 Europe.
          </li>
          <li>
            <strong>Personal Health SIG</strong> organizes workshops that often handle FHIR
            specific topics. The special interest group has a subgroup that focuses on developments
            of the national Kanta infrastructure. This includes the fully FHIR based Finnish PRH
            for health and wellness data collected and governed by citizens, as well as the FHIR
            API for patient-facing apps accessing information in the clinical part of Kanta
            repository.
          </li>
          <li>
            <strong>IHE Finland</strong> is a working group focused on IHE profiles, and also the
            IHE affiliate for Finland. This year one of the focus areas is in both studying FHIR
            related IHE profiles in more detail and in presenting them to the local community.
          </li>
          <li>
            <strong>OpenEHR Finland</strong> is a working group focused on OpenEHR implementation
            and development in Finland, and also the OpenEHR affiliate for Finland. This year one
            of the considered activities is to advance mapping between OpenEHR and local FHIR
            profiles.
          </li>
        </ul>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h3>Mikael Rinnetmäki</h3>
          <p>FHIR Ambassador</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
