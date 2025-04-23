import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import iheFinlandLogo from '../images/IHE-Finland.jpg';
import { Link } from 'gatsby';

export function Head() {
  const title = <title>FHIR Demo 2025: IHE Finland</title>;
  return getHead({ title });
};

export default function IheFinland({ location }) {
  const roles = demos['ihe-finland'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.hl7.fi/sig-toiminta/ihe-sig/">
          <img src={iheFinlandLogo} alt="IHE Finland - Integrating the Healthcare Enterprise" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="intro">
        <p>
          IHE Finland is a working group working within <Link to="/hl7-finland">HL7 Finland</Link>.
        </p>
      </section>
      <section id="webinars">
        <h2>Webinar series on IHE profiles related to FHIR</h2>
        <p>In 2024, IHE Finland organized a webinar series to cover IHE profiles related to the HL7
          FHIR standard. The recordings of those webinars have been made available for anyone to
          view, free of charge.
        </p>
        <p>The profiles are presented by John Moehrke, a co-chair of the HL7 Security workgroup, a
          member of the FHIR Management Group and the FHIR core team, and co-chair of IHE IT
          Infrastructure Technical and Planning Committee.
        </p>
        <h3>Document sharing and relationship to XDS/XCA</h3>
        <p>
          Profiles Mobile access to Health Documents (MHD) and Mobile Health Document Sharing
          (MHDS).
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Bfa-vgPDFx4?si=ccy93qv3JJP8O3JD"
            title="IHE FHIR Webinar: Document sharing and relationship to XDS/XCA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
        <h3>Patient Identity management and relationship to XCPD, PDQ, and PIX</h3>
        <p>
          Profiles Patient Demographics Query for Mobile (PDQm), Patient Identifier Cross-Reference
          for Mobile (PIXm), and Patient Master Identity Registry (PMIR).
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ta7jgEGxZSI?si=ix8DuGHevZcYAURy"
            title="IHE FHIR Webinar: Patient Identity management and relationship to XCPD, PDQ, and PIX"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
        <h3>Configuration management</h3>
        <p>
          Profiles Mobile Care Services Discovery (mCSD) and Non-patient File Sharing (NPFS).
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/V2Bz8QNKPaU?si=djJmKXb993mKEp60"
            title="IHE FHIR Webinar: Configuration management"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
        <h3>FHIR documents and accessing any document via FHIR</h3>
        <p>
          Profiles Sharing of IPS (sIPS) and Mobile Cross-Enterprise Document Data Element Extraction (mXDE).
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/NtQghrg7UkY?si=NTfoV6pT-eVKb2eH"
            title="IHE FHIR Webinar: FHIR documents and accessing any document via FHIR"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
        <h3>Privacy control, and privacy and security audits</h3>
        <p>
        Profiles Privacy Consent on FHIR (PCF) and IHE Basic Audit Log Patterns (BALP).
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WB-RyKyQH94?si=w8uJm_7wTbWpKEQY"
            title="IHE FHIR Webinar: Privacy control, and privacy and security audits"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
        <h3>Scheduling</h3>
        <p>
          Profile IHE/IT-Infrastructure – Scheduling for Mobile.
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9dpj1cT0wLU?si=SQFpF-E6oZtbvkxa"
            title="IHE FHIR Webinar: Scheduling"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Sanna Virkkunen</h3>
          <p>Co-Chair, IHE Finland</p>
          <address>
            <a href="mailto:sanna.virkkunen@solita.fi">sanna.virkkunen@solita.fi</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Juha Muinonen</h3>
          <p>Co-Chair, IHE Finland</p>
          <address>
            <a href="mailto:juha.muinonen@gmail.com">juha.muinonen@gmail.com</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Juha Rannanheimo</h3>
          <p>Co-Chair, IHE Finland</p>
          <address>
            <a href="mailto:juha.rannanheimo@unaoy.fi">juha.rannanheimo@unaoy.fi</a>
          </address>
        </div>
        <div className="business-card">
          <h3>Anssi Kauppi</h3>
          <p>Co-Chair, IHE Finland</p>
          <address>
            <a href="mailto:anssi.kauppi@intersystems.com">anssi.kauppi@intersystems.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
