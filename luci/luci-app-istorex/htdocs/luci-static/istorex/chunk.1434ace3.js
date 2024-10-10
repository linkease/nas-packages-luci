import{_ as I,d as S,I as x,E as P,a as l,x as w,J as y,o,c,h as r,f as t,t as e,u as d,K as b,p as A,q as N,L as U}from"./index.js?v=bd1b282f";const s=u=>(A("data-v-934b24da"),u=u(),N(),u),V={id:"page",class:"page-container"},j={class:"text-container"},H={class:"text-container_item"},L=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u8054\u7F51\u72B6\u6001:")],-1)),q={class:"text-container_item_value"},J={key:0},K={key:1},$={key:2},z={key:4},G={class:"text-container_item"},M=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u8FDE\u63A5\u65B9\u5F0F:")],-1)),O={class:"text-container_item_value"},Q={class:"text-container_item"},R=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5728\u7EBF\u8BBE\u5907:")],-1)),T={class:"text-container_item_value"},W={class:"text-container_item"},X=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"IPv4\u5730\u5740:")],-1)),Y={class:"text-container_item_value"},Z={key:0,class:"text-container_item"},tt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"IPv6\u5730\u5740:")],-1)),et={class:"text-container_item_value"},st={class:"text-container_item"},nt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"DNS:")],-1)),at={class:"text-container_item_value"},it={class:"text-container"},ot={class:"text-container_item"},ct=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u7CFB\u7EDF\u540D\u79F0:")],-1)),_t={class:"text-container_item_value"},ut={class:"text-container_item"},lt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u56FA\u4EF6\u7248\u672C:")],-1)),rt={class:"text-container_item_value"},dt={class:"text-container_item"},vt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5185\u6838\u7248\u672C:")],-1)),pt={class:"text-container_item_value"},mt={class:"text-container_item"},ht=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5DF2\u542F\u52A8:")],-1)),xt={class:"text-container_item_value"},Ft={class:"text-container_item"},gt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u7CFB\u7EDF\u65F6\u95F4:")],-1)),Et={class:"text-container_item_value"},Bt={class:"text-container"},ft={class:"text-container_item"},Dt={class:"text-container_item_title"},kt={class:"text-container_item_value"},Ct={class:"progress-container"},It={class:"text-container_item"},St=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"CPU:")],-1)),Pt={class:"text-container_item_value"},wt={class:"progress-container"},yt=["value"],bt={class:"text-container_item"},At=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5185\u5B58:")],-1)),Nt={class:"text-container_item_value"},Ut={class:"progress-container"},Vt=["value"],jt=S({__name:"index",setup(u){const{$gettext:F}=U,g=x.stampForm,E=x.stampForm,_=P(),n=l(()=>_.network),B=l(()=>_.device),a=w({cpuusage:0,temperature:0,menavailablePercentage:0,menusage:0}),v=l(()=>_.version),p=l(()=>_.time),f=i=>{switch(i){case"pppoe":return"\u62E8\u53F7\u4E0A\u7F51";case"static":return"\u9759\u6001\u7F51\u7EDC";case"dhcp":return"DHCP"}},D=i=>{switch(i){case"manual":return"\u624B\u52A8\u914D\u7F6E";case"auto":return"\u81EA\u52A8\u83B7\u53D6";default:return""}},k=i=>i.toUpperCase(),m=()=>{_.getSystemData().then(i=>{a.cpuusage=i.cpu.usage,a.temperature=i.cpu.temperature,a.menavailablePercentage=i.memery.availablePercentage||100,a.menusage=100-a.menavailablePercentage})};m();const C=setInterval(()=>{m()},5e3);return y(()=>{clearInterval(C)}),(i,Ht)=>{var h;return o(),c("div",V,[r(" \u72B6\u6001\u4FE1\u606F "),t("div",j,[t("div",H,[L,t("div",q,[n.value.networkInfo=="netSuccess"?(o(),c("span",J," \u5DF2\u8054\u7F51 ("+e(d(g)(n.value.uptimeStamp))+") ",1)):n.value.networkInfo=="dnsFailed"?(o(),c("span",K," DNS\u9519\u8BEF ")):n.value.networkInfo=="softSourceFailed"?(o(),c("span",$," \u8F6F\u4EF6\u6E90\u89E3\u6790\u9519\u8BEF ")):(o(),c("span",z," \u68C0\u6D4B\u4E2D "))])]),t("div",G,[M,t("div",O,e(k(n.value.defaultInterface||"")),1)]),t("div",Q,[R,t("div",T,e(B.value.devices.length),1)]),t("div",W,[X,t("div",Y,e(n.value.ipv4addr)+"\uFF08"+e(f(n.value.proto||""))+"\uFF09 ",1)]),n.value.ipv6addr?(o(),c("div",Z,[tt,t("div",et,e(n.value.ipv6addr),1)])):r("v-if",!0),t("div",st,[nt,t("div",at,[t("p",null,e(D(n.value.dnsProto)),1),t("p",null,e((h=n.value.dnsList)==null?void 0:h.join(", ")),1)])])]),r(" \u7CFB\u7EDF\u4FE1\u606F "),t("div",it,[t("div",ot,[ct,t("div",_t,[t("span",null,e(d(b).HostName),1)])]),t("div",ut,[lt,t("div",rt,[t("span",null,e(v.value.firmwareVersion),1)])]),t("div",dt,[vt,t("div",pt,[t("span",null,e(v.value.kernelVersion),1)])]),t("div",mt,[ht,t("div",xt,[t("span",null,e(d(E)(p.value.uptime)),1)])]),t("div",Ft,[gt,t("div",Et,[t("span",null,e(p.value.localtime),1)])])]),r(" \u4F7F\u7528\u7387\u4FE1\u606F "),t("div",Bt,[t("div",ft,[t("div",Dt,[t("span",null,e(d(F)("\u6E29\u5EA6"))+":",1)]),t("div",kt,[t("div",Ct,[t("span",null,e(a.temperature||"--")+"\u2103",1)])])]),t("div",It,[St,t("div",Pt,[t("div",wt,[t("progress",{value:a.cpuusage||0,max:"100"},null,8,yt),t("span",null,e(a.cpuusage)+"%",1)])])]),t("div",bt,[At,t("div",Nt,[t("div",Ut,[t("progress",{value:a.menusage||0,max:"100"},null,8,Vt),t("span",null,e(a.menusage)+"% ",1)])])])])])}}});var qt=I(jt,[["__scopeId","data-v-934b24da"],["__file","/projects/github/linkease/istorex/web/src/pages/router/index/index.vue"]]);export{qt as default};