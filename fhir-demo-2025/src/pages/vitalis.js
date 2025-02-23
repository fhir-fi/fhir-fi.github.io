import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2024 at Vitalis</title>;
  return getHead({ title });
};

export default function Vitalis() {

  return (
    <Article id="vitalis" className="event">
      <section id="intro">
        <h1>FHIR Demo 2025 in Vitalis</h1>
        <p>
          Several FHIR Demo 2025 participants will be at <a
          href="https://vitalis.nu/">Vitalis</a> in Gothenburg, May 19-22.
        </p>
      </section>
      <section className="event vitalis">
        <h2>FHIR Demo particinpants at Vitalis</h2>
        <p>
          Several FHIR Demo participants will be in Vitalis. We'll keep updating a list here up
          until the event starts.
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
