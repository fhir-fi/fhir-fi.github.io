import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2024 ATK-päivillä</title>;
  return getHead({ title });
};

export default function AtkPaivat() {

  return (
    <Article id="atk-paivat" className="event">
      <section id="intro">
        <h1>FHIR Demo 2024 ATK-päivillä</h1>
        <p>
          FHIR Demo 2024 esittelee FHIR-standardin käytön nykytilan Suomessa <a
          href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali- ja
          terveydenhuollon ATK-päivillä</a> Tampereella toukokuussa.
        </p>
      </section>
      {/*
      <section className="event atk-paivat">
        <h2>Aikataulutetut demot ATK-päivillä</h2>
        <table className="schedule">
          <tbody>
            <tr><th colspan="3"><time dateTime="2023-05-23">Tiistai 23.5.2023</time></th></tr>
            <tr>
              <td><time dateTime="2023-05-23T12:15:00.000+03:00">12.15-12.25</time></td>
              <td><Link to="../intersystems">InterSystems</Link></td>
              <td>101</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T12:30:00.000+03:00">12.30-12.40</time></td>
              <td><Link to="../apotti">Apotti</Link></td>
              <td>400</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T12:45:00.000+03:00">12.45-12.55</time></td>
              <td><Link to="../wellmo">Wellmo</Link></td>
              <td>Startup-alue</td>
            </tr>
            <tr className="highlight">
              <td><time dateTime="2023-05-23T13:00:00.000+03:00">13.00-13.30</time></td>
              <td>FHIR Walk With Me</td>
              <td>info</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T13:30:00.000+03:00">13.30-13.40</time></td>
              <td><Link to="../sensotrend">Sensotrend</Link></td>
              <td>Startup-alue</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T13:45:00.000+03:00">13.45-13.55</time></td>
              <td><Link to="../una">Una</Link></td>
              <td>210</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T15:15:00.000+03:00">15.15-15.25</time></td>
              <td><Link to="../bcb-medical">BCB Medical</Link></td>
              <td>221</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T15:35:00.000+03:00">15.35-15.45</time></td>
              <td><Link to="../duodecim">Duodecim</Link></td>
              <td>124</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-23T15:45:00.000+03:00">15.45-15.55</time></td>
              <td><Link to="../fujitsu">Fujitsu</Link></td>
              <td>114</td>
            </tr>
            <tr><th colspan="3"><time dateTime="2023-05-24">Keskiviikko 24.5.2023</time></th></tr>
            <tr className="highlight">
              <td><time dateTime="2023-05-24T11:45:00.000+03:00">11.45-12.15</time></td>
              <td>FHIR Walk With Me</td>
              <td>Info</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-24T12:15:00.000+03:00">12.15-12.25</time></td>
              <td><Link to="../apotti">Apotti</Link></td>
              <td>400</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-24T12:30:00.000+03:00">12.30-12.40</time></td>
              <td><Link to="../kela">Kela</Link></td>
              <td>201</td>
            </tr>
            <tr>
              <td><time dateTime="2023-05-24T12:45:00.000+03:00">12.45-12.55</time></td>
              <td><Link to="../atostek">Atostek</Link></td>
              <td>94</td>
            </tr>
          </tbody>
        </table>
      </section>
      */}
      <section id="osallistujat" className="event atk-paivat">
        <h2>Demon osallistujien ständit ATK-päivillä</h2>
        <table className="participants">
          <tbody>
            <tr><td>C32</td><td><Link to="../fujitsu">Fujitsu</Link></td></tr>
            <tr><td>C30</td><td><Link to="../oracle">Oracle Finland</Link></td></tr>
            <tr><td>C50</td><td><Link to="../atostek">Atostek</Link></td></tr>
            <tr><td>C51</td><td><Link to="../bcb-medical">BCB Medical</Link></td></tr>
            <tr><td>D30</td><td><Link to="../duodecim">Duodecim</Link></td></tr>
            <tr><td>D40</td><td><Link to="../kela">Kela</Link></td></tr>
            <tr><td>D42</td><td><Link to="../vitec">Vitec</Link></td></tr>
            <tr><td>D50</td><td><Link to="../buddy">Buddy Healthcare</Link></td></tr>
            <tr><td>D60</td><td><Link to="../sensotrend">Sensotrend</Link></td></tr>
            {/*
            <tr><td>E10</td><td><Link to="../digifinland">DigiFinland</Link></td></tr>
            */}
            <tr><td>E12</td><td><Link to="../hus">HUS</Link></td></tr>
            {/*
            <tr><td>E17</td><td><Link to="../microsoft">Microsoft</Link></td></tr>
            <tr><td>E76</td><td><Link to="../esko">Esko Systems</Link></td></tr>
            */}
            {/*
            <tr><td>F15</td><td><Link to="../axel">Axel Health</Link></td></tr>
            <tr><td>F20</td><td><Link to="../medanets">Medanets</Link></td></tr>
            */}
            <tr><td>F21</td><td><Link to="../intersystems">InterSystems</Link></td></tr>
            {/*
            <tr><td>F50</td><td><Link to="../tietoevry">Tietoevry Care</Link></td></tr>
            */}
            <tr><td>F65</td><td><Link to="../integritas">Integritas</Link></td></tr>
            <tr><td>G1</td><td><Link to="../cgi">CGI</Link></td></tr>
            {/*
            <tr><td>G9</td><td><Link to="../solita">Solita Health</Link></td></tr>
            */}
            <tr><td>G16</td><td><Link to="../una">Una</Link></td></tr>
            <tr><td>Startup-alue SU7</td><td><Link to="../sensotrend">Sensotrend</Link></td></tr>
          </tbody>
        </table>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
