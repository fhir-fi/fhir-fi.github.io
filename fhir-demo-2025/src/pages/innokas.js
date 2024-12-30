import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import innokasLogo from '../images/innokas.png';
import medicubexBoothOpen from '../images/medicubex_booth_open.png';
import innokasFlowChart from '../images/innokas_flow_chart.png';
import anttiKaltiainen from '../images/antti_kaltiainen.png';
import jussiKoskinen from '../images/jussi_koskinen.png';
import tapioPelkonen from '../images/tapio_pelkonen.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Innokas / MedicubeX</title>;
  return getHead({ title });
};

export default function Innokas({ location }) {
  const roles = demos['innokas'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.innokas.eu/">
          <img src={innokasLogo} alt="Innokas" />
        </a>
      </h1>
      <Roles list={roles} />

      <p>Our solution is an integration channel where data can be effortlessly transferred from a
      medical device to the national healthcare databases. This removes the need for manual input
      entirely and would save significant time and resources for healthcare providers around the
      world.</p>

      <h3>Index</h3>
      <ul>
        <li><a href="#innokas-approach">Innokas Approach</a></li>
        <li><a href="#measurement-flow">Measurement Transfer Flow</a></li>
        <li><a href="#fhir-exhibitions">FHIR Demo 2024 Exhibitions</a></li>
        <li><a href="#medicubex">MedicubeX™ eHealth Station</a></li>
        <li><a href="#innokas-software">Innokas Software Professionals</a></li>
        <li><a href="#innokas-company">Innokas as a Company</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <section id="innokas-approach">
        <h2>Innokas Approach</h2>
        <p>Sending patient's self-check results from customer product (MedicubeX™) to national
        health registry (OmaKanta) without any healthcare professional actions needed.</p>
      </section>
      <ul>
        <li>
          Transform customer data format to FHIR
        </li>
        <li>
          Supports strong authentication (e.g. bank credentials) with Suomi.fi authorization
        </li>
        <li>
          Includes own FHIR server 
        </li>
        <li>
          Designed in fault-tolerant way; failed transactions will be retried later to be stored to
          national health registry 
        </li>
        <li>
          Could be modified to support any other customer's system with minimal work needed
        </li>
        <li>
          Value proposition is to get customer product's data into the national health registry for
          doctors to see it when browsing patient's medical records
        </li>
      </ul>

      <section id="measurement-flow">
        <h2>Measurement Transfer Flow</h2>
        <p>Demo inputs:</p>
        <ul>
          <li>Standalone demo web panel</li>
          <li>MedicubeX self-measurement booth</li>
        </ul>
        <p>Destinations:</p>
        <ul>
          <li>Omakanta Omatietovaranto</li>
          <li>Standalone OpenEMR demo panel</li>
        </ul>
        <p>Flow:</p>
        <ul>
          <li>User finishes measurements</li>
          <li>User interface asks to send measurements to cloud</li>
          <li>User interface transfers them to Innokas backend</li>
          <li>Innokas backend parses them to FHIR Observations, stores them to own FHIR server,
          and dispatches jobs to transmit</li>
          <li>Queue worker tries to transmit FHIR Observations to FHIR destination
          (Omatietovaranto)</li>
          <li>After succesful transmission, measurement data is available to be read from
          Omakanta</li>
        </ul>
        <img src={innokasFlowChart} alt="Measurement Transfer Flow" />
      </section>

      <section id="fhir-exhibitions">
        <h2>FHIR Demo 2024 Exhibitions</h2>
        <p>
          In FHIR Demo 2024 we will demonstrate the sending of patient’s results (MedicubeX) and show
          them on OmaKanta’s web app. The eHealth Station will also be available for the exhibition
          guests to see and experience. 
        </p>
        <p>Events we will be at</p>
        <ul>
          <li>Radical Health Festival 21.-23.5.2024</li>
        </ul>
      </section>

      <section id="medicubex">
        <img src={medicubexBoothOpen} alt="MedicubeX™ eHealth Station" />
        <h2>MedicubeX™ eHealth Station</h2>
        <p>
          The MedicubeX™ eHealth Station is an autonomous self-check station with antimicrobial and
          safe space solutions. This station can be used to measure a person's vital signs and
          cardiovascular risk factors.
        </p>
        <p>
          At any given moment, users can view their accurate vital signs and more, such as their
          body composition or their personal risk of cardiovascular disease. Remote appointments
          from the station enable direct communication with healthcare professionals without being
          in physical contact with other patients or healthcare staff.
        </p>
        <p>
          The MedicubeX™ station is an all-in-one healthcare solution. The eHealth station can be
          used for self-motivated fitness and wellness use or as a tool for healthcare providers.
        </p>
      </section>
      <div className="media">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/e8kNx2UagNY"
          title="Medicubex demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>

      <section id="innokas-software">
        <h2>Innokas Software Professionals</h2>
        <p>
          Innokas is strong in healthcare software, from embedded to web and mobile solutions,
          developing healthcare digitalization solutions with and for our customers. Our team of
          SW experts has a robust experience in mobile solutions, system integrations, and solutions
          related to data and analytics.
        </p>
        <p>
          Our success comes straight from our customers' success. Our working model is doing joint
          projects with our partners, in which we have long industry experience and best practices.
          These we can harness for the benefit for our customers. We have developed competences and
          capabilities, that started with expertise of embedded software, but now spans from IoT
          connectivity to Integration technologies - such as HL7 and FHIR - to Cloud Technologies
          and Artificial Intelligence. These technologies are applied in a highly regulated
          environment, where we have vast experience. This and the fact that our SW expertise is a
          part of Innokas’ full-service offering, including our Quality and regulatory expertise,
          sets us a part from our competitors.
        </p>
      </section>

      <img className="logo" src={innokasLogo} alt="Innokas" />

      <section id="innokas-company">
        <h2>Innokas as a Company</h2>
        <p>
          Innokas is a growing and agile family-owned technology company. We have 30 years of experience
          of highly demanding technology, and of working with an exceptionally wide range of customer
          projects from HealthTech to other complex, intelligent devices and solutions that help improve
          the quality of people’s lives. With close to 200 professionals in manufacturing, engineering,
          software development, quality, and regulatory services, Innokas is a dedicated partner to its
          customers throughout the product or solution lifecycle. 
        </p>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={anttiKaltiainen} />
            <img src={anttiKaltiainen} alt="Antti Kaltiainen" />
          </picture>
          <h3>Antti Kaltiainen</h3>
          <p>CTO</p>
          <address>
            <a href="mailto:antti.kaltiainen@innokas.eu">antti.kaltiainen@innokas.eu</a>
            <br />
            <a href="tel:+358405700333">+358 40 570 0333</a>
          </address>
        </div>
        <br />
        <div className="business-card">
          <picture>
            <source srcSet={jussiKoskinen} />
            <img src={jussiKoskinen} alt="Jussi Koskinen" />
          </picture>
          <h3>Jussi Koskinen</h3>
          <p>Software Engineer</p>
          <address>
            <a href="mailto:jussi.koskinen@innokas.eu">jussi.koskinen@innokas.eu</a>
          </address>
        </div>
        <br />
        <div className="business-card">
          <picture>
            <source srcSet={tapioPelkonen} />
            <img src={tapioPelkonen} alt="Tapio Pelkonen" />
          </picture>
          <h3>Tapio Pelkonen</h3>
          <p>Senior Software Engineer</p>
          <address>
            <a href="mailto:tapio.pelkonen@innokas.eu">tapio.pelkonen@innokas.eu</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
