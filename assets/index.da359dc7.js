import{cc as e,c6 as a,r as t,Q as l,dZ as s,aY as o,dz as i,bx as d,ci as c,ca as r,aG as n,ay as p,U as y,b1 as u,X as m,a2 as h,W as f,aE as g,x as b,I as k,A as v,a1 as x,D as w,b3 as T,bn as I,bp as _,b7 as C,cb as j,c7 as D}from"./save_config.7e387697.js";import{D as V,a5 as W,y as L}from"./main.5f87c81f.js";import{_ as S}from"./d-dialog.64ba485e.js";import{E as z}from"./el-skeleton-item.c18dff8f.js";import{E,a as U}from"./el-tabs.9629dce2.js";import{E as O}from"./el-input.07836306.js";import{I as A}from"./InfoFilled.ec7b9bb1.js";import"./el-overlay.e22515de.js";import"./plus.8a11ae65.js";const F={class:"topsearch-content hfull"},G={class:"d-flex-center",style:{height:"30px","flex-flow":"row"}},Q={class:"pl20 pr20"},X={class:"d-layout hfull bt",style:{height:"calc(100% - 86px)"}},Y={class:"d-layout-aside topsearch-aside",style:{width:"21%","min-width":"140px"}},Z=["onClick"],$=["title"],q=["src"],B={class:"d-layout-content mt10 d-auto-y ml20",style:""},H={class:"category-title d-flex-y bb"},J=["src"],K={class:"d-cell"},M={class:"topsearch-body"},N=["href"],P={class:"item-index mr10"},R=["title"],ee={class:"f12 ml20 d-sub"},ae={name:"appTopsearch"};var te=e(Object.assign(ae,{setup(e){const ae=a(),te=t({keyWord:"",category:"全部",hotType:[],hostList:[],typeId:"",loading:!1,rowData:{}}),le=l((()=>[{category:"我的订阅"},{category:"全部"},...s(te.hotType,"category")])),se=(e,a)=>{let t="取消订阅";if("add"==a){if(ae.value.topSearch.length>4)return void j.error("最多只能选择5条");ae.value.topSearch.push({name:e.name,id:e.id}),t="订阅成功"}else{if(ae.value.topSearch.length<2)return void j.error("至少选择1条");let a=ae.value.topSearch.findIndex((a=>a.id===e.id));ae.value.topSearch.splice(a,1)}j.success(t)},oe=l((()=>ae.value.topSearch.map((e=>e.id)))),ie=l((()=>te.keyWord?te.hotType.filter((e=>e.name.includes(te.keyWord))):"我的订阅"==te.category?te.hotType.filter((e=>oe.value.includes(e.id))):"全部"!=te.category?te.hotType.filter((e=>e.category==te.category)):te.hotType));o((()=>ie.value),(e=>{e.length&&(te.typeId=e[0].id,te.rowData=e[0],de())}));async function de(){te.loading=!0;let e=`searchTopList_${te.typeId}`,a=await i.getItem(e);a&&a.data&&(te.hostList=a.data,te.loading=!1,d().valueOf()<a.exp)||c.getTopList({id:te.typeId}).then((a=>{let t=a.data||[];r.set(e,t,6e5),te.hostList=t})).finally((()=>{te.loading=!1}))}return(async()=>{let e=await r.get("searchTopCategory");e?te.hotType=e:c.getTopCategory().then((e=>{D.remove("searchTopCategory");let a=e.data||[];te.hotType=a,r.set("searchTopCategory",a,5184e5)}))})(),(e,a)=>{const t=n("el-icon");return p(),y(S,{height:"600px"},{default:u((()=>[m("div",F,[m("p",G,[h(V,{icon:"icon-hotsearch ",size:"80"})]),m("div",Q,[h(b(U),{onTabClick:a[0]||(a[0]=e=>b(te).keyWord=""),modelValue:b(te).category,"onUpdate:modelValue":a[1]||(a[1]=e=>b(te).category=e)},{default:u((()=>[(p(!0),f(k,null,g(b(le),(e=>(p(),y(b(E),{label:e.category,name:e.category,key:e.key},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])]),m("div",X,[m("div",Y,[h(b(O),{modelValue:b(te).keyWord,"onUpdate:modelValue":a[2]||(a[2]=e=>b(te).keyWord=e),style:{margin:"5px",width:"90%"},size:"small",placeholder:"搜索",clearable:""},null,8,["modelValue"]),h(C,{name:"flip-list",tag:"ul",class:"d-left-tabs"},{default:u((()=>[(p(!0),f(k,null,g(b(ie),(e=>(p(),f("li",{class:v(["d-left-tabs-item d-flex-between",{active:b(te).typeId==e.id}]),onClick:a=>function(e){te.rowData=e,te.typeId=e.id,de()}(e),key:e.id},[m("span",{title:e.name,class:"d-elip",style:{width:"102%"}},[m("img",{class:"icon",src:e.icon,alt:""},null,8,q),x(" "+w(e.name),1)],8,$),T(h(t,{title:"订阅在小组件上显示",class:"tabs-item-select"},{default:u((()=>[b(oe).includes(e.id)?(p(),y(b(L),{key:1,onClick:_((a=>se(e,"del")),["stop"])},null,8,["onClick"])):(p(),y(b(W),{key:0,onClick:_((a=>se(e,"add")),["stop"])},null,8,["onClick"]))])),_:2},1536),[[I,b(oe).includes(e.id)]])],10,Z)))),128))])),_:1})]),m("div",B,[m("h2",H,[m("img",{src:b(te).rowData.icon,alt:""},null,8,J),m("span",K,w(b(te).rowData.name)+" ‧ "+w(b(te).rowData.type),1),h(t,{class:"mr20 d-sub",size:"16",title:"本热搜榜单所陈列的热点信息采集自于互联网，我们不对数据源做任何处理，服务器也不会存储任何数据, 链接均跳转至原始网页地址访问. 如果侵犯您的权益,请与我联系,我会尽快处理。同时请大家自行甄别信息真伪,原始网站信息不代表本人及本产品观点.谢谢大家支持."},{default:u((()=>[h(b(A))])),_:1})]),m("ul",M,[h(b(z),{loading:b(te).loading,rows:3,count:1,animated:""},{default:u((()=>[(p(!0),f(k,null,g(b(te).hostList,((e,a)=>(p(),f("a",{class:"topsearch-item d-flex-y",href:e.link,key:a,target:"_blank"},[m("span",P,w(e.index),1),m("span",{class:"d-felx d-cell d-elip",title:e.title},w(e.title),9,R),m("em",ee,w(e.hotValue),1)],8,N)))),128))])),_:1},8,["loading"])])])])])])),_:1})}}}),[["__scopeId","data-v-8d096fc0"]]);export{te as default};
