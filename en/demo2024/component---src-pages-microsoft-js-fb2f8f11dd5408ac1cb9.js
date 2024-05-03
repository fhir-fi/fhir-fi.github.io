"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[317],{9498:function(M,e,I){I.d(e,{A:function(){return g}});I(2041);var L=I(6540),i=I(4810),t=I(6194),c=I(7507),N=I(2154),j=I(2854),l=I(6548);const a=(0,i.Fe)("/");function g(M){let{children:e,location:I}=M;const{search:g,pathname:u}=I,{selectedRoles:s={}}=L.useContext(N.li),C=Object.keys(s).sort(),z=Object.keys(c.n).filter((M=>{var e;return!c.n[M].hidden&&(!C.length||(null===(e=c.n[M].roles)||void 0===e?void 0:e.some((M=>C.some((e=>e===M))))))})),w=z.indexOf(u.replace(a,"").replaceAll("/","")),y=z.length>1?L.createElement("nav",{className:"prevNext"},L.createElement("div",null,w>0?L.createElement(i.N_,{to:"/"+z[w-1]+g},L.createElement("div",null,L.createElement("span",{className:"navSymbol"},"<")," "," ",L.createElement("span",{className:"navText"},"Previous")," "," ",L.createElement("img",{src:j.A,alt:""}))):L.createElement(i.N_,{to:"/"+z[z.length-1]+g},L.createElement("div",null,L.createElement("span",{className:"navSymbol"},"<")," "," ",L.createElement("span",{className:"navText"},"Last")," "," ",L.createElement("img",{src:j.A,alt:""})))),L.createElement("div",null,w<z.length-1?L.createElement(i.N_,{to:"/"+z[w+1]+g},L.createElement("div",null,L.createElement("img",{src:j.A,alt:""})," "," ",L.createElement("span",{className:"navText"},"Next")," "," ",L.createElement("span",{className:"navSymbol"},">"))):L.createElement(i.N_,{to:"/"+z[0]+g},L.createElement("div",null,L.createElement("img",{src:j.A,alt:""})," "," ",L.createElement("span",{className:"navText"},"First")," "," ",L.createElement("span",{className:"navSymbol"},">"))))):null;return L.createElement(t.A,{id:"demo"},L.createElement("header",null,L.createElement("h1",null,"FHIR Demo 2024 ",L.createElement("img",{className:"inline",src:j.A,alt:""})),C.length?L.createElement(L.Fragment,null,L.createElement("hr",null),L.createElement("h3",null,w>=0?L.createElement(L.Fragment,null,"Participant #"+(w+1)+" of "+z.length+" with role"+(C.length>1?"s":""),L.createElement("span",{className:"ariaHelp"}," ",C.join(" or "))):null,L.createElement(N.Ay,{list:N.Z4})),L.createElement("hr",null)):L.createElement("p",null,"Participant #"+(w+1)+" / "+z.length)),y,L.createElement("main",{className:"demo"},e),y,L.createElement("img",{className:"decoration",src:l.A,alt:""}))}},7218:function(M,e,I){I.r(e),I.d(e,{Head:function(){return l},default:function(){return a}});var L=I(6540),i=I(6194),t=I(9498),c=I(2154),N=I(7507),j="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzNy42IDcyIj4KPHBhdGggZmlsbD0iIzczNzM3MyIgZD0iTTE0MC40LDE0LjR2NDMuMmgtNy41VjIzLjdoLTAuMWwtMTMuNCwzMy45aC01bC0xMy43LTMzLjloLTAuMXYzMy45aC02LjlWMTQuNGgxMC44bDEyLjQsMzJoMC4ybDEzLjEtMzJIMTQwLjQgeiBNMTQ2LjYsMTcuN2MwLTEuMiwwLjQtMi4yLDEuMy0zYzAuOS0wLjgsMS45LTEuMiwzLjEtMS4yYzEuMywwLDIuNCwwLjQsMy4yLDEuMnMxLjMsMS44LDEuMywzYzAsMS4yLTAuNCwyLjItMS4zLDMgYy0wLjksMC44LTEuOSwxLjItMy4yLDEuMnMtMi4zLTAuNC0zLjEtMS4yQzE0Ny4xLDE5LjgsMTQ2LjYsMTguOCwxNDYuNiwxNy43eiBNMTU0LjcsMjYuNnYzMWgtNy4zdi0zMUgxNTQuN3ogTTE3Ni44LDUyLjMgYzEuMSwwLDIuMy0wLjIsMy42LTAuOGMxLjMtMC41LDIuNS0xLjIsMy42LTJ2Ni44Yy0xLjIsMC43LTIuNSwxLjItNCwxLjVjLTEuNSwwLjMtMy4xLDAuNS00LjksMC41Yy00LjYsMC04LjMtMS40LTExLjEtNC4zIGMtMi45LTIuOS00LjMtNi42LTQuMy0xMWMwLTUsMS41LTkuMSw0LjQtMTIuM2MyLjktMy4yLDctNC44LDEyLjQtNC44YzEuNCwwLDIuOCwwLjIsNC4xLDAuNWMxLjQsMC4zLDIuNSwwLjgsMy4zLDEuMnY3IGMtMS4xLTAuOC0yLjMtMS41LTMuNC0xLjljLTEuMi0wLjQtMi40LTAuNy0zLjYtMC43Yy0yLjksMC01LjIsMC45LTcsMi44cy0yLjYsNC40LTIuNiw3LjZjMCwzLjEsMC45LDUuNiwyLjYsNy4zIEMxNzEuNiw1MS40LDE3My45LDUyLjMsMTc2LjgsNTIuM3ogTTIwNC43LDI2LjFjMC42LDAsMS4xLDAsMS42LDAuMXMwLjksMC4yLDEuMiwwLjN2Ny40Yy0wLjQtMC4zLTAuOS0wLjYtMS43LTAuOCBzLTEuNi0wLjQtMi43LTAuNGMtMS44LDAtMy4zLDAuOC00LjUsMi4zcy0xLjksMy44LTEuOSw3djE1LjZoLTcuM3YtMzFoNy4zdjQuOWgwLjFjMC43LTEuNywxLjctMywzLTQgQzIwMS4yLDI2LjYsMjAyLjgsMjYuMSwyMDQuNywyNi4xeiBNMjA3LjksNDIuNmMwLTUuMSwxLjUtOS4yLDQuMy0xMi4yYzIuOS0zLDYuOS00LjUsMTItNC41YzQuOCwwLDguNiwxLjQsMTEuMyw0LjMgczQuMSw2LjgsNC4xLDExLjdjMCw1LTEuNSw5LTQuMywxMmMtMi45LDMtNi44LDQuNS0xMS44LDQuNWMtNC44LDAtOC42LTEuNC0xMS40LTQuMkMyMDkuMyw1MS4zLDIwNy45LDQ3LjQsMjA3LjksNDIuNnogTTIxNS41LDQyLjNjMCwzLjIsMC43LDUuNywyLjIsNy40czMuNiwyLjYsNi4zLDIuNmMyLjYsMCw0LjctMC44LDYuMS0yLjZjMS40LTEuNywyLjEtNC4yLDIuMS03LjZjMC0zLjMtMC43LTUuOC0yLjEtNy42IGMtMS40LTEuNy0zLjUtMi42LTYtMi42Yy0yLjcsMC00LjcsMC45LTYuMiwyLjdDMjE2LjIsMzYuNSwyMTUuNSwzOSwyMTUuNSw0Mi4zeiBNMjUwLjUsMzQuOGMwLDEsMC4zLDEuOSwxLDIuNSBjMC43LDAuNiwyLjEsMS4zLDQuNCwyLjJjMi45LDEuMiw1LDIuNSw2LjEsMy45YzEuMiwxLjUsMS44LDMuMiwxLjgsNS4zYzAsMi45LTEuMSw1LjItMy40LDdjLTIuMiwxLjgtNS4zLDIuNi05LjEsMi42IGMtMS4zLDAtMi43LTAuMi00LjMtMC41Yy0xLjYtMC4zLTIuOS0wLjctNC0xLjJ2LTcuMmMxLjMsMC45LDIuOCwxLjcsNC4zLDIuMmMxLjUsMC41LDIuOSwwLjgsNC4yLDAuOGMxLjYsMCwyLjktMC4yLDMuNi0wLjcgYzAuOC0wLjUsMS4yLTEuMiwxLjItMi4zYzAtMS0wLjQtMS44LTEuMi0yLjZjLTAuOC0wLjctMi40LTEuNS00LjYtMi40Yy0yLjctMS4xLTQuNi0yLjQtNS43LTMuOHMtMS43LTMuMi0xLjctNS40IGMwLTIuOCwxLjEtNS4xLDMuMy02LjljMi4yLTEuOCw1LjEtMi43LDguNi0yLjdjMS4xLDAsMi4zLDAuMSwzLjYsMC40czIuNSwwLjYsMy40LDAuOVYzNGMtMS0wLjYtMi4xLTEuMi0zLjQtMS43IGMtMS4zLTAuNS0yLjYtMC43LTMuOC0wLjdjLTEuNCwwLTIuNSwwLjMtMy4yLDAuOEMyNTAuOSwzMy4xLDI1MC41LDMzLjgsMjUwLjUsMzQuOHogTTI2Ni45LDQyLjZjMC01LjEsMS41LTkuMiw0LjMtMTIuMiBjMi45LTMsNi45LTQuNSwxMi00LjVjNC44LDAsOC42LDEuNCwxMS4zLDQuM3M0LjEsNi44LDQuMSwxMS43YzAsNS0xLjUsOS00LjMsMTJjLTIuOSwzLTYuOCw0LjUtMTEuOCw0LjVjLTQuOCwwLTguNi0xLjQtMTEuNC00LjIgQzI2OC40LDUxLjMsMjY2LjksNDcuNCwyNjYuOSw0Mi42eiBNMjc0LjUsNDIuM2MwLDMuMiwwLjcsNS43LDIuMiw3LjRzMy42LDIuNiw2LjMsMi42YzIuNiwwLDQuNy0wLjgsNi4xLTIuNiBjMS40LTEuNywyLjEtNC4yLDIuMS03LjZjMC0zLjMtMC43LTUuOC0yLjEtNy42Yy0xLjQtMS43LTMuNS0yLjYtNi0yLjZjLTIuNywwLTQuNywwLjktNi4yLDIuN0MyNzUuMywzNi41LDI3NC41LDM5LDI3NC41LDQyLjN6IE0zMjIuOSwzMi42aC0xMC45djI1aC03LjR2LTI1aC01LjJ2LTZoNS4ydi00LjNjMC0zLjIsMS4xLTUuOSwzLjItOHM0LjgtMy4xLDguMS0zLjFjMC45LDAsMS43LDAuMSwyLjQsMC4xczEuMywwLjIsMS44LDAuNHY2LjMgYy0wLjItMC4xLTAuNy0wLjMtMS4zLTAuNWMtMC42LTAuMi0xLjMtMC4zLTIuMS0wLjNjLTEuNSwwLTIuNywwLjUtMy41LDEuNGMtMC44LDAuOS0xLjIsMi40LTEuMiw0LjJ2My43aDEwLjl2LTdsNy4zLTIuMnY5LjJoNy40IHY2aC03LjR2MTQuNWMwLDEuOSwwLjQsMy4yLDEsNGMwLjcsMC44LDEuOCwxLjIsMy4zLDEuMmMwLjQsMCwwLjktMC4xLDEuNS0wLjNjMC42LTAuMiwxLjEtMC40LDEuNS0wLjd2NmMtMC41LDAuMy0xLjIsMC41LTIuMywwLjcgYy0xLjEsMC4yLTIuMSwwLjMtMy4yLDAuM2MtMy4xLDAtNS40LTAuOC02LjktMi40Yy0xLjUtMS42LTIuMy00LjEtMi4zLTcuNEwzMjIuOSwzMi42TDMyMi45LDMyLjZ6Ii8+CjxyZWN0IGZpbGw9IiNGMjUwMjIiIHdpZHRoPSIzNC4yIiBoZWlnaHQ9IjM0LjIiLz4KPHJlY3QgeD0iMzcuOCIgZmlsbD0iIzdGQkEwMCIgd2lkdGg9IjM0LjIiIGhlaWdodD0iMzQuMiIvPgo8cmVjdCB5PSIzNy44IiBmaWxsPSIjMDBBNEVGIiB3aWR0aD0iMzQuMiIgaGVpZ2h0PSIzNC4yIi8+CjxyZWN0IHg9IjM3LjgiIHk9IjM3LjgiIGZpbGw9IiNGRkI5MDAiIHdpZHRoPSIzNC4yIiBoZWlnaHQ9IjM0LjIiLz4KPC9zdmc+Cg==";function l(){const M=L.createElement("title",null,"FHIR Demo 2024: Microsoft");return(0,i.x)({title:M})}function a(M){let{location:e}=M;const I=N.n.microsoft.roles;return L.createElement(t.A,{roles:I,location:e},L.createElement("h1",null,L.createElement("a",{href:"https://www.microsoft.com/"},L.createElement("img",{src:j,alt:"Microsoft"}))),L.createElement(c.Ay,{list:I}),L.createElement("p",null,"Microsoft presents two solutions:"),L.createElement("ul",null,L.createElement("li",null,"An open-source ",L.createElement("a",{href:"#fhir-server"},"FHIR server")," that can be used as a self-hosted server or as a managed solution."),L.createElement("li",null,"Several ",L.createElement("a",{href:"#analytics"},"data pipelines and analytics services")," that can be used to analyze and utilize available FHIR data.")),L.createElement("section",{id:"fhir-server"},L.createElement("h2",null,"FHIR Server"),L.createElement("p",null,"FHIR capabilities from Microsoft are available in three configurations:"),L.createElement("ul",null,L.createElement("li",null,"The ",L.createElement("strong",null,"FHIR service")," is a managed platform as a service (PaaS) that operates as part of Azure Health Data Services. In addition to the FHIR service, Azure Health Data Services includes managed services for other types of health data such as the DICOM service for medical imaging data and the MedTech service for medical IoT data. All services (FHIR service, DICOM service, and MedTech service) can be connected and administered within an Azure Health Data Services workspace."),L.createElement("li",null,"Azure API for FHIR is a managed FHIR server offered as a PaaS in Azure - easily provisioned in the Azure portal. Azure API for FHIR is not part of Azure Health Data Services and lacks some of the roles of the FHIR service."),L.createElement("li",null,"FHIR Server for Azure, an open-source FHIR server that can be deployed into your Azure subscription, is available on GitHub at ",L.createElement("a",{href:"https://github.com/Microsoft/fhir-server"},"https://github.com/Microsoft/fhir-server"),".")),L.createElement("p",null,"For use cases that require customizing a FHIR server with admin access to the underlying services (e.g., access to the database without going through the FHIR API), developers should choose the open-source FHIR Server for Azure. For implementation of a turnkey, production-ready FHIR API with a provisioned database backend (i.e., data can only be accessed through the FHIR API - not the database directly), developers should choose the FHIR service."),L.createElement("div",{className:"media"},L.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/5vS7Iq9vpXE",title:"Azure API for FHIR (Fast Healthcare Interoperability Resources) | Azure Friday",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),L.createElement("p",null,"See also the ",L.createElement("a",{href:"https://www.youtube.com/playlist?list=PLLasX02E8BPAgZj2cNnKftIH8kxj57_44"},"Microsoft Azure Health Data Services")," playlist on Youtube.")),L.createElement("section",{id:"analytics"},L.createElement("h2",null,"Data Pipelines and Analytics"),L.createElement("p",null,"Health researchers have embraced the FHIR standard as it gives the community a shared data model and removes barriers to assembling large datasets for machine learning and analytics. With the FHIR service's data conversion and PHI de-identification capabilities, researchers can prepare HIPAA-compliant data for secondary use before sending the data to Azure machine learning and analytics pipelines. The FHIR service's audit logging and alert mechanisms also play an important role in research workflows."),L.createElement("div",{className:"media"},L.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/oqJiuJaOIv4",title:"FHIR Demo 2023 - Microsoft",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))),L.createElement("section",{id:"contact"},L.createElement("h3",null,"Contact"),L.createElement("div",{className:"business-card"},L.createElement("h3",null,"Aleksi Kuitunen"),L.createElement("p",null,"Health Lead at Microsoft"),L.createElement("address",null,L.createElement("a",{href:"mailto:aleksi.kuitunen@microsoft.com"},"aleksi.kuitunen@microsoft.com")))))}},6548:function(M,e){e.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSI5IDYgMjkgMzQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHZlcnNpb249IjEuMSIKPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDY4LjIyODA4OCw2OC4yMjgwODgsMCwxMjguMTQyMDksNjkuMDA2ODM2KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM5MDUiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg5NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAwOTY0NiIgaWQ9InN0b3AzODk3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNjkyMzA3IiBpZD0ic3RvcDM4OTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmNDk4MDAiIG9mZnNldD0iMC45NDg1ODExNSIgaWQ9InN0b3AzOTAxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzkwMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsOTkuMTkzMDA4LDk5LjE5MzAwOCwwLDEyNS44MTg4NSw3MC44MDA3ODEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzg3OSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODY3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzg2OSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4NzEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODczIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzg3NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4NzciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDQ0Ljk4Mzg1Niw0NC45ODM4NTYsMCwxMzcuMDc3MTUsNjMuNTgzMDA4KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NTEiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg0MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAxMDQ4ODEyIiBpZD0ic3RvcDM4NDMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC43NTI3NDciIGlkPSJzdG9wMzg0NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjkwNTU4MTA2IiBpZD0ic3RvcDM4NDciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlYzc1MDMiIG9mZnNldD0iMSIgaWQ9InN0b3AzODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxMDEuMDYzNTcsMTAxLjA2MzU3LDAsMTQyLjA0OTMyLDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODI1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4MTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzODE1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzgxNyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM4MTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzODIxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsNzMuMTk1MDg0LDczLjE5NTA4NCwwLDExMy4wMzAyNyw1OS43Njk1MzEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzg1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzc4NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM3ODkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzNzkxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzc5MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3OTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk2LjQ4ODcwOCw5Ni40ODg3MDgsMCwxMjUuNDgzODksNDUuNjI1OTc3KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3NjkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc1NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3NTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzYxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc2MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3NjUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzY3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc0NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTIxLjg2NywxMTguNDIxIGMgLTguNjQyLC0xMC4xNjYgLTEyLjIsLTIwLjU4NyAtMTIuNzEsLTI2LjQzNCB2IDAgQyAxMDguMTQxLDczLjE4IDEyMi4xMjEsNjYuMDY0IDEyNy40NTgsNjIuMjUgdiAwIGMgLTQuMDY3LDMuMDUgLTYuODYyLDE0LjY1NyAtMi4wMzMsMjUuODQxIHYgMCBjIDQuODI5LDExLjE4MyAxNC42NTYsMTcuNzkgMTYuMjY2LDMyLjM2MyB2IDAgYyAxLjUyNSwxNC40ODcgLTcuNjI0LDI5LjIzIC03LjYyNCwyOS4yMyB2IDAgYyAyLjAzMywtMTcuMDI5IC0zLjU1OSwtMjEuMDk2IC0xMi4yLC0zMS4yNjMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzY5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczNzczIj4KICAgICAgPHBhdGggZD0ibSAxMTEuNywxMTUuMjAxIGMgLTguMDExLC03LjEyIC0xMS4zNTMsLTE2LjQzNSAtMTAuODQ0LC0yMi41MzUgdiAwIGMgMC41MDcsLTEzLjg5NCAxMy41NTUsLTIzLjA0NSAxMy41NTUsLTIzLjA0NSB2IDAgYyAtNS45Myw3LjExNyAtOS42NTgsMTcuOTYxIC03Ljc5NCwyOC40NjcgdiAwIGMgMS44NjQsMTAuNTA1IDEzLjM4NiwyMi43MDUgMTguNjM5LDI4Ljk3NSB2IDAgYyAtMS44NjQsLTIuMDM0IC00LjQwNiwtMy43MjkgLTEzLjU1NiwtMTEuODYyIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc5Nyk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzgwMSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTQwLjg0NSwxMDYuMjIyIEMgMTM3LjQ1Niw5OC40MjYgMTMwLjMzOSw4OS45NTQgMTI4LjMwNiw4Ni4wNTggdiAwIGMgLTUuOTMxLC0xMi44NzggMi4yMDIsLTI0LjczOSAyLjIwMiwtMjQuNzM5IHYgMCBjIDIyLjM2NywxLjAxNyAyNi42MDIsMTguNDY5IDI3LjQ1LDI3Ljc4NyB2IDAgYyAtMS42OTUsLTQuNTczIC02LjEsLTguODA5IC05LjE1LC0xMC42NzUgdiAwIGMgOS42NTksMTYuNzc2IDEuMTg3LDM4LjQ2NSAtNC4wNjYsNDUuNzUyIHYgMCBjIDAuMTY5LC01LjQyMyAtMC41MDksLTEwLjE2NiAtMy44OTcsLTE3Ljk2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4MjUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MjkiPgogICAgICA8cGF0aCBkPSJtIDEzMi4wMzMsODEuNjUyIGMgLTUuODU0LC05LjE5OSAtMC42NzcsLTE4LjQ2OCAtMC42NzcsLTE4LjQ2OCB2IDAgYyA4LjY0MSwxLjUyMyAxMS44NjEsNi4wOTggMTMuNTU1LDkuNjU3IHYgMCBjIC0yLjU0MiwtMS42OTQgLTQuNDA2LC0yLjcxMiAtNy40NTUsLTMuMjIgdiAwIGMgNy4yODYsOS40ODkgNy42MjUsMjAuNjczIDcuMTE2LDI5LjE0NSB2IDAgYyAtMi44ODEsLTguMTMzIC03Ljc5NSwtOS42NiAtMTIuNTM5LC0xNy4xMTQiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODUxKTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODU1Ij4KICAgICAgPHBhdGggZD0ibSAxMTguNDc4LDEwMS4zMDcgYyAtMTAuMzM3LC0xNy4xMTQgNC4zNjUsLTMzLjc4NSA0LjM2NSwtMzMuNzg1IHYgMCBjIC00Ljc0NSw4Ljk4IC0zLjA1NywyMS43MDIgNC4yMTgsMzEuMTYgdiAwIGMgMTEuMDg1LDE0LjQxIDkuNzMsMjAuNzU0IDkuNzMsMzMuNjg2IHYgMCBjIC0yLjAzMSwtMTcuOTIgLTExLjE5NywtMTguNjkxIC0xOC4zMTMsLTMxLjA2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4NzkpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4ODMiPgogICAgICA8cGF0aCBkPSJtIDExOC4xNywxMDIuOTI1IGMgLTguMjI1LC0xNi4yMzUgLTAuODUzLC0yOS45NzQgNi43NzEsLTM3Ljg2MiB2IDAgYyAtMTguNzk5LDIyLjY3NyAtMS4wODQsNDEuMjY0IDcuODg3LDUzLjc2OCB2IDAgYyAxMi4zNTgsMTcuMjIyIDguMjM0LDI5LjIxOCA4LjIzNCwyOS4yMTggdiAwIGMgMi44MDksLTIwLjgwNCAtMTUuMzk4LC0zMC4zMzUgLTIyLjg5MiwtNDUuMTI0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzkwNSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4Ij4KICAgICAgPHRzcGFuIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4IiBzdHlsZT0iZmlsbDojZTMwNjEzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MyI+wq48L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-microsoft-js-fb2f8f11dd5408ac1cb9.js.map