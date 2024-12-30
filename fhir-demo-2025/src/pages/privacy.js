import * as React from 'react';
import Article, { getHead } from '../components/Article';

export function Head() {
  const title = <title>FHIR Demo 2024: Privacy policy</title>;
  return getHead({ title });
};

export default function Privacy () {
  return (
    <Article>
      <main>
        <h1>You Are Not Being Tracked</h1>
        <p>Feel free to surf, there are no trackers used on the FHIR Demo 2024 pages.</p>
        <p>
          The pages are served with the <a href="https://pages.github.com/">GitHub
          pages</a> functionality.
        </p>
        <p>
          You can inspect the source code in <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2023-gatsby/en/demo2023">GitHub</a>.
        </p>
      </main>
    </Article>
  );
};
