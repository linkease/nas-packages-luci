var n=(p,a,t)=>new Promise((r,s)=>{var c=e=>{try{o(t.next(e))}catch(_){s(_)}},i=e=>{try{o(t.throw(e))}catch(_){s(_)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(c,i);o((t=t.apply(p,a)).next())});import{_ as d,d as u,X as l,o as x,c as g,H as v,Y as f}from"./index.js?v=bd1b282f";const m={id:"page",class:"page-top-container"},h=u({__name:"index",setup(p){const a=l();return(()=>n(this,null,function*(){yield a.getApp()}))(),(r,s)=>(x(),g("div",m,[v(f)]))}});var S=d(h,[["__scopeId","data-v-02867866"],["__file","/projects/github/linkease/istorex/web/src/pages/router/istore/index.vue"]]);export{S as default};
