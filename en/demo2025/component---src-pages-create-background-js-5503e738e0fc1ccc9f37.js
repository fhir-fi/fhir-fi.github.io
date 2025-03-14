(self.webpackChunkfhir_demo_2025=self.webpackChunkfhir_demo_2025||[]).push([[3,2634],{2280:function(e,t,a){"use strict";a.r(t),a.d(t,{Head:function(){return c},default:function(){return s}});var n=a(6540),r=a(4213),o=a(2687),l=a(6194);const i="image/svg+xml;charset=utf-8";function c(){const e=n.createElement("title",null,"Create dynamic FHIR Demo 2025 Backgrounds");return(0,l.x)({title:e})}function s(){const[e,t]=n.useState(1920),[a,l]=n.useState(1080),[c,s]=n.useState(!0),[u,d]=n.useState(!1),[g,m]=n.useState(void 0),M=n.useRef(null),f=`fhir-demo-background-${Date.now()}.svg`;return n.createElement("article",{id:"playground"},n.createElement("h1",null,"Create FHIR Demo 2025 Backgrounds!"),n.createElement("form",null,n.createElement("label",null,"Width: ",n.createElement("input",{type:"number",name:"width",value:e,onChange:e=>t(e.target.value)})),n.createElement("label",null,"Height: ",n.createElement("input",{type:"number",name:"height",value:a,onChange:e=>l(e.target.value)})),n.createElement("label",null,"Animated: ",n.createElement("input",{type:"checkbox",name:"animated",checked:c,onChange:e=>s(e.target.checked)})),n.createElement("label",null,"Dimmed: ",n.createElement("input",{type:"checkbox",name:"dimmed",checked:u,onChange:e=>d(e.target.checked)})),n.createElement("button",{type:"button",onClick:()=>{console.log(g),m(Date.now())}},"Redraw!"),n.createElement("a",{href:M.current?`${i},${encodeURIComponent(M.current.outerHTML)}`:void 0,download:f,type:i,onClick:e=>{var t;e.preventDefault();const a=new Blob([null===(t=M.current)||void 0===t?void 0:t.outerHTML],{type:i});(0,r.saveAs)(a,f)}},n.createElement("button",null,"Save!"))),n.createElement(o.default,{key:`${g}-${e}x${a}`,ref:M,width:e,height:a,animated:c,dimmed:u}))}},2687:function(e,t,a){"use strict";a.r(t);var n=a(4506),r=a(6540);const o=e=>{let{fading:t=!1,rotate:a,scale:n,x:o,y:l}=e;return r.createElement("g",{transform:`translate(${o},${l})`},r.createElement("path",{className:(t?"fading ":"")+"leaf",transform:`scale(${n}) rotate(${a})`,d:"M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"}))},l=e=>{let{fading:t=!1,rotate:a,scale:n,x:o,y:l}=e;return r.createElement("g",{transform:`translate(${o},${l})`},r.createElement("path",{className:(t?"fading ":"")+"flower",transform:`scale(${n}) rotate(${a})`,d:"M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"}))},i=e=>{let{animated:t,height:a,width:i}=e;const c=a/5,[s,u]=r.useState(1),[d,g]=r.useState(.4),[m,M]=r.useState(r.createElement("path",null)),[f,h]=r.useState(void 0),[p,I]=r.useState([]),[y,w]=r.useState([]),[C,E]=r.useState([]),[x,L]=r.useState([]),[N,j]=r.useState([]);function A(e,t){void 0===e&&(e=0),void 0===t&&(t=!1);let a=e;for(;a===e||a===((n=e)>=4?n-4:n+4);)a=Math.floor(Math.random()*(t?8:4)+(t?0:6))%8;var n;return a}function b(e){let{x:t,y:n,direction:r,short:o}=e,l=c*(o?.5:1)*(.5*Math.random()+.4),s=-1,u=-1,d=0;for(;s<=3||s>=i-3||u<=3||u>=a-3;){if(d++>10)return{x:t,y:n,direction:r};switch(r){case 0:s=t,u=n-l;break;case 1:s=t+l,u=n-l;break;case 2:s=t+l,u=n;break;case 3:s=t+l,u=n+l;break;case 4:s=t,u=n+l;break;case 5:s=t-l,u=n+l;break;case 6:s=t-l,u=n;break;case 7:s=t-l,u=n-l}}return{x:s,y:u}}function v(e){null==e||e.addEventListener("repeatEvent",(e=>{f&&(s<6?u(1.1*s):(I({...f,scale:s}),u(1))),d<5?(g(1.1*d),E((0,n.A)(C.map((e=>({...e,rotate:Math.min(Math.max(e.rotate+30*Math.random()-15,-360),360)})))))):(L((0,n.A)(C.map((e=>({...e,scale:d}))))),g(.4))}))}return r.useEffect((()=>{let e=Math.random()*i,t=Math.random()*(.3*a)+.7*a,{x:n,y:o}={x:e,y:t},{x:l,y:c}=b({x:n,y:o,direction:0}),{x:s,y:u}=b({x:l,y:c,direction:Math.random()>=.5?1:7}),d=A(),{x:g,y:m}=b({x:s,y:u,direction:d});d=A(d);let{x:f,y:p}=b({x:g,y:m,direction:d});d=A(d);let{x:I,y:y}=b({x:f,y:p,direction:d}),C=Math.random()>.35,x=Math.ceil(3*Math.random())+1,L=[],N=[],v=[];const T=`M ${n} ${o} C ${l} ${c}, ${s} ${u}, ${g} ${m}${C?` S ${f} ${p} ${I} ${y}`:""}`;M(T);C&&(h({rotate:90*Math.random(),scale:1,x:I,y:y}),N.push({leaf:"flower0",path:T}));for(let a=0;a<x;a+=1){d=A(d,Math.random()>.5);let{x:e,y:t}=b({x:g,y:m,direction:d,short:!0});d=A(d,Math.random()>.5);let{x:i,y:M}=b({x:e,y:t,direction:d,short:!0});d=A(d,Math.random()>.5);let{x:f,y:h}=b({x:i,y:M,direction:d,short:!0});d=A(d,Math.random()>.5);let{x:p,y:I}=b({x:f,y:h,direction:d,short:!0});d=A(d,Math.random()>.5);let{x:y,y:C}=b({x:p,y:I,direction:d,short:!0});L.push(r.createElement("path",{key:`branch${a}`,className:"branch stalk",d:`M ${g} ${m} C ${e} ${t}, ${i} ${M}, ${f} ${h} S ${p} ${I} ${y} ${C}`,strokeWidth:Math.random()+.5})),w(L),v.push({rotate:360*Math.random(),scale:.4,x:y,y:C}),E(v),N.push({leaf:`plant0leaf${a}`,path:`M ${n} ${o} C ${l} ${c}, ${s} ${u}, ${g} ${m} C ${e} ${t}, ${i} ${M}, ${f} ${h} S ${p} ${I} ${y} ${C}`}),j(N)}}),[]),r.createElement("g",{className:"plant"},r.createElement("path",{className:"root stalk",d:m,strokeWidth:"2.5"}),y,t&&N.map(((e,t)=>r.createElement("circle",{key:`pulse-${t}`,fill:"red",r:"1"},r.createElement("animateMotion",{dur:"10s",repeatCount:"indefinite","data-leaf":e.leaf,path:e.path,ref:v})))),C.map(((e,t)=>r.createElement(o,Object.assign({key:`leaf-${t}`},e,{scale:d})))),x.map(((e,t)=>r.createElement(o,Object.assign({key:`leaf-${t}-clone`},e,{fading:!0})))),f&&r.createElement(l,Object.assign({},f,{scale:s})),p&&r.createElement(l,Object.assign({},p,{fading:!0,className:"fade"})))},c=r.forwardRef(((e,t)=>{const{animated:a=!0,children:n,dimmed:o,height:l=1200,location:c={},pageContext:s,pageResources:u,params:d,path:g,serverData:m,uri:M,width:f,...h}=e,{search:p}=c,[I,y]=r.useState(f),[w,C]=r.useState(l),[E,x]=r.useState(a);if(r.useEffect((()=>{if(I)return;const e=new URLSearchParams(p);if(e.has("width")?(y(+e.get("width")),e.has("height")&&C(+e.get("height"))):y("undefined"!=typeof window?window.innerWidth:2500),e.has("animated")){const t=e.get("animated").toLowerCase();x(!["false","no","not"].some((e=>e===t)))}}),[p,I]),void 0===I)return null;const L=[];for(let j=0;j<17;j+=1)L.push(r.createElement(i,{key:`plant-${j}`,animated:E,height:w,width:I}));const N=`\n    #plantBackground * {\n      transition: all 0.4s ease, transition: fill 20s ease, transition: fill-opacity 20s ease;\n    }\n    #plantBackground line {\n      stroke-width: 0.5px;\n      stroke: #010259;\n      stroke-opacity: 0.4;\n    }\n    #plantBackground .stalk {\n      fill: none;\n      stroke: green;\n    }\n    #plantBackground .leaf, #plantBackground .flower {\n      fill: green;\n      fill-opacity: 1;\n    }\n    #plantBackground .fading {\n      transition: fill-opacity 20s ease;\n      fill: yellow;\n      fill-opacity: 0.2;\n    }\n\n    ${o?"\n      #plantBackground g {\n        opacity: 0.65;\n      }\n      ":""}\n    @media screen and (prefers-reduced-motion: reduce) {\n      #plantBackground circle {\n        animation: none !important;\n        display: none;\n      }\n    }\n    @media print {\n      #plantBackground circle {\n        display: none;\n      }\n    }\n  `;return r.createElement("svg",Object.assign({id:"plantBackground",ref:t,xmlns:"http://www.w3.org/2000/svg",width:`${I}px`,height:`${w}px`,viewBox:`0 0 ${I} ${w}`,preserveAspectRatio:"xMidYMid slice"},h),r.createElement("defs",null,r.createElement("style",null,N),r.createElement("path",{id:"leaf",className:"leaf",d:"M20,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 v-20 Z"}),r.createElement("path",{id:"flower",className:"leaf",d:"M0,0 a10 10 0 0 1 0 20 a10 10 0 0 1 -20 0 a10 10 0 0 1 0 -20 a10 10 0 0 1 20 0 Z"})),L)}));t.default=c},4213:function(e,t,a){var n,r,o;r=[],void 0===(o="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,a){var i=l.URL||l.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):r(c.href)?n(e,t,a):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,a,l){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,l),a);else if(r(e))n(e,a,l);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(e,t,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,a);var o="application/octet-stream"===e.type,c=/constructor/i.test(l.HTMLElement)||l.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||o&&c||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var d=l.URL||l.webkitURL,g=d.createObjectURL(e);r?r.location=g:location.href=g,r=null,setTimeout((function(){d.revokeObjectURL(g)}),4e4)}});l.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,r):n)||(e.exports=o)},6194:function(e,t,a){"use strict";a.d(t,{A:function(){return i},x:function(){return l}});var n=a(6540),r=a(4810),o=a(2687);function l(e){let{title:t}=e;return n.createElement(n.Fragment,null,t)}var i=e=>{let{children:t,...a}=e;return n.createElement(n.Fragment,null,n.createElement("nav",{id:"headerNav"},n.createElement("ul",null,n.createElement("li",null,n.createElement(r.N_,{to:"/"},"FHIR Demo 2025")),n.createElement("li",null,n.createElement(r.N_,{to:"/#participate"},"Get Listed!")),n.createElement("li",null,n.createElement(r.N_,{to:"/#participants"},"Participants")),n.createElement("li",null,n.createElement(r.N_,{to:"/#events"},"Events")),n.createElement("li",null,n.createElement(r.N_,{to:"/#contact"},"Contact")))),n.createElement("div",{id:"bgContainer"},n.createElement(o.default,{className:"decorative background"})),n.createElement("article",a,t),n.createElement("footer",null,n.createElement("p",null,"©2025 ",n.createElement("a",{href:"https://hl7.fi/"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIxIDkwIDQ0MjAgNTcwIgogIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWlkIG1lZXQiCj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgcGF0aCB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwLjNweDsKICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGF1dG87CiAgICAgICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlOwogICAgICB9CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogYmxhY2s7CiAgICAgICAgc3Ryb2tlOiBibGFjazsKICAgICAgfQogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjNTFhMWI7CiAgICAgICAgc3Ryb2tlOiAjYzUxYTFiOwogICAgICB9CiAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICAgICAgICAuY2xzLTEgewogICAgICAgICAgZmlsbDogd2hpdGU7CiAgICAgICAgICBzdHJva2U6IHdoaXRlOwogICAgICAgIH0KICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzQ2LjYsMzMyLjVWMTI4LjFoMzAuN1Y2MTBIMzQ2LjZWMzYxLjJINTQuMVY2MTBIMjMuNVYxMjguMUg1NC4xVjMzMi41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU4OC4xLDU4MC45SDcxMC43VjYxMEg1NTcuNFYxMjguMWgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTgzNS4zLDE1Ni44VjEyOC4xaDM0OS40TDg0MCw2MTQuOGwtMjMuNi0xOC41LDMxMS43LTQzOS41WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1MTIuNCwxNTYuOHYxNzVoMTU5djI4LjdoLTE1OVY2MTBoLTMwLjdWMTI4LjFoMTk0LjJ2MjguN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xODcyLjYsNjEwaC0zMC43VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQ4Ny43LDYyNS43bC00MDQuMy00MzBWNjEwaC0zMC43VjEyMS43TDI0NTcsNTQ4LjR2LTQyMGgzMC43WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI2OTguNSw1ODAuOWgxMjIuNlY2MTBIMjY2Ny44VjEyOC4xaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzAwMC42LDQ1MS4zLDI5MzYuMSw2MTBoLTMxLjNsMjAxLjgtNDk3LjZMMzMwNy44LDYxMGgtMzEuM0wzMjEyLDQ1MS4zWk0zMTA2LjYsMTkwbC05NC41LDIzMi41aDE4OC40WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4NzQuNCw2MjUuNywzNDcwLDE5NS44VjYxMGgtMzAuN1YxMjEuN2w0MDQuMyw0MjYuN3YtNDIwaDMwLjdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDA1NC41LDEyOC4xaDg2LjljNzAsMCwxMjUuOCwxMS41LDE3OC44LDYwLjdBMjQ0LjIsMjQ0LjIsMCwwLDEsNDM5Ni45LDM3MGEyNDIuNCwyNDIuNCwwLDAsMS03NC4xLDE3Ni4zYy01Myw1MS4xLTExMCw2My45LTE4MS40LDYzLjloLTg2LjlabTg2LjIsNDUyLjljNjMuMiwwLDExNS42LTEyLjgsMTYxLjYtNTguMWEyMTcuNywyMTcuNywwLDAsMC01LjgtMzEzLjZjLTQ2LTQxLjUtOTUuOC01Mi40LTE1NS44LTUyLjRoLTU1LjZWNTgwLjlaIi8+Cjwvc3ZnPg==",alt:"HL7 Finland"})),n.createElement("span",null," "),n.createElement(r.N_,{to:"/privacy"},"Privacy"),n.createElement("span",null,"|"),n.createElement("a",{href:"https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2025-gatsby/fhir-demo-2025"},"Source Code"),n.createElement("span",null,"|"),n.createElement("a",{href:"mailto:mikael@sensotrend.com"},"Feedback"))))}}}]);
//# sourceMappingURL=component---src-pages-create-background-js-5503e738e0fc1ccc9f37.js.map