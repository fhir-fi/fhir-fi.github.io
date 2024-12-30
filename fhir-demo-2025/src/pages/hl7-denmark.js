import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/logo_hl7_dk.png'
import thea from '../images/TheaMentzSorensen.jpg';

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Denmark</title>;
  return getHead({ title });
};

export default function Hl7Denmark({ location }) {
  const roles = demos['hl7-denmark'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.dk/"><img src={logo} alt="HL7 Denmark"></img></a>
      </h1>
      <Roles list={roles} />
      <section id="fhir-profiling">
        <h2>FHIR Implementation Guide</h2>
        <p>
          HL7 Denmark has published a FHIR implementation guide (IG) containing the Danish core
          profiles, called DkCore. The most recent IG was published in the beginning of May 2024,
          and can be found on <a href="www.hl7.dk">www.hl7.dk</a>, along with the previous ones.
        </p>
        <p>
          DkCore includes a number of profiles, such a DkCorePatient, DkCoreCondition and more.
          Further, is guidance provided on usage of identifiers, CodeSystem, ValueSets and
          NamingSystems in a Danish context along with necessary extensions for covering local
          concepts.
        </p>
        <p>
          A new version of DkCore is published twice a year. The continuous development follows
          processes for internal quality assurance in the working group and external consultation
          when it is decided by HL7 Denmark. 
        </p>
        <p>
          DkCore is published in version 4 of FHIR - also known as FHIR R4. However, a <a
          href="https://build.fhir.org/ig/hl7dk/dk-core/branches/R5/">CI-build in FHIR R5</a> is
          also maintained, in case project finds it valuable to use DkCore in FHIR R5. Processes
          for development and maintaining to versions can be found on <a
          href="https://confluence.hl7.org/display/HD/Release+Process+for+DK+Core">Confluence</a>.
        </p>
      </section>
      <section id="workgroups">
        <h2>Working groups</h2>
        <p>
          HL7 Denmark has a few working groups, all of which has FHIR as the primary HL7 standard.
        </p>
        <ul>
          <li>
            <strong>FHIR Special Interest Group (SIG)</strong>: The working group who develop
            DkCore. This involves profiling, writing documentation and creating examples. The group
            is broadly represented by vendors, consultants and public organizations who have
            knowledge about the general use of Danish IT and FHIR capabilities. 
          </li>
          <li>
            <strong>IPA SIG</strong>: A working group who focuses on creating International Patient
            Access (IPA) specification for Danish adoption. 
          </li>
          <li>
            <strong>PRO SIG</strong>: A working group who focuses on relating Patient Reported
            Outcome (PRO) to FHIR supporting different use cases in a Danish context.
          </li>
        </ul>
      </section>
      <section id="related">
        <h2>Related work</h2>
        <p>
          On <a href="www.hl7.dk">www.hl7.dk</a> one can find recommendation about procurement of
          IT which support FHIR. The document is intended as guidance for inspiration and help for
          setting requirements regarding the use of FHIR. Further, it is possible to find an
          overview of existing FHIR implementations in Denmark. This does not represent the entire
          portfolio of FHIR project, but a few for inspirational purposes. 
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={thea} />
            <img className="roundProfilePicture" src={thea} alt="" />
          </picture>
          <h3>Thea Mentz Sørensen</h3>
          <p>Chair</p>
          <address>
            <a href="mailto:dk-affiliate@hl7.dk">dk-affiliate@hl7.dk</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
