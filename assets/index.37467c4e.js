var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,r=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&n(e,a,t[a]);return e},l=(e,s)=>t(e,a(s));import{bu as c,a4 as d,bJ as p,bP as u,k as m,bz as f,Q as b,bB as _,aG as g,aH as v,ay as y,U as C,a2 as h,b1 as w,b3 as k,bn as E,W as j,A as L,aF as x,X as D,D as F,V as I,C as O,bp as V,b6 as P,T,bF as A,cc as z,bD as B,cj as R,c6 as S,dr as M,r as $,ci as H,dB as U,v as N,a1 as Z,K as q,aI as G,a3 as J,aB as K,az as Q,c9 as W}from"./save_config.7e387697.js";import{D as X}from"./d-tabs.b6627c4d.js";import{f as Y,g as ee,a as te,h as ae}from"./el-overlay.e22515de.js";import{u as se,d as ie,b as oe}from"./main.5f87c81f.js";import{c as ne}from"./create_login.823c0dbe.js";import{T as re}from"./index2.ebb82d9e.js";import"./el-input.07836306.js";import"./el-form-item.9774cccc.js";import"./_baseClone.36822d61.js";import"./_baseIsEqual.840160ed.js";import"./isEqual.8b269055.js";import"./el-radio.2ecd3578.js";import"./event2.b0442ad9.js";const le=d({name:"ElDrawer",components:{ElOverlay:te,ElIcon:p,Close:u},directives:{TrapFocus:re},props:c(l(r({},Y),{direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}})),emits:ee,setup(e,t){const a=m(),s=f("drawer"),i=b((()=>"rtl"===e.direction||"ltr"===e.direction)),o=b((()=>"number"==typeof e.size?`${e.size}px`:e.size));return l(r({},ae(e,t)),{drawerRef:a,isHorizontal:i,drawerSize:o,ns:s})}}),ce=["aria-labelledby","aria-label"],de=["id"],pe=["title"],ue=["aria-label"];const me=A(_(le,[["render",function(e,t,a,s,i,o){const n=g("close"),r=g("el-icon"),l=g("el-overlay"),c=v("trap-focus");return y(),C(T,{to:"body",disabled:!e.appendToBody},[h(P,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave},{default:w((()=>[k(h(l,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:w((()=>[k((y(),j("div",{ref:"drawerRef","aria-modal":"true","aria-labelledby":e.ns.e("title"),"aria-label":e.title,class:L([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:O(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:t[1]||(t[1]=V((()=>{}),["stop"]))},[e.withHeader?(y(),j("header",{key:0,id:e.ns.e("title"),class:L(e.ns.e("header"))},[x(e.$slots,"title",{},(()=>[D("span",{role:"heading",title:e.title},F(e.title),9,pe)])),e.showClose?(y(),j("button",{key:0,"aria-label":"close "+(e.title||"drawer"),class:L(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=(...t)=>e.handleClose&&e.handleClose(...t))},[h(r,{class:L(e.ns.e("close"))},{default:w((()=>[h(n)])),_:1},8,["class"])],10,ue)):I("v-if",!0)],10,de)):I("v-if",!0),e.rendered?(y(),j("section",{key:1,class:L(e.ns.e("body"))},[x(e.$slots,"default")],2)):I("v-if",!0),e.$slots.footer?(y(),j("div",{key:2,class:L(e.ns.e("footer"))},[x(e.$slots,"footer")],2)):I("v-if",!0)],14,ce)),[[c]])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[E,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));const fe={class:"d-sub mt20"};var be=z({},[["render",function(e,t){return y(),j("div",fe,"正在加载此功能...")}]]),_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be});const ge=[{name:"打开方式",p:"图标、搜索结果",id:"open"},{name:"搜索栏",p:"搜索栏样式、翻译",id:"search"},{name:"图标",p:"图标样式、图标间距、宽度",id:"icon"},{name:"时间/日期",p:"时间显示内容、字体样式",id:"time"},{name:"主题/壁纸",p:"深色模式、主题色",id:"wallpaper"},{name:"布局",p:"极简模式、一言",id:"layout"},{name:"侧边栏",p:"侧边栏位置、是否隐藏、宽度",id:"sidebar"},{name:"备份与恢复",p:"数据保存至云端，享受多设备同步",id:"backup"},{name:"重置设置",p:"恢复成默认设置",id:"reset"},{name:"关于",p:"",id:"about"}],ve={name:"SidebarPanel",components:{DTabs:X,ElButton:B,ElDrawer:me,Close:R,Loading:be},setup(){const e=ie,t=S(),a=M(),{t:s}=se(),i=$({tabsData:[{label:s("add"),icon:"plus"},{label:s("me"),icon:"user",comp:"user"},{label:s("setting"),icon:"setting",comp:"setting"}],menuList:ge,activeComp:r({},ge[0]),isNewVersion:!1});1==ie.active&&(i.activeComp={name:"个人信息",id:"account"});return H.getVersion({type:"update"}).then((e=>{let t=U.split(".").join("");i.isNewVersion=e.data&&e.data>t})),l(r({},N(i)),{tabClick:(e,t)=>{i.activeComp.name=e.name,i.activeComp.p=e.p,"account"===e.id?i.activeComp.id="account":"about"===e.id&&(i.activeComp.p=`版本：${U}`)},ossImg:oe,baseConfig:t,userInfo:a,settingShow:e,loginHandle:()=>{ne("login")},asyncComponent:function(){return J({loader:()=>function(e){switch(e){case"./setting/about.vue":return W((()=>import("./about.30220307.js")),["assets/about.30220307.js","assets/about.42e8d98a.css","assets/el-popover.bfe79868.css","assets/el-popper.2129afad.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/sponsor.f41ef2a3.js","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css","assets/index2.d28dd348.js","assets/index2.69c4a5bb.js","assets/event2.b0442ad9.js"]);case"./setting/account.vue":return W((()=>import("./account.c6bbee93.js")),["assets/account.c6bbee93.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css","assets/create_login.823c0dbe.js","assets/create_login.6681de1c.css","assets/el-form-item.9774cccc.js","assets/el-form-item.18d533b8.css","assets/_baseClone.36822d61.js","assets/_baseIsEqual.840160ed.js","assets/isEqual.8b269055.js","assets/el-radio.2ecd3578.js","assets/el-radio.64f3e14c.css","assets/backup.104dc2b6.js","assets/backup.9c571d0e.css","assets/index.e4e38f05.js","assets/timeFormat.59b65a7c.js","assets/el-upload.94e2512c.js","assets/el-upload.b4e6e7cd.css","assets/zoom-in.275d1c48.js","assets/el-checkbox-group.263c9314.js","assets/el-checkbox-group.3252f30a.css","assets/validator2.fec6f1ba.js","assets/hisBackup.5d08dc4a.js","assets/BrowserGuide.f0c65451.css","assets/index2.948aebda.js","assets/index2.ebb82d9e.js","assets/event2.b0442ad9.js"]);case"./setting/backup.vue":return W((()=>import("./backup.104dc2b6.js")),["assets/backup.104dc2b6.js","assets/backup.9c571d0e.css","assets/index.e4e38f05.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/timeFormat.59b65a7c.js","assets/el-upload.94e2512c.js","assets/el-upload.b4e6e7cd.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/zoom-in.275d1c48.js","assets/el-checkbox-group.263c9314.js","assets/el-checkbox-group.3252f30a.css","assets/validator2.fec6f1ba.js","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css","assets/create_login.823c0dbe.js","assets/create_login.6681de1c.css","assets/el-form-item.9774cccc.js","assets/el-form-item.18d533b8.css","assets/_baseClone.36822d61.js","assets/_baseIsEqual.840160ed.js","assets/isEqual.8b269055.js","assets/el-radio.2ecd3578.js","assets/el-radio.64f3e14c.css","assets/hisBackup.5d08dc4a.js","assets/BrowserGuide.f0c65451.css","assets/index2.948aebda.js","assets/index2.ebb82d9e.js","assets/event2.b0442ad9.js"]);case"./setting/hisBackup.vue":return W((()=>import("./hisBackup.5d08dc4a.js")),["assets/hisBackup.5d08dc4a.js","assets/BrowserGuide.f0c65451.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/timeFormat.59b65a7c.js","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css","assets/index2.948aebda.js","assets/index2.ebb82d9e.js","assets/event2.b0442ad9.js","assets/validator2.fec6f1ba.js"]);case"./setting/icon.vue":return W((()=>import("./icon.a100595f.js")),["assets/icon.a100595f.js","assets/icon.01613452.css","assets/el-popper.2129afad.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js","assets/d-slider.2efd2450.js","assets/d-slider.0879cd6e.css","assets/el-input-number.fd2641fb.js","assets/el-input-number.197433d7.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/index2.dee1b5f7.js","assets/event2.b0442ad9.js","assets/arrow-up.1bfacdc1.js","assets/arrow-down.ee3f081b.js","assets/plus.8a11ae65.js","assets/index2.69c4a5bb.js","assets/d-color.788f30cd.js","assets/d-color.f81e659c.css","assets/index2.dd10852c.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/lang.vue":return W((()=>import("./lang.34c1a9a6.js")),["assets/lang.34c1a9a6.js","assets/lang.d097c312.css","assets/el-popper.2129afad.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/el-select.79d7c506.js","assets/el-select.e34f4aac.css","assets/index2.69c4a5bb.js","assets/event2.b0442ad9.js","assets/el-scrollbar.80933a65.js","assets/el-scrollbar.3388c378.css","assets/isEqual.8b269055.js","assets/_baseIsEqual.840160ed.js","assets/index2.dd10852c.js","assets/validator2.fec6f1ba.js","assets/arrow-up.1bfacdc1.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/layout.vue":return W((()=>import("./layout.b024cb14.js")),["assets/layout.b024cb14.js","assets/layout.e6ca10ee.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/loading.vue":return W((()=>Promise.resolve().then((function(){return _e}))),void 0);case"./setting/open.vue":return W((()=>import("./open.9e5a8e87.js")),["assets/open.9e5a8e87.js","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js"]);case"./setting/reset.vue":return W((()=>import("./reset.b04e7994.js")),["assets/reset.b04e7994.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css","assets/cloneDeep.3e2686af.js","assets/_baseClone.36822d61.js","assets/_baseIsEqual.840160ed.js","assets/index2.948aebda.js","assets/index2.ebb82d9e.js","assets/event2.b0442ad9.js","assets/validator2.fec6f1ba.js"]);case"./setting/search.vue":return W((()=>import("./search.45d23a75.js")),["assets/search.45d23a75.js","assets/el-popper.2129afad.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/validator2.fec6f1ba.js","assets/d-slider.2efd2450.js","assets/d-slider.0879cd6e.css","assets/el-input-number.fd2641fb.js","assets/el-input-number.197433d7.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/index2.dee1b5f7.js","assets/event2.b0442ad9.js","assets/arrow-up.1bfacdc1.js","assets/arrow-down.ee3f081b.js","assets/plus.8a11ae65.js","assets/index2.69c4a5bb.js","assets/el-select.79d7c506.js","assets/el-select.e34f4aac.css","assets/el-scrollbar.80933a65.js","assets/el-scrollbar.3388c378.css","assets/isEqual.8b269055.js","assets/_baseIsEqual.840160ed.js","assets/index2.dd10852c.js"]);case"./setting/sidebar.vue":return W((()=>import("./sidebar.51fa6577.js")),["assets/sidebar.51fa6577.js","assets/sidebar.70fdca9d.css","assets/el-popper.2129afad.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js","assets/d-slider.2efd2450.js","assets/d-slider.0879cd6e.css","assets/el-input-number.fd2641fb.js","assets/el-input-number.197433d7.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/index2.dee1b5f7.js","assets/event2.b0442ad9.js","assets/arrow-up.1bfacdc1.js","assets/arrow-down.ee3f081b.js","assets/plus.8a11ae65.js","assets/index2.69c4a5bb.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/sponsor.vue":return W((()=>import("./sponsor.f41ef2a3.js")),["assets/sponsor.f41ef2a3.js","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/el-overlay.e22515de.js","assets/el-overlay.5d85456d.css"]);case"./setting/theme.vue":return W((()=>import("./theme.838fac95.js")),["assets/theme.838fac95.js","assets/theme.e84d2bf6.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js","assets/d-color.788f30cd.js","assets/d-color.f81e659c.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/index2.69c4a5bb.js","assets/event2.b0442ad9.js","assets/index2.dd10852c.js","assets/arrow-down.ee3f081b.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/time.vue":return W((()=>import("./time.50bc24f6.js")),["assets/time.50bc24f6.js","assets/time.8b6870c1.css","assets/el-popper.2129afad.css","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/validator2.fec6f1ba.js","assets/d-color.788f30cd.js","assets/d-color.f81e659c.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/index2.69c4a5bb.js","assets/event2.b0442ad9.js","assets/index2.dd10852c.js","assets/arrow-down.ee3f081b.js","assets/d-slider.2efd2450.js","assets/d-slider.0879cd6e.css","assets/el-input-number.fd2641fb.js","assets/el-input-number.197433d7.css","assets/index2.dee1b5f7.js","assets/arrow-up.1bfacdc1.js","assets/plus.8a11ae65.js","assets/d-font-family.a9f15220.js","assets/d-font-family.403e89dd.css","assets/el-select.79d7c506.js","assets/el-select.e34f4aac.css","assets/el-scrollbar.80933a65.js","assets/el-scrollbar.3388c378.css","assets/isEqual.8b269055.js","assets/_baseIsEqual.840160ed.js","assets/main.5f87c81f.js","assets/main.53f545e2.css"]);case"./setting/wallpaper.vue":return W((()=>import("./wallpaper.ed4fbe0f.js")),["assets/wallpaper.ed4fbe0f.js","assets/wallpaper.bf41e05c.css","assets/el-popper.2129afad.css","assets/save_config.7e387697.js","assets/save_config.849732b8.css","assets/el-input.07836306.js","assets/el-input.de233f92.css","assets/el-select.79d7c506.js","assets/el-select.e34f4aac.css","assets/index2.69c4a5bb.js","assets/event2.b0442ad9.js","assets/el-scrollbar.80933a65.js","assets/el-scrollbar.3388c378.css","assets/isEqual.8b269055.js","assets/_baseIsEqual.840160ed.js","assets/index2.dd10852c.js","assets/validator2.fec6f1ba.js","assets/arrow-up.1bfacdc1.js","assets/el-image-viewer.560b8f55.js","assets/el-image-viewer.3e6df5a8.css","assets/main.5f87c81f.js","assets/main.53f545e2.css","assets/zoom-in.275d1c48.js","assets/d-switch.0f5101f1.js","assets/d-switch.d74454f1.css","assets/d-color.788f30cd.js","assets/d-color.f81e659c.css","assets/arrow-down.ee3f081b.js","assets/d-slider.2efd2450.js","assets/d-slider.0879cd6e.css","assets/el-input-number.fd2641fb.js","assets/el-input-number.197433d7.css","assets/index2.dee1b5f7.js","assets/plus.8a11ae65.js","assets/index.e4e38f05.js"]);default:return new Promise((function(t,a){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./setting/${i.activeComp.id}.vue`),loadingComponent:be})}})}},ye=e=>(K("data-v-dc343f52"),e=e(),Q(),e),Ce={class:"setting-title"},he={class:"d-main"},we={class:"f12 d-sub mt5"},ke={key:0,target:"_blank",href:"https://www.tsuki.icu/",class:"setting-new-version"},Ee=ye((()=>D("div",{class:"setting-logo"},[D("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"125",height:"174.73046171248515",viewBox:"0 0 125 174.73046171248515",fill:"none"},[D("defs",null,[D("rect",{id:"path_0",x:"0",y:"0",width:"125",height:"174.73046171248515"}),D("path",{id:"path_1",transform:"translate(0 0) rotate(0 50 50)",d:"M84,0L16,0C7.16,0 0,7.16 0,16L0,84C0,92.84 7.16,100 16,100L84,100C92.84,100 100,92.84 100,84L100,16C100,7.16 92.84,0 84,0Z"}),D("linearGradient",{id:"linear_0",x1:"-5000%",y1:"1870.27%",x2:"-4999%",y2:"3318.5499999999997%",gradientUnits:"objectBoundingBox"},[D("stop",{offset:"0","stop-color":"#FFFFFF","stop-opacity":"1"}),D("stop",{offset:"1","stop-color":"#FFFFFF","stop-opacity":"1"})]),D("linearGradient",{id:"linear_1",x1:"73.08399999999999%",y1:"0%",x2:"74.08399999999999%",y2:"52.932%",gradientUnits:"objectBoundingBox"},[D("stop",{offset:"0.25","stop-color":"#FFFFFF","stop-opacity":"1"}),D("stop",{offset:"1","stop-color":"#D6D6D6","stop-opacity":"1"})]),D("linearGradient",{id:"linear_2",x1:"50%",y1:"0%",x2:"51%",y2:"188.59%",gradientUnits:"objectBoundingBox"},[D("stop",{offset:"0","stop-color":"#FFFFFF","stop-opacity":"1"}),D("stop",{offset:"1","stop-color":"#99C9FF","stop-opacity":"1"})])]),D("g",{opacity:"1",transform:"translate(0 0)  rotate(0 62.5 87.36523085624258)"},[D("mask",{id:"bg-mask-0",fill:"white"},[D("use",{"xlink:href":"#path_0"})]),D("g",{mask:"url(#bg-mask-0)"},[D("g",{opacity:"1",transform:"translate(25 0)  rotate(0 50 50)"},[D("mask",{id:"mask-1",fill:"white"},[D("use",{"xlink:href":"#path_1"})]),D("g",{mask:"url(#mask-1)"}),D("g",{mask:"url(#mask-1)"},[D("path",{id:"路径 3","fill-rule":"evenodd",fill:"url(#linear_0)",transform:"translate(34.55812888594599 19.38049081370339)  rotate(0 14.441871114053999 7.269904593148304)",opacity:"1",d:"M1.36,0.07C0.59,-0.23 -0.2,0.5 0.05,1.29L3.7,13.24C3.81,13.59 4.1,13.85 4.46,13.91C5.74,14.11 9.11,14.54 14.44,14.54C19.77,14.54 23.14,14.11 24.43,13.91C24.79,13.85 25.08,13.59 25.18,13.24L28.84,1.29C29.08,0.5 28.3,-0.23 27.52,0.07L20.58,2.77L14.44,4.81L8.31,2.77L1.36,0.07Z "})])]),D("path",{id:"路径 2","fill-rule":"evenodd",fill:"url(#linear_1)",transform:"translate(0 42.73)  rotate(0 50.99999090554298 66.00023085624258)",opacity:"1",d:"M100.09,10.09C74.81,-5.54 59.08,-0.01 52.35,6.72C45.63,13.46 42.14,19.79 36.22,58.58C30.3,97.37 18.96,112.46 14.03,115.15C1.26,120.54 -14.34,131.45 25.46,131.99C75.21,132.66 94.04,106.39 100.09,89.56C106.14,72.72 96.06,42.41 94.04,27.6C92.43,15.74 97.4,10.99 100.09,10.09Z "}),D("path",{id:"路径 5","fill-rule":"evenodd",style:{fill:"#3D3D3D"},transform:"translate(75 54)  rotate(0 3.5 3.5)",opacity:"1",d:"M3.5,7C5.43,7 7,5.43 7,3.5C7,1.57 5.43,0 3.5,0C1.57,0 0,1.57 0,3.5C0,5.43 1.57,7 3.5,7Z "}),D("path",{id:"路径 4","fill-rule":"evenodd",fill:"url(#linear_2)",transform:"translate(68.11 14.02)  rotate(0 5.8733 5.081238316088591)",opacity:"1",d:"M0,8.21L5.89,10.16L11.75,8.22L6.73,0.46C6.33,-0.15 5.45,-0.15 5.05,0.45L0,8.21Z "})])])])],-1))),je={class:"d-layout",style:{height:"calc(100vh - 90px)"}},Le={class:"d-layout-aside d-scrollbar-hide setting-aside"},xe=Z("登录/注册"),De={key:1,class:"d-flex-y"},Fe=["src"],Ie={style:{width:"73px"},class:"ml5 f14 d-elip d-main setting-tab-text"},Oe=ye((()=>D("p",{class:"bb wfull"},null,-1))),Ve={class:"setting-aside-item d-flex-y"},Pe={class:"el-icon"},Te=["src"],Ae={class:"ml5 setting-tab-text"},ze={class:"f13 d-main item-title"},Be={class:"d-layout-content setting-content f13 d-main d-scrollbar-hide"};var Re=z(ve,[["render",function(e,t,a,s,i,o){const n=g("close"),r=g("el-icon"),l=g("el-button"),c=g("d-tabs"),d=g("el-drawer");return y(),C(d,{"append-to-body":"",size:"450px","lock-scroll":"","modal-class":"setting-modal","destroy-on-close":"","with-header":!0,"show-close":!1,modelValue:s.settingShow.visible,"onUpdate:modelValue":t[3]||(t[3]=e=>s.settingShow.visible=e)},{title:w((()=>[D("div",Ce,[D("h3",he,F(e.activeComp.name),1),D("p",we,[Z(F(e.activeComp.p)+" ",1),"about"==e.activeComp.id&&e.isNewVersion?(y(),j("a",ke,"New")):I("",!0)])]),Ee])),default:w((()=>[D("div",{class:"setting-close",onClick:t[0]||(t[0]=e=>s.settingShow.visible=!1)},[h(r,{size:20,color:"#fff",class:"icon-roate"},{default:w((()=>[h(n,{class:"d-middle"})])),_:1})]),D("div",je,[D("div",Le,[D("p",{class:L(["setting-user",{active:"account"===e.activeComp.id}]),onClick:t[1]||(t[1]=e=>s.tabClick({name:"个人信息",id:"account"}))},[s.userInfo._id?(y(),j("span",De,[D("img",{style:{width:"30px",height:"30px","border-radius":"6px"},src:s.ossImg(s.userInfo.avatar,50)},null,8,Fe),D("span",Ie,F(s.userInfo.username),1)])):(y(),C(l,{key:0,onClick:s.loginHandle,type:"primary",size:"small"},{default:w((()=>[xe])),_:1},8,["onClick"]))],2),Oe,h(c,{modelValue:e.activeComp.id,"onUpdate:modelValue":t[2]||(t[2]=t=>e.activeComp.id=t),data:e.menuList,onTabClick:s.tabClick,style:{width:"120px",margin:"0 10px","--bg-radius":"6px","--active-bg":"rgba(24,144,255, 0.1)"}},{default:w((({row:e})=>[D("div",Ve,[D("span",Pe,[D("img",{src:`setting/icon_${e.id}.svg`,alt:""},null,8,Te)]),D("div",Ae,[D("h5",ze,F(e.name),1)])])])),_:1},8,["modelValue","data","onTabClick"])]),D("div",Be,[(y(),C(q,null,[(y(),C(G(s.asyncComponent()),{data:"lang"==e.activeComp.id?s.baseConfig:s.baseConfig[e.activeComp.id]},null,8,["data"]))],1024))])])])),_:1},8,["modelValue"])}],["__scopeId","data-v-dc343f52"]]);export{Re as default};
