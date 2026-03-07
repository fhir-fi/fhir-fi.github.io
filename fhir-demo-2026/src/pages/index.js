import * as React from "react"
import { Link } from 'gatsby';

import hl7DenmarkLogo from '../images/hl7-denmark.png';
import hl7FinlandLogo from '../images/hl7-finland.svg';
import hl7NorwayLogo from '../images/hl7-norway.png';
import hl7SwedenLogo from '../images/hl7-sweden.png';
import '../styles/index.css';

const Letter = ({ char, x0, y0, check }) => {
  const [offset, setOffset] = React.useState(true);

  const top = y0 < 0 ? `${y0 / 5}em` : undefined;
  const left = x0 < 0 ? `${x0 / 5}em` : undefined;
  const bottom = y0 > 0 ? `${y0 / -5}em` : undefined;
  const right = x0 > 0 ? `${x0 / -5}em` : undefined;

  const space = char === ' ';

  // This is only visual play, not really interactive elements.
  // We might make the letters navigable with a keyboard, but that would probably just be annoying.
  /* eslint-disable jsx-a11y/click-events-have-key-events */
  return (
    <span
      className={`puzzle ${space ? 'space ' : ''}char${(!space && offset) ? ' offset' : ''}`}
      onClick={space ? undefined : () => { setOffset(false); check(); }}
      style={(!space && offset) ? { top, left, bottom, right } : undefined}
    >
      {char}
    </span>
  );
  /* eslint-enable jsx-a11y/click-events-have-key-events */
};

function getPosition(i) {
  const x0 = (Math.random() * -1.5) + ((i % 5) * 1.5) - 1.5;
  const y0 = (Math.random() * -1.5) + ((i / 5) - 0.5);
  return { x0, y0 };
}

const Main = () => {

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
      <p>Welcome to the FHIR Demo 2026 website!</p>
      <p>
        This year, the Nordic FHIR Demo showcase concentrates on presenting the results of the
        Nordic Health Data Hackathons.
      </p>
      <p>
        <strong>The previous demos, especially the <Link to="../en/demo2025/index.html">FHIR Demo
        2025</Link>, remain available as a valuable catalog of FHIR implementations and
        implementers in the Nordics.</strong>
      </p>
      <section id="hackathons">
        <a href="#hackathons"><h1>Nordic Health Data Hackathons</h1></a>
        <section id="organizers">
          <p>
            The Nordic Health Data Hackathons is a series of events organized by the Nordic HL7
            affiliates
          </p>
          <ul>
            <li>
              <a href="https://hl7.dk/">
                <picture>
                  <img src={hl7DenmarkLogo} alt="HL7 Denmark" />
                </picture>
              </a>
            </li>
            <li>
              <a href="https://www.hl7.fi/">
                <picture className="large">
                  <img src={hl7FinlandLogo} alt="HL7 Finland" />
                </picture>
              </a>
            </li>
            <li>
              <a href="https://www.hl7.no/">
              <picture>
                <img src={hl7NorwayLogo} alt="HL7 Norway" />
              </picture>
            </a>
            </li>
            <li>
              <a href="https://hl7.se/">
              <picture>
                <img src={hl7SwedenLogo} alt="HL7 Sweden" />
              </picture>
            </a>
            </li>
          </ul>
          <p>
            and made possible by dozens of volunteers!
          </p>
        </section>
        <section id="norway-2025">
          <a href="#norway-2025"><h2>Norwegian FHIR Hackathon 2025</h2></a>
          <p>
            The first ever event of the hackathon series took place as an official side event of
            the <a href="https://ehin.no/2025/">EHiN conference 2025</a>.
          </p>
          <p>
            <a className="call-to-action"
            href="https://hl7norway.github.io/FHIR-hackathon-2025/currentbuild/index.html#result-summary"
            >See the results!</a>
          </p>
        </section>
        <section id="finland-2026">
          <a href="#finland-2026"><h2>Finnish Health Data Hackathon 2026</h2></a>
          <p>
            The second hackathon was connected to both the <a
            href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a> and
            the <a href="https://laakaripaivat.messukeskus.com/en/">Finnish Medical
            Convention</a> (<a href="https://laakaripaivat.fi/"><i lang="fi"
            >Lääkäripäivät</i></a>), and synchronized with the <a
            href="https://www.hl7.fi/kokoukset-ja-tapahtumat/hl7-finland-30th-anniversary-symposium/"
            >30th Anniversary Symposium of HL7 Finland</a>.
          </p>
          <p>
            <a className="call-to-action" href="https://fhir.fi/hackathon/2026/finland/results">See
            the results!</a>
          </p>
        </section>
        <section id="sweden-2026">
          <a href="#sweden-2026"><h2>Swedish Health Data Hackathon 2026</h2></a>
          <p>
            The third hackathon takes place in Gothenburg, Sweden, connected to the <a
            href="https://vitalis.nu/">Vitalis</a> conference.
          </p>
          <p>The date has been confirmed to be Friday, May 8. Mark your calendar!</p>
          <p>
            <a className="call-to-action" href="https://hl7.se/fhir/vitalis-hackathon-2026/">See
            the event page!</a>
          </p>
        </section>
        <section id="denmark-2026">
          <a href="#denmark-2026"><h2>Denmark (to be confirmed)</h2></a>
          <p>
            The autumn hackathon will be in Denmark. Tentatively connected to the <a
            href="https://2025.e-sundhedsobservatoriet.dk/">Danish E-Health Observatory</a> event.
          </p>
        </section>
        <section id="norway-2026">
          <a href="#norway-2026"><h2>Norwegian FHIR Hackathon 2026</h2></a>
          <p>
            On fourth quarter we return to Norway, where the hackathon will again be organised as a
            side event of the <a href="https://ehin.no/">EHiN conference</a>.
          </p>
        </section>
      </section>
    </main>
  )
};

const Footer = () => {
  return (
    <footer>
      <nav>
        <li>&copy; 2026+ <a href="https://hl7.fi/">HL7 Finland</a></li>
        <li>
          <a
            href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2026-gatsby/fhir-demo-2026"
          >
            Source
          </a>
        </li>
      </nav>
    </footer>
  );
};

const IndexPage = () => <><Main /><Footer/></>;

export const Head = () => <title>FHIR Demo 2026</title>;

export default IndexPage;
