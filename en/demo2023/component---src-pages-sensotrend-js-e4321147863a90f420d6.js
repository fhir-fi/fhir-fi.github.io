"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[6],{2186:function(e,t,n){n.d(t,{Z:function(){return m}});n(7207);var a=n(7294),l=n(1883),r=n(6226),i=n(3516),o=n(5867),s=n(6774);const c=(0,l.dq)("/");function m(e){let{children:t,location:n}=e;const{search:m,pathname:d}=n,{selectedFeatures:u={}}=a.useContext(o.Ym),h=Object.keys(u).sort(),p=Object.keys(i.D).filter((e=>{var t;return!h.length||(null===(t=i.D[e].features)||void 0===t?void 0:t.some((e=>h.some((t=>t===e)))))})),E=p.indexOf(d.replace(c,"").replaceAll("/","")),f=p.length>1?a.createElement("nav",{className:"prevNext"},a.createElement("div",null,E>0?a.createElement(l.rU,{to:"/"+p[E-1]+m},"Previous ",a.createElement("img",{src:s.Z,alt:""})):a.createElement(l.rU,{to:"/"+p[p.length-1]+m},"Last ",a.createElement("img",{src:s.Z,alt:""}))),a.createElement("div",null,E<p.length-1?a.createElement(l.rU,{to:"/"+p[E+1]+m},"Next ",a.createElement("img",{src:s.Z,alt:""})):a.createElement(l.rU,{to:"/"+p[0]+m},"First",a.createElement("img",{src:s.Z,alt:""})))):null;return a.createElement(r.Z,null,a.createElement("header",null,h.length?a.createElement(a.Fragment,null,a.createElement("hr",null),a.createElement("h3",null,"Showing demos with feature"+(h.length>1?"s":"")+":"),a.createElement(o.ZP,{list:h}),a.createElement("hr",null)):null,f),a.createElement("main",{className:"demo"},t),f,a.createElement("img",{className:"decoration",src:s.Z,alt:""}))}},8433:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return f}});var a=n(7294),l=n(1883),r=n(2186),i=n(5867),o=n(3516),s=n.p+"static/omatietovaranto-mittaustulokset-b4697999ba5d930f14bf924e82b5066a.png",c=n(7055),m=n(9054),d=n.p+"static/nightscout-db444d5be4dc041d37cf4e9f460c8017.png",u=n.p+"static/sensotrend-0e2f41eb511a4ef80ead6b4c41b85ffe.svg",h=n.p+"static/sensotrend-agp-e9952dc60cf9692e2559f37bb494b219.png",p=n.p+"static/sensotrend-connect-2721238066d1712cd9baa72884c591b3.jpg";const E=()=>a.createElement("title",null,"FHIR Demo 2023: Sensotrend");function f(e){let{location:t}=e;const n=o.D.sensotrend.features;return a.createElement(r.Z,{location:t},a.createElement("h1",null,a.createElement("a",{href:"https://www.sensotrend.com/"},a.createElement("img",{src:u,alt:"Sensotrend"}))),a.createElement(i.ZP,{list:n}),a.createElement("aside",{className:"event atk-paivat"},a.createElement("h2",null,"ATK-päivät: Startup-alue, pöytä 10"),a.createElement("p",null,"Esittelemme diabeteksen etäseurannan ratkaisua, joka on saumattomasti integroitu potilastietojärjestelmiin."),a.createElement("p",null,"Olemme toteuttaneet FHIR-integraatioita ainakin Apotin, Cernerin, Epicin, InterSystemsin, Omaolon, Terveyskylän ja Wellmon palveluihin. Autamme mielellämme myös muita yrityksiä FHIR-integraatioissa."),a.createElement("p",null,"Olemme myös olleet mukana luomassa ",a.createElement("a",{href:"https://fhir.fi/profiling.html"},"kansallisia FHIR-soveltamisoppaita.")),a.createElement("p",null,"Kokemusta ja kokemuksia löytyy, saa kysellä!"),a.createElement("p",null,"Esittelemme yhdessä Apotin kanssa Sensotrendin sovelluksen saumattomana osana Apotin käyttöliittymää"),a.createElement("strong",null,a.createElement("ul",null,a.createElement("li",null,a.createElement("time",{dateTime:"2023-05-23T12:30:00.000+03:00"},"tiistaina klo 12.30"),", Ständi 400"),a.createElement("li",null,a.createElement("time",{dateTime:"2023-05-23T13:30:00.000+03:00"},"tiistaina klo 13.30"),", Startup-alue, pöytä 10"),a.createElement("li",null,a.createElement("time",{dateTime:"2023-05-23T15:00:00.000+03:00"},"tiistaina klo 15.00"),", Ständi 400"),a.createElement("li",null,a.createElement("time",{dateTime:"2023-05-24T12:15:00.000+03:00"},"keskiviikkona klo 12.15"),", Ständi 400"))),a.createElement("p",null,"Lisäksi sovelluksemme voi nähdä toiminnassa ainakin ",a.createElement(l.rU,{to:"../intersystems"},"InterSystemsin")," ja ",a.createElement(l.rU,{to:"../wellmo"},"Wellmon")," ständeillä.")),a.createElement("section",{id:"intro"},a.createElement("p",null,"Sensotrend Oy presents two solutions:"),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"#sensotrend-connect"},"Sensotrend Connect"),", a diabetes remote monitoring solution."),a.createElement("li",null,a.createElement("a",{href:"#nightscout-connect"},"Nightscout Connect"),", an implementation of the open-source Nightscout API on top of the Finnish national Kanta PHR platform."))),a.createElement("section",{id:"sensotrend-connect"},a.createElement("h2",null,"Sensotrend Connect"),a.createElement("p",null,"Sensotrend Connect is a diabetes remote monitoring solution."),a.createElement("p",null,"It makes life with diabetes easier by combining data from dozens of medical devices and wellness trackers and deriving actionable insights from the data. It also facilitates sharing the information with both healthcare professionals and peers."),a.createElement("img",{src:p,alt:""}),a.createElement("p",null,"Sensotrend Connect transforms data from third party apps and devices into HL7 FHIR format (mainly ",a.createElement("strong",null,"Observation")," and ",a.createElement("strong",null,"MedicationAdministration")," resources, see the ",a.createElement("a",{href:"https://github.com/Sensotrend/sensotrend-converter"},"open-source converter"),") and stores it in any specified FHIR server."),a.createElement("p",null,"The solution also includes a dashboard view of the data that is integrated into electronic health record systems with the ",a.createElement("strong",null,"SMART App Launch")," specification. See an ",a.createElement("a",{href:"https://hl7.fi/fhir/finnish-smart/AuditEvent-apotti-ehr-launch-by-practitioner.html"},"example launch flow")," in the Finnish Implementation Guide for SMART App Launch."),a.createElement("figure",null,a.createElement("img",{src:h,alt:""}),a.createElement("figcaption",null,"The main view of Sensotrend Connect is based on the internationally harmonized ",a.createElement("a",{href:"http://www.agpreport.org/agp/about"},"Ambulatory Glucose Profile")," specification.")),a.createElement("p",null,"Internally, Sensotrend Connect uses the ",a.createElement("strong",null,"Consent")," resource to manage permissions for healthcare providers to access the patient generated and patient controlled data. See the presentation and the ",a.createElement("a",{href:"https://www.devdays.com/wp-content/uploads/2021/12/DD18-EU-Mikael-Rinnetmaki-Patient-generated-health-data-with-consent-2018-11-16-1.pdf"},"slides")," given in a past FHIR DevDays event."),a.createElement("div",{className:"media"},a.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/cYO1vYUwzvA",title:"Video recording of FHIR DevDays 2018 presentation: Patient-generated Health Data with Consent",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),a.createElement("p",null,"In FHIR Demo 2023 we demostrate the ",a.createElement("strong",null,"SMART App Launch")," from Apotti and Epic systems and through the SMART adapter by InterSystems. We also present data storage into FHIR servers from Google, InterSystems, and Microsoft, and into the Finnish national Kanta PHR platform."),a.createElement("p",null,"See also the older version of Sensotrend Connect embedded in Cerner Millennium in a past video recording."),a.createElement("div",{className:"media"},a.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/iF1v25Bzo5A?start=5525",title:"Video recording of Cerner presenting Sensotrend Connect embedded in Cerner Millennium",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))),a.createElement("section",{id:"nightscout-connect"},a.createElement("h2",null,"Nightscout Connect"),a.createElement("p",null,a.createElement("a",{href:"http://www.nightscout.info/"},"Nightscout")," is an open-source development community creating apps and devices that make life with diabetes easier. The community has thousands of developers, and tens of thousands of people using the apps globally."),a.createElement("img",{className:"logo",src:d,alt:""}),a.createElement("p",null,"Nightscout Connect implements the API used by the Nightscout apps on top of the Finnish national Kanta PHR platform, bringing the data from these apps into the national healthcare data infrastructure."),a.createElement("p",null,"Thanks to the service, people wanting to take Nightscout apps into use no longer need to operate the server side of the solution themselves. It is still up to each individual and family to install and use the apps created by the community."),a.createElement("p",null,"Nightscout Connect transforms data between Nightscout's own content format and HL7 FHIR. The most used resources are ",a.createElement("strong",null,"Observation")," for results from continuous glucose monitors and glucometers and for carbohydrate intake estimations, and ",a.createElement("strong",null,"MedicationAdministration")," for insulin doses."),a.createElement("figure",null,a.createElement("img",{src:s,alt:""}),a.createElement("figcaption",null,"Individual observations in the Kanta PHR platform, present on the Kanta patient portal.")),a.createElement("p",null,"In Kanta PHR the data can be shared with Sensotrend Connect, and thereby be made available for healthcare providers."),a.createElement("p",null,"In FHIR Demo 2023 we demonstrate the transformation of data formats and the sharing of data between apps using the HL7 FHIR standard.")),a.createElement("section",{id:"contact"},a.createElement("h3",null,"Contact"),a.createElement("div",{className:"business-card"},a.createElement("picture",null,a.createElement("source",{srcSet:m.Z,media:"(min-resolution: 144dpi)"}),a.createElement("source",{srcSet:c.Z}),a.createElement("img",{src:c.Z,alt:""})),a.createElement("h3",null,"Mikael Rinnetmäki"),a.createElement("p",null,"Founder, Sensotrend Oy"),a.createElement("address",null,a.createElement("a",{href:"mailto:mikael@sensotrend.com"},"mikael@sensotrend.com"),a.createElement("br",null),a.createElement("a",{href:"tel:+358503855511"},"+358 50 385 5511")))))}},7055:function(e,t,n){t.Z=n.p+"static/MikaelRinnetmaki-c018278ea7389c623970fc193cdf8dbd.jpg"},9054:function(e,t,n){t.Z=n.p+"static/MikaelRinnetmaki2x-d58c51fabf110a18dbcbf10ab4b0ea59.jpg"}}]);
//# sourceMappingURL=component---src-pages-sensotrend-js-e4321147863a90f420d6.js.map