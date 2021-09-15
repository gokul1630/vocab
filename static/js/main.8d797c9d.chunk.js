(this.webpackJsonpvocabulary=this.webpackJsonpvocabulary||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),r=a.n(c),o=(a(46),a(22)),s=(a(86),a(26)),i=a.n(s),l=a(32),d=a(129),u=a(132),b=a(131),j=a(67),p=a.n(j),h=a(134),f=a(135),O=a(45),m=Object(O.createSlice)({name:"vocab",initialState:{vocabs:[],showModal:!1,showSecondModal:!1,modalData:[],inputData:"",progress:!1,filterData:[]},reducers:{setVocabs:function(e,t){e.vocabs=t.payload},setShowModal:function(e,t){e.showModal=t.payload},setModalData:function(e,t){e.modalData=t.payload},setSecondModal:function(e,t){e.showSecondModal=t.payload},setInputData:function(e,t){e.inputData=t.payload},setProgress:function(e,t){e.progress=t.payload},setFilterData:function(e,t){e.filterData=t.payload}}}),x=m.actions,v=x.setVocabs,g=x.setShowModal,w=x.setModalData,y=x.setSecondModal,D=x.setInputData,N=x.setProgress,k=x.setFilterData,M=function(e){return e},S=m.reducer,C=a(2),E=a(60),I=a.n(E),B=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,c,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object.assign({},a),c={"Content-Type":"application/json",Accept:"application/json"},(r=Object(C.a)(Object(C.a)({},n),{},{headers:c})).url="".concat("https://vocabbbackend.herokuapp.com").concat(t),e.next=6,I()(r);case 6:if("OK"!==(o=e.sent).statusText){e.next=11;break}return e.abrupt("return",Promise.resolve(o.data));case 11:return e.abrupt("return",Promise.reject(o.data));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),P="GET",F=a(1);var H=function(e){var t=Object(o.c)(M),a=Object(o.b)(),n=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B("/vocab/search",{method:P,params:{query:t.inputData}});case 3:e.sent&&(a(y(!1)),a(N(!1))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(F.jsxs)("div",{className:"fab",children:[Object(F.jsxs)(h.a,{show:t.showSecondModal,centered:!0,size:"md",onHide:function(){a(y(!1)),a(N(!1))},children:[Object(F.jsx)(h.a.Header,{closeButton:!0,children:Object(F.jsx)("h1",{children:"Add to Dictionary"})}),Object(F.jsx)(f.a.Group,{className:"mb-2",children:Object(F.jsx)(f.a.Control,{className:"input-txt",type:"text",placeholder:"Enter New Word",onChange:function(e){return a(D(e.target.value))}})}),Object(F.jsxs)(h.a.Footer,{children:[Object(F.jsx)(d.a,{onClick:function(){return a(y(!1))},children:"Cancel"}),t.progress?Object(F.jsx)(b.a,{color:"secondary"}):Object(F.jsx)(d.a,{onClick:function(){n(),a(N(!0))},children:"Add"})]})]}),Object(F.jsx)(u.a,{className:"fab-btn",color:"secondary",onClick:function(){return a(y(!0))},children:Object(F.jsx)(p.a,{})})]})},R=a(11),A=a(8),J=a(136),L=a(133),T=a(21),V=a(69),z=a.n(V),G=a(68);var q=function(){var e=Object(o.b)(),t=Object(o.c)(M);return Object(F.jsxs)(h.a,{show:t.showModal,centered:!0,size:"md",onHide:function(){e(g(!1)),e(w([]))},children:[Object(F.jsx)(h.a.Header,{closeButton:!0,children:Object(F.jsx)("h1",{children:t.modalData.id})}),0!==t.modalData.length&&Object(F.jsxs)(h.a.Body,{className:"modal-body",children:[Object(F.jsx)("p",{children:"noun"}),Object(F.jsx)("p",{children:t.modalData.results[0].lexicalEntries[0].entries[0].etymologies}),t.modalData.results[0].lexicalEntries.map((function(e){return e.entries.map((function(e){return e.senses.map((function(e){return e.examples.map((function(e){return Object(F.jsx)("li",{children:e.text})}))}))}))}))]})]})},K=Object(L.a)((function(e){return{search:Object(A.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(T.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(T.a)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(A.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),W=function(){var e=K(),t=Object(o.c)(M),a=Object(o.b)(),c=!t.showSecondModal,r=new G.a(t.vocabs,{keys:["vocabName"]});return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("/vocab",{method:P});case 2:t=e.sent,n=[],t.forEach((function(e){n=[].concat(Object(R.a)(n),[{vocabName:e.vocabName,vocabData:JSON.parse(e.vocabData)}])})),a(v(n)),a(k(n));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,c]),Object(F.jsxs)("div",{className:"cont",children:[Object(F.jsx)(q,{}),Object(F.jsxs)("div",{className:"topBar",children:[Object(F.jsx)("h5",{children:"Vocab"}),Object(F.jsxs)("div",{className:e.search,children:[Object(F.jsx)("div",{className:e.searchIcon,children:Object(F.jsx)(z.a,{})}),Object(F.jsx)(J.a,{onChange:function(e){return function(e){var n=r.search(e);a(k(e?n.map((function(e){return e.item})):t.vocabs)),console.log()}(e.target.value)},placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]}),Object(F.jsx)("div",{className:"card-content",variant:"outlined",children:Object(F.jsx)("div",{className:"box",children:t.filterData.map((function(e,t){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"card-list",onClick:function(){a(w(e.vocabData)),a(g(!0))},children:[Object(F.jsx)("h4",{children:e.vocabName}),Object(F.jsxs)("p",{children:["(defenition)"," ",e.vocabData.results[0].lexicalEntries[0].entries[0].senses[0].definitions]})]},t),Object(F.jsx)("hr",{})]})}))})})]})},Q=(0,a(45).configureStore)({reducer:S});var U=function(e){return Object(F.jsx)(o.a,{store:Q,children:Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)(W,{}),Object(F.jsx)(H,{})]})})};r.a.render(Object(F.jsx)(U,{}),document.getElementById("root"))},86:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.8d797c9d.chunk.js.map