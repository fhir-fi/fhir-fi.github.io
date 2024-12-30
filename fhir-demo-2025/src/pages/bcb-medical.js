import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import bcbMedicalLogo from '../images/bcb-medical.svg';
import bcbOmavointi from '../images/bcb-medical-omavointi.png';
import bcbSuite from '../images/bcb-medical-suite.png';

export function Head() {
  const title = <title>FHIR Demo 2024: BCB Medical</title>;
  return getHead({ title });
};

export default function BcbMedical({ location }) {
  const roles = demos['bcb-medical'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.microsoft.com/">
          <img src={bcbMedicalLogo} alt="BCB Medical" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>BCB Medical Oy on terveydenhuollon tietojärjestelmätoimittaja, joka on vuodesta 2003
        kehittänyt hoidon laadun ja vaikuttavuuden seurantajärjestelmiä terveydenhuollon
        ammattilaisten käyttöön ja sähköisiä asiointipalveluita potilaille. BCB tautikohtaiset
        laaturekisterit ja Omavointi sähköiset asiointipalvelut ovat käytössä laajasti kaikilla
        Suomen hyvinvointialueilla.</p>
        <p>Rekisterit ovat kiinteästi integroituja sairaaloiden potilastietojärjestelmiin sekä
        potilaan sähköisiin Omavointi-kyselyihin. Sähköisen asioinnin kokonaisratkaisu,
        Omavointi-mobiili, nivoutuu myös osaksi hyvinvointialueiden olemassa olevia järjestelmiä.
        BCB-järjestelmien avulla kerättyä tietoa voidaan hyödyntää monipuolisesti tietojohtamisen
        välineenä. Erilaisilla raportti- ja analytiikkatyökaluilla sekä muilla jatkuvasti
        kehittyvillä tiedon hyödyntämisen välineillä voidaan seurata ja kehittää prosesseja niin
        yksittäisellä klinikalla kuin koko hyvinvointialueella.</p>
        <p>BCB-järjestelmiin voidaan FHIR-integraation avulla tuoda potilaan henkilö- ja
        ajanvaraus&shy;tietoja sekä lääkitys- ja havainto-arvo&shy;tietoja
        potilastieto&shy;järjestelmistä tai etä- ja kotimittauslaitteista (esim. PEF-mittaukset).
        BCB Medicalin kehittämät laaturekisterit ja Omavointi-ratkaisut ovat kykeneviä
        integroitumaan useisiin eri FHIR-rajapintoja tarjoaviin järjestelmiin (esim. Apotin
        Epic-järjestelmä).</p>
      </section>
      <section id="bcb-suite">
        <h2>Hoidon laadun ja vaikuttavuuden seuranta BCB Suite -kokonaisuuden avulla</h2>
        <img src={bcbSuite} alt="BCB Suite koostuu BCB Tautikohtaisista laaturekistereistä ja BCB Omavointi-kyselyistä sekä BCB Integraatioalustasta ja BCB Data ja analytiikka -komponenteista." />
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/825741800?h=d63ed24fb5&title=0&byline=0"
            title="BCB Suite"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="omavointi">
        <h2>Sähköinen kokonaisasiointi hyvinvointialueilla Omavointi-ratkaisuja hyödyntäen</h2>
        <img src={bcbOmavointi} alt="BCB Omavointi -mobiilin osia ovat Omavointi-dynaamiset palvelupolut, Omavointi-kyselyt (BCB Rekisterikohtaiset kyselyt), Omavointi-etäseuranta, Omavointi -kansalaisen lomakkeet, Omavointi-palautteet sekä Omavointi-etävastaanotto." />
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/827636381?h=cbce9e84d7&title=0&byline=0"
            title="BCB Omavointi kokonaisratkaisut"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Janne Heikkinen</h3>
          <p>Data Integration Architect</p>
          <address>
            <a href="mailto:janne.heikkinen@bcbmedical.com">janne.heikkinen@bcbmedical.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
