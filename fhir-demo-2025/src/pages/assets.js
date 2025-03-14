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
        <section id="fonts">
          <h3>Typography</h3>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/specimen/Playfair+Display?selection.family=Playfair+Display"
              >
                Playfair Display
              </a> (Google Fonts) used for large headings
            </li>
            <li>
              <a
                href="https://fonts.google.com/share?selection.family=Commissioner:wght@100..900"
              >
                Commissioner font
              </a> (Google Fonts) used for body text
            </li>
          </ul>
          <p>
            Playfair is a transitional design. We are in a transitional phase.
          </p>
          <p>
            The body text font is Commissioner, as we need to affect the European Union and the
            regulation for the European Health Data Space (EHDS) and get the FHIR standard
            acknowledged more widely there. ;-)
          </p>
        </section>
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
