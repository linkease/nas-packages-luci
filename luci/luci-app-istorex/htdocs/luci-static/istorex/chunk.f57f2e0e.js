var C=(r,D,d)=>new Promise((B,c)=>{var F=l=>{try{v(d.next(l))}catch(E){c(E)}},e=l=>{try{v(d.throw(l))}catch(E){c(E)}},v=l=>l.done?B(l.value):Promise.resolve(l.value).then(F,e);v((d=d.apply(r,D)).next())});import{_ as S,d as w,r as f,x as I,M as N,o,c as n,F as _,f as s,w as x,y as g,e as y,h,t as p,g as T,p as G,q as M,i as m,T as k}from"./index.js?v=bd1b282f";const i=r=>(G("data-v-446dfbc9"),r=r(),M(),r),U=i(()=>s("p",null,"\u4E00\u4E2A\u7B80\u6613\u6C99\u7BB1\uFF0C\u65B9\u4FBF\u7528\u6765\u5B9E\u9A8C\u7CFB\u7EDF\u914D\u7F6E\u548C\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u5F00\u53D1\u672A\u5B8C\u6210\u7684\u8F6F\u4EF6\uFF0C\u4F46\u4E0D\u4FDD\u62A4Docker\u548C\u786C\u76D8\u7684\u6570\u636E",-1)),V={key:0,class:"label-msg warning"},q=i(()=>s("div",{class:"label-value"},null,-1)),z=i(()=>s("div",{class:"label-name"},[s("span",null,"\u72B6\u6001")],-1)),L={class:"label-value"},P=["value"],$=i(()=>s("option",{disabled:"",selected:"true"},"\u83B7\u53D6\u4E2D...",-1)),j=i(()=>s("option",{disabled:"",value:"stopped"},"\u672A\u5F00\u542F",-1)),O=i(()=>s("option",{disabled:"",value:"running"},"\u5F00\u542F\u4E2D",-1)),W=[$,j,O],H={key:0,class:"label-btns"},J=i(()=>s("div",{class:"label-name"},[s("span",null,"\u76EE\u6807\u78C1\u76D8\uFF08\u5EFA\u8BAE\u9009\u62E9U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378\uFF09")],-1)),K={class:"label-value"},Q=i(()=>s("option",{value:""},"\u8BF7\u9009\u62E9\u76EE\u6807\u78C1\u76D8",-1)),R=["value"],X=i(()=>s("div",{class:"label-name"},[s("span",null,"\u76EE\u6807\u5206\u533A\uFF08\u5206\u533A\u5927\u5C0F\u987B\u5927\u4E8E8G\uFF0C\u5C06\u6B64\u5206\u533A\u4F5C\u4E3A\u5916\u90E8 overlay \u4F7F\u7528\uFF09")],-1)),Y={class:"label-value"},Z=i(()=>s("option",{selected:"true",value:""},"\u8BF7\u9009\u62E9\u76EE\u6807\u5206\u533A",-1)),uu=["value","disabled"],su={key:1,class:"label-btns"},eu=["disabled"],tu={key:2,class:"label-msg warning"},au=w({__name:"index",setup(r){return C(this,null,function*(){let D,d;const B=f(!1),c=f(""),F=f(0),e=I({status:"stopped",diskpath:"",partition:"",sandboxDisks:{disks:[]}}),v=()=>C(this,null,function*(){const b=yield Promise.all([m.Nas.SandboxDisks.GET(),m.Nas.GetSandbox.GET()]);try{const u=b[0];if(u!=null&&u.data){const{result:t,error:a}=u.data;t&&(e.sandboxDisks.disks=t.disks||[]),a&&(c.value=a)}}catch(u){c.value=u,F.value=3}try{const u=b[1];if(u!=null&&u.data){const{result:t}=u.data;t&&(e.status=t.status)}}catch(u){console.log(u)}});[D,d]=N(()=>v()),yield D,d();const l=()=>{e.partition=""},E=()=>C(this,null,function*(){if(confirm("\u6B64\u64CD\u4F5C\u4F1A\u5C06\u4F1A\u5220\u9664\u8BE5\u5206\u533A\u5168\u90E8\u6570\u636E,\u662F\u5426\u7EE7\u7EED?")){const b=k.Loading("\u914D\u7F6E\u4E2D...");try{const u=yield m.Nas.Sandbox.POST({path:e.partition});if(u!=null&&u.data){const{result:t,error:a,success:A}=u.data;a&&k.Warning(a),(u.data.success||0)==0&&k.Success("\u914D\u7F6E\u6210\u529F")}}catch(u){k.Error(`${u}`)}b.Close()}});return(b,u)=>(o(),n("form",{class:"form-container",onSubmit:T(E,["prevent"])},[U,e.sandboxDisks.disks.length==0?(o(),n("div",V," \u68C0\u6D4B\u4E0D\u5230\u6302\u8F7D\u7684\u78C1\u76D8\u4FE1\u606F\uFF0C\u8BF7\u5148\u63D2\u4E0A\u78C1\u76D8\uFF0C\u5EFA\u8BAE\u4F7F\u7528U\u76D8\u6216\u8005\u79FB\u52A8\u786C\u76D8\uFF0C\u65B9\u4FBF\u88C5\u5378 ")):(o(),n(_,{key:1},[q,z,s("div",L,[s("select",{value:e.status,disabled:""},[...W],8,P)]),F.value==0?(o(),n("div",H,[s("button",{class:"sumbit",type:"button",onClick:u[0]||(u[0]=t=>F.value=1)},"\u914D\u7F6E")])):F.value==1?(o(),n(_,{key:1},[J,s("div",K,[x(s("select",{"onUpdate:modelValue":u[1]||(u[1]=t=>e.diskpath=t),onChange:l},[Q,(o(!0),n(_,null,y(e.sandboxDisks.disks,(t,a)=>(o(),n("option",{value:t.path,key:a},p(t.venderModel)+"\uFF08"+p(t.size)+"\uFF09 ",9,R))),128))],544),[[g,e.diskpath]])]),e.diskpath?(o(),n(_,{key:0},[X,(o(!0),n(_,null,y(e.sandboxDisks.disks,t=>(o(),n("div",Y,[t.path==e.diskpath?x((o(),n("select",{key:0,"onUpdate:modelValue":u[2]||(u[2]=a=>e.partition=a)},[Z,(o(!0),n(_,null,y(t.childrens,(a,A)=>(o(),n("option",{value:a.path,key:A,disabled:a.sizeInt<8192e6},p(a.name)+"\uFF08"+p(a.filesystem||"\u672A\u683C\u5F0F\u5316")+"\uFF09"+p(a.total),9,uu))),128))],512)),[[g,e.partition]]):h("v-if",!0)]))),256))],64)):h("v-if",!0),e.diskpath&&e.partition?(o(),n("div",su,[s("button",{class:"sumbit",disabled:B.value},"\u4FDD\u5B58",8,eu)])):h("v-if",!0)],64)):h("v-if",!0)],64)),c.value?(o(),n("div",tu,p(c.value),1)):h("v-if",!0)],32))})}});var iu=S(au,[["__scopeId","data-v-446dfbc9"],["__file","/projects/github/linkease/istorex/web/src/pages/router/setting/sandbox/index.vue"]]);export{iu as default};
