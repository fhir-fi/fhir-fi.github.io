import * as React from 'react';

import Article, { getHead } from '../components/Article';
import map from '../images/Dynamo-kartta.png';
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
        <p>
          Demon osallistujista moni esittelee demoa omalla ständillään. Lisäksi demo esitellään
          kootusti tiistaina klo 16.45 alkaen.
        </p>
      </section>
      <section id="esittely" className="callout">
        <h2>Demon koottu esittely</h2>
        <p>
          FHIR Demo 2025 esitellään kootusti tiistaina. Esittelytilaisuudessa käydään läpi
          FHIR-standardin käytön tilanne Suomessa ja muualla, pureudutaan syvemmin valittuihin
          demoihin ja keskustellaan avomista rajapinnoista ja sovellusekosysteemeistä.
        </p>
        <h3>FHIR Demo 2025</h3>
        <p>Tiistai 6.5.2025 klo <time datetime="2025-05-06T16:45:00+0300">16.45</time>-<time
          datetime="2025-05-06T17:45:00+0300">17.45</time>
        </p>
        <address>
          Jyväskylän Ammattikorkeakoulu Jamk<br />
          Dynamo-rakennus, Piippukatu 2, 40100 Jyväskylä<br/>
          Huone: D310-311
        </address>
        <p>Dynamo-rakennus sijaitsee n. 200 metrin päässä Paviljongista.</p>
        <a href={map} aria-disabled="true">
          <img src={map} alt="Dynamo-rakennus on n. 200 metriä Paviljongista pohjoiseen." />
        </a>
        <p>
          Ks. <a href="https://maps.app.goo.gl/HwV8WPYRVHh2judD9">kävelyohjeet Google Mapsissä</a>!
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
