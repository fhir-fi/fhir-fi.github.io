import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import logo from '../images/sensotrend.svg';
import sensotrendAGPImage from '../images/sensotrend-agp.png';
import sensotrendCareplanImage from '../images/sensotrend-careplan.png';
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
          Sensotrend offers two apps, the <Link to="#sensotrend-connect">Sensotrend
          Connect</Link> for remote monitoring and the <Link to="#careplan">Care Plan for
          Diabetes</Link> for digitalized care paths.
        </p>
        <p>
          Sensotrend also offers <Link to="#consultancy">consultancy</Link> on EHR integrations,
          FHIR implementations, and regulatory affairs.</p>
        <p>
          See also our demos in <a href="https://fhir.fi/en/demo2023/sensotrend/">last year's
          showcase</a>. They contain plenty of additional information.
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
          The solution also includes a dashboard view of the data that is integrated into
          electronic health record systems with the <strong>SMART App Launch</strong> specification.
          See an <a
          href="https://hl7.fi/fhir/finnish-smart/AuditEvent-apotti-ehr-launch-by-practitioner.html"
          >example launch flow</a> in the Finnish Implementation Guide for SMART App Launch.
        </p>
        <figure>
          <a href={sensotrendAGPImage}>
            <img src={sensotrendAGPImage} alt="Screen capture of Sensotrend AGP Report" />
          </a>
          <figcaption>
            The main view of Sensotrend Connect is based on the internationally harmonized <a
            href="http://www.agpreport.org/agp/about">Ambulatory Glucose Profile</a> specification.
          </figcaption>
        </figure>
        <blockquote>
          <p>
            The data provided by remote monitoring solutions in a standardized format is a key
            enabler for digital care paths.
          </p>
        </blockquote>
        <p>
          The data provided by remote monitoring solutions in a standardized format is a key
          enabler for digital care paths. People with chronic conditions can live independently and
          without support from healthcare personnel for long periods of times. But things change,
          and sometimes these people need more support. Remote monitoring solutions are essential
          in ensuring that nobody is left out of care they need.
        </p>
      </section>
      <section id="careplan">
        <h2>Care Plan for Diabetes</h2>
        <p>
          The Care Plan for Diabetes formalizes established treatment protocols and best practices
          for diabetes treatment into an app.
        </p>
        <figure>
          <a href={sensotrendCareplanImage}>
            <img
              src={sensotrendCareplanImage}
              alt="Screen captures of Sensotrend Careplan for Diabetes"
            />
          </a>
          <figcaption>
            The careplan keeps track and notifies the patient of appointments, lab tests, and other
            actions relevant to care.
          </figcaption>
        </figure>
        <p>
          The data produced by the app also helps healthcare organizations identify treatment gaps.
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
          (IPA)</a> specification.
        </p>
        <p>
          We coordinate several working groups for HL7 Finland (the <a
          href="https://www.hl7.fi/sig-toiminta/ihe-sig/">IHE Finland</a>, <a
          href="https://www.hl7.fi/sig-toiminta/personal-health-sig/">Personal Health SIG</a>,
          and <a
          href="https://www.hl7.fi/sig-toiminta/personal-health-sig/omatietovarannon-tukiprojekti/">Kanta
          PH (Personal Health)</a> groups). We had a big role in creation of the <a
          href="https://hl7.fi/fhir/finnish-base-profiles/">Finnish FHIR Base profiles</a> and
          the <a
          href="https://hl7.fi/fhir/finnish-smart/">Finnish Implementation Guide for SMART App
          Launch</a>. And, we coordinate this showcase too!
        </p>
        <p>
          We're happy to help others too, and have already helped many startups with integrations
          and consulted public organizations. Please don't hesitate to get in touch!
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
