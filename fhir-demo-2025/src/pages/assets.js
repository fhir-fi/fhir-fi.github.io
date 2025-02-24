import * as React from 'react';
import { withPrefix } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo2 from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2025 Assets</title>;
  return getHead({ title });
};

export default function Assets() {
  const rootFolder = withPrefix('/');

  return (
    <Article id="assets">
      <section id="about">
        <h1>Graphical Assets for FHIR Demo 2025</h1>
        <p>
          Want to use the look and feel of the FHIR Demo 2025 in your own presentations? Awesome!
        </p>
        <p>
          There is no formal style guide for the demo, but the assets on this page should get you
          started.
        </p>
      </section>
      <section id="info">
        <h2>Graphical Assets</h2>
        <section id="fhir-logo">
        <h3>The FHIR Logo</h3>
          <ul>
            <li>
              <a
                href={`${rootFolder}fhir.svg`}
                download="fhir-logo.svg"
                type="image/svg+xml"
              >
                fhir-logo.svg
              </a>
            </li>
          </ul>
          <p>
            If you use the FHIR logo in your own materials, please do pay attention to the
            trademark and the <a href="https://www.hl7.org/fhir/license.html#trademark">guidance
            on how it can be used</a> from HL7 International.
          </p>
        </section>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};
