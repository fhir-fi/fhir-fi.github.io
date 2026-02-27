import * as React from "react"
import { Link } from 'gatsby';

import '../styles/index.css';

const Letter = ({ char, x0, y0, check }) => {
  const [offset, setOffset] = React.useState(true);

  const top = y0 < 0 ? `${y0 / 5}em` : undefined;
  const left = x0 < 0 ? `${x0 / 5}em` : undefined;
  const bottom = y0 > 0 ? `${y0 / -5}em` : undefined;
  const right = x0 > 0 ? `${x0 / -5}em` : undefined;

  const space = char === ' ';

  return (
    <span
      className={`puzzle ${space ? 'space ' : ''}char${(!space && offset) ? ' offset' : ''}`}
      onClick={space ? undefined : () => { setOffset(false); check(); }}
      style={(!space && offset) ? { top, left, bottom, right } : undefined}
    >
      {char}
    </span>
  );
}

  function getPosition(i) {
    const x0 = (Math.random() * -1.5) + ((i % 5) * 1.5) - 1.5;
    const y0 = (Math.random() * -1.5) + ((i / 5) - 0.5);
    return { x0, y0 };
  }


const IndexPage = () => {

  const text = 'FHIR Demo 2026';
  const chars = React.useRef(text.split('').map(((c, i) => ({ key: `${i}-${c}`, char: c, check: () => check(i), x0: 0.01, y0: 0.01 }))));

  const [completed, setCompleted] = React.useState(false);

  const [puzzle, setPuzzle] = React.useState(chars.current);
 
  React.useEffect(() => {
    chars.current = chars.current.map((c, i) => ({ ...c, ...getPosition(i) }));
    setPuzzle(chars.current);
  }, [chars, setPuzzle]);

  function check(i) {
    chars.current[i].x0 = 0;
    chars.current[i].y0 = 0;
    setPuzzle(chars.current);
    const complete = !chars.current.some(ch => ch.char !== ' ' && (ch.x0 || ch.y0));
    if (complete) {
      setCompleted(true);
      console.log('The pieces are coming together...');
    }
  }

  return (
    <main>
      <h1 className={`${completed ? 'completed ' : ''}puzzle`}>
        {puzzle.map(ch => <Letter {...ch} />)}
      </h1>
      <p>Welcome to the FHIR Demo 2026 website.</p>
      <p>
        This year, the Nordic FHIR Demo showcase concentrates on presenting the results of the
        Nordic Health Data Hackathons.
      </p>
      <p>
        The previous demos, especially the <Link to="../en/demo2025/index.html">FHIR Demo
        2025</Link>, remain available as a valuable catalog of FHIR implementations and
        implementers in the Nordics.
      </p>
      <section id="norway-2025">
        <h2>Norwegian Health Data Hackathon 2025</h2>
        <p>
        </p>
      </section>
      <section id="finland">
        <h2>Finnish Health Data Hackathon 2026</h2>
        <p>
        </p>
      </section>
      <section id="sweden">
        <h2>Swedish Health Data Hackathon 2026</h2>
        <p>
        </p>
      </section>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>FHIR Demo 2026</title>
