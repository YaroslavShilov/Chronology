(this.webpackJsonpchronology=this.webpackJsonpchronology||[]).push([[0],[,,,,function(e,t,a){e.exports={item:"Item_item__1H4r8",main:"Item_main__2c0gB",cont:"Item_cont__jfXpW",img:"Item_img__q9zaA",desc:"Item_desc__LbJr1",link:"Item_link__18WKi",hollow:"Item_hollow__22Iti",point:"Item_point__r_Z9c",arrow:"Item_arrow__2nixF",__even:"Item___even__21TOr",__first:"Item___first__3Aupm",__last:"Item___last__1QpIV"}},,,,,,,,,,function(e,t,a){e.exports={app:"App_app__32cZn",bg:"App_bg__3GhNK",main:"App_main__2kexW"}},function(e,t,a){e.exports={header:"header_header__2rccj",header_main:"header_header_main__3zpxw",header_logo:"header_header_logo__zE42c"}},,,,,,function(e,t,a){e.exports={wrap:"Preloader_wrap__pCYfR",items:"Preloader_items__3TVCY",wave:"Preloader_wave__13l2u"}},,,function(e,t,a){e.exports=a.p+"static/media/logo.5b39fa88.png"},function(e,t,a){e.exports={footer:"Footer_footer__2Jhpq"}},,,function(e,t,a){e.exports={Link:"Link_Link__3OyGf"}},,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),r=a.n(l),m=(a(36),a(37),a(38),a(14)),c=a.n(m),o=a(15),s=a.n(o),u=a(24),d=a.n(u),p=a(13);function _(){return i.a.createElement("header",{className:s.a.header},i.a.createElement("div",{className:"wrap"},i.a.createElement("div",{className:s.a.header_main},i.a.createElement("h1",{className:"vis-hid"},"The ultimate marvel chronology"),i.a.createElement(p.b,{to:"/",className:s.a.header_logo},i.a.createElement("img",{src:d.a,alt:"The ultimate marvel chronology"})))))}var h=a(25),f=a.n(h);function b(){return i.a.createElement("footer",{className:f.a.footer},i.a.createElement("div",{className:"wrap"},i.a.createElement("a",{href:"https://github.com/YaroslavShilov",target:"__blank"},"Yaroslav Shilov"),"and",i.a.createElement("a",{href:"https://developer.marvel.com/",target:"__blank"},"MarvelAPI")))}var v=a(19),g=a.n(v),E=a(26);function U(e,t){return{type:"ADD_COMIC_SUCCESS",title:e,comic:t}}function w(e,t,a){return{type:"ADD_COMIC_ERROR",error:e,title:t,comic:a}}var M=a(12),k=a(4),y=a.n(k),S=a(28),N=a.n(S),O=function(e){return i.a.createElement("a",{className:N.a.Link,href:e.link,target:"_blank",rel:"noopener noreferrer"},e.children)},C=a(21),j=a.n(C),I=function(e){return i.a.createElement("div",{className:j.a.wrap},i.a.createElement("div",{className:j.a.items},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))},R=function(e){var t=e.cls,a=e.isReady,n=e.title,l=e.number,r=e.till,m=e.desc,c=e.link,o=e.thumb;return i.a.createElement("div",{className:"".concat(y.a.item," ").concat(t.map((function(e){return y.a[e]})).join(" "))},i.a.createElement("article",{className:y.a.main},i.a.createElement("div",{className:y.a.cont},i.a.createElement("h2",{className:y.a.title},n),i.a.createElement("p",{className:y.a.num},"#",l," - ",r),i.a.createElement("p",{className:y.a.desc},m),a&&i.a.createElement("p",{className:y.a.link},i.a.createElement(O,{link:c},"Read more"))),i.a.createElement("div",{className:y.a.img},a?i.a.createElement("img",{src:o,alt:n}):i.a.createElement(I,null)),i.a.createElement("span",{className:y.a.arrow}),i.a.createElement("span",{className:y.a.point})),i.a.createElement("div",{className:y.a.hollow}))};var x=Object(M.b)((function(e){return{state:e.comics,chronology:e.chronology}}),(function(e){return{addComic:function(t,a){return e(function(e,t){return function(){var a=Object(E.a)(g.a.mark((function a(n,i){var l,r,m,c,o,s,u,d;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,l=i().comicsNameUrl[e],r="https://gateway.marvel.com:443/v1/public/comics?title=".concat(l,"&issueNumber=").concat(t,"&apikey=").concat("c6633ad6a8d5b89011bbcb78acab94ea","\n"),a.next=5,fetch(r);case 5:return m=a.sent,a.next=8,m.json();case 8:c=a.sent,o=c.data.results[0],(s=o.description)||(s="Sorry. But this comic doesn't have description"),s.length>390&&(s=s.slice(0,390)+"....."),u={number:t,desc:s,thumb:"".concat(o.thumbnail.path,".").concat(o.thumbnail.extension),link:o.urls[0].url},n(U(e,u)),a.next=21;break;case 17:a.prev=17,a.t0=a.catch(0),d={number:t,desc:"Sorry, but this comic is not founded",thumb:"https://i.annihil.us/u/prod/marvel/i/mg/8/a0/5aea3123880ca/clean.jpg",link:"https://www.marvel.com/"},n(w(a.t0,e,d));case 21:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(e,t){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){var t=e.state,a=e.chronology,l=e.addComic;Object(n.useEffect)((function(){a.forEach((function(e){l(e.title,e.from)}))}),[a,l]);var r=a.map((function(e,a,n){var l=!1,r="",m="",c="Loading . . .",o=[];if((a+1)%2===0&&o.push("__even"),0===a&&o.push("__first"),a===n.length-1&&o.push("__last"),t[e.title]){var s=t[e.title].filter((function(t){return t.number===e.from}));1===s.length&&(c=s[0].desc,r=s[0].link,m=s[0].thumb,l=!0)}return i.a.createElement(R,{key:a,cls:o,isReady:l,title:e.title,number:e.from,till:e.till?"#".concat(e.till):"last",desc:c,link:r,thumb:m})}));return i.a.createElement(i.a.Fragment,null,r)})),A=function(){return i.a.createElement("div",{className:c.a.app},i.a.createElement("div",{className:c.a.bg},i.a.createElement(_,null),i.a.createElement("main",{className:c.a.main+" wrap"},i.a.createElement(x,null)),i.a.createElement(b,null)))},X=a(5),T=a(30),P=a(8),D=a(9),F={"Ultimate Spider-Man":[{number:1,desc:'High school, puberty, first dances - there are many pitfalls to being young. Compound these with intense personal tragedy and super-powers, and you can start to visualize the world of Peter Parker, a.k.a. Spider-Man! Witness the rebirth of a legend as Peter learns that with great power, there must also come great responsibility! Read the book that Entertainment Weekly calls "One of the most emotionally resonant depictions of teendom in comics since Spider-Man\'s debut."',thumb:"http://i.annihil.us/u/prod/marvel/i/mg/9/90/519b7e7eb534a.jpg",link:"http://marvel.com/comics/issue/4372/ultimate_spider-man_2000_1?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n"},{number:14,desc:"DOUBLE TROUBLE PART 1 A new girl named Gwen Stacy arrives at Peter Parker's school to stir up trouble. Meanwhile, Doctor Otto Octavius awakens to discover the grim truth about his new condition!",thumb:"http://i.annihil.us/u/prod/marvel/i/mg/4/20/590785bf72f62.jpg",link:"http://marvel.com/comics/issue/14840/ultimate_spider-man_2000_14?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n"}],"Ultimate X-Men":[{number:1,desc:"The world stands on the brink of genetic war. Mankind makes the first move, launching an army of giant, cybernetic executioners called Sentinels - programmed to target and eliminate mutants. The only force preventing total annihilation: the X-Men!",thumb:"http://i.annihil.us/u/prod/marvel/i/mg/f/10/5ba50b72eee8a.jpg",link:"http://marvel.com/comics/issue/15699/ultimate_x-men_2000_1?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n"},{number:7,desc:"RETURN TO WEAPON X PART 1 (of 6) The only mutant to ever make it outside the walls of Weapon X has been the Adamantium-clawed Wolverine...until now! Get a look inside the Ultimate Universe's Weapon X program and see what is in store for the mutants!",thumb:"http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5ba8de0cc5678.jpg",link:"http://marvel.com/comics/issue/15765/ultimate_x-men_2000_7?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n"}]};function L(e,t,a){return e[t]?0===e[t].filter((function(e){return e.number===a.number})).length?Object(D.a)(Object(D.a)({},e),{},Object(P.a)({},t,[].concat(Object(T.a)(e[t]),[a]))):e:Object(D.a)(Object(D.a)({},e),{},Object(P.a)({},t,[a]))}var W=[{title:"Ultimate Comics Spider-Man",from:4,till:13},{title:"Ultimate X-Men",from:1,till:6},{title:"Ultimate Spider-Man",from:14,till:21},{title:"Ultimate X-Men",from:7,till:14},{title:"Ultimate Spider-Man",from:22,till:27},{title:"Ultimate Spider-Man",from:28,till:32},{title:"Ultimate Fantastic Four",from:1,till:6},{title:"Ultimate Spider-Man",from:33,till:39},{title:"Ultimate X-Men",from:21,till:33},{title:"Ultimate Spider-Man",from:40,till:45},{title:"Ultimate X-Men",from:34,till:39},{title:"Ultimate Fantastic Four",from:7,till:18},{title:"Ultimate Spider-Man",from:60,till:69},{title:"Ultimate Comics Spider-Man",from:1,till:160},{title:"Ultimate Comics Ultimates",from:1,till:6},{title:"Ultimate Comics X-Men",from:1,till:13},{title:"Ultimate Comics Spider-Man",from:7,till:12},{title:"Ultimate Comics Ultimates",from:7,till:12},{title:"Spider-Men",from:1,till:5},{title:"Hunger",from:1,till:4},{title:"Miles Morales: Ultimate Spider-Man",from:1,till:12},{title:"All-New Ultimates",from:999,till:666}];var B={"All-New Ultimates":"All-New%20Ultimates",Hunger:"Hunger","Miles Morales: Ultimate Spider-Man":"Miles%20Morales%3A%20Ultimate%20Spider-Man","Spider-Men":"Spider-Men","Ultimate Comics Spider-Man":"Ultimate%20Comics%20Spider-Man","Ultimate Comics Ultimates":"Ultimate%20Comics%20Ultimates","Ultimate Comics X-Men":"Ultimate%20Comics%20X-Men","Ultimate Fantastic Four":"Ultimate%20Fantastic%20Four","Ultimate Spider-Man":"Ultimate%20Spider-Man%20","Ultimate X-Men":"Ultimate%20X-Men"};var H=Object(X.c)({comics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMIC_SUCCESS":case"ADD_COMIC_ERROR":return L(e,t.title,t.comic);default:return e}},chronology:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;return t.type,e},comicsNameUrl:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),z=a(29),G="__REDUX_DEVTOOLS_EXTENSION_COMPOSE__",J="object"===typeof window&&window[G]?window[G]({}):X.d,Y=Object(X.e)(H,J(Object(X.a)(z.a))),V=i.a.createElement(M.a,{store:Y},i.a.createElement(p.a,null,i.a.createElement(A,null)));r.a.render(V,document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.6fe9f1d3.chunk.js.map