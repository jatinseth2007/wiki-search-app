(this["webpackJsonpwiki-search-app"]=this["webpackJsonpwiki-search-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),s=a.n(r),i=(a(15),a(16),a(17),a(0));function l(){return Object(i.jsx)("section",{className:"logo-container",children:Object(i.jsxs)("div",{className:"logo","aria-hidden":"true",children:[Object(i.jsx)("span",{className:"blue",children:"Search"}),Object(i.jsx)("span",{className:"red",children:"With"}),Object(i.jsx)("span",{className:"yellow",children:"Jatin"}),Object(i.jsx)("span",{className:"green exclaim",children:"!"})]})})}a(19);function o(){return Object(i.jsx)("footer",{children:Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{"aria-hidden":"true",children:"<<"})," Powered by ",Object(i.jsx)("a",{href:"https://www.wikipedia.org",target:"_blank",rel:"noreferrer",children:"Wikipedia"})," ",Object(i.jsx)("span",{"aria-hidden":"true",children:">>"})]})})}var u=a(6),j=a.n(u),h=a(8),d=a(9),b=a(3),p=a(10),x=(a(21),20),O=function(e,t){try{return"https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=".concat(e,"&gsrlimit=").concat(x,"&prop=pageimages|extracts&exchars=").concat(t,"&exintro&explaintext&exlimit=max&format=json&origin=*")}catch(a){throw a}},f=Object(c.createContext)(),v=function(){return Object(c.useContext)(f)},g=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(i.jsx)(f.Provider,{value:Object(c.useReducer)(t,a),children:n})},m=function(){var e=v(),t=Object(b.a)(e,2),a=t[0].searchText,n=t[1],r=function(e){try{var t,a=[];if((null===e||void 0===e||null===(t=e.query)||void 0===t?void 0:t.pages)&&"object"===typeof e.query.pages){var c=Object.keys(e.query.pages);if(c.length>0){var n,r=Object(d.a)(c);try{for(r.s();!(n=r.n()).done;){var s=n.value;a.push(e.query.pages[s])}}catch(i){r.e(i)}finally{r.f()}}}return a}catch(l){throw l}},s=Object(c.useCallback)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:"SEARCH_SET_SEARCH_LOADING",payload:{value:!0}}),t=O(a,100),e.next=5,fetch(t);case 5:return c=e.sent,e.next=8,c.json();case 8:s=e.sent,n({type:"SEARCH_SET_SEARCH_DATA",payload:{value:r(s)}}),n({type:"SEARCH_SET_SEARCH_LOADING",payload:{value:!1}}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),n({type:"SEARCH_SET_SEARCH_LOADING",payload:{value:!1}}),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[a,n]);return console.log("SearchForm rendered"),Object(i.jsx)("section",{className:"search-bar-container",children:Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),s()},children:[Object(i.jsx)("input",{type:"text",autoComplete:"off",className:"search-bar",value:a,onChange:function(e){var t;t=e.target.value,n({type:"SEARCH_SET_SEARCH_TEXT",payload:{value:t}})}}),Object(i.jsx)("button",{type:"submit",className:"search-button",children:Object(i.jsx)("i",{className:"blue pointer",children:Object(i.jsx)(p.a,{})})})]})})},S=(a(22),a(23),function(e){var t=e.totalResults;return Object(i.jsx)("div",{className:"stats-bar-container",children:Object(i.jsxs)("span",{children:["Displaying ",Object(i.jsx)("strong",{children:t})," results."]})})}),y=(a(24),function(e){var t,a=e.result;return Object(i.jsxs)("div",{className:"search-results-item",children:[Object(i.jsx)("div",{className:"search-results-title",children:Object(i.jsx)("a",{href:"https://en.wikipedia.org/?curid=".concat(a.pageid),target:"_blank",rel:"noreferrer",children:a.title})}),Object(i.jsxs)("div",{className:"search-results-content",children:[(null===a||void 0===a||null===(t=a.thumbnail)||void 0===t?void 0:t.source)&&Object(i.jsx)("div",{className:"search-results-image",children:Object(i.jsx)("img",{src:a.thumbnail.source,alt:a.title})}),Object(i.jsx)("div",{className:"search-results-text",children:a.extract})]})]},a.pageid)}),E=function(){var e=v(),t=Object(b.a)(e,1)[0],a=t.searchResults,c=t.isSearchResultsLoading;return console.log("SearchResults rendered"),Object(i.jsx)("section",{className:"search-results-container",children:c?Object(i.jsx)("span",{children:"loading..."}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(S,{totalResults:a.length}),a.length>0&&a.map((function(e,t){return Object(i.jsx)(y,{result:e},t)}))]})})};var R=function(){return Object(i.jsxs)("main",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(m,{}),Object(i.jsx)(E,{}),Object(i.jsx)(o,{})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},A=a(2);s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(g,{reducer:function(e,t){switch(t.type){case"SEARCH_SET_SEARCH_TEXT":return Object(A.a)(Object(A.a)({},e),{},{searchText:t.payload.value});case"SEARCH_SET_SEARCH_LOADING":return Object(A.a)(Object(A.a)({},e),{},{isSearchResultsLoading:t.payload.value});case"SEARCH_SET_SEARCH_DATA":return Object(A.a)(Object(A.a)({},e),{},{searchResults:t.payload.value});default:return e}},initialState:{searchText:"",searchResults:[],isSearchResultsLoading:!1},children:Object(i.jsx)(R,{})})}),document.getElementById("root")),_()}],[[25,1,2]]]);
//# sourceMappingURL=main.25562c98.chunk.js.map