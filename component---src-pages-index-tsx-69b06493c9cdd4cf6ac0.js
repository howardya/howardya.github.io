(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Q9AM:function(e,t,a){},QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),i=a("sNzC"),c=a("cElI");a("Q9AM");function o(e){return e?r.a.createElement("section",{className:"Intro"},r.a.createElement("h1",{className:"Intro__header"},e.siteTitle&&""!==e.siteTitle?e.siteTitle:"Undefined"),r.a.createElement("h4",{className:"Intro__subheader"},e.siteDescription&&""!==e.siteDescription?e.siteDescription:"Undefined")):r.a.createElement("div",null,"Props are empty")}var l=a("UkwQ");function u(e){var t=Object(s.useStaticQuery)("80858887").site;return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"siteTitle"}),r.a.createElement(o,{siteTitle:t.siteMetadata.title,siteDescription:t.siteMetadata.description,siteAuthor:t.siteMetadata.author}),r.a.createElement(l.a,null))}},UkwQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),i=a("mSMq"),c=a("wqpA");a("jL2j");function o(e){e.data;var t=l();return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Posts"},r.a.createElement("h2",{className:"Posts__banner"},"Posts"),t.edges.map((function(e,t){return r.a.createElement("div",{className:"Post",key:t},r.a.createElement(s.Link,{to:"/"+e.node.slug,className:"Post__metainfo"},r.a.createElement("h3",{className:"Post__title"},e.node.frontmatter.title),r.a.createElement("h5",{className:"Post__date"},Object(i.a)(e.node.frontmatter.date))),r.a.createElement("div",{className:"Post__description"},e.node.frontmatter.description.length>1?Object(c.a)(e.node.frontmatter.description,265):Object(c.a)(e.node.rawBody,265)),r.a.createElement(s.Link,{to:"/"+e.node.slug,className:"Post__readmore"},"Read more"))})))):r.a.createElement("h2",{style:{textAlign:"center",marginTop:"50px",color:"gray"}},"No posts found.")}var l=function(){return Object(s.useStaticQuery)("3120047546").allMdx}},jL2j:function(e,t,a){},mSMq:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=["January","February","March","April","May","June","July","August","September","October","November","December"];function r(e){var t;return t=e.split("-"),parseInt(t[2])+" "+n[parseInt(t[1])-1]+", "+t[0]}},wqpA:function(e,t,a){"use strict";function n(e,t){return e.length<=t?e:e.slice(0,t)+"..."}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-69b06493c9cdd4cf6ac0.js.map