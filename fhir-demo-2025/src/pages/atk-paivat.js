import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import map from '../images/Dynamo-kartta.png';
import fhirLogo from '../images/fhir-deco.svg';
import '../styles/atk-paivat.css';

export function Head() {
  const title = <title>FHIR Demo 2025 ATK-päivillä</title>;
  return getHead({ title });
};

export default function AtkPaivat({ location }) {  
  const [sort, setSort] = React.useState('stand')

  // Init roles from the URL...
  React.useEffect(() => {
    const { search } = location;
    const rolesUrlParam = search.match(/[?&]lajittelu=([^&]+)/) || [];
    const decoded = decodeURIComponent(rolesUrlParam[1] || '');
    if (decoded === 'paikka') {
      setSort('stand');
    } else if (decoded === 'nimi') {
      setSort('name');
    }
  }, [location, setSort]);

  const exhibitors = [
    {
      name: 'Atostek',
      id: 'atostek',
      stand: 'C110',
    },
    {
      name: 'BCB Medical',
      id: 'bcb-medical',
      stand: 'C145',
    },
    {
      name: 'Buddy Healthcare',
      id: 'buddy',
      stand: 'B57',
      clarification: ' & AWS',
    },
    {
      name: 'CGI',
      id: 'cgi',
      stand: 'B41',
    },
    {
      name: 'Duodecim',
      id: 'duodecim',
      stand: 'C124',
    },
    {
      name: 'Epic',
      id: 'epic',
      stand: 'C310',
    },
    {
      name: 'Esko Systems',
      id: 'esko',
      stand: 'C113',
    },
    {
      name: 'Evondos',
      id: 'evondos',
      stand: 'C245',
    },
    {
      name: 'Fujitsu',
      id: 'fujitsu',
      stand: 'C120',
    },
    {
      name: 'InterSystems',
      id: 'intersystems',
      stand: 'B55',
    },
    {
      name: 'Kela Kantapalvelut ',
      id: 'kela',
      stand: 'B05',
    },
    {
      name: 'Oracle',
      id: 'oracle',
      stand: 'C331',
    },
    {
      name: 'ProWellness',
      id: 'prowellness',
      stand: 'C101',
      clarification: ' (Business Oulu)',
    },
    {
      name: 'Tietoevry',
      id: 'tietoevry',
      stand: 'C130',
    },
    {
      name: 'Una',
      id: 'una',
      stand: 'C280',
    },
    {
      name: 'Vitec Acute Oy',
      id: 'vitec',
      stand: 'C282',
    },
  ];

  return (
    <Article id="atk-paivat" className="atk-paivat event">
      <section id="intro" className="atk-paivat event">
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
      <section id="nayttely" className="atk-paivat event">
      <h2>Näytteille&shy;asettajat</h2>
      <table id="naytteilleasettajat" className="participants">
        <thead>
          <tr>
            <th><Link to href="?lajittelu=paikka" partiallyActive={true}>Ständi</Link></th>
            <th><Link to href="?lajittelu=nimi" partiallyActive={true}>Nimi</Link></th>
          </tr>
        </thead>
        <tbody>
          {exhibitors.sort((a,b) => a[sort] > b[sort] ? 1 : -1).map(e =>
            <tr><td>{e.stand}</td><td><Link to={`/${e.id}`}>{e.name}</Link>{e.clarification || ''}</td></tr>
          )}
        </tbody>
      </table>
      </section>
      <section id="osallistujat" className="atk-paivat event">
      <h2>Osallistujat ohjelmassa</h2>
      <table id="ohjelma" className="schedule">
        {/*
        <thead>
          <tr>
            <th><Link to href="?lajittelu=paikka" partiallyActive={true}>Ständi</Link></th>
            <th><Link to href="?lajittelu=nimi" partiallyActive={true}>Nimi</Link></th>
          </tr>
        </thead>
        */}
        <tbody>
          <tr><td>Ti 14.00 - 15.15</td><td>Sessio 3: Asiakas- ja potilastieto&shy;järjestelmien kehittäminen</td><td>Encore (pääsali)</td></tr>
          <tr><td>Ti 14.30 - 15.00</td><td><Link to="/cgi">CGI</Link>: OMNI360</td><td>Agenda (3.krs)</td></tr>
          <tr><td>Ti 16.00 - 16.30</td><td><Link to="/atostek">Atostek</Link>: ERA - Tiedosta jatkuvuus</td><td>Agenda (3.krs)</td></tr>
          <tr className="highlight"><td>Ti 16.45 - 17.45</td><td>FHIR Demo 2025 -esittely</td><td>D310-311 (Dynamo)</td></tr>
          <tr><td>Ke 9.00 - 9.30</td><td><Link to="/oracle">Oracle Health</Link>: Tekoäly tulevaisuuden potilastieto&shy;järjestelmissä ja ennakoivassa väestön&shy;terveydessä</td><td>Agenda (3.krs)</td></tr>
          <tr><td>Ke 10.15 - 11.30</td><td>Sessio 6: <Link to="/sensotrend">Sensotrend</Link>: Kannan asiakas- ja potilastiedot hyvinvointi&shy;sovelluksiin</td><td>Kabinetti (3.krs)</td></tr>
          <tr><td>Ke 11.00 - 11.30</td><td><Link to="/fujitsu">Fujitsu</Link>: Vauhtia muutokseen! </td><td>Agenda (3.krs)</td></tr>
        </tbody>
      </table>
      </section>
      <section id="esittely" className="atk-paivat event">
        <h2>Demon koottu esittely</h2>
        <p>
          FHIR Demo 2025 esitellään kootusti tiistaina. Esittelytilaisuudessa käydään läpi
          FHIR-standardin käytön tilanne Suomessa ja muualla, pureudutaan syvemmin valittuihin
          demoihin ja keskustellaan avomista rajapinnoista ja sovellusekosysteemeistä. Paikalla on
          useita demon osallistujista keskustelemassa ja vastaamassa kysymyksiin.
        </p>
        <h3>FHIR Demo 2025</h3>
        <p>Tiistai 6.5.2025 klo <time dateTime="2025-05-06T16:45:00+0300">16.45</time>-<time
          dateTime="2025-05-06T17:45:00+0300">17.45</time>
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
