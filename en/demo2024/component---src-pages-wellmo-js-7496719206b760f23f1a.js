"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[401],{9498:function(e,t,l){l.d(t,{A:function(){return u}});l(2041);var a=l(6540),n=l(4810),c=l(523),r=l(7507),m=l(2154),s=l(2854),o=l(6548);const i=(0,n.Fe)("/");function u(e){let{children:t,location:l}=e;const{search:u,pathname:E}=l,{selectedRoles:d={}}=a.useContext(m.li),h=Object.keys(d).sort(),v=Object.keys(r.n).filter((e=>{var t;return!r.n[e].hidden&&(!h.length||(null===(t=r.n[e].roles)||void 0===t?void 0:t.some((e=>h.some((t=>t===e))))))})),p=v.indexOf(E.replace(i,"").replaceAll("/","")),A=v.length>1?a.createElement("nav",{className:"prevNext"},a.createElement("div",null,p>0?a.createElement(n.N_,{to:"/"+v[p-1]+u},a.createElement("div",null,a.createElement("span",{className:"navSymbol"},"<")," "," ",a.createElement("span",{className:"navText"},"Previous")," "," ",a.createElement("img",{src:s.A,alt:""}))):a.createElement(n.N_,{to:"/"+v[v.length-1]+u},a.createElement("div",null,a.createElement("span",{className:"navSymbol"},"<")," "," ",a.createElement("span",{className:"navText"},"Last")," "," ",a.createElement("img",{src:s.A,alt:""})))),a.createElement("div",null,p<v.length-1?a.createElement(n.N_,{to:"/"+v[p+1]+u},a.createElement("div",null,a.createElement("img",{src:s.A,alt:""})," "," ",a.createElement("span",{className:"navText"},"Next")," "," ",a.createElement("span",{className:"navSymbol"},">"))):a.createElement(n.N_,{to:"/"+v[0]+u},a.createElement("div",null,a.createElement("img",{src:s.A,alt:""})," "," ",a.createElement("span",{className:"navText"},"First")," "," ",a.createElement("span",{className:"navSymbol"},">"))))):null;return a.createElement(c.A,{id:"demo"},a.createElement("header",null,a.createElement("h1",null,"FHIR Demo 2024 ",a.createElement("img",{className:"inline",src:s.A,alt:""})),h.length?a.createElement(a.Fragment,null,a.createElement("hr",null),a.createElement("h3",null,p>=0?a.createElement(a.Fragment,null,"Participant #"+(p+1)+" of "+v.length+" with role"+(h.length>1?"s":""),a.createElement("span",{className:"ariaHelp"}," ",h.join(" or "))):null,a.createElement(m.Ay,{list:m.Z4})),a.createElement("hr",null)):a.createElement("p",null,"Participant #"+(p+1)+" / "+v.length)),A,a.createElement("main",{className:"demo"},t),A,a.createElement("img",{className:"decoration",src:o.A,alt:""}))}},8732:function(e,t,l){l.r(t),l.d(t,{Head:function(){return i},default:function(){return u}});var a=l(6540),n=l(523),c=l(9498),r=l(2154),m=l(7507),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeIAAABoCAMAAAAaawObAAAAYFBMVEX///9Ltr5EtLxNt7/p9fZTusJBs7u13+Pl9PV0xcuP0das3ODB4uX7/f73/P2w3uKk2Nx+yc/Y7vBjv8bN6uxuwcjf8vPx+vpcvMOY0te74uab09h8yM6IzdPJ6OvT6+36mNT9AAASdElEQVR4nO1daZeqPLNtIiCgIpOACvr//+UFbCRJ7UrQPuh9fN1rnQ9ndSTDzlCpKT8/HwA3G1CWbhVbiu6y37JBVe1e0rgv/gX2/giRrgNjUVfci+ZJ9iX5v4L1yhkhxGFjWsmuNxX167N5Pnzx/wYSxR1zTmtYnBLFfdmwfF0rv/gDFIo74lJ+HasUO8L7ruP/BDSKHZGw61ij2BH59zz+L0Cn2KkzrqhOsePvX9nSL54EoZhfxoRicahe2tYvngKh2Mldpiih2PEuL23rF0+BUuxzkjKlWCQvbesXTwFQvGaKAoojm0bsi/cDUHxmigKKU25T/2IO2vSOaHNdqhZKsYiYooDi8Hs1/gOClZjg+6v9Mnvil+L34aLrJNpFNsUvxe/DZvbQ/wlfit+Ho9AH1Gf1Tn/Al+K3IW4IxaJdoJ4vxW9DcCAUO94C9XwpfhuKmjDsOAsI1V+K34YTGfoOC2j9vxS/DRufMvzdqD8JVUSPYpEuUNGX4nchCCnF/mbOL+MqCMoyCGb6wb6H4rhygyBwZ8oWfWnX7gQ8F7vK7Wr/d997EhmQtnybonqXnTbHNg3DwyEM0+i8L+yH96spjrs2nqM2bcKuie0xOVm8davL/jyUbm6l/8ZLdT0lx7btKx++ty7eZ0e5gqPYN3fvEh1qz5EU22Ll5e3JMiYvpdjdp7nexvpw5FU6RZvLxZ1VnaenZ4XOYNPktaz5H0YoTN7E8h5QbPCGi7PU9wXd2x3h+2lpYvllFO/cfd61ETRR+DmkzU1WoHzXo8P2YZbjIKlh7f336r37ekfDGElbEetUtW1g68chbC88yS+ieJd1fPFN9EPCmrv2uB90c2L90NKLr0fB197tj15S/guS3fUNp4txWd3alIN2cP6Op8bhCR6GxGvZvfA1FJfn2jTEwzxUm1hQBa5SPFzP56SIPPMAdYNbJ//gcrD2Vzd0+78tWqQCTWKkrbJd2drf/Tbn5sdLKF7n9iaKfCv9IrGRIlbNzIUcH2t77R1yzqFpNuJ2qqg7NSNjAwsw52vkNhevrRP0t0rGB+cFFFctkhJAE8/j7rZrzWv+Vrye5f9ZzJhet+/57R+1h5V6DfJz0xUooV0UaNa60YyxGCuEm/XyFGfgis808XeMq3belFhtrJt1vLEcYsoHD4W9OwaUGhnCM5h/wahMc1z6ZjOb4X7Wo0m1OMVXYDLj4Ec9x0izx8Dm5IvEVgNEfbL2x4C1zoY48Hs1sEEIelTMXx+3L6CNY2mKg3kH4b3ujuPzA+XNHFdzNnzle95fDuSUmvg5b9afCtkgyMlTzj1l7hUe6HG+MMXVA2t4+GLyc3mIFhMl7rwNX8HqDxyDz8GdswfoJaWnfGh9DPBDsnEsS3FMJ7atiXtkReVhiLl5eA3fPvj0Xu2C6tgIsTM4ilvtKH50fQzwj3pVi1K8Iz6Gdjy6M9FZO+L4DMP4OJuFE6KYO43BtV/f1XfPdcDXZcZFKUbGlH8Ndp3sn1gCwwdD+e602xzuaI4XkwgPRTuBheoK6Lb0MwJ6hYyfNWgzD1ojF6X4ibPwCeA2lKS1c6G6QZ59OWQB3WtGwG2VsQAjvy0tsvvKHMRiVefdfMsHkwosocmgS1LMC043u9FcmAuLENVtPMcsdfvycaypKPwDd9ct4ZYlUrjwkcSRK7MnxpKEyKN11ltNYjc7nRuk+BIHlZUlKWYkfuHkYZqmYT6LZSHqQ9iEB48tDf3LE+57vrgtAk/wphs5xFrf70XO6EeYfdWDFCNpS3Xq2cJtv94oUrdbQN2XuuMvSHEBh1CIaJsFVeUG2dauPRar6HQtXTcoi1PEKOORfzlzoRR+nmyLrCzLrNieD+yskQQfwpzIcacBaz18VLoCNw1tS0cd8KmGM97SURGqJnZBiuFJ7IeS40YcnM1Co98EcmnmFpST6/4Oj7efbyXLcOxeQ6Z6SdlLT03RoIWJWBvqRAagDFkSlV4ghwEHSpZoNiv72nIUl6AbXSs1ceVqMqMQPcQFy1BEpCnhLrfSK+8+iFe7P0lVwYH+FV2rEGtDrcipUo9JHArKBWJwsK8Ya+GV1KxuCMtRvEcdpvJlyctF3paUpt1xgM4AqBJ75STSkrgtrvq+pFDkUQM+tGV7AQoTbbYuNZ5A+9k8O0TuEKE8IItRjCwAPvo0jPsYgBTQaP47uhEN6pkY22MFBRZ/qhv0Y0VvTjtgHPwFlQaRoUVZeUArKA7sda2iZ8lLKEarcwUNsozwy2RugyofjT003KzyOYZ79SQIo+ZRobrivVTozuXajuIrnfZslp0fMAuVS8ZiFBd0uTGJYpAXkwMUcTfskKS50T4IriRHVjEVoAPevx8SF/BXur+UrCoKHMa6YblHLU//hEYem2xqRAGhyHiLUUw1tiJnvCqQcrcrzXwYhAJpt4Qt4Iy56dzqR9Xfj0aXkgeuaVv+anAgVaOjWJYnXLpPe6aksuRgUjhciuKYXlt8zkkDLUw+N1QAhlxV9tPoe3MkCbzvTIcK3TRVNfYAg66WSo2gsNLd7MH0VztCsbxzLEUxOJs81m0GXim5aYsIUZLqusiKY3R6hYqpuxYT1EedpAwaceq3AAqv5IsY2NbMJk7qbiL9cSmKqUSBHBL4LvF5GpFWQFEhAVnFkmDBBaKhuNtdQX0rfcQzgwqHeN0BgV8ZyZiucux4NyIgH5RPucUopr0gt9ep8Az7+IQrHUVFGbEG26AlTQpSGd/vloA+sjCNWjrdSw8dxUepu1T+hL6ZE6h48gqK6cTi/ZjQJcLn82IDPZIvHXcxOIpri/tsQX4hLZyY/k3o/rhGHytdrEDntiwC01Vu3oXAjvkKimncncGVDhzcrLQFA3Pl0i79szVXZwxOx0kZBrwgNbU4EAHl6rUdCdmKZTmFetEL4q0jV57SGmVV2VIUU1sxp2L9gYePgWJwpZBLB0BtYPW5Q76s9x8hr3ZV2WJzYFK22Su6Eii34vk74G7nnoGW/yWXJipBGXwbwd7qU/30COBJL9+J0NFpdccCLE7fBJHA2jlicW9RfAzQfFDHHHxNu/Pt4t4aW2aXJPSh/vUVqg8qUpgoptKKgWKg/ZYpBkoIU1TCDcBBZdInAfWXejPGRjW5tFwXmg/KHAAHe7q+Y7PZJMkxatOwdnA87YsUmPSmYaAY6PCfpxhov6hBWQeVDqXNEd3Ehbz3mhzpbu2TDmOUUU3NxQQEg/sraONjaGZnJ+8VZoj3UUz/OiNoI0YU3/diMGuMMnyu25hlYQDYvDVl7VO+tUp1ikL+4yjeATucPU51B0SgaZyABVO2Gev7tDjqLZR36o1NvUrUkQ9DVWh/HsXgzmRPfr+jp6lEcUk9P2QnDd2Tzi+IJDJFDqOwS9W/C4U7PQTNeeDzKAZkzaGYToxJ4QQudZKtk7TH/7mS8vcGItGsVihBDg2PQA8Q+VJ8+xVY+9KBBtwCpmGq9FfoDpRHkY4CFcgOoIUhAdHvEQjd7vh5FAMjxIxXSswUA8vG5Nmud7WTrWgTR10ZTNSj3un+RjH1Af6foHhGWhBA8SRR/+xQ6uixhWTbcEFA1agroX5WJLTtLxu1WNEMI59HMdioqd8FaYGZYuRlMOqN9UU3aEWoz+GvcRRpyrQ4qefFLeGnIP/W/wLFM1Qf4FeKtxQ4QcfO64bIoS3UFvLbITBXHL2rz1EsfL+BGTE/j2JgUbArMMH2rjrEIVXS0EQSRuoNCnFigRbhsCkgE4Q+AR+N5xxSR3oNlzny8ygGFxy7GQK4j6n6CCQlDUZj8gD07eCnDqiD3hjZSMh4I8dygdBrMr06D9Pjpnh9gsT3UYyc86zJHdD5p7QX5Z3tbyfkyjyaxan7em/WB42j4wJ8z/JUR9tGx2SzPm2LzJLB8+MoRq5WitsMBDhr1fgYFNbfb+XkOjUa92kjVwGMeq6JCAzsxcdKhdv9i+P3phx/H8VQMrLlxQP2YtUjDge0xDvdqf3u8kXd4TsRHHh4A58datkU7R+ysH4exSguQdguxuDOpE0L4KvRLWOX7McJ/8k8Q4cICJ6Z49U7H59HMfKYZbMAj5+0Rzwg72zHow2/jwjwe2mAOcMBrQE9+EM6sM+jGL6cwkXP/AKFvOjxE8AI2HWKjMi9PPAhA0CjDYZj0nE/js+jGGZjgukYJoCL1krfGpGemtYzye7xrLRZ0MObGqp0f8BHACjmfHb/KxSjVALmZ2NRhD+N/J6TYkpO3lLMSAslGiTrAz9hqys4D0Ax9xwUpdjhY1jeSDE+NQ3aD3iVpp7LKApV/5WsEeOyf8gAyWt70OBTHH7P9Ef9L/As484tQHHNCnpvpBjmziHxCxJQngKwgQIlJ+mjJY8KAaM9Ry1iZgP4caJ29UR585mf0gsCCc+f8E6KYdIX3lMfBvijFAXokUMFmlCEkgFoP2B0MsABbXYC1q2nGSfBZZwJz38s8uidFCPrriH2FeWuhLcscLXSoDWaz/8xtolbIjClCUl3BOBGxLEHbAk442A325ENh5O33kkxTjvgCMwxDCqsYb8slBHpE73iovwAClsDYOoQP7UYvt117ROKkbcYs6dB30EuRvStFKOs/P2Ibuh5HOD8s3h3sl11SWCe5ekOwWtkcMCyn+8NJGfrIVWcTjFMB1rDR5BAWErvsoDFmPdSzJyaItVe/KpO+O0FRl9oyLw0DBuRnWCKN2lIDBchbnYcEiyhBev2N6koSdGNdgThteiOgdOuNPBZxvdS7HIZVr1wM7FX7hucVpMNBORS5N1+RRUK5qzh4GI2IWCTxHZ9UFmOy3XUvy05ltApxtkixepwPJXaA7n4Li9WdXvK9Kdi30vxz4lbPt0I1WF0TpJjI42KBj4JBZsgt28EWF44g/EIozaDSQbp3AKc8jRKOpyj5uD5avSaaLTv4nyzvZvBFCQ1OqJxL8pIRUdnxyUpBqGqOsXGp54GfwlD1JfBg8BwD1JSqNzbyuS3HaoxLeJ+UPgeOCM/KHqNWh7t9/OxLUgLpH9+dFl+KPj0MYpBM2jOpT+8WeCbXnvHwvrwMyiwGzTbNo+yOdoxBJpSwP5a1f03QE+iFx0pfiiEHKx5A8XgbAFptUBSl3kQZn9NLqsH53bADq9vdUWpZryGCUAvRChbn9b6kWL7qzJ3iqmvk4liGvZtohiseZA57ZGX6BSYbTpsWg/mZ0DtewP7hJP020df4rp9mKbntlpQJuW6dWncVXg0KZOJYupSYaKYpkGGyfEee4tuTjMH4LwevEGXuWgZknJOyJ54qQmlUqbp+DRIA2ibVndtP1WFmcaORneaKKayJqSYlQ6NHeCTQf0CS3Ik2dpUHg+v3be7x4NvJvZAMoFJ6rv9aGr+xUbx+FQ6laBMFNN7kIliqpHDKS6fWAP+2b62UKZ+Ncm3CpBJbb5t0OXeNuCA1c/IAq00R5pwlsccpuRaV33yGndAYnczUUyzUjJZTB9+c9CfoeiHeZhNBzhc9uaknDKihx6gE9Rnd4DleVL5V5aXZyeDF7naGCkm+7qRYrKXcIlqcTpxDrPfPaWvvqCnBO4Ay3628bev7YHNSNScPc34iKoq3RufE5XjKPW08mY5Rk9RaKSYaF3ZXMTxceYr7f1HwtkvVO/1qHFzXBwRHogCyojyOPfdMvYRqQ4Zn/de94mpDHu1Gs2nznWLqKq/amakWN+B+XTT8Smfd5gJ5zjjSfVf7NbKzPH59J436M7vhvdaYSeKkH83TG5HY0xMfuZmitAlkPjkMaMmauWEuShXdwvFu0RpgJnin0Ll2JRR3I3mDI9/AJG5MxvAPc4lF1emBBlSK7qZalvJQtRrSxfKEH4EZQ12j/BFRqEb0jP5k9YL57aWSlso1lprTBq/y3DP5NHxoLnMhLi9s7aytLVHdZx6Z3iQ14BLmvOCV9eDZj+jC9eof5lQmW4ix/ln3eRQ60VrmoPg59TUY9yk3aE/3hzupW0Ud11u8tU9CtNEcd+ztmaHp2t481SsQXHMxWAHsOXJvSFLmnowf/jP+kRn+zanLz32H8zbxPjuroRgm7Qdzb9WIydPN+wFvbpsorBejQn7vPBcoEp2xf7c3sIlZ3SsKtZJ1PZIZzwUnZ2S4+3bjXVCXDdtTa1LXU/rdAMbPgNxWWzOx+g89wx3s8v6fDxGlvloQJVdkp7mCau8idZF+ZCTdVVmxeW03u/X2yIz/zIOsmuxXa+HooZ+Vu6AmVthfAuvnDfs8fxvV9n2HHpKJsm6SbbZM5vmhN3cENCx/KM/IOiT2LrBgK7jfQzqnz73Ydj1o9M/e5plZRn0w2MZ7f8DmzIadtQgkl4AAAAASUVORK5CYII=",o=l.p+"static/wellmo-061ed91c9f92296c21666e6aba5ed201.webp";function i(){const e=a.createElement("title",null,"FHIR Demo 2024: Wellmo");return(0,n.x)({title:e})}function u(e){let{location:t}=e;const l=m.n.wellmo.roles;return a.createElement(c.A,{roles:l,location:t},a.createElement("h1",{className:"white"},a.createElement("a",{href:"https://www.wellmo.com/"},a.createElement("img",{src:s,alt:"Wellmo"}))),a.createElement(r.Ay,{list:l}),a.createElement("aside",{className:"event atk-paivat"},a.createElement("h2",null,"ATK-päivät: Startup-alue"),a.createElement("p",null,a.createElement("strong",null,"FHIR-demo ",a.createElement("time",{dateTime:"2023-05-23T12:45:00.000+03:00"},"tiistaina klo 12.45")),".")),a.createElement("section",{id:"about"},a.createElement("h2",null,"Platform for digital health services"),a.createElement("p",null,"Wellmo is an ultimate platform for personalised digital health services. Wellmo provides all the elements of an ecosystem platform, including integrations to hundreds of connected health devices, white label mobile app, a content management system and integration APIs."),a.createElement("p",null,"Effectively engage your customers in their own health, become more relevant, attract new welcustomers and save health care costs."),a.createElement("img",{src:o,alt:""})),a.createElement("section",{id:"smart-in-two-ways"},a.createElement("h2",null,"SMART App Launch in Two Ways"),a.createElement("p",null,"Wellmo can be integrated into electronic health record systems through the ",a.createElement("strong",null,"SMART App Launch")," mechanism."),a.createElement("p",null,"Wellmo can also act as a cover app integrating many other health and wellbeing apps. In this case, the apps can be launched from Wellmo using SMART.")),a.createElement("section",{id:"contact"},a.createElement("h3",null,"Contact"),a.createElement("div",{className:"business-card"},a.createElement("h3",null,"Jaakko Olkkonen"),a.createElement("p",null,"CEO and Founder"),a.createElement("address",null,a.createElement("a",{href:"mailto:jaakko.olkkonen@wellmo.com"},"jaakko.olkkonen@wellmo.com")))))}}}]);
//# sourceMappingURL=component---src-pages-wellmo-js-7496719206b760f23f1a.js.map