import{u as t,i as a,a as o,b as e,U as s}from"./install.31878728.js";import{i as r,a as i,b as l,c as n,d as p}from"./install.3dff7996.js";import{Q as d,ay as c,U as y,x as m}from"./save_config.7e387697.js";const h={props:{data:{type:Array,default:[]}},setup(h){const u=h;function b(t,a){return t.values.map((t=>t[a]))}t([a,o,e,r,i,l,n,p]);const f=d((()=>{let t=function(t){const a=[],o=[];return t.forEach((t=>{let e=t.split(",");e[0].split(" ")[1]<"15:31"&&(a.push(e[0].split(" ")[1]),o.push(e))})),{categoryData:a,values:o}}(u.data);return{backgroundColor:"transparent",color:["#0098fa","#f58e36"],title:{text:"",left:0},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:["最新","均价"]},grid:{top:36,left:0,right:10,bottom:40,containLabel:!0},xAxis:{type:"category",data:t.categoryData,scale:!0,boundaryGap:!1,axisLine:{onZero:!1},splitLine:{show:!1},min:"dataMin",max:"dataMax"},yAxis:{scale:!0,splitLine:{lineStyle:{color:"rgba(100,100,100,.1)"}}},dataZoom:[{type:"inside",show:!0,height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100},{show:!0,type:"slider",height:20,bottom:10,borderColor:"rgba(100,100,100,.5)",start:50,end:100}],series:[{name:"最新",type:"line",data:b(t,1),smooth:!0,showSymbol:!1,areaStyle:{opacity:.2},lineStyle:{width:1,opacity:.8}},{name:"均价",type:"line",data:b(t,3),smooth:!0,showSymbol:!1,lineStyle:{width:1,opacity:.8}}]}}));return(t,a)=>(c(),y(m(s),{autoresize:"",theme:"dark",class:"chart",option:m(f)},null,8,["option"]))}};export{h as default};
