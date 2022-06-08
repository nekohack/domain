import{T as R,S as ne,i as se,s as re,e as y,k as B,c as E,a as V,m as U,d as k,b as r,J as Y,g as P,K as g,U as D,V as ae,W as le,X as ie,Y as de,Z as G,_ as ue,t as he,Q as pe,h as ce,$ as fe,q as ve,r as me,p as _e,o as ge,a0 as je,n as be}from"../../chunks/index-e3300e44.js";function I(i,{pending:e,error:t,result:o}){let c;async function j(h){const u=c={};h.preventDefault();const f=new FormData(i);e&&e(f,i);try{const s=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:f});if(u!==c)return;s.ok?o(s,i):t?t(s,null,i):console.error(await s.text())}catch(s){if(t)t(null,s,i);else throw s}}return i.addEventListener("submit",j),{destroy(){i.removeEventListener("submit",j)}}}function oe(i){const e=i-1;return e*e*e+1}function $(i,{delay:e=0,duration:t=400,easing:o=oe,start:c=0,opacity:j=0}={}){const h=getComputedStyle(i),u=+h.opacity,f=h.transform==="none"?"":h.transform,s=1-c,n=u*(1-j);return{delay:e,duration:t,easing:o,css:(v,p)=>`
			transform: ${f} scale(${1-s*p});
			opacity: ${u-n*p}
		`}}function ke(i,{from:e,to:t},o={}){const c=getComputedStyle(i),j=c.transform==="none"?"":c.transform,[h,u]=c.transformOrigin.split(" ").map(parseFloat),f=e.left+e.width*h/t.width-(t.left+h),s=e.top+e.height*u/t.height-(t.top+u),{delay:n=0,duration:v=_=>Math.sqrt(_)*120,easing:p=oe}=o;return{delay:n,duration:R(v)?v(Math.sqrt(f*f+s*s)):v,easing:p,css:(_,w)=>{const x=w*f,C=w*s,a=_+w*e.width/t.width,d=_+w*e.height/t.height;return`transform: ${j} translate(${x}px, ${C}px) scale(${a}, ${d});`}}}function ee(i,e,t){const o=i.slice();return o[6]=e[t],o[7]=e,o[8]=t,o}function te(i,e){let t,o,c,j,h,u,f,s,n,v,p,_,w,x,C,a,d,l,M,F,H,L,S,O,Z,z=be,T,A,J;function K(...b){return e[3](e[6],e[7],e[8],...b)}function Q(){return e[4](e[6],e[7],e[8])}function W(){return e[5](e[6])}return{key:i,first:null,c(){t=y("div"),o=y("form"),c=y("input"),h=B(),u=y("button"),v=B(),p=y("form"),_=y("input"),x=B(),C=y("button"),d=B(),l=y("form"),M=y("button"),S=B(),this.h()},l(b){t=E(b,"DIV",{class:!0});var m=V(t);o=E(m,"FORM",{action:!0,method:!0});var N=V(o);c=E(N,"INPUT",{type:!0,name:!0,class:!0}),h=U(N),u=E(N,"BUTTON",{class:!0,"aria-label":!0}),V(u).forEach(k),N.forEach(k),v=U(m),p=E(m,"FORM",{class:!0,action:!0,method:!0});var q=V(p);_=E(q,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),x=U(q),C=E(q,"BUTTON",{class:!0,"aria-label":!0}),V(C).forEach(k),q.forEach(k),d=U(m),l=E(m,"FORM",{action:!0,method:!0});var X=V(l);M=E(X,"BUTTON",{class:!0,"aria-label":!0}),V(M).forEach(k),X.forEach(k),S=U(m),m.forEach(k),this.h()},h(){r(c,"type","hidden"),r(c,"name","done"),c.value=j=e[6].done?"":"true",r(c,"class","svelte-14pjreh"),r(u,"class","toggle svelte-14pjreh"),r(u,"aria-label",f="Mark todo as "+(e[6].done?"not done":"done")),r(o,"action",s="/todos/"+e[6].uid+".json?_method=patch"),r(o,"method","post"),r(_,"aria-label","Edit todo"),r(_,"type","text"),r(_,"name","text"),_.value=w=e[6].text,r(_,"class","svelte-14pjreh"),r(C,"class","save svelte-14pjreh"),r(C,"aria-label","Save todo"),r(p,"class","text svelte-14pjreh"),r(p,"action",a="/todos/"+e[6].uid+".json?_method=patch"),r(p,"method","post"),r(M,"class","delete svelte-14pjreh"),r(M,"aria-label","Delete todo"),M.disabled=F=e[6].pending_delete,r(l,"action",H="/todos/"+e[6].uid+".json?_method=delete"),r(l,"method","post"),r(t,"class","todo svelte-14pjreh"),Y(t,"done",e[6].done),this.first=t},m(b,m){P(b,t,m),g(t,o),g(o,c),g(o,h),g(o,u),g(t,v),g(t,p),g(p,_),g(p,x),g(p,C),g(t,d),g(t,l),g(l,M),g(t,S),T=!0,A||(J=[D(n=I.call(null,o,{pending:K,result:e[1]})),D(I.call(null,p,{result:e[1]})),D(L=I.call(null,l,{pending:Q,result:W}))],A=!0)},p(b,m){e=b,(!T||m&1&&j!==(j=e[6].done?"":"true"))&&(c.value=j),(!T||m&1&&f!==(f="Mark todo as "+(e[6].done?"not done":"done")))&&r(u,"aria-label",f),(!T||m&1&&s!==(s="/todos/"+e[6].uid+".json?_method=patch"))&&r(o,"action",s),n&&R(n.update)&&m&1&&n.update.call(null,{pending:K,result:e[1]}),(!T||m&1&&w!==(w=e[6].text)&&_.value!==w)&&(_.value=w),(!T||m&1&&a!==(a="/todos/"+e[6].uid+".json?_method=patch"))&&r(p,"action",a),(!T||m&1&&F!==(F=e[6].pending_delete))&&(M.disabled=F),(!T||m&1&&H!==(H="/todos/"+e[6].uid+".json?_method=delete"))&&r(l,"action",H),L&&R(L.update)&&m&1&&L.update.call(null,{pending:Q,result:W}),m&1&&Y(t,"done",e[6].done)},r(){Z=t.getBoundingClientRect()},f(){ae(t),z(),le(t,Z)},a(){z(),z=ie(t,Z,ke,{duration:200})},i(b){T||(b&&de(()=>{O||(O=G(t,$,{start:.7},!0)),O.run(1)}),T=!0)},o(b){b&&(O||(O=G(t,$,{start:.7},!1)),O.run(0)),T=!1},d(b){b&&k(t),b&&O&&O.end(),A=!1,ue(J)}}}function we(i){let e,t,o,c,j,h,u,f,s,n=[],v=new Map,p,_,w,x=i[0];const C=a=>a[6].uid;for(let a=0;a<x.length;a+=1){let d=ee(i,x,a),l=C(d);v.set(l,n[a]=te(l,d))}return{c(){e=B(),t=y("div"),o=y("h1"),c=he("Todos"),j=B(),h=y("form"),u=y("input"),s=B();for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){pe('[data-svelte="svelte-3ndpt0"]',document.head).forEach(k),e=U(a),t=E(a,"DIV",{class:!0});var l=V(t);o=E(l,"H1",{});var M=V(o);c=ce(M,"Todos"),M.forEach(k),j=U(l),h=E(l,"FORM",{class:!0,action:!0,method:!0});var F=V(h);u=E(F,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),F.forEach(k),s=U(l);for(let H=0;H<n.length;H+=1)n[H].l(l);l.forEach(k),this.h()},h(){document.title="Todos",r(u,"name","text"),r(u,"aria-label","Add todo"),r(u,"placeholder","+ tap to add a todo"),r(u,"class","svelte-14pjreh"),r(h,"class","new svelte-14pjreh"),r(h,"action","/todos.json"),r(h,"method","post"),r(t,"class","todos svelte-14pjreh")},m(a,d){P(a,e,d),P(a,t,d),g(t,o),g(o,c),g(t,j),g(t,h),g(h,u),g(t,s);for(let l=0;l<n.length;l+=1)n[l].m(t,null);p=!0,_||(w=D(f=I.call(null,h,{result:i[2]})),_=!0)},p(a,[d]){if(f&&R(f.update)&&d&1&&f.update.call(null,{result:a[2]}),d&3){x=a[0],ge();for(let l=0;l<n.length;l+=1)n[l].r();n=fe(n,d,C,1,a,x,v,t,je,te,null,ee);for(let l=0;l<n.length;l+=1)n[l].a();ve()}},i(a){if(!p){for(let d=0;d<x.length;d+=1)me(n[d]);p=!0}},o(a){for(let d=0;d<n.length;d+=1)_e(n[d]);p=!1},d(a){a&&k(e),a&&k(t);for(let d=0;d<n.length;d+=1)n[d].d();_=!1,w()}}}const xe=async({fetch:i})=>{const e=await i("/todos.json");if(e.ok)return{props:{todos:await e.json()}};const{message:t}=await e.json();return{error:new Error(t)}};function ye(i,e,t){let{todos:o}=e;async function c(s){const n=await s.json();t(0,o=o.map(v=>v.uid===n.uid?n:v))}const j=async(s,n)=>{const v=await s.json();t(0,o=[...o,v]),n.reset()},h=(s,n,v,p)=>{t(0,n[v].done=!!p.get("done"),o)},u=(s,n,v)=>t(0,n[v].pending_delete=!0,o),f=s=>{t(0,o=o.filter(n=>n.uid!==s.uid))};return i.$$set=s=>{"todos"in s&&t(0,o=s.todos)},[o,c,j,h,u,f]}class Ce extends ne{constructor(e){super(),se(this,e,ye,we,re,{todos:0})}}export{Ce as default,xe as load};
