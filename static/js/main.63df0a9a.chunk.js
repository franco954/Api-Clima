(this["webpackJsonpapi-clima"]=this["webpackJsonpapi-clima"]||[]).push([[0],{14:function(e,s,t){},15:function(e,s,t){},16:function(e,s,t){},17:function(e,s,t){},19:function(e,s,t){"use strict";t.r(s);var c=t(1),r=t.n(c),a=t(4),n=t.n(a),i=t(7),d=t(3),l=t.n(d),j=t(5),o=t(6),u=t(0);function b(e){return Object(u.jsxs)("form",{onSubmit:e.clima,children:[Object(u.jsx)("div",{className:"form-group mt-2",children:Object(u.jsx)("input",{type:"text",name:"ciudad",placeholder:"Ciudad",className:"form-control",autoFocus:!0,autoComplete:"off",required:!0})}),Object(u.jsx)("div",{className:"form-group mt-2",children:Object(u.jsx)("input",{type:"text",name:"pais",placeholder:"Codigo pais",className:"form-control",autoComplete:"off",required:!0})}),Object(u.jsx)("div",{class:"d-grid gap-2 col-6 mx-auto",children:Object(u.jsx)("button",{class:"btn btn-primary mt-3",type:"submit",children:"Enviar"})})]})}t(14);function m(e){switch(console.log(e.des),e.des){case"cielo claro":return Object(u.jsx)("div",{class:"card-symbol",children:Object(u.jsx)("i",{class:"fas fa-sun"})});case"nubes":return Object(u.jsx)("div",{class:"card-symbol",children:Object(u.jsx)("i",{class:"fas fa-cloud-sun"})});default:return Object(u.jsx)("div",{class:"card-symbol",children:Object(u.jsx)("i",{class:"fas fa-cloud-rain"})})}}t(15);function p(e){return console.log(e),Object(u.jsx)(u.Fragment,{children:e.error?Object(u.jsx)(u.Fragment,{}):Object(u.jsxs)("div",{class:"card-info mt-1",children:[Object(u.jsx)(m,{des:e.description}),Object(u.jsxs)("div",{class:"card-body",children:[e.city&&e.country&&Object(u.jsxs)("p",{children:[" ",Object(u.jsxs)("b",{children:[" ",Object(u.jsx)("i",{className:"fas fa-location-arrow"}),"  Ubicaci\xf3n: "]})," ",e.city,", ",e.country]}),e.temperature&&Object(u.jsxs)("p",{children:[" ",Object(u.jsxs)("b",{children:[" ",Object(u.jsx)("i",{className:"fas fa-temperature-low"}),"  Temperatura: "]})," ",e.temperature," \u2103, ",e.description]}),e.humidity&&Object(u.jsxs)("p",{children:[" ",Object(u.jsxs)("b",{children:[" ",Object(u.jsx)("i",{className:"fas fa-water"}),"  Humedad: "]})," ",e.humidity," % "]}),e.pressure&&Object(u.jsxs)("p",{children:[" ",Object(u.jsxs)("b",{children:[" ",Object(u.jsx)("i",{class:"fas fa-smog"})," Presi\xf3n: "]})," ",e.pressure," inHg "]}),e.wind_speed&&Object(u.jsxs)("p",{children:[" ",Object(u.jsxs)("b",{children:[" ",Object(u.jsx)("i",{className:"fas fa-wind"}),"  Velocidad del Viento: "]})," ",e.wind_speed," mph"]})]})]})})}t(16);function x(){return Object(u.jsx)("div",{className:"card-title",children:Object(u.jsx)("p",{className:"text-muted",children:" Open Weather "})})}t(17),t(18);var f=function(){var e=Object(c.useState)({temperature:"",description:"",humidity:"",wind_speed:0,pressure:"",city:"",country:"",request:!1,spinner:!1,error:!0,msj:!1}),s=Object(o.a)(e,2),t=s[0],r=s[1],a=function(){var e=Object(j.a)(l.a.mark((function e(s){var t,c,a,n,i,d,j,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),t=s.target.elements,c=t.ciudad,a=t.pais,n=c.value,i=a.value,!n||!i){e.next=16;break}return r({spinner:!0}),"fc2dbf840f271f99b74a8d4573d15be0",d="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(i,"&appid=").concat("fc2dbf840f271f99b74a8d4573d15be0","&units=metric&lang=es"),fetch(d),e.next=11,fetch(d);case 11:return j=e.sent,e.next=14,j.json();case 14:o=e.sent,200==j.status?(console.log(o),r({temperature:o.main.temp,description:o.weather[0].description,humidity:o.main.humidity,wind_speed:o.wind.speed,city:o.name,pressure:o.main.pressure,country:o.sys.country,request:!0,spinner:!1,error:!1,msj:!1})):r({spinner:!1,msj:!0});case 16:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"container p-2",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-8 col-lg-6 col-12 mx-auto",children:Object(u.jsxs)("div",{className:"card card-body",children:[Object(u.jsx)(x,{}),Object(u.jsx)(b,{clima:a}),t.msj&&Object(u.jsx)("div",{className:"error mt-3",children:Object(u.jsx)("p",{className:"text-warning",children:" Datos invalidos "})}),t.spinner&&Object(u.jsx)("div",{class:"d-flex justify-content-center mt-3",children:Object(u.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(u.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),t.request&&Object(u.jsx)("div",{children:Object(u.jsx)(p,Object(i.a)({},t))})]})})})})};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.63df0a9a.chunk.js.map