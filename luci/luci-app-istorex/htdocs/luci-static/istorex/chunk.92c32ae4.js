import{_ as C,d as I,I as h,E as S,a as l,x as P,J as y,o,c,f as t,t as e,u as d,h as w,K as A,p as b,q as N,L as U}from"./index.js?v=9df63d42";const s=u=>(b("data-v-7ed9d691"),u=u(),N(),u),V={id:"page",class:"page-container"},H={class:"text-container"},L={class:"text-container_item"},j=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u8054\u7F51\u72B6\u6001:")],-1)),q={class:"text-container_item_value"},J={key:0},K={key:1},$={key:2},z={key:4},G={class:"text-container_item"},M=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u8FDE\u63A5\u65B9\u5F0F:")],-1)),O={class:"text-container_item_value"},Q={class:"text-container_item"},R=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5728\u7EBF\u8BBE\u5907:")],-1)),T={class:"text-container_item_value"},W={class:"text-container_item"},X=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"IPv4\u5730\u5740:")],-1)),Y={class:"text-container_item_value"},Z={key:0,class:"text-container_item"},tt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"IPv6\u5730\u5740:")],-1)),et={class:"text-container_item_value"},st={class:"text-container_item"},nt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"DNS:")],-1)),at={class:"text-container_item_value"},it={class:"text-container"},ot={class:"text-container_item"},ct=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u7CFB\u7EDF\u540D\u79F0:")],-1)),_t={class:"text-container_item_value"},ut={class:"text-container_item"},lt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u56FA\u4EF6\u7248\u672C:")],-1)),dt={class:"text-container_item_value"},rt={class:"text-container_item"},vt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5185\u6838\u7248\u672C:")],-1)),pt={class:"text-container_item_value"},mt={class:"text-container_item"},ht=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5DF2\u542F\u52A8:")],-1)),xt={class:"text-container_item_value"},Ft={class:"text-container_item"},gt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u7CFB\u7EDF\u65F6\u95F4:")],-1)),Et={class:"text-container_item_value"},Bt={class:"text-container"},Dt={class:"text-container_item"},ft={class:"text-container_item_title"},kt={class:"text-container_item_value"},Ct={class:"progress-container"},It={class:"text-container_item"},St=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"CPU:")],-1)),Pt={class:"text-container_item_value"},yt={class:"progress-container"},wt=["value"],At={class:"text-container_item"},bt=s(()=>t("div",{class:"text-container_item_title"},[t("span",null,"\u5185\u5B58:")],-1)),Nt={class:"text-container_item_value"},Ut={class:"progress-container"},Vt=["value"],Ht=I({__name:"index",setup(u){const{$gettext:x}=U,F=h.stampForm,g=h.stampForm,_=S(),n=l(()=>_.network),E=l(()=>_.device),a=P({cpuusage:0,temperature:0,menavailablePercentage:0,menusage:0}),r=l(()=>_.version),v=l(()=>_.time),B=i=>{switch(i){case"pppoe":return"\u62E8\u53F7\u4E0A\u7F51";case"static":return"\u9759\u6001\u7F51\u7EDC";case"dhcp":return"DHCP"}},D=i=>{switch(i){case"manual":return"\u624B\u52A8\u914D\u7F6E";case"auto":return"\u81EA\u52A8\u83B7\u53D6";default:return""}},f=i=>i.toUpperCase(),p=()=>{_.getSystemData().then(i=>{a.cpuusage=i.cpu.usage,a.temperature=i.cpu.temperature,a.menavailablePercentage=i.memery.availablePercentage||100,a.menusage=100-a.menavailablePercentage})};p();const k=setInterval(()=>{p()},5e3);return y(()=>{clearInterval(k)}),(i,Lt)=>{var m;return o(),c("div",V,[t("div",H,[t("div",L,[j,t("div",q,[n.value.networkInfo=="netSuccess"?(o(),c("span",J," \u5DF2\u8054\u7F51 ("+e(d(F)(n.value.uptimeStamp))+") ",1)):n.value.networkInfo=="dnsFailed"?(o(),c("span",K," DNS\u9519\u8BEF ")):n.value.networkInfo=="softSourceFailed"?(o(),c("span",$," \u8F6F\u4EF6\u6E90\u89E3\u6790\u9519\u8BEF ")):(o(),c("span",z," \u68C0\u6D4B\u4E2D "))])]),t("div",G,[M,t("div",O,e(f(n.value.defaultInterface||"")),1)]),t("div",Q,[R,t("div",T,e(E.value.devices.length),1)]),t("div",W,[X,t("div",Y,e(n.value.ipv4addr)+"\uFF08"+e(B(n.value.proto||""))+"\uFF09 ",1)]),n.value.ipv6addr?(o(),c("div",Z,[tt,t("div",et,e(n.value.ipv6addr),1)])):w("",!0),t("div",st,[nt,t("div",at,[t("p",null,e(D(n.value.dnsProto)),1),t("p",null,e((m=n.value.dnsList)==null?void 0:m.join(", ")),1)])])]),t("div",it,[t("div",ot,[ct,t("div",_t,[t("span",null,e(d(A).HostName),1)])]),t("div",ut,[lt,t("div",dt,[t("span",null,e(r.value.firmwareVersion),1)])]),t("div",rt,[vt,t("div",pt,[t("span",null,e(r.value.kernelVersion),1)])]),t("div",mt,[ht,t("div",xt,[t("span",null,e(d(g)(v.value.uptime)),1)])]),t("div",Ft,[gt,t("div",Et,[t("span",null,e(v.value.localtime),1)])])]),t("div",Bt,[t("div",Dt,[t("div",ft,[t("span",null,e(d(x)("\u6E29\u5EA6"))+":",1)]),t("div",kt,[t("div",Ct,[t("span",null,e(a.temperature||"--")+"\u2103",1)])])]),t("div",It,[St,t("div",Pt,[t("div",yt,[t("progress",{value:a.cpuusage||0,max:"100"},null,8,wt),t("span",null,e(a.cpuusage)+"%",1)])])]),t("div",At,[bt,t("div",Nt,[t("div",Ut,[t("progress",{value:a.menusage||0,max:"100"},null,8,Vt),t("span",null,e(a.menusage)+"% ",1)])])])])])}}});var qt=C(Ht,[["__scopeId","data-v-7ed9d691"]]);export{qt as default};
