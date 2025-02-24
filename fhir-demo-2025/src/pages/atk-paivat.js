import * as React from 'react';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2025 ATK-päivillä</title>;
  return getHead({ title });
};

export default function AtkPaivat() {

  return (
    <Article id="atk-paivat" className="event">
      <section id="intro">
        <h1>FHIR Demo 2025 ATK-päivillä</h1>
        <p>
          FHIR Demo 2025 esittelee FHIR-standardin käytön nykytilan Suomessa <a
          href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali- ja
          terveydenhuollon ATK-päivillä</a> Jyväskylässä toukokuussa.
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
