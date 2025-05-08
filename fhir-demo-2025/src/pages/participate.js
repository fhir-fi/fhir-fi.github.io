import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir.svg';
import fhirLogo2 from '../images/fhir-deco.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import zulipLogo from '../images/zulip.svg';


export function Head() {
  const title = <title>Take part in FHIR Demo 2025</title>;
  return getHead({ title });
};

export default function Participate({ location = {} }) {
  const { hash } = location;
  return (
    <Article id="participate">
      <section id="about">
        <h1><small>Take part in</small><br />FHIR Demo 2025</h1>
        <img className="decoration" src={fhirLogo} alt="" />
      </section>
      <section
        id="description"
        className={(!hash || hash === '#description') ? 'callout' : undefined}
      >
        <h2>Be part of the <strong>Nordic FHIR Demo</strong> showcase!</h2>
        <p>
          The <strong>FHIR Demo 2025</strong> showcase builds on the success of previous
          installations in <a
          href="http://www.hl7.fi/wp-content/uploads/HL7-Finland-%23U0432%23U0402%23U201c-FHIR-demon-loppuraportti-20160527.pdf"
          >2016</a>, <a href="https://fhir.fi/en/demo2022/index.html">2022</a>, <a
          href="https://fhir.fi/en/demo2023/index.html">2023</a>, and <a
          href="https://fhir.fi/en/demo2024/index.html">2024</a>. This year it will be even
          bigger, and more international.
        </p>
        <p>
          This year the main presence of the demo will be this website. There are some activities
          at some events, but we're really aiming to build a resource that is available online,
          throughout the year.
        </p>
        <p>
          We're inviting everyone working on FHIR on some level, and for everyone supporting FHIR,
          to join the showcase. Share what you've done or are planning, and help others find you
          and learn from your experience and goals!
        </p>
        <p>
          Participation costs you nothing, and gives you increased visibility within the FHIR
          community and in healthtech ecosystems overall.
        </p>
        <p>
          If this is not for you right now, please do consider whether there would be someone else
          you know that could be interested in this opportunity. Feel free to share this invitation
          as widely as you can.
        </p>
        <p className="center">
          <a className="button" href="mailto:mikael@sensotrend.com">Announce your interest!</a>
        </p>
      </section>
      <section id="info" className={hash === '#info' ? 'callout' : undefined}>
        <h1>Apps and Systems, Consultancies and Institutions</h1>
        <p>This year, like in 2024, we tag entries into four categories.</p>
        <p>
          <strong>Apps</strong> are FHIR clients utilizing data in FHIR format or integrated into
          an electronic health record system or patient portal through the SMART App Launch
          mechanism.
        </p>
        <p>
          <strong>Systems</strong> are platforms and servers receiving and hosting data and making
          it available to other parties.
        </p>
        <p>
          <strong>Consultancies</strong> are companies and organizations helping others to adopt
          and implement the FHIR standard, apps, and systems.
        </p>
        <p>
          <strong>Institutions</strong> are hospitals, government institutions, national HL7
          affiliates and other organizations that may not build FHIR implementations themselves but
          may be utilizing them or just be proponents for FHIR. Of course, they can also build FHIR
          apps and systems.
        </p>
        <p>
          Your entry can certainly be tagged with several tags. It might be a service with both an
          app and a system, offered by an institution. The entry can also be for a company that has
          built an app and also offers consultancy.
        </p>
        <p>
          The point is to make it easy for the audience to find implementations they are most
          interested in. Someone interested in the showcase may be looking to procure existing
          implementations, or for inspiration from use cases implemented by others, or a partner to
          help them with their implementation. The showcase aims to serve all these interests.
        </p>
      </section>
      <section id="faq" className={hash === '#faq' ? 'callout' : undefined}>
        <section id="what-does-it-cost">
          <h1>Frequently asked questions</h1>
          <h2>What does it cost?</h2>
          <p>
            No money changes hands. You only need to collect the information you want to present.
          </p>
        </section>
        <section id="technical-readiness-level">
          <h2>Does the implementation need to be in production?</h2>
          <p>
            No, it does not. The aim is to show the full range of FHIR activities. We want to show
            what already works, but also what people are currently working on. We're happy to
            include you into the showcase even if you just have an idea on how you would use FHIR.
            Even that may give someone else an idea for their own implementation, or trigger someone
            to contact you about cooperation.
          </p>
        </section>
        <section id="showcase-content">
        <h2>What kind of information should I present?</h2>
          <p>
            There are no strict limits. FHIR is used in many ways. An app vendor may present how
            their app works seamlessly with a system, thanks to FHIR. HL7 country affiliates may
            advertise their work plan for this year. These are different kind of showcases, and
            there are many more. If you don't yet have a clear idea, you may draw inspiration
            from <a href="https://fhir.fi/en/demo2024/#participants">last year's entries</a>.
          </p>
        </section>
        <section id="how-to-submit">
          <h2>How do I submit my information?</h2>
          <p>
            If you want to show off your technical competence to the showcase coordinators, please
            compile your demo page yourself and issue a pull request to the source code of the
            website. We're using the Gatsby framework, see <a
            href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2025-gatsby/fhir-demo-2025">the
            instructions</a>.
          </p>
          <p>
            We of course do realize not everyone is up for that, so you can also send the
            information you want to be presented in an email, or as a Word document or a slideshow,
            or by pointing to another website where the information can be copied from. We'll
            compile the page for you!
          </p>
        </section>
        <section id="where-does-the-showcase-take-place">
          <h2>Do I need to participate to the listed events?</h2>
          <p>
            The main area for the showcase is <strong>this website.</strong> The showcase will be
            updated throughout the year. We hope it will become a go-to resource for everyone in
            the Nordic region looking for advice on how to implement FHIR.
          </p>
          <p>
            In addition, we will advertise the showcase in several trade events. Some of the
            participants of the showcase will be present in at least the following events:
          </p>
          <ul>
            <li>
              May 5-7, 2025 <a
              href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali ja
              terveydenhuollon ATK-päivät</a>, Jyväskylä, Finland. FHIR Demo presentation is a part
              of the official program.
            </li>
            <li>
              May 19-22, 2025 <a href="https://vitalis.nu/">Vitalis</a>, Gothenburg, Sweden. FHIR
              Demo is part of the <a
              href="https://invitepeople.com/public/events/bd0a6002b4/seminars?seminar_filter_categories%5B%5D=14505"
              >Nordics on FHIR Track</a>. 
            </li>
          </ul>
          <p>
            You can also inform us about any other events you're planning to attend, and we can
            list them on this site.
          </p>
          <p>
            <strong>
              There is no requirement to participate to any event. You are very welcome to get your
              information listed on the website even if you're not planning to attend any of the
              events.
            </strong>
          </p>
        </section>
        <section id="showcase-schedule">
         <h2>When does it start? When do I need to be ready?</h2>
          <p>
            This initial website is already public, and some of the showcases have been published.
            We keep on adding participants throughout the year. However, you most likely get the
            biggest benefit if you get your case published before the trade shows in May. That's
            when we'll be advertising the showcase the most.
          </p>
        </section>
        <section id="assets">
          <h2>Can I advertise the showcase on my own?</h2>
          <p>
            Sure, by all means. Please do! Also feel free to use the <Link to="/assets">graphical
            assets</Link> used in the demo.
          </p>
          <p>
            There's even a cool tool to generate background images. Did you notice the background
            on this page changes with each page load? It is always randomly generated. There's
            also an animated easter egg. Can you spot it? 
          </p>
        </section>
        <section id="what-to-do-next">
          <h2>What should I do next?</h2>
          <p>
            Let the coordinator of the showcase konw that you're interested in participating. Write
            an email to <a href="mikael@sensotrend.com">mikael@sensotrend.com</a>. You don't need
            to have the showcase ready, just indicate your interest. But do start thinking of what
            you would like to share, and in which format you'd be able to share it.
          </p>
        </section>
      </section>
      <section id="contact" className={hash === '#contact' ? 'callout' : undefined}>
        <h1>Contact</h1>
        <p>Please do get in touch! Email reaches me best.</p>
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h2>Mikael Rinnetmäki</h2>
          <p>FHIR Ambassador, HL7 Finland</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
        {/*
        <p className="channel">
          <img className="inline decoration" src={slackLogo} alt="" /> You can also <a
          href="https://join.slack.com/t/fhirfinland/shared_invite/zt-2rzs5dgx2-3oJl04bk_25WQ0jcTC529A"
          >join the <strong>FHIR Finland Slack</strong></a> workspace and discuss on
          the <strong>#fhir-demo-2025</strong> channel.
        </p>
        */}
        <p className="channel">
          <img className="inline decoration" src={zulipLogo} alt="" /> Reach out to participants
          in the <strong>chat.fhir.org</strong> Zulip at the <a
          href="https://chat.fhir.org/#narrow/channel/194447-nordics/topic/FHIR.20Demo.202025/near/501388282"
          >#Nordics stream</a>.
        </p>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};
