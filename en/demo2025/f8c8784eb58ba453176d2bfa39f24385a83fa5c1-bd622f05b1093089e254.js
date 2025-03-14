"use strict";(self.webpackChunkfhir_demo_2025=self.webpackChunkfhir_demo_2025||[]).push([[3,527],{2687:function(I,M,g){g.r(M);var e=g(4506),c=g(6540);const t=I=>{let{fading:M=!1,rotate:g,scale:e,x:t,y:i}=I;return c.createElement("g",{transform:`translate(${t},${i})`},c.createElement("path",{className:(M?"fading ":"")+"leaf",transform:`scale(${e}) rotate(${g})`,d:"M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"}))},i=I=>{let{fading:M=!1,rotate:g,scale:e,x:t,y:i}=I;return c.createElement("g",{transform:`translate(${t},${i})`},c.createElement("path",{className:(M?"fading ":"")+"flower",transform:`scale(${e}) rotate(${g})`,d:"M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"}))},N=I=>{let{animated:M,height:g,width:N}=I;const a=g/5,[C,l]=c.useState(1),[A,n]=c.useState(.4),[j,z]=c.useState(c.createElement("path",null)),[L,T]=c.useState(void 0),[D,m]=c.useState([]),[w,d]=c.useState([]),[s,y]=c.useState([]),[Z,u]=c.useState([]),[o,x]=c.useState([]);function b(I,M){void 0===I&&(I=0),void 0===M&&(M=!1);let g=I;for(;g===I||g===((e=I)>=4?e-4:e+4);)g=Math.floor(Math.random()*(M?8:4)+(M?0:6))%8;var e;return g}function r(I){let{x:M,y:e,direction:c,short:t}=I,i=a*(t?.5:1)*(.5*Math.random()+.4),C=-1,l=-1,A=0;for(;C<=3||C>=N-3||l<=3||l>=g-3;){if(A++>10)return{x:M,y:e,direction:c};switch(c){case 0:C=M,l=e-i;break;case 1:C=M+i,l=e-i;break;case 2:C=M+i,l=e;break;case 3:C=M+i,l=e+i;break;case 4:C=M,l=e+i;break;case 5:C=M-i,l=e+i;break;case 6:C=M-i,l=e;break;case 7:C=M-i,l=e-i}}return{x:C,y:l}}function G(I){null==I||I.addEventListener("repeatEvent",(I=>{L&&(C<6?l(1.1*C):(m({...L,scale:C}),l(1))),A<5?(n(1.1*A),y((0,e.A)(s.map((I=>({...I,rotate:Math.min(Math.max(I.rotate+30*Math.random()-15,-360),360)})))))):(u((0,e.A)(s.map((I=>({...I,scale:A}))))),n(.4))}))}return c.useEffect((()=>{let I=Math.random()*N,M=Math.random()*(.3*g)+.7*g,{x:e,y:t}={x:I,y:M},{x:i,y:a}=r({x:e,y:t,direction:0}),{x:C,y:l}=r({x:i,y:a,direction:Math.random()>=.5?1:7}),A=b(),{x:n,y:j}=r({x:C,y:l,direction:A});A=b(A);let{x:L,y:D}=r({x:n,y:j,direction:A});A=b(A);let{x:m,y:w}=r({x:L,y:D,direction:A}),s=Math.random()>.35,Z=Math.ceil(3*Math.random())+1,u=[],o=[],G=[];const S=`M ${e} ${t} C ${i} ${a}, ${C} ${l}, ${n} ${j}${s?` S ${L} ${D} ${m} ${w}`:""}`;z(S);s&&(T({rotate:90*Math.random(),scale:1,x:m,y:w}),o.push({leaf:"flower0",path:S}));for(let g=0;g<Z;g+=1){A=b(A,Math.random()>.5);let{x:I,y:M}=r({x:n,y:j,direction:A,short:!0});A=b(A,Math.random()>.5);let{x:N,y:z}=r({x:I,y:M,direction:A,short:!0});A=b(A,Math.random()>.5);let{x:L,y:T}=r({x:N,y:z,direction:A,short:!0});A=b(A,Math.random()>.5);let{x:D,y:m}=r({x:L,y:T,direction:A,short:!0});A=b(A,Math.random()>.5);let{x:w,y:s}=r({x:D,y:m,direction:A,short:!0});u.push(c.createElement("path",{key:`branch${g}`,className:"branch stalk",d:`M ${n} ${j} C ${I} ${M}, ${N} ${z}, ${L} ${T} S ${D} ${m} ${w} ${s}`,strokeWidth:Math.random()+.5})),d(u),G.push({rotate:360*Math.random(),scale:.4,x:w,y:s}),y(G),o.push({leaf:`plant0leaf${g}`,path:`M ${e} ${t} C ${i} ${a}, ${C} ${l}, ${n} ${j} C ${I} ${M}, ${N} ${z}, ${L} ${T} S ${D} ${m} ${w} ${s}`}),x(o)}}),[]),c.createElement("g",{className:"plant"},c.createElement("path",{className:"root stalk",d:j,strokeWidth:"2.5"}),w,M&&o.map(((I,M)=>c.createElement("circle",{key:`pulse-${M}`,fill:"red",r:"1"},c.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite","data-leaf":I.leaf,path:I.path,ref:G})))),s.map(((I,M)=>c.createElement(t,Object.assign({key:`leaf-${M}`},I,{scale:A})))),Z.map(((I,M)=>c.createElement(t,Object.assign({key:`leaf-${M}-clone`},I,{fading:!0})))),L&&c.createElement(i,Object.assign({},L,{scale:C})),D&&c.createElement(i,Object.assign({},D,{fading:!0,className:"fade"})))},a=c.forwardRef(((I,M)=>{const{animated:g=!0,children:e,dimmed:t,height:i=1200,location:a={},pageContext:C,pageResources:l,params:A,path:n,serverData:j,uri:z,width:L,...T}=I,{search:D}=a,[m,w]=c.useState(L),[d,s]=c.useState(i),[y,Z]=c.useState(g);if(c.useEffect((()=>{if(m)return;const I=new URLSearchParams(D);if(I.has("width")?(w(+I.get("width")),I.has("height")&&s(+I.get("height"))):w("undefined"!=typeof window?window.innerWidth:2500),I.has("animated")){const M=I.get("animated").toLowerCase();Z(!["false","no","not"].some((I=>I===M)))}}),[D,m]),void 0===m)return null;const u=[];for(let x=0;x<17;x+=1)u.push(c.createElement(N,{key:`plant-${x}`,animated:y,height:d,width:m}));const o=`\n    #plantBackground * {\n      transition: all 0.4s ease, transition: fill 20s ease, transition: fill-opacity 20s ease;\n    }\n    #plantBackground line {\n      stroke-width: 0.5px;\n      stroke: #010259;\n      stroke-opacity: 0.4;\n    }\n    #plantBackground .stalk {\n      fill: none;\n      stroke: green;\n    }\n    #plantBackground .leaf, #plantBackground .flower {\n      fill: green;\n      fill-opacity: 1;\n    }\n    #plantBackground .fading {\n      transition: fill-opacity 20s ease;\n      fill: yellow;\n      fill-opacity: 0.2;\n    }\n\n    ${t?"\n      #plantBackground g {\n        opacity: 0.65;\n      }\n      ":""}\n    @media screen and (prefers-reduced-motion: reduce) {\n      #plantBackground circle {\n        animation: none !important;\n        display: none;\n      }\n    }\n    @media print {\n      #plantBackground circle {\n        display: none;\n      }\n    }\n  `;return c.createElement("svg",Object.assign({id:"plantBackground",ref:M,xmlns:"http://www.w3.org/2000/svg",width:`${m}px`,height:`${d}px`,viewBox:`0 0 ${m} ${d}`,preserveAspectRatio:"xMidYMid slice"},T),c.createElement("defs",null,c.createElement("style",null,o),c.createElement("path",{id:"leaf",className:"leaf",d:"M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"}),c.createElement("path",{id:"flower",className:"leaf",d:"M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"})),u)}));M.default=a},6194:function(I,M,g){g.d(M,{A:function(){return N},x:function(){return i}});var e=g(6540),c=g(4810),t=g(2687);function i(I){let{title:M}=I;return e.createElement(e.Fragment,null,M)}var N=I=>{let{children:M,...g}=I;return e.createElement(e.Fragment,null,e.createElement("nav",{id:"headerNav"},e.createElement("ul",null,e.createElement("li",null,e.createElement(c.N_,{to:"/"},"FHIR Demo 2025")),e.createElement("li",null,e.createElement(c.N_,{to:"/#participate"},"Get Listed!")),e.createElement("li",null,e.createElement(c.N_,{to:"/#participants"},"Participants")),e.createElement("li",null,e.createElement(c.N_,{to:"/#events"},"Events")),e.createElement("li",null,e.createElement(c.N_,{to:"/#contact"},"Contact")))),e.createElement("div",{id:"bgContainer"},e.createElement(t.default,{className:"decorative background"})),e.createElement("article",g,M),e.createElement("footer",null,e.createElement("p",null,"©2025 ",e.createElement("a",{href:"https://hl7.fi/"},e.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIxIDkwIDQ0MjAgNTcwIgogIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWlkIG1lZXQiCj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgcGF0aCB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwLjNweDsKICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87CiAgICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlOwogICAgICB9CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogYmxhY2s7CiAgICAgICAgc3Ryb2tlOiBibGFjazsKICAgICAgfQogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjNTFhMWI7CiAgICAgICAgc3Ryb2tlOiAjYzUxYTFiOwogICAgICB9CiAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgICAgICAuY2xzLTEgewogICAgICAgICAgZmlsbDogd2hpdGU7CiAgICAgICAgICBzdHJva2U6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzQ2LjYsMzMyLjVWMTI4LjFoMzAuN1Y2MTBIMzQ2LjZWMzYxLjJINTQuMVY2MTBIMjMuNVYxMjguMUg1NC4xVjMzMi41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU4OC4xLDU4MC45SDcxMC43VjYxMEg1NTcuNFYxMjguMWgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgzNS4zLDE1Ni44VjEyOC4xaDM0OS40TDg0MCw2MTQuOGwtMjMuNi0xOC41LDMxMS43LTQzOS41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1MTIuNCwxNTYuOHYxNzVoMTU5djI4LjdoLTE1OVY2MTBoLTMwLjdWMTI4LjFoMTk0LjJ2MjguN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xODcyLjYsNjEwaC0zMC43VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQ4Ny43LDYyNS43bC00MDQuMy00MzBWNjEwaC0zMC43VjEyMS43TDI0NTcsNTQ4LjR2LTQyMGgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2OTguNSw1ODAuOWgxMjIuNlY2MTBIMjY2Ny44VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAwMC42LDQ1MS4zLDI5MzYuMSw2MTBoLTMxLjNsMjAxLjgtNDk3LjZMMzMwNy44LDYxMGgtMzEuM0wzMjEyLDQ1MS4zWk0zMTA2LjYsMTkwbC05NC41LDIzMi41aDE4OC40WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4NzQuNCw2MjUuNywzNDcwLDE5NS44VjYxMGgtMzAuN1YxMjEuN2w0MDQuMyw0MjYuN3YtNDIwaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDA1NC41LDEyOC4xaDg2LjljNzAsMCwxMjUuOCwxMS41LDE3OC44LDYwLjdBMjQ0LjIsMjQ0LjIsMCwwLDEsNDM5Ni45LDM3MGEyNDIuNCwyNDIuNCwwLDAsMS03NC4xLDE3Ni4zYy01Myw1MS4xLTExMCw2My45LTE4MS40LDYzLjloLTg2LjlabTg2LjIsNDUyLjljNjMuMiwwLDExNS42LTEyLjgsMTYxLjYtNTguMWEyMTcuNywyMTcuNywwLDAsMC01LjgtMzEzLjZjLTQ2LTQxLjUtOTUuOC01Mi40LTE1NS44LTUyLjRoLTU1LjZWNTgwLjlaIi8+Cjwvc3ZnPg==",alt:"HL7 Finland"})),e.createElement("span",null," "),e.createElement(c.N_,{to:"/privacy"},"Privacy"),e.createElement("span",null,"|"),e.createElement("a",{href:"https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2025-gatsby/fhir-demo-2025"},"Source Code"),e.createElement("span",null,"|"),e.createElement("a",{href:"mailto:mikael@sensotrend.com"},"Feedback"))))}},6548:function(I,M){M.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSI5IDYgMjkgMzQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHZlcnNpb249IjEuMSIKPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDY4LjIyODA4OCw2OC4yMjgwODgsMCwxMjguMTQyMDksNjkuMDA2ODM2KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM5MDUiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg5NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAwOTY0NiIgaWQ9InN0b3AzODk3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNjkyMzA3IiBpZD0ic3RvcDM4OTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmNDk4MDAiIG9mZnNldD0iMC45NDg1ODExNSIgaWQ9InN0b3AzOTAxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzkwMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsOTkuMTkzMDA4LDk5LjE5MzAwOCwwLDEyNS44MTg4NSw3MC44MDA3ODEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzg3OSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODY3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzg2OSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4NzEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODczIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzg3NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4NzciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDQ0Ljk4Mzg1Niw0NC45ODM4NTYsMCwxMzcuMDc3MTUsNjMuNTgzMDA4KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NTEiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg0MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAxMDQ4ODEyIiBpZD0ic3RvcDM4NDMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC43NTI3NDciIGlkPSJzdG9wMzg0NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjkwNTU4MTA2IiBpZD0ic3RvcDM4NDciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlYzc1MDMiIG9mZnNldD0iMSIgaWQ9InN0b3AzODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxMDEuMDYzNTcsMTAxLjA2MzU3LDAsMTQyLjA0OTMyLDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODI1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4MTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzODE1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzgxNyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM4MTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzODIxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsNzMuMTk1MDg0LDczLjE5NTA4NCwwLDExMy4wMzAyNyw1OS43Njk1MzEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzg1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzc4NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM3ODkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzNzkxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzc5MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3OTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk2LjQ4ODcwOCw5Ni40ODg3MDgsMCwxMjUuNDgzODksNDUuNjI1OTc3KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3NjkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc1NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3NTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzYxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc2MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3NjUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzY3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc0NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTIxLjg2NywxMTguNDIxIGMgLTguNjQyLC0xMC4xNjYgLTEyLjIsLTIwLjU4NyAtMTIuNzEsLTI2LjQzNCB2IDAgQyAxMDguMTQxLDczLjE4IDEyMi4xMjEsNjYuMDY0IDEyNy40NTgsNjIuMjUgdiAwIGMgLTQuMDY3LDMuMDUgLTYuODYyLDE0LjY1NyAtMi4wMzMsMjUuODQxIHYgMCBjIDQuODI5LDExLjE4MyAxNC42NTYsMTcuNzkgMTYuMjY2LDMyLjM2MyB2IDAgYyAxLjUyNSwxNC40ODcgLTcuNjI0LDI5LjIzIC03LjYyNCwyOS4yMyB2IDAgYyAyLjAzMywtMTcuMDI5IC0zLjU1OSwtMjEuMDk2IC0xMi4yLC0zMS4yNjMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzY5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczNzczIj4KICAgICAgPHBhdGggZD0ibSAxMTEuNywxMTUuMjAxIGMgLTguMDExLC03LjEyIC0xMS4zNTMsLTE2LjQzNSAtMTAuODQ0LC0yMi41MzUgdiAwIGMgMC41MDcsLTEzLjg5NCAxMy41NTUsLTIzLjA0NSAxMy41NTUsLTIzLjA0NSB2IDAgYyAtNS45Myw3LjExNyAtOS42NTgsMTcuOTYxIC03Ljc5NCwyOC40NjcgdiAwIGMgMS44NjQsMTAuNTA1IDEzLjM4NiwyMi43MDUgMTguNjM5LDI4Ljk3NSB2IDAgYyAtMS44NjQsLTIuMDM0IC00LjQwNiwtMy43MjkgLTEzLjU1NiwtMTEuODYyIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc5Nyk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzgwMSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTQwLjg0NSwxMDYuMjIyIEMgMTM3LjQ1Niw5OC40MjYgMTMwLjMzOSw4OS45NTQgMTI4LjMwNiw4Ni4wNTggdiAwIGMgLTUuOTMxLC0xMi44NzggMi4yMDIsLTI0LjczOSAyLjIwMiwtMjQuNzM5IHYgMCBjIDIyLjM2NywxLjAxNyAyNi42MDIsMTguNDY5IDI3LjQ1LDI3Ljc4NyB2IDAgYyAtMS42OTUsLTQuNTczIC02LjEsLTguODA5IC05LjE1LC0xMC42NzUgdiAwIGMgOS42NTksMTYuNzc2IDEuMTg3LDM4LjQ2NSAtNC4wNjYsNDUuNzUyIHYgMCBjIDAuMTY5LC01LjQyMyAtMC41MDksLTEwLjE2NiAtMy44OTcsLTE3Ljk2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4MjUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MjkiPgogICAgICA8cGF0aCBkPSJtIDEzMi4wMzMsODEuNjUyIGMgLTUuODU0LC05LjE5OSAtMC42NzcsLTE4LjQ2OCAtMC42NzcsLTE4LjQ2OCB2IDAgYyA4LjY0MSwxLjUyMyAxMS44NjEsNi4wOTggMTMuNTU1LDkuNjU3IHYgMCBjIC0yLjU0MiwtMS42OTQgLTQuNDA2LC0yLjcxMiAtNy40NTUsLTMuMjIgdiAwIGMgNy4yODYsOS40ODkgNy42MjUsMjAuNjczIDcuMTE2LDI5LjE0NSB2IDAgYyAtMi44ODEsLTguMTMzIC03Ljc5NSwtOS42NiAtMTIuNTM5LC0xNy4xMTQiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODUxKTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODU1Ij4KICAgICAgPHBhdGggZD0ibSAxMTguNDc4LDEwMS4zMDcgYyAtMTAuMzM3LC0xNy4xMTQgNC4zNjUsLTMzLjc4NSA0LjM2NSwtMzMuNzg1IHYgMCBjIC00Ljc0NSw4Ljk4IC0zLjA1NywyMS43MDIgNC4yMTgsMzEuMTYgdiAwIGMgMTEuMDg1LDE0LjQxIDkuNzMsMjAuNzU0IDkuNzMsMzMuNjg2IHYgMCBjIC0yLjAzMSwtMTcuOTIgLTExLjE5NywtMTguNjkxIC0xOC4zMTMsLTMxLjA2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4NzkpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4ODMiPgogICAgICA8cGF0aCBkPSJtIDExOC4xNywxMDIuOTI1IGMgLTguMjI1LC0xNi4yMzUgLTAuODUzLC0yOS45NzQgNi43NzEsLTM3Ljg2MiB2IDAgYyAtMTguNzk5LDIyLjY3NyAtMS4wODQsNDEuMjY0IDcuODg3LDUzLjc2OCB2IDAgYyAxMi4zNTgsMTcuMjIyIDguMjM0LDI5LjIxOCA4LjIzNCwyOS4yMTggdiAwIGMgMi44MDksLTIwLjgwNCAtMTUuMzk4LC0zMC4zMzUgLTIyLjg5MiwtNDUuMTI0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzkwNSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4Ij4KICAgICAgPHRzcGFuIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4IiBzdHlsZT0iZmlsbDojZTMwNjEzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MyI+wq48L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=f8c8784eb58ba453176d2bfa39f24385a83fa5c1-bd622f05b1093089e254.js.map