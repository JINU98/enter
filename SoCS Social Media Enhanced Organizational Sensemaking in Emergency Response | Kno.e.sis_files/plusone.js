var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var f=window,g="push",h="replace",i="length";var k=f,m=document,n=k.location,s=function(){},v=/\[native code\]/,w=function(a,b,c){return a[b]=a[b]||c},x=function(a){for(var b=0;b<this[i];b++)if(this[b]===a)return b;return-1},y=function(){var a;if((a=Object.create)&&v.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},z=w(k,"gapi",{});var A;A=w(k,"___jsl",y());w(A,"I",0);w(A,"hel",10);var B=function(){var a=n.href,b;if(A.dpo)b=A.h;else{b=A.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),e=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||e.exec(a)))try{b=decodeURIComponent(a[2])}catch(d){}}return b},D=function(a){return w(w(A,"H",y()),a,y())};var E=w(A,"perf",y()),K=w(E,"g",y()),aa=w(E,"i",y());w(E,"r",[]);y();y();var L=function(a,b,c){var e=E.r;"function"===typeof e?e(a,b,c):e[g]([a,b,c])},N=function(a,b,c){b&&0<b[i]&&(b=M(b),c&&0<c[i]&&(b+="___"+M(c)),28<b[i]&&(b=b.substr(0,28)+(b[i]-28)),c=b,b=w(aa,"_p",y()),w(b,c,y())[a]=(new Date).getTime(),L(a,"_p",c))},M=function(a){return a.join("__")[h](/\./g,"_")[h](/\-/g,"_")[h](/\,/g,"_")};var O=y(),P=[],Q;Q={a:"callback",f:"sync",b:"config",c:"_c",d:"h",i:"platform",g:"jsl",TIMEOUT:"timeout",e:"ontimeout"};P[g]([Q.g,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=w(A,b,[]).concat(c):w(A,b,c)}if(a=a.u)b=w(A,"us",[]),b[g](a),(c=/^https:(.*)$/.exec(a))&&b[g]("http:"+c[1]),w(A,"u",a)}]);var U=decodeURI("%73cript");O.m=function(a){var b=A.ms||"https://web.archive.org/web/20121004031541/https://apis.google.com",a=a[0],c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[h](/^\//,"")};
var W=function(a){return a.join(",")[h](/\./g,"_")[h](/-/g,"_")},X=function(a,b){for(var c=[],e=0;e<a[i];++e){var d=a[e];d&&0>x.call(b,d)&&c[g](d)}return c},ba=/[@"'<>#\?&%]/,ca=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,da=/\/cb=/g,Y=function(a){var b=m.createElement(U);b.setAttribute("src",a);b.async="true";a=m.getElementsByTagName(U)[0];a.parentNode.insertBefore(b,a)},$=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[Q.a]=b);var e=c,d=e&&e[Q.c];if(d)for(var j=0;j<P[i];j++){var p=
P[j][0],t=P[j][1];t&&Object.prototype.hasOwnProperty.call(d,p)&&t(d[p],a,e)}if(!(e=c[Q.d]))if(e=B(),!e)throw"Bad hint";var u=e,R=c[Q.a],F=c[Q.b],d=c[Q.TIMEOUT],G=c[Q.e],S=null,T=!1;if(d&&!G||!d&&G)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=w(D(u),"r",[]).sort(),H=w(D(u),"L",[]).sort(),C=[].concat(e),V=function(a,b){if(T)return 0;k.clearTimeout(S);H[g].apply(H,l);var c=((z||{}).config||{}).update;c?c(F):F&&w(A,"cu",[])[g](F);if(b){N("me0",a,C);try{Z(function(){var a;
a=u===B()?w(z,"_",y()):y();a=w(D(u),"_",a);b(a)})}finally{N("me1",a,C)}}R&&R();return 1};0<d&&(S=k.setTimeout(function(){T=!0;G()},d));if(a){d=a.split(":").sort();j=[];p=void 0;for(t=0;t<d[i];t++){var I=d[t];I!=p&&j[g](I);p=I}d=j}else d=[];var l=X(d,H);if(!l[i])return V(l);var l=X(d,e),q=w(A,"CP",[]),r=q[i];q[r]=function(a){if(!a)return 0;N("ml1",l,C);var b=function(){q[r]=null;return V(l,a)};if(0<r&&q[r-1])q[r]=b;else for(b();(b=q[++r])&&b(););};if(!l[i])return q[r](s);var J="loaded_"+A.I++;z[J]=
function(a){q[r](a);z[J]=null};d=u.split(";");d=(j=O[d.shift()])&&j(d);if(!d)throw"Bad hint:"+u;j=d=d[h]("__features__",W(l))[h](/\/$/,"")+(e[i]?"/ed=1/exm="+W(e):"")+("/cb=gapi."+J);p=j.match(da);if(!p||!(1===p[i]&&ca.test(j)&&!ba.test(j)))throw"Bad URL "+d;e[g].apply(e,l);N("ml0",l,C);c[Q.f]||k.___gapisync?(c=d,"loading"!=m.readyState?Y(c):m.write("<"+U+' src="'+encodeURI(c)+'"></'+U+">")):Y(d)};var Z=function(a){if(A.hee&&0<A.hel)try{return a()}catch(b){A.hel--,$("debug_error",function(){f.___jsl.hefn(b)})}else return a()};z.load=function(a,b){return Z(function(){return $(a,b)})};K.bs0=f.gapi._bs||(new Date).getTime();L("bs0");K.bs1=(new Date).getTime();L("bs1");delete f.gapi._bs;})();
gapi.load("plusone-unsupported",{callback:window["gapi_onload"],_c:{"jsl":{"u":"https://web.archive.org/web/20121004031541/https://apis.google.com/js/plusone.js","dpo":false,"hee":true,"ci":{"services":{},"inline":{"css":1},"lexps":[34,69,71,65,36,40,74,75,15,45,17,51,61,60,30],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://web.archive.org/web/20121004031541/https://apis.google.com/additnow/additnow.html?bsv=m&abtk=AEIZW7SWELndYOq3OBQ0tKZjMyyz7t2DAiAbbh65Py72SEee7fMOxFm/Z0NBMKqTSXqhvC6ub8Q4wsADsoFv%2B3Eguzr8iGFlJGL8pEPEWO%2B/gL5/uvgMOgE%3D"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=m&abtk=AEIZW7Rhdkrg3QzGG2W%2B%2BwZ9ZBARYxS1qEdo6QGv8tMzS6J4KDafyPIxsWB2askYloWNvF%2B/nBbM1q7ylCKQF5lwjRqq%2B8OUF8IuCzumcXv0U%2BOHHL2CeNs%3D"},":socialhost:":"https://web.archive.org/web/20121004031541/https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=m&abtk=AEIZW7Rqyxu2pyy1Y6cQ1F4GGIB318eIKzQITEr31vPon82CLSTHLh%2Bfw6emTVu4%2BM8C8lL/NLP/L4mECJSkTKeNQAMY3WqYUjQrpMlmHExdzE2aIGcPgeY%3D"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=m&abtk=AEIZW7QWw7a821wMo14lshVP0bod/mpDi1iVZnE2bd0m/nnEXQOfDi3DffNjX1nt0bSkr/XA5eOGUIyjZ6b8l3c77tDGQPdJzqwh%2BJzbHJ9qUo/fM2FKio4%3D"},":signuphost:":"https://web.archive.org/web/20121004031541/https://plus.google.com","plusone":{"preloadUrl":["https://web.archive.org/web/20121004031541/https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=m&abtk=AEIZW7SE3MYq08wBeECMOjATWhPJcbne%2BUbwDZpj5%2BOecQePTEtxGtoA9TIWjZhgo4S/xM38NxhW6elAdyCpHYHQafmz6yWNtN/EhR5zF4nGoYj7iD9hSxw%3D"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=m&abtk=AEIZW7SRdnAoV72/WtC8aENa4apSM3OLS78r71AiERKdStG0xDERYns2l9iPqsv%2B27GByAUufYKV930%2BmTRNxDTLVaVRYM/BzcXwhQE/AsxtogdePLJQYzw%3D"}},"isPlusUser":false,"debug":{"host":"https://web.archive.org/web/20121004031541/https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://web.archive.org/web/20121004031541/https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=PgVur4CZWnE.en_US./sv=1/am=!EQ7UcY4eiDKoFGgl6g/d=1/rs=AItRSTNLkLf62bwEkoTNHvTDEn57hQPKjw","fp":"0c710dca8d83fdc24539165a4b81fe7a69c370be"},"fp":"0c710dca8d83fdc24539165a4b81fe7a69c370be"}});

}
/*
     FILE ARCHIVED ON 03:15:41 Oct 04, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:34:55 Jul 14, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.174
  exclusion.robots.policy: 0.154
  RedisCDXSource: 2.958
  esindex: 0.015
  LoadShardBlock: 399.417 (6)
  PetaboxLoader3.datanode: 131.149 (7)
  CDXLines.iter: 131.725 (3)
  load_resource: 117.55
  PetaboxLoader3.resolve: 59.449
*/