import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2025 at Vitalis</title>;
  return getHead({ title });
};

const exhibitors = [
  {
    name: 'Cambio',
    id: 'cambio',
    stand: 'B05:19-20',
  },
  {
    name: 'Capgemini',
    id: 'capgemini',
    stand: 'B07:21',
  },
  {
    name: 'Evondos',
    id: 'evondos',
    stand: 'B10:12, B12:01',
  },
  {
    name: 'FASS',
    id: 'fass',
    stand: 'B06:02',
  },
  {
    name: 'Innokas',
    id: 'innokas',
    stand: 'B09:25',
  },
  {
    name: 'InterSystems',
    id: 'intersystems',
    stand: 'B10:20',
  },
  {
    name: 'Oracle',
    id: 'oracle',
    stand: 'B05:36',
  },
  {
    name: 'Tietoevry',
    id: 'tietoevry',
    stand: 'B11:12',
  },
  {
    name: 'Vitec',
    id: 'vitec',
    stand: 'B04:22',
  },
];


export default function Vitalis({ location }) {
  const [sort, setSort] = React.useState('stand')

  // Init roles from the URL...
  React.useEffect(() => {
    const { search } = location;
    const sortUrlParam = search.match(/[?&]sort=([^&]+)/) || [];
    const decoded = decodeURIComponent(sortUrlParam[1] || '');
    setSort(decoded);
  }, [location, setSort]);

  return (
    <Article id="vitalis" className="event">
      <section id="intro">
        <h1>FHIR Demo 2025 in Vitalis</h1>
        <p>
          Several FHIR Demo 2025 participants will be at <a
          href="https://vitalis.nu/">Vitalis</a> in Gothenburg, May 19-22.
        </p>
        <p>
          The demo is also part of the official program.
        </p>
      </section>
      <section id="schedule" className="event vitalis">
        <h2>FHIR Demo on FHIR Track</h2>
        <h3>Nordic FHIR Showcase 2025</h3>
        <p>The FHIR Demo is part of the <a
          href="https://invitepeople.com/public/events/bd0a6002b4/seminars?seminar_filter_categories%5B%5D=14505"
          >Nordics on FHIR Track</a> in Vitalis program.</p>
        <p>
          Time: <time dateTime="2025-05-22T14:30:00+02:00">Thursday at 14:30-15:00</time><br/>
          Location: A1
        </p>
        <p>
          During the last ten years, electronic health record systems have increasingly developed
          towards being platforms where third party systems can be integrated. Third party apps
          offer additional capabilities and features, streamline processes in specific therapeutic
          areas, bring in patient generated health data, and provide advanced analytics and AI
          functionalities to get even more out of the data in the system. The HL7 FHIR
          specification is a key enabler for this.
        </p>
        <p>
          This session will present the Nordic FHIR Showcase 2025, a continuation of the Nordic
          FHIR Showcases 2023 and 2024, and the FHIR Demo 2022. The session presents some of the
          highlights and learnings from the showcase participants.
        </p>
        <p>
          See more details at the <a
          href="https://invitepeople.com/public/events/bd0a6002b4/seminars/fbc747e037?lang=en"
          >Vitalis site</a>!
        </p>
      </section>
      <section id="exhibitors" className="event vitalis">
        <h2>FHIR Demo particinpants at Vitalis</h2>
        <p>
          Several FHIR Demo participants will be in Vitalis. We'll keep updating a list here up
          until the event starts.
        </p>
        <table className="participants">
        <thead>
          <tr>
            <th><Link to="?sort=stand" partiallyActive={true}>Stand</Link></th>
            <th><Link to="?sort=name" partiallyActive={true}>Name</Link></th>
          </tr>
        </thead>
        <tbody>
          {exhibitors.sort((a,b) => a[sort] > b[sort] ? 1 : -1).map(e =>
            <tr key={`exhibitor${e.id}`}>
              <td>
                {e.stand}</td><td><Link to={`/${e.id}`}>{e.name}</Link>{e.clarification || ''}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
