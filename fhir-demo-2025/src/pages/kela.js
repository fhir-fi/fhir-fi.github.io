import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import kelaLogo from '../images/kela.png';
import '../styles/kela.css';

export function Head() {
  const title = <title>FHIR Demo 2025: Kela</title>;
  return getHead({ title });
};

export default function Kela({ location }) {
  const roles = demos.kela.roles;
  
  return (
    <Demo id="kela" roles={roles} location={location} lang="fi">
      <h1 className="white">
        <a href="https://www.kela.fi/">
          <img src={kelaLogo} alt="Kela" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="in-english" lang="en">
        <p>
          For information in English, please see the <a href="https://fhir.fi/en/demo2024/kela/">
          entry in FHIR Demo 2024</a>.
        </p>
      </section>
      <section id="tiekartta">
        <h2>FHIR Kanta-palvelujen tiekartassa</h2>
        <p>Olemassa olevat:</p>
        <ul>
          <li>
            <strong>Lääkemääräyksen yksilöintitietojen haku</strong>. FHIR soveltamisopas: <a
            href="https://simplifier.net/guide/FinnishKantaMedicationR4/Home?version=current"
            >Lääkemääräyksen yksilöintitietojen haku</a>
          </li>
          <li>
            <strong>Hyvinvointisovellusten Kanta-rajapinta</strong> (potilastiedot). FHIR
            soveltamisopas: <a
            href="https://simplifier.net/guide/hyvinvointisovellusten-rajapinta-potilastietoihin-r4/Etusivu?version=1.1.0"
            >Hyvinvointisovellusten rajapinta potilastietoihin</a>
          </li>
        </ul>
        <p>Kehitteillä parhaillaan:</p>
        <ul>
          <li>
            <strong>Lääkityslista vaihe 2</strong> lääkitystiedot haetaan lääkityslistan muodossa,
            ei erillisinä lääkemääräys- ja toimitusasiakirjoina. FHIR soveltamisopas: <a
            href="https://simplifier.net/guide/finnish-kanta-medication-list-r4?version=current"
            >Kanta-lääkityslistan haku Release Candidate</a>
          </li>
          <li>
            <strong>Terveydenhuollon ajanvaraus</strong>. FHIR
            soveltamisopas: <a
            href="https://simplifier.net/guide/kanta-potilastietovaranto-ajanvaraus-r4?version=current"
            >Kanta Potilastietovaranto Ajanvaraus</a>
          </li>
          <li>
            <strong>Sosiaalihuollon luovutusilmoitus</strong>. FHIR
            soveltamisopas: <a
            href="https://simplifier.net/guide/kanta-sosiaalihuolto-r4-versio-1.0.0?version=current"
            >Sosiaalihuollon luovutusilmoitus</a>
          </li>
          <li>
            <strong>Toimintakyky, sosiaalihuolto</strong>. FHIR soveltamisopas tulossa kommenteille
            5.5.
          </li>
          <li>
            <strong>Hyvinvointisovellusten Kanta-rajapinta</strong> (potilastiedot, puolesta-asiointi). FHIR
            soveltamisopas: <a
            href="https://simplifier.net/guide/hyvinvointisovellusten-rajapinta-potilastietoihin-r4?version=1.2.0-RC1"
            >intisovellusten rajapinta potilastietoihin</a> (RC v1.2.0)
          </li>
          <li>+
            <strong>Tietojen luovuttaminen soten ulkopuolelle </strong> (Kysely- ja
            välityspalvelu). FHIR soveltamisopas: <a
            href="https://simplifier.net/guide/kvp?version=current">Kysely- ja välityspalvelun FHIR
            rajapintojen soveltamisopas</a>
          </li>
        </ul>
        <p>Tulevat:</p>
        <ul>
          <li>Lääkityslista vaihe 3: Uusia tietosisältöjä: lääkityksen tarkistus- ja huomiomerkinnät sekä itsehoitolääkkeet</li>
          <li>Lääkityslista vaihe 4: Uusia tietosisältöjä: osastolääkemääräys ja lääkkeen antomerkinnät</li>
          <li>Hyvinvointisovellusten Kanta-rajapinta (reseptitietojen luovutus)</li>
          <li>Sosiaalihuollon ajanvaraus</li>
          <li>Toimintakyky, terveydenhuolto</li>
          <li>Kansalaisen tuottamat tiedot potilaskertomukseen</li>
          <li>EHDS prioriteettiluokkien mukaiset tietosisällöt</li>
        </ul>
      </section>
      <section id="ehds">
        <h2>EHDS:n vaatimat tietosisällöt ja niiden siirtymäajat</h2>
        <div>
        <figure id="4v">
          <figcaption>
            4 vuotta voimaantulosta<sup aria-describedby="aikaselite">*</sup>
          </figcaption>
          <section>
            <h3>Potilastiedon yhteenveto</h3>
            <ul>
              <li><strong>Henkilötiedot</strong>, vakuutustiedot ja <strong>yhteystiedot</strong></li>
              <li><strong>Allergiat</strong></li>
              <li><strong>Lääketieteelliset riskitiedot</strong></li>
              <li>Rokotukset</li>
              <li><strong>Ongelmalista</strong><br /><small>(menneet, nykyiset, ei-aktiiviset)</small></li>
              <li><strong>Nykyinen ja aiempi lääkitys</strong></li>
              <li><strong>Lääkinnälliset laitteet ja implantit</strong></li>
              <li><strong>Toimenpiteet tai hoitomenettelyt</strong></li>
              <li>Toimintakykytiedot</li>
              <li>Hoitohistoriaan liittyvät tekstimuotoiset tiedot</li>
              <li>Terveyteen liittyvä sosiaalinen terveyshistoria (havainnot)</li>
              <li>Raskaushistoria</li>
              <li>Potilaan itse toimittamat tiedot</li>
              <li>Terveydentilan havainnoinnin tulokset</li>
              <li>Hoitosuunnitelma</li>
              <li>Harvinaissairauksia koskevat tiedot</li>
            </ul>
          </section>
          <section>
            <h3>Sähköinen resepti ja lääketoimitus</h3>
          </section>
        </figure>
        <figure id="6v">
          <figcaption>
            6 vuotta voimaantulosta<sup aria-describedby="aikaselite">*</sup>
          </figcaption>
          <section>
            <h3>Lääketieteellinen kuva ja lausunto</h3>
          </section>
          <section>
            <h3>Laboratoriotutkimukset ( + medical tests)</h3>
          </section>
          <section>
            <h3>Hoidon loppulausunnot</h3>
          </section>
        </figure>
        <figure>
          <p>
            <strong>Lihavoitu</strong> tietosisältö on jo nykyisessä Potilastiedon yhteenvedossa.
          </p>
          <p>
            Nykyistä tietosisältöä tulee kehittää yhdenmukaisemmaksi uusien EHDS:n tietosisältöjen
            kanssa.
          </p>
          <p id="aikaselite" role="note">
            *EU tasolla vaatimukset tietojen kattavuudesta ja rakenteisuuden asteesta tulee
            kasvamaan ajan myötä. Sisältövaatimukset julkaistaan EHDS täytäntöönpanoasetuksessa.
          </p>
        </figure>
        </div>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mari Peltola-Nykyri</h3>
          <address>
            <a href="mailto:mari.peltola-nykyri@kela.fi">mari.peltola-nykyri@kela.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
