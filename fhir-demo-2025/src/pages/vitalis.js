import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2024 at Vitalis</title>;
  return getHead({ title });
};

export default function Vitalis() {

  return (
    <Article id="vitalis" className="event">
      <section id="intro">
        <h1>FHIR Demo 2024 in Vitalis</h1>
        <p>
          Several FHIR Demo 2024 participants will be at <a
          href="https://vitalis.nu/">Vitalis</a> in Gothenburg, May 13-16.
        </p>
      </section>
      <section className="event vitalis">
        <h2>FHIR Demo particinpants at Vitalis</h2>
        <p>
          The showcase will be presented on <strong><time
          dateTime="2024-05-15T10:30:00.000+02:00">Wednesday, May 15, at 10:30</time></strong> on
          stage F1 as <a
          href="https://invitepeople.com/public/events/ae499c7a48/seminars/ae2dc6387c">Nordic FHIR
          Showcase 2024</a>.
        </p>
        <p>
          Several FHIR Demo participants will be in Vitalis. We'll keep updating this list up until
          the event starts.
        </p>
        <ul>
          <li>
            <Link to="../sensotrend">Sensotrend</Link>'s founder Mikael Rinnetmäki is also on stage
            <ul>
            <li>
                <strong>
                  <time dateTime="2024-05-14T10:30:00.000+02:00">Tuesday 10:30 - 11:00</time>
                </strong> <a
                href="https://invitepeople.com/public/events/ae499c7a48/seminars/fb4b74704d">How
                data empowers patients</a> <strong>stage F1</strong>
              </li>
              <li>
                <strong>
                  <time dateTime="2024-05-15T09:30:00.000+02:00">Wednesday 9:30 - 10:00</time>
                </strong> <a
                href="https://invitepeople.com/public/events/ae499c7a48/seminars/ee0e8c24b6">Lessons
                learned from the Finnish health data ecosystem</a> <strong>stage F2</strong>
              </li>
              <li>
                <strong>
                  <time dateTime="2024-05-16T09:30:00.000+02:00">Thursday 9:30 - 10:00</time>
                </strong> <a
                href="https://invitepeople.com/public/events/ae499c7a48/seminars/fd9c009bb3">Opening
                health data to patient-facing apps</a> <strong>stage A2</strong>
              </li>
              <li>
                <strong>
                  <time dateTime="2024-05-16T11:00:00.000+02:00">Thursday 11:00 - 11:30</time>
                </strong> <a
                href="https://invitepeople.com/public/events/ae499c7a48/seminars/da00c15a72">Nordic
                FHIR Base Profiles</a> <strong>stage A2</strong>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
