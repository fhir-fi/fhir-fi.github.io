import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import buddyLogo from '../images/buddy.png';

export function Head() {
  const title = <title>FHIR Demo 2025: Buddy Healthcare</title>;
  return getHead({ title });
};

export default function Buddy({ location }) {
  const roles = demos.buddy.roles;
    
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.buddyhealthcare.com/">
          <img src={buddyLogo} alt="Buddy Healthcare" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="intro">
        <h2>Buddy Healthcare Care Coordination Platform</h2>
        <p>
          Buddy Healthcare is a Finnish digital health company that automates patient care
          coordination, especially for surgeries and hospital treatments. Its platform enhances
          efficiency and the patient experience through structured digital pathways. The company
          serves customers in 8 European countries.
        </p>
        <h3>Platform Overview</h3>
        <ol>
          <li>
            <p>Patient Engagment App</p>
            <ul>
              <li>Delivers step-by-step guidance, reminders, forms, and secure messaging.</li>
              <li>
                Integrates with other providers' digital health solutions for a seamless
                experience.
              </li>
            </ul>
          </li>
          <li>
            <p>Care Pathway Management Dashboard</p>
            <ul>
              <li>
                Allows care teams to track progress, reduce manual work, and collect PROMs/PREMs.
              </li>
              <li>Supports risk identification and patient communication</li>
            </ul>
          </li>
          <li>
            <p>Care Analytics</p>
            <ul>
              <li>Care processes analytics</li>
              <li>PROM's</li>
              <li>PREM's</li>
              <li>Other metrics</li>
            </ul>
          </li>
        </ol>
        <h3>The platform has been integrated with</h3>
        <ul>
          <li>EHRs and surgery scheduling systems</li>
          <li>Laboratory information systems</li>
          <li>Other third-party clinical tools</li>
        </ul>
        <h3>Key Benefits</h3>
        <ul>
          <li>Lowers cancellation rates and administrative burden.</li>
          <li>Improves patient adherence and safety.</li>
          <li>Enables digital and remote care pathways.</li>
          <li>Supports efficient data and outcome tracking.</li>
        </ul>
      </section>
      <section id="democase">
        <h2>FHIR Appointment Demo</h2>
        <p>
          In the demo video, you will see how appointment information can be managed both by
          healthcare professionals and patients through the Buddy Healthcare platform. It
          enables smooth scheduling of various procedure and outpatient appointments.
        </p>
        <h3>Creating an Appointment: First Example - Chat Appointment</h3>
        <ol>
          <li>
            <strong>Patient Information</strong><br/>
            Enter the patient's ID and the organizational unit ID i.e., where the service is
            provided.
          </li>
          <li>
            <strong>Defining the Appointment</strong><br/>
            Specify the reservation type (e.g., chat appointment).<br />
            Select the resource, i.e., the professional who will handle the appointment.
          </li>
          <li>
            <strong>Creating the Appointment</strong><br/>
            Create the appointment data in the system.<br />
            Once saved, the information is automatically transferred to:
            <ul>
              <li>Buddy Healthcare's platform's professional interface</li>
              <li>To the Buddy Healtcare's patient app</li>
            </ul>
          </li>
          <li>
            <strong>Tasks</strong><br/>
            Tasks for the healthcare professionals and for the patient in care pathway are
            automatically aligned with the appointment time.
          </li>
        </ol>
        <h3>Creating an Appointment: Second Example - Surgery Time</h3>
        <ol>
          <li>Create a surgery appointment for the patient</li>
          <li>Select the resources and date and time for the surger</li>
          <li>
            The appointment information immediately appears in:
            <ul>
              <li>Buddy Healthcare's platform's professional interface</li>
              <li>In the patient app</li>
            </ul>
          </li>
          <li>
            The care pathway adapts automatically to the new appointment — for example,
            instructions for fasting and medication pauses are updated accordingly.
          </li>
        </ol>
        <h3>Modifying and Deleting Appointments</h3>
        <p>If an appointment is deleted, the system notifies the professional that:</p>
        <ol>
          <li>Appointment data is missing</li>
          <li>A message is sent to the patient indicating the appointment is under review</li>
        </ol>
        <p>
          All changes are visible in real-time to both the professional and the patient, and
          patient guidance can be triggered automatically based on the reason for the change. As
          you noticed, previous time was wrong, changing it to correct one, shows it immediately to
          patient also. 
        </p>
        <div className="media" style={{ position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1081273483?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{ position: 'absolute', top:0, left: 0, width: '100%', height: '100%'}}
            title="BHC-FHIR APPOINTMENT DEMO"
          >
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </section>
      {/* 
      <section id="integrations">
        <h3>Practical Integrations</h3>
        <p>This FHIR appointment integration is in use:</p>
        <ol>
          <li>
            In <a href="https://www.pirha.fi/en/web/english">Pirha</a> (Pirkanmaa wellbeing
            services county) across seven different units
          </li>
          <li>
            And is now being implemented based on <Link to="/cgi">OMNI360</Link>'s FHIR model as
            well
          </li>
        </ol>
      </section>
      */}
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Markus Lind</h3>
          <p>VP of Product and Business Development</p>
          <address>
            <a href="mailto:markus@buddyhealthcare.com">markus@buddyhealthcare.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
