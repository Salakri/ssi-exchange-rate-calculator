(this["webpackJsonpssi-exchange-rate-calculator"]=this["webpackJsonpssi-exchange-rate-calculator"]||[]).push([[0],{13:function(e,t,n){e.exports=n(27)},18:function(e,t,n){},19:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(3),c=n.n(u),o=(n(18),n(19),n(9)),i=n.n(o);var s=function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("h5",null,"Choose the currency and the amounts to get the exchange rate"))},l=n(2),m=n(4),p=n(12),C={rates:{CAD:1.3184315051,HKD:7.7501056368,ISK:135.8911518634,PHP:48.4289698301,DKK:6.2877545846,HUF:304.8930955802,CZK:22.5868334319,GBP:.7717231471,RON:4.1054677597,SEK:8.788134877,IDR:14735.003802924,INR:73.5350291558,BRL:5.2544578721,RUB:75.334995352,HRK:6.3732781205,JPY:104.3606862165,THB:31.1746809769,CHF:.9106735401,EUR:.845094228,MYR:4.1145102679,BGN:1.6528352911,TRY:7.5720442829,CNY:6.7730921998,NOK:9.0879743091,NZD:1.4779852954,ZAR:16.1852446548,USD:1,MXN:20.9028986732,SGD:1.3590805375,AUD:1.3726020451,ILS:3.4235612271,KRW:1162.8158539677,PLN:3.7692892758},base:"USD",date:"2020-09-18"},v={inputCurrency:"USD",inputCount:1,outputCurrency:"CAD",outputCount:1.3184315051,convertRatio:1.3184315051};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{rates:Object(l.a)({},e.rates)});switch(t.type){case"updateSwap":var a=n.inputCurrency;return n.inputCurrency=n.outputCurrency,n.outputCurrency=a,n.convertRatio=(C.rates[n.outputCurrency]/C.rates[n.inputCurrency]).toPrecision(10),n.outputCount=n.inputCount*n.convertRatio,n;case"updateInputCount":return n.inputCount=t.eventValue,n.outputCount=n.inputCount*n.convertRatio,n;case"updateInputCurrency":return n.inputCurrency=t.eventValue,n.convertRatio=(C.rates[n.outputCurrency]/C.rates[n.inputCurrency]).toPrecision(10),n.outputCount=n.inputCount*n.convertRatio,n;case"updateOutputCount":return n.outputCount=t.eventValue,n.inputCount=(n.outputCount/n.convertRatio).toPrecision(10),n;case"updateOutputCurrency":return n.outputCurrency=t.eventValue,n.convertRatio=(C.rates[n.outputCurrency]/C.rates[n.inputCurrency]).toPrecision(10),n.inputCount=(n.outputCount/n.convertRatio).toPrecision(10),n;default:return e}},E=Object(p.a)({reducer:{exchangeReducer:y}});var d=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(C),o=Object(m.a)(c,2),i=o[0],s=o[1],p=Object(a.useState)(v),y=Object(m.a)(p,2),E=y[0],d=y[1];function b(e,t){var n=[];if(e)for(var a in t.rates)n.push(r.a.createElement("option",{value:a,key:a},a));return n}return Object(a.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).then((function(e){s(e),u(!0);var t=Object(l.a)({},E);t.convertRatio=e.rates.CAD,d(t)}))}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-inline justify-content-center"},r.a.createElement("select",{className:"form-control col-sm-2",id:"input-currency",value:n?E.inputCurrency:"USD",onChange:function(e){var t=Object(l.a)({},E);t.inputCurrency=e.target.value,t.convertRatio=(i.rates[t.outputCurrency]/i.rates[t.inputCurrency]).toPrecision(10),t.outputCount=t.inputCount*t.convertRatio,d(t)}},b(n,i)),r.a.createElement("div",{className:"form-control col-sm-3"},r.a.createElement("input",{className:"col",type:"number",value:n?E.inputCount:1,id:"input-currency-count",onChange:function(e){var t=Object(l.a)({},E);t.inputCount=e.target.value,t.outputCount=t.inputCount*t.convertRatio,d(t)}})))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-inline justify-content-center mb-3"},r.a.createElement("button",{className:"btn col-sm-2 btn-success",onClick:function(){var e=Object(l.a)({},E),t=e.inputCurrency;e.inputCurrency=e.outputCurrency,e.outputCurrency=t,e.convertRatio=(i.rates[e.outputCurrency]/i.rates[e.inputCurrency]).toPrecision(10),e.outputCount=e.inputCount*e.convertRatio,d(e)}},"Swap")),r.a.createElement("div",{className:"form-inline justify-content-center"},n?r.a.createElement("p",{className:"display"},"1 ",E.inputCurrency," = ",E.convertRatio," ",E.outputCurrency):r.a.createElement("p",{className:"display"},"Loading..."))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-inline justify-content-center"},r.a.createElement("select",{className:"form-control col-sm-2",id:"output-currency",onChange:function(e){var t=Object(l.a)({},E);t.outputCurrency=e.target.value,t.convertRatio=(i.rates[t.outputCurrency]/i.rates[t.inputCurrency]).toPrecision(10),t.inputCount=(t.outputCount/t.convertRatio).toPrecision(10),d(t)},value:n?E.outputCurrency:"CAD"},b(n,i)),r.a.createElement("div",{className:"form-control col-sm-3 numdisplay"},r.a.createElement("input",{className:"col",type:"number",value:n?E.outputCount:1,onChange:function(e){var t=Object(l.a)({},E);t.outputCount=e.target.value,t.inputCount=(t.outputCount/t.convertRatio).toPrecision(10),d(t)}})))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-inline justify-content-center mb-3"},r.a.createElement("button",{className:"btn col-sm-2 btn-success"},"Save"))))};var b=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),r.a.createElement("p",{className:"display"},"History:"),r.a.createElement("div",{className:"justify-content-center"},r.a.createElement("button",{className:"btn history"},r.a.createElement("span",null,"1 EGP = 0.063634 USD")),r.a.createElement("button",{className:"btn history"},r.a.createElement("span",null,"1 EGP = 0.063634 USD")),r.a.createElement("button",{className:"btn history"},r.a.createElement("span",null,"1 EGP = 0.063634 USD")),r.a.createElement("button",{className:"btn history"},r.a.createElement("span",null,"1 EGP = 0.063634 USD")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-inline justify-content-center mb-3"},r.a.createElement("button",{className:"btn col-sm-2 btn-success"},"Clear"))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(d,null),r.a.createElement(b,null))},N=n(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N.a,{store:E},r.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n.p+"static/media/money.8ebfab8f.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.12baf72f.chunk.js.map