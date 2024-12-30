import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import unaLogo from '../images/una.svg';
import unaYdin from '../images/una-ydin.png';
import unaBCB from '../images/una-bcb.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Una</title>;
  return getHead({ title });
};

export default function Una({ location }) {
  const roles = demos.una.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://unaoy.fi/">
          <img src={unaLogo} alt="Una Oy" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>UNA is a publicly owned in-house company and we are helping our owners in ICT development.
      In the nationwide UNA cooperation, social and healthcare information management and
      interoperability have been implemented in many ways. UNA solutions already have some
      FHIR-capabilities.</p>
      <section id="demo">
        <h2>FHIR Demo 2023</h2>
        <a href={unaYdin}><img src={unaYdin} alt="Ydin UNA information flow chart" /></a>
        <p>UNA has implemented a concrete and testable FHIR interface for appointments using the
        national FHIR basic profiles, which combines data from several different data sources in <a
        href="https://unaoy.fi/palvelut/ratkaisut/ydin-una/">Ydin UNA</a>. The information produced
        by the interface has also been brought to use in the Omavointi mobile application
        implemented by <Link to="../bcb-medical">BCB Medical</Link>.</p>
        <a href={unaBCB}><img src={unaBCB} alt="Data flow to BCB Medical Omavointi app" /></a>
        <p>This is how we can open social and healthcare data with the help of FHIR interfaces for
        the wider ecosystem to utilize.</p>
        <p>Watch the video below, and read more about our FHIR Demo at <a
        href="https://unaoy.fi/ajankohtaista/uutiset/una-mukana-edistamassa-sote-datan-avaamista-ekosysteemin-hyodynnettavaksi-fhir-rajapintojen-avulla/">our
        webpage</a> (in Finnish).</p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CRt6nMQL6O4"
            title="UNA FHIR Demo 2023"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="smart">
        <h2>SMART App Launch</h2>
        <p>At UNA, ways to promote usability between applications have been actively sought and
        promoted. The goal is that once a strongly identified user can move smoothly between the
        applications they need. <strong>SMART App Launch</strong> implementations progressing in
        practice include:</p>
        <ul>
          <li>It is possible to start UNA solutions from health information systems (e.g. <a
          href="https://eskosystems.fi/en/product-family/esko-cpms/">Esko CPIS</a> to <a
          href="https://unaoy.fi/palvelut/ratkaisut/tilannekuva-una/">Tilannekuva UNA</a>).</li>
          <li>Additional applications can be launched from Tilannekuva UNA in the future. The
          solution already comprehensively displays social and healthcare data, but some
          information (e.g., measurement data, images) needs its own user interface. In the future,
          you can open a supportive application directly from Tilannekuva UNA.</li>
        </ul>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juha Rannanheimo</h3>
          <p>Chief Development Officer</p>
          <address>
            <a href="mailto:juha.rannanheimo@unaoy.fi">juha.rannanheimo@unaoy.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
