import * as React from 'react';
import { Link } from 'gatsby';

import hl7finland from '../images/hl7-finland.svg';
import Background from '../pages/background';
import '@fontsource-variable/commissioner';
import '@fontsource/playfair-display';
import '../styles/index.css';
import { Header } from './Header';

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
      <Header />
      <div id="bgContainer">
        <Background className="decorative background" />
      </div>
      <article {...rest}>
        {children}
      </article>
      <footer>
        <p>
          &copy;2025 <a href="https://hl7.fi/"><img src={hl7finland} alt="HL7 Finland" /></a>
          <span>&nbsp;</span>
          <Link to="/privacy">Privacy</Link>
          <span>|</span>
          <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2025-gatsby/fhir-demo-2025">Source&nbsp;Code</a>
          <span>|</span>
          <a href="mailto:mikael@sensotrend.com">Feedback</a>
        </p>
      </footer>
    </>
  )
}

export default Article