import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import Article, { getHead } from '../components/Article';


export function Head() {
  const title = <title>FHIR Demo 2024 by HL7 Finland - WELCOME!</title>;
  return getHead({ title });
};

export default function Intro() {
  const imageFolder = withPrefix('/images');
  const logoSrc = `${imageFolder}/hl7-finland-animated.svg?d=${Date.now()}`;
  return (
    <Article id="intro">
      <Link to="/">
        <img src={logoSrc} alt="HL7 Finland" />
        <p>presents</p>
        <h1>FHIR Demo 2024</h1>
      </Link>
    </Article>
  )
};
