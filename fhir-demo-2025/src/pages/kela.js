import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import kelaLogo from '../images/kela.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Kela</title>;
  return getHead({ title });
};

export default function Kela({ location }) {
  const roles = demos.kela.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.kela.fi/">
          <img src={kelaLogo} alt="Kela" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="kanta-phr">
        <h2>Kanta Personal Health Record (Omatietovaranto)</h2>
        <p>
          Kanta Personal Health Record (Kanta PHR) is a national Kanta service in which users can
          save their wellbeing data. The service was deployed for the first-phase production use in
          spring 2018. Currently, citizens can record their wellbeing data in Kanta PHR with
          accepted wellbeing applications developed for this purpose. Entering data from My Kanta
          Pages (<i>OmaKanta</i>) was published in early 2024.
        </p>
        <p>
          Anyone can develop a new wellbeing application that utilises Kanta PHR. The applications
          can be server-based or mobile applications. Their users may consist of citizens,
          professionals, or both. For wellbeing application suppliers, Kanta PHR offers the
          interfaces and the open national accepted data content based on the HL7 FHIR standard.
          The FHIR Rest API interfaces are specified in the Capability Statement description. The
          data content is developed in cooperation with various actors.
        </p>
        <p>
          Currently under development is sharing data from Kanta PHR with healthcare professionals.
          Users may give their consent to healthcare and social welfare professionals to use the
          data in support of their patient care or service relationship.
        </p>
        <p>
          Application developers can integrate their own application in the sandbox environments of
          Kanta PHR for independent testing. Further information: <a
          href="https://www.kanta.fi/en/system-developers/sandbox-environments">Sandbox
          environments</a>.</p>
        <p>
          Further information about the service and the latest updates are available on the <a
          href="https://www.kanta.fi/en/system-developers/kanta-phr">Kanta PHR page</a>.
        </p>
        <p>
          Demo: The Sandbox can be used in the demo as is. Kela will also demonstrate in the
          MyKanta how users can browse their wellbeing data and store results from their
          measurements.
        </p>
      </section>
      <section id="kanta-prescription-api">
        <h2>Kanta Prescription Centre FHIR Interface</h2>
        <p>
          Prescription centre is a national Kanta service in which citizens' electronic
          prescriptions and electronic dispensations are saved. Main interfaces in production are
          based on HL7 V3 Medical Records messaging and HL7 V3 CDA R2 documents. For metadata
          search of the prescriptions has been implemented search operation based on FHIR custom
          operations and FHIR Medication*-resources. FHIR interface includes only metadata of the
          prescription although the data content of the metadata includes a large amount of
          information of the actual prescription.
        </p>
        <p>
          Currently under development are new FHIR interfaces for fetching medication list of
          citizen, the <a
          href="https://simplifier.net/guide/finnish-kanta-medication-list-r4?version=current"
          >draft for implementation guide</a> is available in Finnish.
        </p>
        <p>
          <a href="https://simplifier.net/guide/finnishkantamedicationr4/home?version=current">For
          this interface</a> there is no open Sandbox environment available. The interface can be
          used only through the Kanta <a
          href="https://www.kanta.fi/en/system-developers/test-environments#Client%20test%20environment"
          >Client testing environment</a> and needs joining to this environment (<a
          href="https://www.kanta.fi/documents/20143/91498/Kanta-asiakastestipalvelun+liittymisohje.pdf/e254b933-1d7f-04fd-d982-6ea0360aab37"
          >instructions</a> in Finnish).
        </p>
        <p>
          Demo: The Kanta services can produce examples of FHIR MedicationRequest resource
          instances for demo purpose and these instances can be made available through a server of
          another party participating in the demo or through public FHIR servers.
        </p>
      </section>
      <section id="appointments">
        <h2>Kanta Patient Data Repository Appointments</h2>
        <p>
          Currently under development in Kanta Patient Data Repository is national solution to
          store healthcare appointments. This will utilise FHIR Appointment resources. This
          solution is the first FHIR interface in Kanta Patient Data Repository that both stores
          and returns FHIR resources. Documentation (in Finnish) and example are available <a
          href="https://simplifier.net/kanta-potilastiedon-arkiston-fhir-r4">on Simplifier</a>, but
          no open sandbox is provided.
        </p>
        <p>
          Demo: The Kanta services can produce examples of FHIR Appointment resource instances for
          demo purpose and these instances can be made available through a server of another party
          participating in the demo or through public FHIR servers.
        </p>
      </section>
      <section id="social-service-audit-logs">
        <h2>Kanta Client Data Repository for Social Welfare Services Audit Logs</h2>
        <p>
          For Kanta Client Data Repository for Social Welfare Services new solution for storing
          Audit Logs for sharing documents across registrars is being developed. The solution
          focuses on receiving and storing such logs. Documentation and examples are also available
          {' '}<a href="https://simplifier.net/kanta-sosiaalihuolto-r4">on Simplifier</a>. This
          solution focuses on the auditing side of national infrastructure and not so much in
          patient and care provider focus. More information in Finnish on development on Kanta
          Social Welfare Data Repository can be read on <a
          href="https://www.kanta.fi/jarjestelmakehittajat/sosiaalihuollon-asiakastiedon-arkisto"
          >Kanta website</a>.
        </p>
      </section>
      <section id="future">
        <h2>Other Kanta FHIR Interfaces in the Future</h2>
        <p>
          Kanta Patient Data Repository Citizen Access is new Kanta interface to enable Wellbeing
          applications and Citizen portals to fetch Kanta Patient data repository content and show
          it to citizen themselves. The interface is under development and the requirements will be
          published for comments in 2024.
        </p>
        <p>
          In the future there is a plan to offer data of the Kanta services in FHIR format. This
          data can be for example diagnoses (problems), lab results, vital sign from Patient data
          repository service. The future development in Kanta services will take the new EU
          regulations into account.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Tatu Heinonen</h3>
          <address>
            <a href="mailto:tatu.heinonen@kela.fi">tatu.heinonen@kela.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
