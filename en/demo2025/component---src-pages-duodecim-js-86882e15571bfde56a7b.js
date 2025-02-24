"use strict";(self.webpackChunkfhir_demo_2025=self.webpackChunkfhir_demo_2025||[]).push([[8077],{5525:function(L,M,j){j.r(M),j.d(M,{Head:function(){return i},default:function(){return N}});var u=j(6540),w=j(6194),t=j(9498),C=j(2154),e=j(7507),s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSI2IDIgMjgyLjIgMzcuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjk0LjIgNDEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjMDA2MUFBIiBkPSJNNy4xLDE2LjhjMC00LjEtMC4yLTguMy0wLjQtMTIuNGMyLjQsMC4xLDQuOCwwLjIsNy4yLDAuMmMyLjQsMCw0LjgtMC4yLDcuMi0wLjJjMTEuMiwwLDE1LjgsNiwxNS44LDE1LjkNCgkJYzAsMTIuOC05LjksMTcuMi0xNy40LDE3LjJjLTIuMiwwLTQuMy0wLjItNi40LTAuMmMtMi4yLDAtNC4zLDAuMS02LjQsMC4yYzAuMi00LjEsMC40LTguMywwLjQtMTIuNFYxNi44eiBNMTEuMSwyNS4xDQoJCWMwLDMuNCwwLjEsNi45LDAuMywxMC4yYzEuMywwLjMsMy44LDAuNSw2LjMsMC41YzcsMCwxNC43LTIuOCwxNC43LTE1LjRjMC0xMS4xLTUuOC0xMy45LTEzLjYtMTMuOWMtMi44LDAtNS40LDAuMi03LjQsMC41DQoJCWMtMC4yLDMuMS0wLjMsNi41LTAuMyw5LjlWMjUuMXoiLz4NCgk8cGF0aCBmaWxsPSIjMDA2MUFBIiBkPSJNNzAuOCw0LjRjMC42LDAuMSwxLjMsMC4yLDIsMC4yYzAuNSwwLDEtMC4xLDEuNC0wLjJjLTAuNCw0LjUtMC44LDEyLjktMC45LDE5LjkNCgkJYy0wLjEsOC41LTUsMTMuOC0xMy43LDEzLjhjLTkuNSwwLTEzLjctNC40LTEzLjctMTMuN2MwLTMsMC4yLTUuMiwwLjItNy42YzAtNS4zLTAuMi05LjYtMC4zLTEyLjRjMC44LDAuMSwxLjcsMC4yLDIuNSwwLjINCgkJYzAuNywwLDEuNC0wLjEsMi4xLTAuMmMtMC4zLDIuOC0wLjYsOS4zLTAuNiwxNi40YzAsNi41LDAsMTUsMTAuNywxNWMxMC41LDAsMTAuNS05LjgsMTAuNS0xNS45QzcxLjEsMTAuOSw3MS4xLDYuMyw3MC44LDQuNCIvPg0KCTxwYXRoIGZpbGw9IiMwMDYxQUEiIGQ9Ik0xMDAuNCwzLjhjMTAuNiwwLDE4LDYuMywxOCwxNy4yYzAsMTAuOS03LjQsMTcuMi0xOCwxNy4yYy0xMC41LDAtMTcuOS02LjMtMTcuOS0xNy4yDQoJCUM4Mi40LDEwLjEsODkuOCwzLjgsMTAwLjQsMy44IE0xMDAuNCw1LjZjLTcuNSwwLTEzLjIsNC43LTEzLjIsMTUuNGMwLDEwLjYsNS44LDE1LjQsMTMuMiwxNS40YzcuNSwwLDEzLjMtNC43LDEzLjMtMTUuNA0KCQlDMTEzLjYsMTAuMywxMDcuOSw1LjYsMTAwLjQsNS42Ii8+DQoJPHBhdGggZmlsbD0iIzAwNjFBQSIgZD0iTTEyOC40LDE2LjhjMC00LjEtMC4yLTguMy0wLjQtMTIuNGMyLjQsMC4xLDQuOCwwLjIsNy4yLDAuMmMyLjQsMCw0LjgtMC4yLDcuMi0wLjINCgkJYzExLjIsMCwxNS44LDYsMTUuOCwxNS45YzAsMTIuOC05LjksMTcuMi0xNy41LDE3LjJjLTIuMiwwLTQuMy0wLjItNi40LTAuMmMtMi4yLDAtNC4zLDAuMS02LjQsMC4yYzAuMi00LjEsMC40LTguMywwLjQtMTIuNFYxNi44DQoJCXogTTEzMi4zLDI1LjFjMCwzLjQsMC4xLDYuOSwwLjMsMTAuMmMxLjMsMC4zLDMuOCwwLjUsNi4zLDAuNWM3LDAsMTQuNy0yLjgsMTQuNy0xNS40YzAtMTEuMS01LjgtMTMuOS0xMy42LTEzLjkNCgkJYy0yLjgsMC01LjQsMC4yLTcuNCwwLjVjLTAuMiwzLjEtMC4zLDYuNS0wLjMsOS45VjI1LjF6Ii8+DQoJPHBhdGggZmlsbD0iIzAwNjFBQSIgZD0iTTE2OS44LDE2LjhjMC00LjEtMC4yLTguMy0wLjQtMTIuNGMyLjksMC4xLDUuNywwLjIsOC42LDAuMnM1LjctMC4xLDguNS0wLjJjLTAuMSwwLjUtMC4xLDEtMC4xLDEuNA0KCQljMCwwLjUsMCwxLDAuMSwxLjRjLTQtMC4zLTYuNC0wLjYtMTIuNi0wLjZjMCwyLjEtMC4yLDMuNy0wLjIsNi4xYzAsMi41LDAsNS4xLDAsNi4zYzUuNywwLDguOC0wLjIsMTEuNi0wLjUNCgkJYy0wLjEsMC41LTAuMSwxLTAuMSwxLjVjMCwwLjUsMCwxLDAuMSwxLjRjLTMuMy0wLjMtOS4zLTAuNC0xMS42LTAuNGMwLDEuMSwwLDIuMywwLDdjMCwzLjYsMCw2LDAuMSw3LjJjNC4zLDAsOS45LDAsMTIuOS0wLjYNCgkJYy0wLjEsMC40LTAuMSwxLjEtMC4xLDEuNWMwLDAuNCwwLDEsMC4xLDEuNGMtMi44LTAuMS01LjctMC4yLTguNi0wLjJjLTIuOSwwLTUuOCwwLjEtOC43LDAuMmMwLjItNS4zLDAuNC03LjIsMC40LTEyLjVWMTYuOHoiLz4NCgk8cGF0aCBmaWxsPSIjMDA2MUFBIiBkPSJNMjIzLjcsMzUuNGMtMS4yLDEtNS4yLDIuNy0xMCwyLjdjLTEwLjEsMC0xNy41LTYuMy0xNy41LTE3LjJjMC0xMC45LDcuNC0xNy4yLDE4LTE3LjINCgkJYzQuMSwwLDcuOCwxLDEwLjQsMi4yYy0wLjUsMC45LTAuOCwyLjctMSwzLjdsLTAuMywwLjFjLTEuMy0xLjUtNC42LTQuMy05LjEtNC4zYy03LjUsMC0xMy4zLDQuNy0xMy4zLDE1LjQNCgkJYzAsMTAuNiw1LjgsMTUuNCwxMy4zLDE1LjRjNC42LDAsNy45LTIuNiw5LjctNGwwLjIsMC4yTDIyMy43LDM1LjR6Ii8+DQoJPHBhdGggZmlsbD0iIzAwNjFBQSIgZD0iTTIzNC4zLDE2LjhjMC00LjEtMC4yLTguMy0wLjQtMTIuNGMwLjgsMC4xLDEuNiwwLjIsMi4zLDAuMmMwLjgsMCwxLjUtMC4xLDIuNC0wLjINCgkJYy0wLjIsNC4xLTAuNCw4LjMtMC40LDEyLjR2OC4yYzAsNC4xLDAuMiw4LjMsMC40LDEyLjRjLTAuOC0wLjEtMS42LTAuMi0yLjQtMC4yYy0wLjgsMC0xLjUsMC4xLTIuMywwLjJjMC4yLTQuMSwwLjQtOC4zLDAuNC0xMi40DQoJCVYxNi44eiIvPg0KCTxwYXRoIGZpbGw9IiMwMDYxQUEiIGQ9Ik0yNTQuOCwzLjhjNC40LDksOC45LDE3LjQsMTMuOCwyNi40YzEuOS0zLjcsOS41LTE3LjUsMTQuMi0yNi40aDAuNmMxLjQsMTIuMywyLjQsMjIuNywzLjksMzMuNw0KCQljLTAuOC0wLjEtMS41LTAuMi0yLjMtMC4yYy0wLjgsMC0xLjUsMC4xLTIuMywwLjJjLTAuNy04LjYtMS4zLTE2LjUtMi40LTI0LjdoLTAuMWMtNC40LDgtOC44LDE1LjktMTIuNiwyNC41aC0wLjQNCgkJYy0zLjctOC04LjEtMTYuMi0xMi4zLTI0LjVIMjU1Yy0wLjksNy45LTIuMywxOS4zLTIuMywyNC43Yy0wLjYtMC4xLTEuMS0wLjItMS43LTAuMmMtMC42LDAtMS4xLDAuMS0xLjcsMC4yDQoJCUMyNTEsMjYuOSwyNTIuOSwxNCwyNTQsMy44SDI1NC44eiIvPg0KPC9nPg0KPC9zdmc+DQo=";function i(){const L=u.createElement("title",null,"FHIR Demo 2025: Duodecim");return(0,w.x)({title:L})}function N(L){let{location:M}=L;const j=e.n.duodecim.roles;return u.createElement(t.A,{roles:j,location:M},u.createElement("h1",null,u.createElement("a",{href:"https://duodecim.fi/"},u.createElement("img",{src:s,alt:"Duodecim"}))),u.createElement(C.Ay,{list:j}),u.createElement("section",{id:"about"},u.createElement("p",null,"Duodecim demonstrates the use of CDS Hooks services for providing real-time Clinical Decision Support. The CDS Hooks concept can radically change how Clinical Decision Support is used in the health record systems. It enables a new level of context-sensitivity and support for clinician's workflow."),u.createElement("p",null,"Duodecim has been on the CDS market for over a decade with its EBMEDS Clinical Decision Support solution with integrations to several health record systems. It returns reminders, therapeutic suggestions (including drug databases), and links to guidelines. It also provides various tools, such as clinical calculators. EBMEDS is a medical device, class IIa, according to the EU MDR 2017/745."),u.createElement("p",null,"Our technological strategy relies firmly on HL7 FHIR. We expect to provide an increasing amount of clinical content completely based on FHIR. In ",u.createElement("a",{href:"https://fhir.fi/en/demo2023/duodecim/"},"FHIR demo 2023")," we implemented SMART App Launch support for calculators and forms.")),u.createElement("section",{id:"contact"},u.createElement("h3",null,"Contact"),u.createElement("div",{className:"business-card"},u.createElement("h3",null,"Joonas Mäkinen"),u.createElement("p",null,"Product Owner"),u.createElement("address",null,u.createElement("a",{href:"mailto:joonas.makinen@duodecim.fi"},"joonas.makinen@duodecim.fi")))))}}}]);
//# sourceMappingURL=component---src-pages-duodecim-js-86882e15571bfde56a7b.js.map