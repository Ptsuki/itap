import{u as a}from"./main.5f87c81f.js";import{k as e,c7 as l,ay as t,W as s,a2 as o,I as i,x as d,b1 as r,bD as n,V as u,X as m,aE as p,a1 as c,cb as b}from"./save_config.7e387697.js";import{D as h}from"./d-switch.0f5101f1.js";import{D as f}from"./d-slider.2efd2450.js";import"./el-input.07836306.js";import{a as g,E as j}from"./el-select.79d7c506.js";import"./el-scrollbar.80933a65.js";/* empty css                  */import"./validator2.fec6f1ba.js";import"./el-input-number.fd2641fb.js";import"./index2.dee1b5f7.js";import"./event2.b0442ad9.js";import"./arrow-up.1bfacdc1.js";import"./arrow-down.ee3f081b.js";import"./plus.8a11ae65.js";import"./index2.69c4a5bb.js";import"./isEqual.8b269055.js";import"./_baseIsEqual.840160ed.js";import"./index2.dd10852c.js";const V=m("h2",{class:"mt20 setting-li-sub"},"搜索栏",-1),w=m("br",null,null,-1),v={key:0,class:"setting-li d-flex-between"},y=c(" 开启搜索建议 "),x=c("开启"),_=m("br",null,null,-1),k={class:"d-flex-between setting-li",style:{color:"rgba(var(--alpha-color), 0.7)"}},z=m("span",null,"默认翻译",-1),U={props:{data:{}},setup(c){const U=e(!0);1==l.get("isAuthBaidu")&&(U.value=!0);const{t:q}=a(),C=[{label:"Google翻译",value:"https://translate.google.cn/#en/zh-CN/"},{label:"百度翻译",value:"https://fanyi.baidu.com/#zh/en/"},{label:"DeepL翻译",value:"https://www.deepl.com/zh/translator#zh/en/"},{label:"必应词典",value:"https://www.bing.com/dict/search?q="}];function D(){chrome&&chrome.permissions.request({origins:["https://www.baidu.com/"]},(a=>{a&&(l.set("isAuthBaidu","1"),b.success("搜索建议已开启"),console.log("授权成功"))}))}return(a,e)=>(t(),s("div",null,[o(h,{async:"",title:"显示搜索栏",modelValue:c.data.show,"onUpdate:modelValue":e[0]||(e[0]=a=>c.data.show=a)},null,8,["modelValue"]),c.data.show?(t(),s(i,{key:0},[V,o(f,{async:"",title:d(q)("setting_searcherHeight"),min:36,max:80,modelValue:c.data.height,"onUpdate:modelValue":e[1]||(e[1]=a=>c.data.height=a)},null,8,["title","modelValue"]),o(f,{async:"",title:d(q)("setting_searcherRadius"),min:0,max:50,modelValue:c.data.radius,"onUpdate:modelValue":e[2]||(e[2]=a=>c.data.radius=a)},null,8,["title","modelValue"]),o(f,{async:"",title:d(q)("setting_searcherBackground"),min:.1,step:.01,max:1,modelValue:c.data.bgColor,"onUpdate:modelValue":e[3]||(e[3]=a=>c.data.bgColor=a),unit:""},null,8,["title","min","step","modelValue"]),w,o(h,{async:"",title:"搜索历史",modelValue:c.data.history,"onUpdate:modelValue":e[4]||(e[4]=a=>c.data.history=a)},null,8,["modelValue"]),U.value?(t(),s("div",v,[y,o(d(n),{type:"primary",size:"small",onClick:D},{default:r((()=>[x])),_:1})])):u("",!0),_,m("div",k,[z,o(d(j),{size:"small",modelValue:c.data.translate,"onUpdate:modelValue":e[5]||(e[5]=a=>c.data.translate=a)},{default:r((()=>[(t(),s(i,null,p(C,((a,e)=>o(d(g),{key:e,label:a.label,value:a.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"])])],64)):u("",!0)]))}};export{U as default};
