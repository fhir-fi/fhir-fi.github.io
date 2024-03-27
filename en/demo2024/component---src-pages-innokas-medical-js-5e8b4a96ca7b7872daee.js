"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[18],{9498:function(e,t,a){a.d(t,{A:function(){return u}});a(2041);var n=a(6540),l=a(4810),i=a(6194),r=a(7507),c=a(2154),s=a(2854),o=a(6548);const m=(0,l.Fe)("/");function u(e){let{children:t,location:a}=e;const{search:u,pathname:d}=a,{selectedRoles:h={}}=n.useContext(c.li),E=Object.keys(h).sort(),p=Object.keys(r.n).filter((e=>{var t;return!E.length||(null===(t=r.n[e].roles)||void 0===t?void 0:t.some((e=>E.some((t=>t===e)))))})),f=p.indexOf(d.replace(m,"").replaceAll("/","")),g=p.length>1?n.createElement("nav",{className:"prevNext"},n.createElement("div",null,f>0?n.createElement(l.N_,{to:"/"+p[f-1]+u},n.createElement("div",null,n.createElement("span",{className:"navSymbol"},"<")," "," ",n.createElement("span",{className:"navText"},"Previous")," "," ",n.createElement("img",{src:s.A,alt:""}))):n.createElement(l.N_,{to:"/"+p[p.length-1]+u},n.createElement("div",null,n.createElement("span",{className:"navSymbol"},"<")," "," ",n.createElement("span",{className:"navText"},"Last")," "," ",n.createElement("img",{src:s.A,alt:""})))),n.createElement("div",null,f<p.length-1?n.createElement(l.N_,{to:"/"+p[f+1]+u},n.createElement("div",null,n.createElement("img",{src:s.A,alt:""})," "," ",n.createElement("span",{className:"navText"},"Next")," "," ",n.createElement("span",{className:"navSymbol"},">"))):n.createElement(l.N_,{to:"/"+p[0]+u},n.createElement("div",null,n.createElement("img",{src:s.A,alt:""})," "," ",n.createElement("span",{className:"navText"},"First")," "," ",n.createElement("span",{className:"navSymbol"},">"))))):null;return n.createElement(i.A,{id:"demo"},n.createElement("header",null,n.createElement("h1",null,"FHIR Demo 2024 ",n.createElement("img",{className:"inline",src:s.A,alt:""})),E.length?n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement("h3",null,f>=0?n.createElement(n.Fragment,null,"Participant #"+(f+1)+" of "+p.length+" with role"+(E.length>1?"s":""),n.createElement("span",{className:"ariaHelp"}," ",E.join(" or "))):null,n.createElement(c.Ay,{list:c.Z4})),n.createElement("hr",null)):n.createElement("p",null,"Participant #"+(f+1)+" / "+p.length)),g,n.createElement("main",{className:"demo"},t),g,n.createElement("img",{className:"decoration",src:o.A,alt:""}))}},729:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return g}});var n=a(6540),l=a(6194),i=a(9498),r=a(2154),c=a(7507),s=a.p+"static/innokas-medical-178a8003272d1702c5bf9e1f2dcead71.png",o=a.p+"static/medicubex-cc020583c7cb9f2976c8a46329cf8748.png",m=a.p+"static/logo_digious-f1a174e000995ce92f8eb89d0bf17c74.png",u=a.p+"static/medicubex_booth_open-4a0446a2ed73028948c57189ea651b20.png",d=a.p+"static/antti_kaltiainen-5f3cb3af6795f7217acecd2ba7b6e186.png",h=a.p+"static/heikki_miinalainen-4c2aa9d3401c38c1cd709e59c8be4d94.png",E=a.p+"static/digious_flow_chart-3c6a951b448607cca45d49d65d7393e7.png",p=a.p+"static/tapio_pelkonen-aa01175e48093486c853d0db3bf491b7.png";function f(){const e=n.createElement("title",null,"FHIR Demo 2024: Innokas Medical / MedicubeX");return(0,l.x)({title:e})}function g(e){let{location:t}=e;const a=c.n["innokas-medical"].roles;return n.createElement(i.A,{roles:a,location:t},n.createElement("h1",null,n.createElement("a",{href:"https://www.innokasmedical.fi/"},n.createElement("img",{className:"half",src:s,alt:"Innokas Medical"})),n.createElement("a",{href:"https://www.medicubex.com/"},n.createElement("img",{className:"half",src:o,alt:"MedicubeX"}))),n.createElement(r.Ay,{list:a}),n.createElement("aside",{className:"event vitalis"},n.createElement("h2",null,"Digious at Vitalis"),n.createElement("p",null,"We'll be at the Matchmaking & Event Area ",n.createElement("strong",null,n.createElement("time",{dateTime:"2023-05-24T15:30:00.000+02:00"},"24.5.2023 at 15:30-17:00")))),n.createElement("aside",{className:"event atk-paivat"},n.createElement("h2",null,"MedicubeX ATK-päivillä"),n.createElement("p",null,"MedicubeX on tavattavissa Startup-alueella.")),n.createElement("aside",{className:"event radical-health"},n.createElement("h2",null,"Digious at the Radical Health Festival"),n.createElement("p",null,"Exhibition venue, C2"),n.createElement("h2",null,"MedicubeX at the Radical Health Festival"),n.createElement("p",null,"Startup Area, SU10")),n.createElement("p",null,"Our solution is an integration channel where data can be effortlessly transferred from a medical device to the national healthcare databases. This removes the need for manual input entirely and would save significant time and resources for healthcare providers around the world."),n.createElement("p",null,"In FHIR Demo 2023 we will demonstrate the sending of a patient's results (MedicubeX) and show them on OmaKanta's web app. The eHealth Station will also be available for the exhibition guests to see and experience."),n.createElement("h3",null,"Index"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"#approach"},"Digious Approach")),n.createElement("li",null,n.createElement("a",{href:"#flow"},"Measurement Transfer Flow")),n.createElement("li",null,n.createElement("a",{href:"#medicubex"},"MedicubeX™ eHealth Station")),n.createElement("li",null,n.createElement("a",{href:"#digious"},"Digious")),n.createElement("li",null,n.createElement("a",{href:"#innokas-medical"},"Innokas Medical")),n.createElement("li",null,n.createElement("a",{href:"#contact"},"Contact"))),n.createElement("section",{id:"approach"},n.createElement("h2",null,"Digious Approach"),n.createElement("p",null,"Sending patient's self-check results from customer product (MedicubeX™) to national health registry (OmaKanta) without any healthcare professional actions needed.")),n.createElement("ul",null,n.createElement("li",null,"Transform customer data format to FHIR"),n.createElement("li",null,"Supports strong authentication (e.g. bank credentials) with Suomi.fi authorization"),n.createElement("li",null,"Includes own FHIR server"),n.createElement("li",null,"Designed in fault-tolerant way; failed transactions will be retried later to be stored to national health registry"),n.createElement("li",null,"Could be modified to support any other customer's system with minimal work needed"),n.createElement("li",null,"Value proposition is to get customer product's data into the national health registry for doctors to see it when browsing patient's medical records")),n.createElement("div",{className:"media"},n.createElement("iframe",{width:"100%",height:"100%",src:"https://player.vimeo.com/video/835519980?h=6407d3777e",title:"Digious & MedicubeX on FHIR",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0})),n.createElement("section",{id:"flow"},n.createElement("h2",null,"Measurement Transfer Flow"),n.createElement("p",null,"Demo inputs:"),n.createElement("ul",null,n.createElement("li",null,"Standalone demo web panel"),n.createElement("li",null,"MedicubeX self-measurement booth")),n.createElement("p",null,"Destinations:"),n.createElement("ul",null,n.createElement("li",null,"Omakanta Omatietovaranto"),n.createElement("li",null,"Standalone OpenEMR demo panel")),n.createElement("p",null,"Flow:"),n.createElement("ul",null,n.createElement("li",null,"User finishes measurements"),n.createElement("li",null,"User interface asks to send measurements to cloud"),n.createElement("li",null,"User interface transfers them to Digious backend"),n.createElement("li",null,"Digious backend parses them to FHIR Observations, stores them to own FHIR server, and dispatches jobs to transmit"),n.createElement("li",null,"Queue worker tries to transmit FHIR Observations to FHIR destination (Omatietovaranto)"),n.createElement("li",null,"After succesful transmission, measurement data is available to be read from Omakanta")),n.createElement("img",{src:E,alt:""})),n.createElement("section",{id:"medicubex"},n.createElement("img",{src:u,alt:"MedicubeX™ eHealth Station"}),n.createElement("h2",null,"MedicubeX™ eHealth Station"),n.createElement("p",null,"The MedicubeX™ eHealth Station is an autonomous self-check station with antimicrobial and safe space solutions. This station can be used to measure a person's vital signs and cardiovascular risk factors."),n.createElement("p",null,"At any given moment, users can view their accurate vital signs and more, such as their body composition or their personal risk of cardiovascular disease. Remote appointments from the station enable direct communication with healthcare professionals without being in physical contact with other patients or healthcare staff."),n.createElement("p",null,"The MedicubeX™ station is an all-in-one healthcare solution. The eHealth station can be used for self-motivated fitness and wellness use or as a tool for healthcare providers.")),n.createElement("div",{className:"media"},n.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/e8kNx2UagNY",title:"Medicubex demo",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),n.createElement("section",{id:"digious"},n.createElement("img",{className:"logo",src:m,alt:"Digious"}),n.createElement("h2",null,"Digious"),n.createElement("h3",null,"Future of Optimized Care; from Self-Monitoring to Efficient Care Flows"),n.createElement("p",null,"Digious is strong in healthcare software, from embedded to web and mobile solutions, bringing healthcare digitalization solutions under Innokas. Digious specializes in health-tech software and digitalization in the Nordic countries, with robust experience in mobile solutions, system integrations, and solutions related to data and analytics."),n.createElement("p",null,"Our success comes straight from our customers' success. Our working model is doing joint projects with our partners, in which we have long industry experience and best practices. These we can harness for the benefit for our customers. We have developed competences and capabilities, that started with expertise of embedded software, but now spans from IoT connectivity to Integration technologies - such as HL7 and FHIR - to Cloud Technologies and Artificial Intelligence. These technologies are applied in a highly regulated environment, where we have vast experience.")),n.createElement("section",{id:"innokas-medical"},n.createElement("img",{className:"logo",src:s,alt:"Innokas Medical"}),n.createElement("h2",null,"Innokas Medical"),n.createElement("p",null,"With nearly 30 years of experience and our 200 experts specialized in Medtech we are your one-stop shop. Innokas Medical is a family-owned, contract design and manufacturing company from Finland."),n.createElement("p",null,"Innokas Medical is a reliable Nordic partner for bringing your ideas into reality. We have optimal ISO 13485/FDA compliant processes, and expertise in manufacturing as well as designing of highly demanding medical and IVD devices. Our customer project portfolio ranges from small wearables to huge diagnostics equipment and all the way to software as a medical device.")),n.createElement("section",{id:"contact"},n.createElement("h3",null,"Contact"),n.createElement("div",{className:"business-card"},n.createElement("picture",null,n.createElement("source",{srcSet:d}),n.createElement("img",{src:d,alt:"Antti Kaltiainen"})),n.createElement("h3",null,"Antti Kaltiainen"),n.createElement("p",null,"CTO, Digious"),n.createElement("address",null,n.createElement("a",{href:"mailto:antti.kaltiainen@digious.fi"},"antti.kaltiainen@digious.fi"),n.createElement("br",null),n.createElement("a",{href:"tel:+358405700333"},"+358 40 570 0333"))),n.createElement("br",null),n.createElement("div",{className:"business-card"},n.createElement("picture",null,n.createElement("source",{srcSet:h}),n.createElement("img",{src:h,alt:"Heikki Miinalainen"})),n.createElement("h3",null,"Heikki Miinalainen"),n.createElement("p",null,"Software Engineer, Digious"),n.createElement("address",null,n.createElement("a",{href:"mailto:heikki.miinalainen@digious.fi"},"heikki.miinalainen@digious.fi"))),n.createElement("br",null),n.createElement("div",{className:"business-card"},n.createElement("picture",null,n.createElement("source",{srcSet:p}),n.createElement("img",{src:p,alt:"Tapio Pelkonen"})),n.createElement("h3",null,"Tapio Pelkonen"),n.createElement("p",null,"Senior Software Engineer, Digious"),n.createElement("address",null,n.createElement("a",{href:"mailto:tapio.pelkonen@digious.fi"},"tapio.pelkonen@digious.fi")))))}}}]);
//# sourceMappingURL=component---src-pages-innokas-medical-js-5e8b4a96ca7b7872daee.js.map