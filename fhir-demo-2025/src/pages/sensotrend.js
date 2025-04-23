import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import logo from '../images/sensotrend.svg';
import terveystiedotTalteenLogo from '../images/terveystiedot-talteen.svg';
import sensotrendConnectImage from '../images/sensotrend-connect.jpg';

export function Head() {
  const title = <title>FHIR Demo 2025: Sensotrend</title>;
  return getHead({ title });
};

export default function Sensotrend({ location }) {
  const roles = demos.sensotrend.roles;

  return (
    <Demo location={location} >
      <h1><a href="https://www.sensotrend.com/"><img src={logo} alt="Sensotrend" /></a></h1>
      <Roles list={roles} targetPage="." targetFragment="" />
      <section id="intro">
        <p>
          Sensotrend empowers people with diabetes through smart apps, and also offers consultany.
        </p>
        <h3>Apps</h3>
        <p>
          As a fresh demo for this year's FHIR Demo showcase, we present <Link
          to="#tervetstiedot-talteen">Terveystiedot talteen</Link>, a service that enables patients
          to download their health data in structured format from the Finnish centralized health
          data repository Kanta.
        </p>
        <p>
          Also, together with <Link to="/epic">Epic</Link> we demonstrate <Link
          to="#sensotrend-connect">Sensotrend Connect</Link>, a remote monitoring service with
          tight integrations to EHR systems.
        </p>
        <h3>Consultancy</h3>
        <p>
          Sensotrend also offers <Link to="#consultancy">consultancy</Link> on EHR integrations,
          FHIR implementations, and regulatory affairs.
        </p>
      </section>
      <section id="terveystiedot-talteen">
        <h2>Patient Access to Structured Health Data</h2>
        <p>
          Together with <Link to="/kela">Kela</Link>, we present Terveystiedot talteen, a service
          that enables an individual to download a copy of their health data from the Finnish
          national health data repository <a
          href="https://www.kanta.fi/en/system-developers/about-kanta-services">Kanta</a>, in
          structured format.
        </p>
        <img className="logo" src={terveystiedotTalteenLogo} alt="" />
        <p>
          The data is downloaded in the format it is stored in Kanta, i.e., mainly CDA documents.
          However, a FHIR API is used to query the data, and the data is transferred within FHIR
          DocumentReference resources.
        </p>
        <p>
          Read more about the data format and check out the service in <a
          href="https://terveystiedot.talteen.fi">terveystiedot.talteen.fi</a>!
        </p>
      </section>
      <section id="sensotrend-connect">
        <h2>Sensotrend Connect</h2>
        <p>
          Sensotrend Connect is a diabetes remote monitoring solution.
        </p>
        <p>
          It makes life with diabetes easier by combining data from dozens of medical devices and
          wellness trackers and deriving actionable insights from the data. It also facilitates
          sharing the information with both healthcare professionals and peers.
        </p>
        <a href={sensotrendConnectImage}>
          <img src={sensotrendConnectImage} alt="Illustration of Sensotrend Connect" />
        </a>
        <p>
          Sensotrend Connect transforms data from third party apps and devices into HL7 FHIR format
          (mainly <strong>Observation</strong> and <strong>MedicationAdministration</strong> resources,
          see the <a
          href="https://github.com/Sensotrend/sensotrend-converter">open-source converter</a>) and
          stores it in any specified FHIR server.
        </p>
        <p>
          Sensotrend Connect also includes a dashboard view of the data that is integrated into
          electronic health record systems with the <strong>SMART App Launch</strong> specification.
          See an <a
          href="https://hl7.fi/fhir/finnish-smart/AuditEvent-apotti-ehr-launch-by-practitioner.html"
          >example launch flow</a> in the Finnish Implementation Guide for SMART App Launch.
        </p>
        <p>
          This year, we demonstrate how both raw data and statistical summary data from continuous
          glucose monitors are stored within electronic health record systems.
        </p>
        <p>
          Sensotrend has participated in creation of HL7 International's <a
          href="https://build.fhir.org/ig/HL7/cgm/">Continuous Glucose Monitoring</a> specification
          that harmonizes how data from continuous glucose monitors is shared between actors.
        </p>
        <p>
          Our FHIR Demos from <a href="https://fhir.fi/en/demo2024/sensotrend/">2024</a>, <a
          href="https://fhir.fi/en/demo2023/sensotrend/">2023</a>, and <a
          href="https://fhir.fi/en/demo2022/sensotrend.html">2022</a> provide additional details.
        </p>
      </section>
      <section id="consultancy">
        <h2>Consultancy</h2>
        <p>
          We have a lot of expertise in <strong>EHR integrations</strong>, different <strong>FHIR
          implementations</strong>, and in <strong>Regulatory affairs</strong>.
        </p>
        <p>
          We participate actively in the development of the FHIR standard. We are part of the core
          group working on the <a href="https://hl7.org/fhir/uv/ipa/">International Patient Access
          (IPA)</a> specification, and also participate in FHIR profiling work of HL7 Europe.
        </p>
        <p>
          We have coordinated the <a href="https://www.hl7.fi/sig-toiminta/ihe-sig/">IHE
          Finland</a>, <a href="https://www.hl7.fi/sig-toiminta/personal-health-sig/">Personal
          Health SIG</a>, and <a
          href="https://www.hl7.fi/sig-toiminta/personal-health-sig/omatietovarannon-tukiprojekti/"
          >Kanta PH (Personal Health)</a> working groups for HL7 Finland for many years. We had a
          big role in creation of the <a href="https://hl7.fi/fhir/finnish-base-profiles/">Finnish
          FHIR Base profiles</a>, the <a href="https://hl7.fi/fhir/finnish-smart/">Finnish
          Implementation Guide for SMART App Launch</a>, and the <a
          href="https://hl7.fi/fhir/finnish-scheduling/">Finnish Scheduling</a> FHIR implementation
          guides. And we coordinate this showcase too!
        </p>
        <p>
          We're happy to help others succeed with HL7 FHIR, and have already helped many startups
          with integrations and consulted public organizations. Please don't hesitate to get in
          touch!
        </p>
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
          <p>Founder, Sensotrend Oy</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
