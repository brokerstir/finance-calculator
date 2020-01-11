(this["webpackJsonpfinance-calculator"]=this["webpackJsonpfinance-calculator"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),c=t.n(l),i=(t(13),t(3)),s=t(4),o=t(6),u=t(5),m=t(7),p=(t(14),t(15),function(e){console.log("props",e);var a=null,t=null;return e.hasErr&&(t=r.a.createElement("div",null,r.a.createElement("p",{className:"error"},e.errMsg))),e.finishCalc&&(a=r.a.createElement("div",{className:"ans"},r.a.createElement("p",null,"The interest rate is ",e.ratePercent),r.a.createElement("p",null,"The interest amount is ",r.a.createElement("span",{className:"money"},"$",e.intAmount)),r.a.createElement("p",null,"The accumulated value is ",r.a.createElement("span",{className:"money"},"$",e.accumVal)))),r.a.createElement("div",{className:"Calc"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",null,r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Calculate Interest:"),r.a.createElement("input",{type:"checkbox",checked:e.compound,onChange:e.clickCompound})," ",r.a.createElement("small",null,"compound"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Principal $"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"principal",value:e.principal,onChange:e.valChanged,onBlur:e.inputBlurred})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Interest Rate %"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"interest",value:e.interest,onChange:e.valChanged,onBlur:e.inputBlurred})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Number of Years"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent w-100",type:"text",name:"years",value:e.years,onChange:e.valChanged,onBlur:e.inputBlurred})),t,a),r.a.createElement("div",null,r.a.createElement("a",{className:"f6 link dim ba ph3 pv2 mb2 dib black",onClick:e.click},"Calculate"),r.a.createElement("a",{className:"f6 link dim ba ph3 pv2 mb2 dib black",onClick:e.clear},"Clear")))))}),h=(t(16),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={showCalc:!0,principal:"",interest:"",years:1,ratePercent:"",rateDecimal:"",intAmount:"",accumVal:"",finishCalc:!1,hasErr:!1,compound:!1,errMsg:""},t.valChangedHandler=function(e){var a=e.target.value,n=e.target.name;t.setValHandler(n,a,!1)},t.setValHandler=function(e,a,n){var r=n?"years"==e?1:"":a,l=n?"Error: Invalid Input":"";switch(e){case"principal":t.setState({principal:r,hasErr:n,errMsg:l});break;case"interest":t.setState({interest:r,hasErr:n,errMsg:l});break;case"years":t.setState({years:r,hasErr:n,errMsg:l})}},t.inputBlurHandler=function(e){var a=e.target.value,n=e.target.name,r=isNaN(a);r&&(a=""),t.setValHandler(n,a,r)},t.numberWithCommas=function(e){var a=e.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),a.join(".")},t.toggleCompoundHandler=function(){var e=t.state.compound;t.setState({compound:!e})},t.runClearHandler=function(){t.setState({principal:"",interest:"",years:1,ratePercent:"",rateDecimal:"",intAmount:"",accumVal:"",finishCalc:!1,hasErr:!1,compound:!1,errMsg:""})},t.runCalcValidator=function(){var e=parseFloat(t.state.principal),a=parseFloat(t.state.interest),n=parseFloat(t.state.years),r=""===e||""===a||""===n,l=isNaN(e)||isNaN(a)||isNaN(n);r||l?t.setState({years:1,ratePercent:"",rateDecimal:"",intAmount:"",accumVal:"",finishCalc:!1,hasErr:!0,errMsg:"Error: Blank Input"}):t.runCalcHandler(e,a,n)},t.runCalcHandler=function(e,a,n){var r=a/100,l=a.toFixed(2)+"%",c=null,i=null;t.state.compound?c=(i=e*Math.pow(r+1,n))-e:i=(c=e*r*n)+e,i=t.numberWithCommas(i.toFixed(2)),c=t.numberWithCommas(c.toFixed(2)),t.setState({rateDecimal:r.toFixed(4),ratePercent:l,intAmount:c,accumVal:i,finishCalc:!0,hasErr:!1,errMsg:""})},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=null;return this.state.showCalc&&(a=r.a.createElement("div",null,r.a.createElement(p,{click:this.runCalcValidator,clear:this.runClearHandler,finishCalc:this.state.finishCalc,hasErr:this.state.hasErr,errMsg:this.state.errMsg,compound:this.state.compound,principal:this.state.principal,interest:this.state.interest,years:this.state.years,ratePercent:this.state.ratePercent,rateDecimal:this.state.rateDecimal,intAmount:this.state.intAmount,accumVal:this.state.accumVal,clickCompound:function(a){return e.toggleCompoundHandler(a)},valChanged:function(a){return e.valChangedHandler(a)},inputBlurred:function(a){return e.inputBlurHandler(a)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Finance Calculator")),a)}}]),a}(n.Component)),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/finance-calculator",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/finance-calculator","/service-worker.js");d?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):f(e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.ecdc9575.chunk.js.map