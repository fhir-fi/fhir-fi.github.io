import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import buddyLogo from '../images/buddy.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Buddy Healthcare</title>;
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
      <p>The scope and the contents of the demo are described in the video below.</p>
      <div className="media">
        <iframe
          width="100%"
          height="100%"
          src="https://player.vimeo.com/video/831174972?h=d63ed24fb5&title=0&byline=0"
          title="Buddy HC-FHIR-demo"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
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
