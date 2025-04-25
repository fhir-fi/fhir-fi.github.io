import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import { RoleFilter, RolesContext } from '../components/Roles';
import { demos } from '../config/data';
import fhirLogo from '../images/fhir.svg';
import fhirLogo2 from '../images/fhir-deco.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';


export function Head() {
  const title = <title>FHIR Demo 2025</title>;
  return getHead({ title });
};

export default function IndexPage({ location = {} }) {
  const { hash, search } = location;
  const { selectedRoles = {} } = React.useContext(RolesContext);
  const roles = Object.keys(selectedRoles);
  return (
    <Article id="mainPage">
      <section id="about">
        <h1>FHIR Demo 2025</h1>
        <img className="decoration" src={fhirLogo} alt="" />
      </section>
      <section id="description" className={hash === '#description' ? 'callout' : undefined}>
        <p>
          The Nordic <strong>FHIR Demo 2025</strong> showcase highlights what has been implemented
          with the HL7 FHIR standard in the Nordics.
        </p>
        <p>
          The aim is to help you find the right partner for your next FHIR project!
        </p>
        <p>
          The event continues the tradition of the FHIR Demo showcases organized in <a
          href="http://www.hl7.fi/wp-content/uploads/HL7-Finland-%23U0432%23U0402%23U201c-FHIR-demon-loppuraportti-20160527.pdf"
          >2016</a>, <a href="https://fhir.fi/en/demo2022/index.html">2022</a>, <a
          href="https://fhir.fi/en/demo2023/index.html">2023</a>, and <a
          href="https://fhir.fi/en/demo2024/index.html">2024</a>.
        </p>
      </section>
      <section
        id="participants"
        className={(!hash || (hash === '#participants')) ? 'callout' : undefined}
      >
        <h1>Participants</h1>
        <p>These are the confirmed participants at the moment. There will be many more!</p>
        <RoleFilter />        
        <ul>
          {
            Object.keys(demos).filter((k) => (!demos[k].hidden) &&
              (!roles.length || demos[k].roles?.some((f => roles.some(s => s === f))))
            )
            .map(k => (
              <li key={k}>
                <Link to={`/${k}${search}`}>{demos[k].name}</Link>
              </li>
            ))
          }
        </ul>
      </section>
      <section id="events" className={hash === '#events' ? 'callout' : undefined}>
        <h1>Events</h1>
        <p>
          The FHIR Demo 2025 showcase is presented in several industry events and conferences.
          Showcase participants demonstrate their demos on their own stands. In some events the
          showcase is included in conference program.
        </p>
        <strong>
          <p>Some of the participants will be present in at least the following events:</p>
          <ul>
            <li>
              May 5-7, 2025 <Link to="/atk-paivat">Sosiaali ja terveydenhuollon ATK-päivät</Link>,
              Jyväskylä, Finland.
            </li>
            <li>
              May 19-22, 2025 <a href="https://vitalis.nu/">Vitalis</a>, Gothenburg, Sweden.
            </li>
          </ul>
        </strong>
        <p>
          We're also planning a tour at least to the Finnish Wellbeing Services Counties
          (<i lang="fi">hyvinvointialue</i>, known as Regions in other Nordic countries) in the
          autumn. We're happy to extend this demo to other audiences. If you're interested in
          having the FHIR Demo presented to you or your people, either virtually or in person,
          please <Link to="#contact">get in touch!</Link>
        </p>
        <p>The showcase will also remain online on this website until the end of the year.</p>
      </section>
      <section
        id="participate"
        className={hash === '#participate' ? 'callout' : undefined}
      >
        <h1>Get Listed!</h1>
        <p>
          If you are an organization utilizing the HL7 FHIR standard or advocating for it, or if
          you have a product using the HL7 FHIR standard, we'd love to get you included in the
          showcase. Just send us a description of the product. See this year's showcase and the
          ones from <a href="https://fhir.fi/en/demo2024/">2024</a> and <a
          href="https://fhir.fi/en/demo2023/">2023</a> for examples.
        </p>
        <p>
          The focus is in showing what has been implemented with the HL7 FHIR standard in the
          Nordics, and in what the FHIR community is currently working on.
        </p>
        <p>
          Participation costs you nothing, and gives you increased visibility in trade events and
          the internet.
        </p>
        <p className="center">
          <Link className="button" to="/participate">Participate!</Link>
        </p>
      </section>
      <section id="contact" className={hash === '#contact' ? 'callout' : undefined}>
        <h1>Contact</h1>
        <p>
          The FHIR Demo 2025 organized by <Link to="/hl7-finland">HL7 Finland</Link> and
          coordinated by <Link to="/sensotrend">Sensotrend Oy</Link>.
        </p>
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h3>Mikael Rinnetmäki</h3>
          <p>FHIR Ambassador, HL7 Finland</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};
