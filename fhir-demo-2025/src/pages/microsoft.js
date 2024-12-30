import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import microsoftLogo from '../images/microsoft.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Microsoft</title>;
  return getHead({ title });
};

export default function Microsoft({ location }) {
  const roles = demos.microsoft.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.microsoft.com/">
          <img src={microsoftLogo} alt="Microsoft" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>Microsoft presents two solutions:</p>
      <ul>
        <li>
          An open-source <a href="#fhir-server">FHIR server</a> that can be used as a self-hosted
          server or as a managed solution.
        </li>
        <li>
          Several <a href="#analytics">data pipelines and analytics services</a> that can be used
          to analyze and utilize available FHIR data.
        </li>
      </ul>
      <section id="fhir-server">
        <h2>FHIR Server</h2>
        <p>FHIR capabilities from Microsoft are available in three configurations:</p>
        <ul>
          <li>The <strong>FHIR service</strong> is a managed platform as a service (PaaS) that
          operates as part of Azure Health Data Services. In addition to the FHIR service, Azure
          Health Data Services includes managed services for other types of health data such as the
          DICOM service for medical imaging data and the MedTech service for medical IoT data. All
          services (FHIR service, DICOM service, and MedTech service) can be connected and
          administered within an Azure Health Data Services workspace.</li>
          <li>Azure API for FHIR is a managed FHIR server offered as a PaaS in Azure - easily
          provisioned in the Azure portal. Azure API for FHIR is not part of Azure Health Data
          Services and lacks some of the roles of the FHIR service.</li>
          <li>FHIR Server for Azure, an open-source FHIR server that can be deployed into your
          Azure subscription, is available on GitHub at <a
          href="https://github.com/Microsoft/fhir-server">https://github.com/Microsoft/fhir-server</a>.</li>
        </ul>
        <p>For use cases that require customizing a FHIR server with admin access to the underlying
          services (e.g., access to the database without going through the FHIR API), developers
          should choose the open-source FHIR Server for Azure. For implementation of a turnkey,
          production-ready FHIR API with a provisioned database backend (i.e., data can only be
          accessed through the FHIR API - not the database directly), developers should choose the
          FHIR service.</p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/5vS7Iq9vpXE"
            title="Azure API for FHIR (Fast Healthcare Interoperability Resources) | Azure Friday"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
        <p>See also the <a
        href="https://www.youtube.com/playlist?list=PLLasX02E8BPAgZj2cNnKftIH8kxj57_44">Microsoft
        Azure Health Data Services</a> playlist on Youtube.</p>
      </section>
      <section id="analytics">
        <h2>Data Pipelines and Analytics</h2>
        <p>Health researchers have embraced the FHIR standard as it gives the community a shared
        data model and removes barriers to assembling large datasets for machine learning and
        analytics. With the FHIR service's data conversion and PHI de-identification capabilities,
        researchers can prepare HIPAA-compliant data for secondary use before sending the data to
        Azure machine learning and analytics pipelines. The FHIR service's audit logging and alert
        mechanisms also play an important role in research workflows.</p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oqJiuJaOIv4"
            title="FHIR Demo 2023 - Microsoft"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>
     <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Aleksi Kuitunen</h3>
          <p>Health Lead at Microsoft</p>
          <address>
            <a href="mailto:aleksi.kuitunen@microsoft.com">aleksi.kuitunen@microsoft.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
