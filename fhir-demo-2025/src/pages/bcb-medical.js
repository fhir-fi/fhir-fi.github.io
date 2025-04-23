import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import bcbMedicalLogo from '../images/bcb-medical.svg';
import bcbDataFlow from '../images/bcbPatientDataFlow.png';
import bcbPatientForm from '../images/bcbPatientForm.png';
import bcbMyHealth from '../images/MyHealth_Pathway.png';
import bcbSuite from '../images/BCB_Suite-eng.png';
import { Link } from 'gatsby';

export function Head() {
  const title = <title>FHIR Demo 2025: BCB Medical</title>;
  return getHead({ title });
};

export default function BcbMedical({ location }) {
  const roles = demos['bcb-medical'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.microsoft.com/">
          <img src={bcbMedicalLogo} alt="BCB Medical" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <h2>BCB Medical – Bringing Data to Life</h2>
        <p>
          BCB Medical is a healthcare software company focused on the collection and analysis of
          clinical data. Since 2003, we have developed monitoring systems for the quality and
          effectiveness of care for healthcare professionals and digital services for patients. The
          company employs a total of 70 people in Finland, Sweden and the UK.
        </p>
        <p>
          BCB Medical's solutions combine, analyse and illustrate clinical data collected from a
          variety of sources in an understandable format for use by healthcare professionals. The
          collected data is used to support daily care decisions, find best care practices, develop
          treatment paths and processes, and to support various research and knowledge management
          needs. BCB Disease-Specific Registers are CE marked medical devices, and our company is
          certified according to MDR, ISO 13485 and ISO 27001 requirements.
        </p>
        <p>BCB solutions are integrated into the Electronic Health Record systems in the hospitals.
          The MDR-compatible MyHealth service platform powers a Digital Service Network that
          seamlessly integrates the digital and in-person services of the wellbeing services
          county. Designed to deliver equitable and flexible care, the MyHealth platform ensures
          that residents have access to services based on their specific needs. By combining
          digital and physical resources, the platform provides a highly effective and
          cost-efficient approach to comprehensive care.
        </p>
      </section>
      <section id="fhir">
        <h2>BCB Medical and HL7 FHIR</h2>
        <p>
          With the help of FHIR integration, the patient's personal data and appointment booking
          information, as well as medication and other data from the EHR systems or remote and home
          measurement devices (e.g. PEF measurements) can be imported into the BCB systems. BCB
          Disease-Specific Registers and MyHealth solutions are able to integrate with several
          systems offering different FHIR interfaces (e.g. <Link to="/epic">Epic</Link> system).
        </p>
        <h3>BCB HL7 FHIR Resources</h3>
        <p>
          BCB has strong commitment to HL7 FHIR implementations and in the future BCB will utilize
          new FHIR resources whenever needed.
        </p>
        <p>HL7 FHIR resources BCB has in production:</p>
        <ul>
          <li>Medication</li>
          <li>MedicationStatement</li>
          <li>Observation (Vitals)</li>
          <li>Patient</li>
        </ul>
        <p>HL7 FHIR resources BCB will utilize in the near future:</p>
        <ul>
          <li>Appointment</li>
          <li>Encounter</li>
        </ul>
        <h3>FHIR Patient - Use Case: Add New Patient</h3>
        <p>
          In this use case patient data is fetched from the <Link to="/cgi">CGI Omni 360</Link> EHR
          using FHIR API.
        </p>
        <figure>
          <a href={bcbDataFlow}>
            <img
              src={bcbDataFlow}
              alt="Sequence diagram showing the Professional using the CGI OMNI 360 system, with steps: 1) Minimum Context Management from Omni 360 to BCB Integration Platform; 2) Login from Integration Platform to BCB Disease Specific Register; 3) Get Patient Data call from Disease Specific Register to Integration Platform; 4) FHIR Patient Search from Integration Platform to Omni 360; 5) FHIR Patient Response from Omni 360 to Integration Platform; 6) Add New Patient response from Integration Platform to Disease Specific Register."
            />
          </a>
          <figcaption>
            Patient data is transferred from the EHR to the register in FHIR format.
          </figcaption>
        </figure>
        <figure>
          <a href={bcbPatientForm}>
            <img
              className="no-scale"
              src={bcbPatientForm}
              alt="Screenshot visualizing how a form has been populated with data from the EHR"
            />
          </a>
          <figcaption>
            Patient data form is populated with the information from the EHR.
          </figcaption>
        </figure>
      </section>
      <section id="solutions">
        <h2>BCB solutions to improve the quality and effectiveness of care</h2>
        <img
          src={bcbSuite}
          alt="BCB Suite: BCB Disease Specific Platform; BCB Data & Analytics; BCB MyHealth; BCB Integration Engine"
        />
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/825732300?title=0&byline=0"
            title="BCB Suite"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="myhealth">
        <h2>MyHealth Pathway – Healthcare and social services in a single platform</h2>
        <img
          src={bcbMyHealth} 
          alt="Screen shots of MyHealth Pathway on a mobile device and on a laptop"
        />
        <p>
          MyHealth Pathway is an integral feature of the MDR-compatible digital service platform.
          It includes tools such as symptom and quality-of-life questionnaires, customer guidance
          functions, and dynamically updated service pathways that adapt to individual service
          needs. Additionally, robust integration with various source systems allows for the use of
          existing data, enabling MyHealth Pathways to be seamlessly incorporated into the
          wellbeing services county's digital platform.
        </p>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juha Seppälä</h3>
          <p>Integration Specialist, Team Lead</p>
          <address>
            <a href="mailto:juha.seppala@bcbmedical.com">juha.seppala@bcbmedical.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
