var c=(r,b,d)=>new Promise((f,t)=>{var n=l=>{try{o(d.next(l))}catch(v){t(v)}},s=l=>{try{o(d.throw(l))}catch(v){t(v)}},o=l=>l.done?f(l.value):Promise.resolve(l.value).then(n,s);o((d=d.apply(r,b)).next())});import{_ as V,d as T,E as I,r as w,x as A,M,o as m,c as E,f as u,w as _,N as h,s as D,j as x,h as y,t as N,g as U,p as q,q as G,i as B,T as g}from"./index.js?v=bd1b282f";const p=r=>(q("data-v-0b184c1c"),r=r(),G(),r),j=p(()=>u("p",null,[D(" \u6B22\u8FCE\u4F7F\u7528\u5FEB\u901F\u7F51\u7EDC\u914D\u7F6E\u5411\u5BFC\uFF0C\u8BF7\u9009\u62E9\u4E00\u79CD\u8FDE\u63A5\u65B9\u5F0F\u4EE5\u5F00\u59CB\u8054\u7F51\uFF0C\u6216\u4F7F\u7528\u5DE6\u4FA7\u83DC\u5355\u8FDB\u884C\u8054\u7F51\u914D\u7F6E "),u("br"),D(" \u6CA1\u627E\u5230\u60F3\u8981\u7684\u914D\u7F6E\uFF1F\u8BF7\u4F7F\u7528 "),u("a",{href:"/cgi-bin/luci/admin/network/network",target:"_blank"},"\u9AD8\u7EA7\u6A21\u5F0F")],-1)),L=p(()=>u("div",{class:"label-name"},[u("span",null,"\u8054\u7F51\u65B9\u5F0F")],-1)),O={class:"label-value"},R={class:"label-flex"},z={style:{display:"none"}},H={key:0,class:"ul-container"},J=p(()=>u("div",{class:"ul-container_title"},[u("span",null,"\u62E8\u53F7\u8054\u7F51\u914D\u7F6E")],-1)),K=p(()=>u("div",{class:"label-value"},null,-1)),Q=p(()=>u("div",{class:"label-name"},[u("span",null,"\u8D26\u53F7")],-1)),W={class:"label-value"},X=p(()=>u("div",{class:"label-name"},[u("span",null,"\u5BC6\u7801")],-1)),Y={class:"label-value"},Z={key:1,class:"label-btns"},$=["disabled"],uu={key:2,class:"label-msg"},eu=T({__name:"index",setup(r){return c(this,null,function*(){let b,d;const f=I(),t=w(""),n=w(!1),s=w(""),o=A({account:"",password:""}),l=A({wanProto:"dhcp",dnsProto:"auto",staticIp:"",subnetMask:"",manualDnsIp:[],gateway:""}),v=()=>c(this,null,function*(){n.value=!0;try{const i=yield B.Guide.Pppoe.GET(),{result:e}=i.data;e&&(o.account=e.account||"",o.password=e.password||"")}catch(i){s.value=i}t.value=yield f.getAsyncNetworkProto,n.value=!1});[b,d]=M(()=>v()),yield b,d();const k=()=>c(this,null,function*(){switch(t.value){case"pppoe":yield P();break;case"dhcp":yield S();break;default:s.value="\u627E\u4E0D\u5230\u4F60\u8981\u7684\u914D\u7F6E";break}}),P=()=>c(this,null,function*(){if(o.account==""){s.value="\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A";return}if(o.password==""){s.value="\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A";return}n.value=!0;const i=g.Loading("\u4FDD\u5B58\u4E2D...");try{const e=yield B.Guide.Pppoe.POST({account:o.account,password:o.password});if(e.data){const{error:a,success:F}=e.data;a&&(s.value=a),(F==null||F==0)&&(s.value="\u914D\u7F6E\u5B8C\u6210")}}catch(e){s.value=e}finally{}n.value=!1,i.Close()}),S=()=>c(this,null,function*(){const i={wanProto:l.wanProto,dnsProto:l.dnsProto};n.value=!0;const e=g.Loading("\u4FDD\u5B58\u4E2D...");try{const a=yield B.Guide.ClientModel.POST(i);if(a!=null&&a.data){const{success:F,error:C}=a==null?void 0:a.data;C&&(s.value=C),(F==null||F==0)&&(s.value="\u914D\u7F6E\u5B8C\u6210")}}catch(a){s.value=a}n.value=!1,e.Close()});return(i,e)=>(m(),E("form",{class:"form-container",onSubmit:U(k,["prevent"])},[j,L,u("div",O,[u("div",R,[u("label",null,[_(u("input",{type:"radio",value:"pppoe","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u8D26\u53F7\u5BC6\u7801")]),u("label",null,[_(u("input",{type:"radio",value:"dhcp","onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u81EA\u52A8\u8054\u7F51")]),u("label",z,[_(u("input",{type:"radio",value:"static",hidden:"true","onUpdate:modelValue":e[2]||(e[2]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u7F51\u5173\u8054\u7F51")])])]),t.value=="pppoe"?(m(),E("ul",H,[J,K,Q,u("div",W,[_(u("input",{type:"text",placeholder:"\u5BBD\u5E26\u8D26\u53F7","onUpdate:modelValue":e[3]||(e[3]=a=>o.account=a),required:""},null,512),[[x,o.account,void 0,{trim:!0}]])]),X,u("div",Y,[_(u("input",{type:"password",placeholder:"\u5BBD\u5E26\u5BC6\u7801","onUpdate:modelValue":e[4]||(e[4]=a=>o.password=a),required:""},null,512),[[x,o.password,void 0,{trim:!0}]])])])):y("v-if",!0),t.value=="pppoe"||t.value=="dhcp"?(m(),E("div",Z,[u("button",{class:"sumbit",disabled:n.value},"\u4FDD\u5B58",8,$)])):y("v-if",!0),s.value?(m(),E("div",uu,[u("span",null,N(s.value),1)])):y("v-if",!0)],32))})}});var su=V(eu,[["__scopeId","data-v-0b184c1c"],["__file","/projects/github/linkease/istorex/web/src/pages/router/wireless/visitor/index.vue"]]);export{su as default};
