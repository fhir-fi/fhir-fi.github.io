"use strict";(self.webpackChunkfhir_demo_2025=self.webpackChunkfhir_demo_2025||[]).push([[3,4107],{2687:function(I,M,g){g.r(M);var c=g(6540);const i=c.forwardRef(((I,M)=>{const{animated:g=!0,children:i,dimmed:e,height:N=15e3,location:C={},pageContext:t,pageResources:A,params:j,path:l,serverData:z,uri:n,width:L,...T}=I,{search:D}=C,[a,w]=c.useState(L),[m,Z]=c.useState(N),[y,u]=c.useState(g);if(c.useEffect((()=>{if(a)return;const I=new URLSearchParams(D);if(I.has("width")?(w(+I.get("width")),I.has("height")&&Z(+I.get("height"))):w("undefined"!=typeof window?window.innerWidth:2500),I.has("animated")){const M=I.get("animated").toLowerCase();u(!["false","no","not"].some((I=>I===M)))}}),[D,a]),void 0===a)return null;const s=14,d=a*m/1e3/300;function b(I){let M,g,{x:c,y:i,direction:e}=I,N=-1,C=-1,t=0;for(;N<=s||N>=a-s||C<=s||C>=m-s;){if(t++>10)return{x:c,y:i,direction:e};switch(M=Math.floor(300*Math.random())+20,M-=M%s,g=e+Math.floor(4*Math.random())+6,g%=8,g){case 0:N=c,C=i-M;break;case 1:N=c+M,C=i-M;break;case 2:N=c+M,C=i;break;case 3:N=c+M,C=i+M;break;case 4:N=c,C=i+M;break;case 5:N=c-M,C=i+M;break;case 6:N=c-M,C=i;break;case 7:N=c-M,C=i-M}}return{x:N,y:C,direction:g}}const o=[];for(let c=0;c<d;c+=1){const I=[];let M=Math.random()*a;M-=M%s;let g=Math.random()*m;g-=g%s;let c=Math.floor(8*Math.random());for(let e=0;e<8;e+=1){const{x:i,y:e,direction:N}=b({x:M,y:g,direction:c});I.push(`${i},${e}`),M=i,g=e,c=N}const i=`M${I.join("L")}`;o.push(i)}const x=o.join(" "),G=[];for(let r=0;r<a;r+=s)G.push(c.createElement("line",{key:`v${r}`,x1:r+7,x2:r+7,y2:m+7}));for(let r=0;r<m;r+=s)G.push(c.createElement("line",{key:`h${r}`,x2:a,y1:r+7,y2:r+7}));const Y=`\n    line {\n      stroke-width: 0.5px;\n      stroke: #010259;\n      stroke-opacity: 0.4;\n    }\n    path {\n      fill: none;\n    }\n    ${e?"\n      g {\n        opacity: 0.15;\n      }\n      ":""}\n    @media screen and (prefers-reduced-motion: reduce) {\n      circle {\n        animation: none !important;\n        display: none;\n      }\n    }\n    @media print {\n      circle {\n        display: none;\n      }\n    }\n  `;return c.createElement("svg",Object.assign({ref:M,xmlns:"http://www.w3.org/2000/svg",width:`${a}px`,height:`${m}px`,viewBox:`0 0 ${a} ${m}`,preserveAspectRatio:"xMidYMid slice"},T),c.createElement("defs",null,c.createElement("style",null,Y)),c.createElement("g",{transform:"translate(0.5, 0.5)"},G,c.createElement("path",{stroke:"#010259",strokeWidth:s,vectorEffect:"non-scaling-stroke",strokeLinecap:"square",d:x}),c.createElement("path",{stroke:"white",strokeWidth:"1px",vectorEffect:"non-scaling-stroke",shapeRendering:"auto",d:x}),y?c.createElement("circle",{fill:"white",r:"2"},c.createElement("animateMotion",{dur:a*m/5e4+"s",repeatCount:"indefinite",path:x})):null))}));M.default=i},5315:function(I,M,g){g.r(M),g.d(M,{Head:function(){return N},default:function(){return C}});var c=g(6540),i=(g(4810),g(6194)),e=g(6548);function N(){const I=c.createElement("title",null,"FHIR Demo 2025 ATK-päivillä");return(0,i.x)({title:I})}function C(){return c.createElement(i.A,{id:"atk-paivat",className:"event"},c.createElement("section",{id:"intro"},c.createElement("h1",null,"FHIR Demo 2025 ATK-päivillä"),c.createElement("p",null,"FHIR Demo 2025 esittelee FHIR-standardin käytön nykytilan Suomessa ",c.createElement("a",{href:"https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat"},"Sosiaali- ja terveydenhuollon ATK-päivillä")," Jyväskylässä toukokuussa.")),c.createElement("img",{className:"decoration",src:e.A,alt:""}))}},6194:function(I,M,g){g.d(M,{A:function(){return C},x:function(){return N}});var c=g(6540),i=g(4810),e=g(2687);function N(I){let{title:M}=I;return c.createElement(c.Fragment,null,M)}var C=I=>{let{children:M,...g}=I;return c.createElement(c.Fragment,null,c.createElement("nav",{id:"headerNav"},c.createElement("ul",null,c.createElement("li",null,c.createElement(i.N_,{to:"/"},"FHIR Demo 2025")),c.createElement("li",null,c.createElement(i.N_,{to:"/#participate"},"Get Listed!")),c.createElement("li",null,c.createElement(i.N_,{to:"/#participants"},"Participants")),c.createElement("li",null,c.createElement(i.N_,{to:"/#events"},"Events")),c.createElement("li",null,c.createElement(i.N_,{to:"/#contact"},"Contact")))),c.createElement("div",{id:"bgContainer"},c.createElement(e.default,{className:"decorative background"})),c.createElement("article",g,M),c.createElement("footer",null,c.createElement("p",null,"©2025 ",c.createElement("a",{href:"https://hl7.fi/"},c.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIxIDkwIDQ0MjAgNTcwIgogIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWlkIG1lZXQiCj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgcGF0aCB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwLjNweDsKICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87CiAgICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlOwogICAgICB9CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogYmxhY2s7CiAgICAgICAgc3Ryb2tlOiBibGFjazsKICAgICAgfQogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjNTFhMWI7CiAgICAgICAgc3Ryb2tlOiAjYzUxYTFiOwogICAgICB9CiAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgICAgICAuY2xzLTEgewogICAgICAgICAgZmlsbDogd2hpdGU7CiAgICAgICAgICBzdHJva2U6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzQ2LjYsMzMyLjVWMTI4LjFoMzAuN1Y2MTBIMzQ2LjZWMzYxLjJINTQuMVY2MTBIMjMuNVYxMjguMUg1NC4xVjMzMi41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU4OC4xLDU4MC45SDcxMC43VjYxMEg1NTcuNFYxMjguMWgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgzNS4zLDE1Ni44VjEyOC4xaDM0OS40TDg0MCw2MTQuOGwtMjMuNi0xOC41LDMxMS43LTQzOS41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1MTIuNCwxNTYuOHYxNzVoMTU5djI4LjdoLTE1OVY2MTBoLTMwLjdWMTI4LjFoMTk0LjJ2MjguN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xODcyLjYsNjEwaC0zMC43VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQ4Ny43LDYyNS43bC00MDQuMy00MzBWNjEwaC0zMC43VjEyMS43TDI0NTcsNTQ4LjR2LTQyMGgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2OTguNSw1ODAuOWgxMjIuNlY2MTBIMjY2Ny44VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAwMC42LDQ1MS4zLDI5MzYuMSw2MTBoLTMxLjNsMjAxLjgtNDk3LjZMMzMwNy44LDYxMGgtMzEuM0wzMjEyLDQ1MS4zWk0zMTA2LjYsMTkwbC05NC41LDIzMi41aDE4OC40WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4NzQuNCw2MjUuNywzNDcwLDE5NS44VjYxMGgtMzAuN1YxMjEuN2w0MDQuMyw0MjYuN3YtNDIwaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDA1NC41LDEyOC4xaDg2LjljNzAsMCwxMjUuOCwxMS41LDE3OC44LDYwLjdBMjQ0LjIsMjQ0LjIsMCwwLDEsNDM5Ni45LDM3MGEyNDIuNCwyNDIuNCwwLDAsMS03NC4xLDE3Ni4zYy01Myw1MS4xLTExMCw2My45LTE4MS40LDYzLjloLTg2LjlabTg2LjIsNDUyLjljNjMuMiwwLDExNS42LTEyLjgsMTYxLjYtNTguMWEyMTcuNywyMTcuNywwLDAsMC01LjgtMzEzLjZjLTQ2LTQxLjUtOTUuOC01Mi40LTE1NS44LTUyLjRoLTU1LjZWNTgwLjlaIi8+Cjwvc3ZnPg==",alt:"HL7 Finland"})),c.createElement("span",null," "),c.createElement(i.N_,{to:"/privacy"},"Privacy"),c.createElement("span",null,"|"),c.createElement("a",{href:"https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2025-gatsby/fhir-demo-2025"},"Source Code"),c.createElement("span",null,"|"),c.createElement("a",{href:"mailto:mikael@sensotrend.com"},"Feedback"))))}},6548:function(I,M){M.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSI5IDYgMjkgMzQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHZlcnNpb249IjEuMSIKPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDY4LjIyODA4OCw2OC4yMjgwODgsMCwxMjguMTQyMDksNjkuMDA2ODM2KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM5MDUiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg5NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAwOTY0NiIgaWQ9InN0b3AzODk3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNjkyMzA3IiBpZD0ic3RvcDM4OTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmNDk4MDAiIG9mZnNldD0iMC45NDg1ODExNSIgaWQ9InN0b3AzOTAxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzkwMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsOTkuMTkzMDA4LDk5LjE5MzAwOCwwLDEyNS44MTg4NSw3MC44MDA3ODEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzg3OSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODY3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzg2OSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4NzEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODczIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzg3NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4NzciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDQ0Ljk4Mzg1Niw0NC45ODM4NTYsMCwxMzcuMDc3MTUsNjMuNTgzMDA4KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NTEiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg0MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAxMDQ4ODEyIiBpZD0ic3RvcDM4NDMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC43NTI3NDciIGlkPSJzdG9wMzg0NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjkwNTU4MTA2IiBpZD0ic3RvcDM4NDciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlYzc1MDMiIG9mZnNldD0iMSIgaWQ9InN0b3AzODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxMDEuMDYzNTcsMTAxLjA2MzU3LDAsMTQyLjA0OTMyLDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODI1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4MTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzODE1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzgxNyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM4MTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzODIxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsNzMuMTk1MDg0LDczLjE5NTA4NCwwLDExMy4wMzAyNyw1OS43Njk1MzEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzg1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzc4NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM3ODkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzNzkxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzc5MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3OTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk2LjQ4ODcwOCw5Ni40ODg3MDgsMCwxMjUuNDgzODksNDUuNjI1OTc3KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3NjkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc1NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3NTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzYxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc2MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3NjUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzY3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc0NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTIxLjg2NywxMTguNDIxIGMgLTguNjQyLC0xMC4xNjYgLTEyLjIsLTIwLjU4NyAtMTIuNzEsLTI2LjQzNCB2IDAgQyAxMDguMTQxLDczLjE4IDEyMi4xMjEsNjYuMDY0IDEyNy40NTgsNjIuMjUgdiAwIGMgLTQuMDY3LDMuMDUgLTYuODYyLDE0LjY1NyAtMi4wMzMsMjUuODQxIHYgMCBjIDQuODI5LDExLjE4MyAxNC42NTYsMTcuNzkgMTYuMjY2LDMyLjM2MyB2IDAgYyAxLjUyNSwxNC40ODcgLTcuNjI0LDI5LjIzIC03LjYyNCwyOS4yMyB2IDAgYyAyLjAzMywtMTcuMDI5IC0zLjU1OSwtMjEuMDk2IC0xMi4yLC0zMS4yNjMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzY5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczNzczIj4KICAgICAgPHBhdGggZD0ibSAxMTEuNywxMTUuMjAxIGMgLTguMDExLC03LjEyIC0xMS4zNTMsLTE2LjQzNSAtMTAuODQ0LC0yMi41MzUgdiAwIGMgMC41MDcsLTEzLjg5NCAxMy41NTUsLTIzLjA0NSAxMy41NTUsLTIzLjA0NSB2IDAgYyAtNS45Myw3LjExNyAtOS42NTgsMTcuOTYxIC03Ljc5NCwyOC40NjcgdiAwIGMgMS44NjQsMTAuNTA1IDEzLjM4NiwyMi43MDUgMTguNjM5LDI4Ljk3NSB2IDAgYyAtMS44NjQsLTIuMDM0IC00LjQwNiwtMy43MjkgLTEzLjU1NiwtMTEuODYyIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc5Nyk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzgwMSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTQwLjg0NSwxMDYuMjIyIEMgMTM3LjQ1Niw5OC40MjYgMTMwLjMzOSw4OS45NTQgMTI4LjMwNiw4Ni4wNTggdiAwIGMgLTUuOTMxLC0xMi44NzggMi4yMDIsLTI0LjczOSAyLjIwMiwtMjQuNzM5IHYgMCBjIDIyLjM2NywxLjAxNyAyNi42MDIsMTguNDY5IDI3LjQ1LDI3Ljc4NyB2IDAgYyAtMS42OTUsLTQuNTczIC02LjEsLTguODA5IC05LjE1LC0xMC42NzUgdiAwIGMgOS42NTksMTYuNzc2IDEuMTg3LDM4LjQ2NSAtNC4wNjYsNDUuNzUyIHYgMCBjIDAuMTY5LC01LjQyMyAtMC41MDksLTEwLjE2NiAtMy44OTcsLTE3Ljk2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4MjUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MjkiPgogICAgICA8cGF0aCBkPSJtIDEzMi4wMzMsODEuNjUyIGMgLTUuODU0LC05LjE5OSAtMC42NzcsLTE4LjQ2OCAtMC42NzcsLTE4LjQ2OCB2IDAgYyA4LjY0MSwxLjUyMyAxMS44NjEsNi4wOTggMTMuNTU1LDkuNjU3IHYgMCBjIC0yLjU0MiwtMS42OTQgLTQuNDA2LC0yLjcxMiAtNy40NTUsLTMuMjIgdiAwIGMgNy4yODYsOS40ODkgNy42MjUsMjAuNjczIDcuMTE2LDI5LjE0NSB2IDAgYyAtMi44ODEsLTguMTMzIC03Ljc5NSwtOS42NiAtMTIuNTM5LC0xNy4xMTQiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODUxKTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODU1Ij4KICAgICAgPHBhdGggZD0ibSAxMTguNDc4LDEwMS4zMDcgYyAtMTAuMzM3LC0xNy4xMTQgNC4zNjUsLTMzLjc4NSA0LjM2NSwtMzMuNzg1IHYgMCBjIC00Ljc0NSw4Ljk4IC0zLjA1NywyMS43MDIgNC4yMTgsMzEuMTYgdiAwIGMgMTEuMDg1LDE0LjQxIDkuNzMsMjAuNzU0IDkuNzMsMzMuNjg2IHYgMCBjIC0yLjAzMSwtMTcuOTIgLTExLjE5NywtMTguNjkxIC0xOC4zMTMsLTMxLjA2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4NzkpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4ODMiPgogICAgICA8cGF0aCBkPSJtIDExOC4xNywxMDIuOTI1IGMgLTguMjI1LC0xNi4yMzUgLTAuODUzLC0yOS45NzQgNi43NzEsLTM3Ljg2MiB2IDAgYyAtMTguNzk5LDIyLjY3NyAtMS4wODQsNDEuMjY0IDcuODg3LDUzLjc2OCB2IDAgYyAxMi4zNTgsMTcuMjIyIDguMjM0LDI5LjIxOCA4LjIzNCwyOS4yMTggdiAwIGMgMi44MDksLTIwLjgwNCAtMTUuMzk4LC0zMC4zMzUgLTIyLjg5MiwtNDUuMTI0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzkwNSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4Ij4KICAgICAgPHRzcGFuIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4IiBzdHlsZT0iZmlsbDojZTMwNjEzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MyI+wq48L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-atk-paivat-js-b90ffe685dae34dc2159.js.map