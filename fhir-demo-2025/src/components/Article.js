import * as React from 'react';
import { Link } from 'gatsby';

import hl7finland from '../images/hl7-finland.svg';
import Background from '../pages/background';
import '@fontsource-variable/commissioner';
import '@fontsource-variable/tourney';
import '../styles/index.css';

export function getHead({ title }) {
  return (
    <>
      { title }
    </>
  )
}

const Article = ({ children, ...rest }) => {
  return (
    <>
      <nav id="headerNav">
        <ul>
          <li>
            <Link to="/">
              FHIR Demo 2025
            </Link>
          </li>
          <li>
            <Link to="/#participants">
              Participants
            </Link>
          </li>
          <li>
            <Link to="/#events">
              Events
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div id="bgContainer">
        <Background className="decorative background" />
      </div>
      <article {...rest}>
        {children}
      </article>
      <footer>
        <p>
          &copy;2024 <a href="https://hl7.fi/"><img src={hl7finland} alt="HL7 Finland" /></a>
          <span>&nbsp;</span>
          <Link to="/privacy">Privacy</Link>
          <span>|</span>
          <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2024-gatsby/fhir-demo-2025">Source&nbsp;Code</a>
          <span>|</span>
          <a href="mailto:mikael@sensotrend.com">Feedback</a>
        </p>
      </footer>
    </>
  )
}

export default Article