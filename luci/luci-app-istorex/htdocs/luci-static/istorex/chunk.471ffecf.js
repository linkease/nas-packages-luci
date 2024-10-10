import{d as F,a as p,G as b,o as t,c as i,f as s,H as $,t as d,h as u,W as B,p as D,q as y,_ as C,E as I,F as k,e as v,A as m}from"./index.js?v=bd1b282f";const g=e=>(D("data-v-25ccdec0"),e=e(),y(),e),E={class:"disk-item"},A={class:"disk-item_contanier"},S={class:"disk-item_icon"},w={class:"disk-item_name"},j=g(()=>s("div",{class:"auto"},null,-1)),z={class:"disk-item_used"},M={key:0,class:"disk-item_info"},N={class:"label-msg.warning"},O={key:1,class:"disk-item_info"},P=g(()=>s("div",{class:"auto"},null,-1)),V=F({__name:"item",props:{disk:{type:Object,required:!0}},setup(e){const c=e;p(()=>{var o;return((o=c.disk.childrens)==null?void 0:o.length)||0}),p(()=>{var l,r;let o=0;return(r=(l=c.disk)==null?void 0:l.childrens)==null||r.forEach(n=>{if(!n.mountPoint){const _=Number(n.sizeInt),x=(1<<30)*2;_>x&&o++}}),o});const a=()=>{B.OpenDisk({disk:c.disk})};return(o,l)=>{const r=b("icon-disk");return t(),i("div",E,[s("div",A,[s("div",S,[$(r)]),s("div",w,[s("span",null,d(e.disk.name)+" \u3010"+d(e.disk.size)+"\u3011"+d(e.disk.venderModel),1)]),j,s("div",z,[s("span",null,d(e.disk.used)+" / "+d(e.disk.total),1)])]),e.disk.errorInfo?(t(),i("div",M,[s("span",N,d(e.disk.errorInfo),1)])):(t(),i("div",O,[u(" <span>\u7C7B\u578B:{{ disk.partyLabelType }}</span> "),s("span",null,d(e.disk.path),1),P,u(" \u5F53\u6CA1\u6709\u5206\u533A\u65F6 "),u(` <a v-if="isChilren == 0" @click="onFormat()">
                \u683C\u5F0F\u5316\u5E76\u6302\u8F7D
            </a>
            <a @click="onFormat()">
                \u683C\u5F0F\u5316
            </a> `),u(" \u5F53\u6709\u672A\u6302\u8F7D\u7684\u5206\u533A\u65F6 "),u(` <a v-if="isMountPoint > 0" @click="onMount()">
                \u6302\u8F7D\u5206\u533A
            </a> `),s("a",{onClick:l[0]||(l[0]=n=>a())}," \u67E5\u770B ")])),u(` <div class="dksk-item_children">
            <div class="dksk-item_children-item" v-for="item in disk.childrens">
                <span>{{ item.name }}</span>
                <span>{{ item.mountPoint }}</span>
            </div>
        </div> `)])}}});var h=C(V,[["__scopeId","data-v-25ccdec0"],["__file","/projects/github/linkease/istorex/web/src/pages/router/disk/index/item.vue"]]);const f=e=>(D("data-v-08368c95"),e=e(),y(),e),q={key:0,class:"ul-container"},L=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u7CFB\u7EDF\u78C1\u76D8")],-1)),G={class:"ul-container_body"},H={key:1,class:"ul-container"},T=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u5DF2\u6302\u8F7D\u78C1\u76D8")],-1)),W={class:"ul-container_body"},J={key:2,class:"ul-container"},K=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"\u672A\u8BC6\u522B\u78C1\u76D8")],-1)),Q={class:"ul-container_body"},R={key:3,class:"ul-container"},U=f(()=>s("div",{class:"ul-container_title"},[s("span",null,"raid")],-1)),X={class:"ul-container_body"},Y=F({__name:"index",setup(e){const c=I(),a=p(()=>c.disk),o=p(()=>c.raid.disks);return(l,r)=>(t(),i("main",null,[a.value.rootDisks.length>0?(t(),i("ul",q,[L,s("div",G,[u(" \u8FC7\u6EE4\u51FA\u7CFB\u7EDF\u6240\u5728\u5206\u533A\u662F\u5426\u5728\u8BE5\u78C1\u76D8 "),(t(!0),i(k,null,v(a.value.rootDisks,(n,_)=>(t(),m(h,{disk:n},null,8,["disk"]))),256))])])):u("v-if",!0),a.value.mountedDisks.length>0?(t(),i("ul",H,[T,s("div",W,[(t(!0),i(k,null,v(a.value.mountedDisks,(n,_)=>(t(),m(h,{disk:n},null,8,["disk"]))),256))])])):u("v-if",!0),a.value.errorDisks.length>0?(t(),i("ul",J,[K,s("div",Q,[(t(!0),i(k,null,v(a.value.errorDisks,(n,_)=>(t(),m(h,{disk:n},null,8,["disk"]))),256))])])):u("v-if",!0),o.value.length>0?(t(),i("ul",R,[U,s("div",X,[(t(!0),i(k,null,v(o.value,(n,_)=>(t(),m(h,{disk:n},null,8,["disk"]))),256))])])):u("v-if",!0)]))}});var ss=C(Y,[["__scopeId","data-v-08368c95"],["__file","/projects/github/linkease/istorex/web/src/pages/router/disk/index/index.vue"]]);export{ss as default};