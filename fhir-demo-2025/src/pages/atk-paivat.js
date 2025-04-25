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
      <section id="intro" className="callout">
        <h1>FHIR Demo 2025 ATK-päivillä</h1>
        <p>
          FHIR Demo 2025 esittelee FHIR-standardin käytön nykytilan Suomessa <a
          href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali- ja
          terveydenhuollon ATK-päivillä</a> Jyväskylässä toukokuussa.
        </p>
        <p>
          Demon osallistujista moni esittelee demoa omalla ständillään.
        </p>
        <p>
          Demoa pyritään myös esittelemään kootusti, mutta aika ja paikka ovat vielä hakusessa.
          Mikäli koottu esittely järjestyy, kerrotaan aika ja paikka tällä sivulla.
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
