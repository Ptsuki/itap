var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&n(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{bu as u,bv as c,a4 as b,af as d,bS as p,bz as v,k as f,aY as m,al as y,z as g,bI as h,ay as P,W as T,A as w,x,C as $,bB as k,a9 as N,dc as B,dR as C,dS as S,Q as R,as as j,ax as E,a2 as F,bJ as O,bP as A,c3 as _,r as L,aA as z,aF as K,bC as V,bH as q,bG as H,aU as I,dT as M,aw as W,b3 as Y,bn as D,V as G,bF as J,bL as Q}from"./save_config.7e387697.js";import{m as U}from"./el-input.07836306.js";import{A as X,B as Z}from"./main.5f87c81f.js";import{p as ee}from"./plus.8a11ae65.js";const ae=Symbol("tabsRootContextKey"),te=u({tabs:{type:c(Array),default:()=>U([])}});var le=k(b(i(r({},{name:"ElTabBar"}),{props:te,setup(e,{expose:a}){const t=e,l=N(),s=d(ae);s||p("ElTabBar","<el-tabs><el-tab-bar /></el-tabs>");const o=v("tabs"),n=f(),r=f(),i=()=>r.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y";return t.tabs.every((s=>{var r,i,u,c;const b=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${s.paneName}`];if(!b)return!1;if(!s.active)return!0;a=b[`client${g(o)}`];const d="x"===n?"left":"top";e=b.getBoundingClientRect()[d]-(null!=(c=null==(u=b.parentElement)?void 0:u.getBoundingClientRect()[d])?c:0);const p=window.getComputedStyle(b);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(p.paddingLeft)+Number.parseFloat(p.paddingRight)),e+=Number.parseFloat(p.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${g(n)}(${e}px)`}})();return m((()=>t.tabs),(async()=>{await y(),i()}),{immediate:!0}),h(n,(()=>i())),a({ref:n,update:i}),(e,a)=>(P(),T("div",{ref_key:"barRef",ref:n,class:w([x(o).e("active-bar"),x(o).is(x(s).props.tabPosition)]),style:$(r.value)},null,6))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const se=u({panes:{type:c(Array),default:()=>U([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:c(Function),default:B},onTabRemove:{type:c(Function),default:B},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),oe=b({name:"ElTabNav",props:se,setup(e,{expose:a}){const t=N(),l=d(ae);l||p("ElTabNav","<el-tabs><tab-nav /></el-tabs>");const s=v("tabs"),o=C(),n=S(),r=f(),i=f(),u=f(),c=f(!1),b=f(0),y=f(!1),P=f(!0),T=R((()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height")),w=R((()=>({transform:`translate${"width"===T.value?"X":"Y"}(-${b.value}px)`}))),x=()=>{if(!r.value)return;const e=r.value[`offset${g(T.value)}`],a=b.value;if(!a)return;const t=a>e?a-e:0;b.value=t},$=()=>{if(!r.value||!i.value)return;const e=i.value[`offset${g(T.value)}`],a=r.value[`offset${g(T.value)}`],t=b.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;b.value=l},k=()=>{const e=i.value;if(!(c.value&&u.value&&r.value&&e))return;const a=u.value.querySelector(".is-active");if(!a)return;const t=r.value,s=["top","bottom"].includes(l.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),d=s?e.offsetWidth-n.width:e.offsetHeight-n.height,p=b.value;let v=p;s?(o.left<n.left&&(v=p-(n.left-o.left)),o.right>n.right&&(v=p+o.right-n.right)):(o.top<n.top&&(v=p-(n.top-o.top)),o.bottom>n.bottom&&(v=p+(o.bottom-n.bottom))),v=Math.max(v,0),b.value=Math.min(v,d)},B=()=>{if(!i.value||!r.value)return;const e=i.value[`offset${g(T.value)}`],a=r.value[`offset${g(T.value)}`],t=b.value;if(a<e){const t=b.value;c.value=c.value||{},c.value.prev=t,c.value.next=t+a<e,e-t<a&&(b.value=e-a)}else c.value=!1,t>0&&(b.value=0)},L=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=_;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus(),n[i].click(),z()},z=()=>{P.value&&(y.value=!0)},K=()=>y.value=!1;return m(o,(e=>{"hidden"===e?P.value=!1:"visible"===e&&setTimeout((()=>P.value=!0),50)})),m(n,(e=>{e?setTimeout((()=>P.value=!0),50):P.value=!1})),h(u,B),j((()=>setTimeout((()=>k()),0))),E((()=>B())),a({scrollToActiveTab:k,removeFocus:K}),m((()=>e.panes),(()=>t.update()),{flush:"post"}),()=>{const a=c.value?[F("span",{class:[s.e("nav-prev"),s.is("disabled",!c.value.prev)],onClick:x},[F(O,null,{default:()=>[F(X,null,null)]})]),F("span",{class:[s.e("nav-next"),s.is("disabled",!c.value.next)],onClick:$},[F(O,null,{default:()=>[F(Z,null,null)]})])]:null,t=e.panes.map(((a,t)=>{var o,n;const r=a.props.name||a.index||`${t}`,i=a.isClosable||e.editable;a.index=`${t}`;const u=i?F(O,{class:"is-icon-close",onClick:t=>e.onTabRemove(a,t)},{default:()=>[F(A,null,null)]}):null,c=(null==(n=(o=a.slots).label)?void 0:n.call(o))||a.props.label,b=a.active?0:-1;return F("div",{ref:`tab-${r}`,class:[s.e("item"),s.is(l.props.tabPosition),s.is("active",a.active),s.is("disabled",a.props.disabled),s.is("closable",i),s.is("focus",y.value)],id:`tab-${r}`,key:`tab-${r}`,"aria-controls":`pane-${r}`,role:"tab","aria-selected":a.active,tabindex:b,onFocus:()=>z(),onBlur:()=>K(),onClick:t=>{K(),e.onTabClick(a,r,t)},onKeydown:t=>{!i||t.code!==_.delete&&t.code!==_.backspace||e.onTabRemove(a,t)}},[c,u])}));return F("div",{ref:u,class:[s.e("nav-wrap"),s.is("scrollable",!!c.value),s.is(l.props.tabPosition)]},[a,F("div",{class:s.e("nav-scroll"),ref:r},[F("div",{class:[s.e("nav"),s.is(l.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:i,style:w.value,role:"tablist",onKeydown:L},[e.type?null:F(le,{tabs:[...e.panes]},null),t])])])}}}),ne=u({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number],default:""},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:c(Function),default:()=>!0},stretch:Boolean}),re=e=>q(e)||H(e);var ie=b({name:"ElTabs",props:ne,emits:{[V]:e=>re(e),"tab-click":(e,a)=>a instanceof Event,"tab-change":e=>re(e),edit:(e,a)=>["remove","add"].includes(a),"tab-remove":e=>re(e),"tab-add":()=>!0},setup(e,{emit:a,slots:t,expose:l}){const s=v("tabs"),o=f(),n=L({}),r=f(e.modelValue||e.activeName||"0"),i=async t=>{var l,s,n;if(r.value!==t)try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,r.value))&&((e=>{r.value=e,a(V,e),a("tab-change",e)})(t),null==(n=null==(s=o.value)?void 0:s.removeFocus)||n.call(s))}catch(i){}},u=(e,t,l)=>{e.props.disabled||(i(t),a("tab-click",e,l))},c=(e,t)=>{e.props.disabled||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tab-remove",e.props.name))},b=()=>{a("edit",void 0,"add"),a("tab-add")};m((()=>e.activeName),(e=>i(e))),m((()=>e.modelValue),(e=>i(e))),m(r,(async()=>{var e;null==(e=o.value)||e.scrollToActiveTab()}));z(ae,{props:e,currentName:r,registerPane:e=>n[e.uid]=e,unregisterPane:e=>delete n[e]});return l({currentName:r}),()=>{const a=e.editable||e.addable?F("span",{class:s.e("new-tab"),tabindex:"0",onClick:b,onKeydown:e=>{e.code===_.enter&&b()}},[F(O,{class:s.is("icon-plus")},{default:()=>[F(ee,null,null)]})]):null,l=F("div",{class:[s.e("header"),s.is(e.tabPosition)]},[a,F(oe,{ref:o,currentName:r.value,editable:e.editable,type:e.type,panes:Object.values(n),stretch:e.stretch,onTabClick:u,onTabRemove:c},null)]),i=F("div",{class:s.e("content")},[K(t,"default")]);return F("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:"card"===e.type,[s.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,i]:[i,l]])}}});const ue=u({label:{type:String,default:""},name:{type:[String,Number],default:""},closable:Boolean,disabled:Boolean,lazy:Boolean}),ce=["id","aria-hidden","aria-labelledby"];var be=k(b(i(r({},{name:"ElTabPane"}),{props:ue,setup(e){const a=e,t=N(),l=I(),s=d(ae);s||p("ElTabPane","usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=v("tab-pane"),n=f(),r=R((()=>a.closable||s.props.closable)),i=M((()=>s.currentName.value===(a.name||n.value))),u=f(i.value),c=R((()=>a.name||n.value)),b=M((()=>!a.lazy||u.value||i.value));m(i,(e=>{e&&(u.value=!0)}));const y=L({uid:t.uid,slots:l,props:a,paneName:c,active:i,index:n,isClosable:r});return j((()=>{s.registerPane(y)})),W((()=>{s.unregisterPane(y.uid)})),(e,a)=>x(b)?Y((P(),T("div",{key:0,id:`pane-${x(c)}`,class:w(x(o).b()),role:"tabpanel","aria-hidden":!x(i),"aria-labelledby":`tab-${x(c)}`},[K(e.$slots,"default")],10,ce)),[[D,x(i)]]):G("v-if",!0)}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const de=J(ie,{TabPane:be}),pe=Q(be);export{pe as E,de as a};
