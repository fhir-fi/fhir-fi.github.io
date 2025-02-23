import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir.svg';

export function Head() {
  const title = <title>FHIR Demo 2025: Page not found</title>;
  return getHead({ title });
};

export default function NotFoundPage({ location }) {
  const { pathname } = location;

  return (
    <Article>
      <section id="error">
        <h1>{`Page ${pathname.replaceAll('/', '')} does not exist!`}</h1>
        <img className="decoration" src={fhirLogo} alt="" />
        <p>
          Sorry 😔, we couldn't find what you were looking for.
        </p>
      </section>
      <section id="instructions">
        <p>
          If you think this is an error, please let us know, by an email to <a
          href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a> or as an issue or pull
          request in the <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/main/en/demo2023">GitHub
          repo</a> of the project.
        </p>
      </section>
      <section id="continue">
        <p>
          While we get that sorted out, please enjoy the rest of the site! Start from the <Link
          to="/">main page</Link>.
        </p>
      </section>
    </Article>
  )
};
