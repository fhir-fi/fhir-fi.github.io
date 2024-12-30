import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import eskoLogo from '../images/eskosystems.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Esko Systems</title>;
  return getHead({ title });
};

export default function EskoSystems({ location }) {
  const roles = demos.esko.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://eskosystems.fi/">
          <img src={eskoLogo} alt="Esko Systems" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>Esko Systems Oy on rakentanut standardin, avoimiin rajapintaluvauksiin pohjautuvan
        integraatioratkaisun, jonka kautta koko Esko potilastietojärjestelmän liikenne muihin
        APTJ-ekosysteemin ratkaisuihin hoidetaan.</p>
        <p>Esko-potilastietojärjestelmän arkkitehtuuri pohjautuu IRIS for Health
        -integraatioalustan päälle rakennettuihin integraatioihin, jotka perustuvat standardeihin
        kuten laajennettavissa olevaan FHIR-tietovarastoon sekä HL7 ja OpenAPI.</p>
        <p>Ratkaisusta on taloudellisia hyötyjä. Uusien APTJ-ekosysteemissä tarvittavien
        rajapintojen toteutus on nopeampaa ja helpompaa ja ennen kaikkea integraatioiden
        ylläpitokustannukset ovat merkittävästi pienemmät standardin rajapinnan avulla verrattuna
        tilanteeseen, jossa jokainen integraatio muodostetaan 3. osapuolen tarpeiden
        mukaisesti.</p>
        <p>Ratkaisusta on myös hyötyä tulevaisuuteen, sillä standardit rajapinnat mahdollistavat
        hyvinvointialueiden tai kolmansien osapuolten innovointitoimintoja, jotka voidaan toteuttaa
        (puoli)avoimia rajapintoja vasten.</p>
      </section>
      <section id="FHIR">
        <h2>Eskon FHIR-kyvykkyyksien nykytila</h2>
        <h3>Tuotannossa</h3>
        <ul>
          <li>
            <strong>SMART App Launch</strong> käytössä useiden kumppanitoimittajien kanssa, mm. <a
            href="../una">Una Lomake</a>. Myös Eskon oma moduuli käynnistetään Smart App
            Launchilla!
          </li>
        </ul>
        <h3>Odottaa tuotantoon menoa</h3>
        <ul>
          <li>
            <strong>Terveyskylä</strong>: Esko hakee digihoitopolut FHIR muodossa terveyskylästä
            (<strong>CarePlan</strong>).
          </li>
        </ul>
        <h3>Aktiivisessa kehityksessä</h3>
        <ul>
          <li>OmaOYS-portaalin ja Esko välinen integraatioratkaisu (<strong>Patient</strong>).</li>
          <li>Masterdata (<strong>Location</strong>, <strong>Organization</strong>)</li>
          <li>
            Eskon sisäinen kommunikaatio (<strong>Condition</strong>, <strong>Encounter</strong>
            , <strong>Patient</strong>, <strong>Practitioner</strong>, <strong>Procedure</strong>
            , <strong>ServiceRequest</strong>). Lähtökohtana <a
            href="https://www.hl7.fi/fhir/finnish-base-profiles/">Fi Base profiilit</a>. Käytetään
            HL7 V2 viestien muodostamiseen (ADT, SIU, REF). Diagnoosien, käyntisyiden ja
            toimenpiteiden sisäinen välitys moduulien välillä.
          </li>
        </ul>
        <h3>Tulossa</h3>
        <ul>
          <li>
            <Link to="../duodecim">Duodecim</Link> mittarit (<strong>Smart App Launch</strong>
            , <strong>Questionnaire</strong>, <strong>Observation</strong>).
          </li>
          <li>
            Leikkaushoidon kokonaisuuden integroituminen FHIR:llä itsenäinä osiona
            (<strong>Encounter</strong>, <strong>Patient</strong>, <strong>Procedure</strong>)
          </li>
          <li>
            Kansalaisen ajanvaraus (<strong>Appointment</strong>, <strong>Location</strong>
            , <strong>Organization</strong>, <strong>Patient</strong>
            , <strong>Practitioner</strong>).
          </li>
        </ul>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Petteri Stoor</h3>
          <p>Product Owner, Integrations</p>
          <address>
            <a href="mailto:Petteri.Stoor@eskosystems.fi">Petteri.Stoor@eskosystems.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
