function e(){}function t(e,t){for(const r in t)e[r]=t[r];return e}function r(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(r)}function a(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t,r,n){if(e){const s=c(e,t,r,n);return e[0](s)}}function c(e,r,n,s){return e[1]&&s?t(n.ctx.slice(),e[1](s(r))):n.ctx}function i(e,t,r,n,s,a,l){const o=function(e,t,r,n){if(e[2]&&n){const s=e[2](n(r));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],r=Math.max(t.dirty.length,s.length);for(let n=0;n<r;n+=1)e[n]=t.dirty[n]|s[n];return e}return t.dirty|s}return t.dirty}(t,n,s,a);if(o){const s=c(t,r,n,l);e.p(s,o)}}function f(e,t){e.appendChild(t)}function u(e,t,r){e.insertBefore(t,r||null)}function h(e){e.parentNode.removeChild(e)}function p(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function m(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function g(){return d(" ")}function $(){return d("")}function v(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function b(e){return Array.from(e.childNodes)}function w(e,t,r,n){for(let n=0;n<e.length;n+=1){const s=e[n];if(s.nodeName===t){let t=0;const a=[];for(;t<s.attributes.length;){const e=s.attributes[t++];r[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)s.removeAttribute(a[e]);return e.splice(n,1)[0]}}return n?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function y(e,t){for(let r=0;r<e.length;r+=1){const n=e[r];if(3===n.nodeType)return n.data=""+t,e.splice(r,1)[0]}return d(t)}function E(e){return y(e," ")}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t,r){e.classList[r?"add":"remove"](t)}function S(e,t=document.body){return Array.from(t.querySelectorAll(e))}let I;function A(e){I=e}function k(){if(!I)throw new Error("Function called outside component initialization");return I}const N=[],P=[],j=[],L=[],R=Promise.resolve();let q=!1;function C(e){j.push(e)}let O=!1;const T=new Set;function M(){if(!O){O=!0;do{for(let e=0;e<N.length;e+=1){const t=N[e];A(t),H(t.$$)}for(A(null),N.length=0;P.length;)P.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];T.has(t)||(T.add(t),t())}j.length=0}while(N.length);for(;L.length;)L.pop()();q=!1,O=!1,T.clear()}}function H(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const U=new Set;let F;function D(){F={r:0,c:[],p:F}}function J(){F.r||s(F.c),F=F.p}function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function W(e,t,r,n){if(e&&e.o){if(U.has(e))return;U.add(e),F.c.push((()=>{U.delete(e),n&&(r&&e.d(1),n())})),e.o(t)}}function B(e,t){const r={},n={},s={$$scope:1};let a=e.length;for(;a--;){const l=e[a],o=t[a];if(o){for(const e in l)e in o||(n[e]=1);for(const e in o)s[e]||(r[e]=o[e],s[e]=1);e[a]=o}else for(const e in l)s[e]=1}for(const e in n)e in r||(r[e]=void 0);return r}function G(e){return"object"==typeof e&&null!==e?e:{}}function z(e){e&&e.c()}function K(e,t){e&&e.l(t)}function Y(e,t,n,l){const{fragment:o,on_mount:c,on_destroy:i,after_update:f}=e.$$;o&&o.m(t,n),l||C((()=>{const t=c.map(r).filter(a);i?i.push(...t):s(t),e.$$.on_mount=[]})),f.forEach(C)}function X(e,t){const r=e.$$;null!==r.fragment&&(s(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function Q(e,t){-1===e.$$.dirty[0]&&(N.push(e),q||(q=!0,R.then(M)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,r,a,l,o,c,i=[-1]){const f=I;A(t);const u=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:r.context||[]),callbacks:n(),dirty:i,skip_bound:!1};let p=!1;if(u.ctx=a?a(t,r.props||{},((e,r,...n)=>{const s=n.length?n[0]:r;return u.ctx&&o(u.ctx[e],u.ctx[e]=s)&&(!u.skip_bound&&u.bound[e]&&u.bound[e](s),p&&Q(t,e)),r})):[],u.update(),p=!0,s(u.before_update),u.fragment=!!l&&l(u.ctx),r.target){if(r.hydrate){const e=b(r.target);u.fragment&&u.fragment.l(e),e.forEach(h)}else u.fragment&&u.fragment.c();r.intro&&V(t.$$.fragment),Y(t,r.target,r.anchor,r.customElement),M()}A(f)}class ee{$destroy(){X(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const te=[];function re(t,r=e){let n;const s=[];function a(e){if(l(t,e)&&(t=e,n)){const e=!te.length;for(let e=0;e<s.length;e+=1){const r=s[e];r[1](),te.push(r,t)}if(e){for(let e=0;e<te.length;e+=2)te[e][0](te[e+1]);te.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(l,o=e){const c=[l,o];return s.push(c),1===s.length&&(n=r(a)||e),l(t),()=>{const e=s.indexOf(c);-1!==e&&s.splice(e,1),0===s.length&&(n(),n=null)}}}}const ne={};function se(t){let r,n,s,a,l,o,c,i,p,$,x,S,I,A,k,N,P,j,L,R;return{c(){r=m("nav"),n=m("a"),s=m("img"),l=g(),o=m("p"),c=d("Wolfram Friele"),i=g(),p=m("ul"),$=m("li"),x=m("a"),S=d("Work"),I=g(),A=m("li"),k=m("a"),N=d("About"),P=g(),j=m("li"),L=m("a"),R=d("Contact"),this.h()},l(e){r=w(e,"NAV",{class:!0});var t=b(r);n=w(t,"A",{id:!0,href:!0,class:!0});var a=b(n);s=w(a,"IMG",{src:!0,width:!0,height:!0,alt:!0,id:!0,class:!0}),l=E(a),o=w(a,"P",{id:!0,class:!0});var f=b(o);c=y(f,"Wolfram Friele"),f.forEach(h),a.forEach(h),i=E(t),p=w(t,"UL",{class:!0});var u=b(p);$=w(u,"LI",{class:!0});var m=b($);x=w(m,"A",{href:!0,class:!0});var d=b(x);S=y(d,"Work"),d.forEach(h),m.forEach(h),I=E(u),A=w(u,"LI",{class:!0});var g=b(A);k=w(g,"A",{href:!0,class:!0});var v=b(k);N=y(v,"About"),v.forEach(h),g.forEach(h),P=E(u),j=w(u,"LI",{class:!0});var _=b(j);L=w(_,"A",{href:!0,class:!0});var q=b(L);R=y(q,"Contact"),q.forEach(h),_.forEach(h),u.forEach(h),t.forEach(h),this.h()},h(){s.src!==(a="img/wolfram-friele-logo.svg")&&v(s,"src","img/wolfram-friele-logo.svg"),v(s,"width","44"),v(s,"height","30"),v(s,"alt",""),v(s,"id","logo"),v(s,"class","svelte-yxuxx"),v(o,"id","company-name"),v(o,"class","svelte-yxuxx"),v(n,"id","header-logo"),v(n,"href","."),v(n,"class","svelte-yxuxx"),v(x,"href","."),v(x,"class","svelte-yxuxx"),_(x,"current",null==t[0]),v($,"class","svelte-yxuxx"),v(k,"href","about"),v(k,"class","svelte-yxuxx"),_(k,"current","about"==t[0]),v(A,"class","svelte-yxuxx"),v(L,"href","contact"),v(L,"class","svelte-yxuxx"),_(L,"current","contact"==t[0]),v(j,"class","svelte-yxuxx"),v(p,"class","svelte-yxuxx"),v(r,"class","svelte-yxuxx")},m(e,t){u(e,r,t),f(r,n),f(n,s),f(n,l),f(n,o),f(o,c),f(r,i),f(r,p),f(p,$),f($,x),f(x,S),f(p,I),f(p,A),f(A,k),f(k,N),f(p,P),f(p,j),f(j,L),f(L,R)},p(e,[t]){1&t&&_(x,"current",null==e[0]),1&t&&_(k,"current","about"==e[0]),1&t&&_(L,"current","contact"==e[0])},i:e,o:e,d(e){e&&h(r)}}}function ae(e,t,r){let{segment:n}=t;return e.$$set=e=>{"segment"in e&&r(0,n=e.segment)},[n]}class le extends ee{constructor(e){super(),Z(this,e,ae,se,l,{segment:0})}}function oe(t){let r,n,s,a,l,o,c,i,p,$,x,_,S,I,A,k,N,P,j,L,R,q,C,O,T,M,H,U;return{c(){r=m("footer"),n=m("div"),s=m("h2"),a=d("Find me on_"),l=g(),o=m("ul"),c=m("li"),i=m("a"),p=d("LinkedIn"),$=g(),x=m("li"),_=m("a"),S=d("GitHub"),I=g(),A=m("li"),k=m("a"),N=d("Instagram"),P=g(),j=m("li"),L=m("a"),R=d("Behance"),q=g(),C=m("li"),O=m("a"),T=d("Twitter"),M=g(),H=m("p"),U=d("Wolfram Friele 2021 ©"),this.h()},l(e){r=w(e,"FOOTER",{class:!0});var t=b(r);n=w(t,"DIV",{id:!0,class:!0});var f=b(n);s=w(f,"H2",{class:!0});var u=b(s);a=y(u,"Find me on_"),u.forEach(h),l=E(f),o=w(f,"UL",{class:!0});var m=b(o);c=w(m,"LI",{class:!0});var d=b(c);i=w(d,"A",{href:!0,target:!0});var g=b(i);p=y(g,"LinkedIn"),g.forEach(h),d.forEach(h),$=E(m),x=w(m,"LI",{class:!0});var v=b(x);_=w(v,"A",{href:!0,target:!0});var F=b(_);S=y(F,"GitHub"),F.forEach(h),v.forEach(h),I=E(m),A=w(m,"LI",{class:!0});var D=b(A);k=w(D,"A",{href:!0,target:!0});var J=b(k);N=y(J,"Instagram"),J.forEach(h),D.forEach(h),P=E(m),j=w(m,"LI",{class:!0});var V=b(j);L=w(V,"A",{href:!0,target:!0});var W=b(L);R=y(W,"Behance"),W.forEach(h),V.forEach(h),q=E(m),C=w(m,"LI",{class:!0});var B=b(C);O=w(B,"A",{href:!0,target:!0});var G=b(O);T=y(G,"Twitter"),G.forEach(h),B.forEach(h),m.forEach(h),f.forEach(h),M=E(t),H=w(t,"P",{id:!0,class:!0});var z=b(H);U=y(z,"Wolfram Friele 2021 ©"),z.forEach(h),t.forEach(h),this.h()},h(){v(s,"class","svelte-x3s90c"),v(i,"href","https://www.linkedin.com/in/wolframfriele"),v(i,"target","_blank"),v(c,"class","svelte-x3s90c"),v(_,"href","https://www.github.com/Wolframfriele"),v(_,"target","_blank"),v(x,"class","svelte-x3s90c"),v(k,"href","https://www.instagram.com/wolframfriele/"),v(k,"target","_blank"),v(A,"class","svelte-x3s90c"),v(L,"href","https://www.behance.net/wolframfriele"),v(L,"target","_blank"),v(j,"class","svelte-x3s90c"),v(O,"href","https://www.twitter.com/Wolframfriele"),v(O,"target","_blank"),v(C,"class","svelte-x3s90c"),v(o,"class","svelte-x3s90c"),v(n,"id","footer-links"),v(n,"class","svelte-x3s90c"),v(H,"id","copyright"),v(H,"class","svelte-x3s90c"),v(r,"class","svelte-x3s90c")},m(e,t){u(e,r,t),f(r,n),f(n,s),f(s,a),f(n,l),f(n,o),f(o,c),f(c,i),f(i,p),f(o,$),f(o,x),f(x,_),f(_,S),f(o,I),f(o,A),f(A,k),f(k,N),f(o,P),f(o,j),f(j,L),f(L,R),f(o,q),f(o,C),f(C,O),f(O,T),f(r,M),f(r,H),f(H,U)},p:e,i:e,o:e,d(e){e&&h(r)}}}class ce extends ee{constructor(e){super(),Z(this,e,null,oe,l,{})}}function ie(e){let t,r,n,s,a,l;t=new le({props:{segment:e[0]}});const c=e[2].default,f=o(c,e,e[1],null);return a=new ce({}),{c(){z(t.$$.fragment),r=g(),n=m("main"),f&&f.c(),s=g(),z(a.$$.fragment)},l(e){K(t.$$.fragment,e),r=E(e),n=w(e,"MAIN",{});var l=b(n);f&&f.l(l),l.forEach(h),s=E(e),K(a.$$.fragment,e)},m(e,o){Y(t,e,o),u(e,r,o),u(e,n,o),f&&f.m(n,null),u(e,s,o),Y(a,e,o),l=!0},p(e,[r]){const n={};1&r&&(n.segment=e[0]),t.$set(n),f&&f.p&&2&r&&i(f,c,e,e[1],r,null,null)},i(e){l||(V(t.$$.fragment,e),V(f,e),V(a.$$.fragment,e),l=!0)},o(e){W(t.$$.fragment,e),W(f,e),W(a.$$.fragment,e),l=!1},d(e){X(t,e),e&&h(r),e&&h(n),f&&f.d(e),e&&h(s),X(a,e)}}}function fe(e,t,r){let{$$slots:n={},$$scope:s}=t,{segment:a}=t;return e.$$set=e=>{"segment"in e&&r(0,a=e.segment),"$$scope"in e&&r(1,s=e.$$scope)},[a,s,n]}class ue extends ee{constructor(e){super(),Z(this,e,fe,ie,l,{segment:0})}}function he(t){let r,n,s;return{c(){r=m("img"),this.h()},l(e){r=w(e,"IMG",{srcset:!0,src:!0,width:!0,height:!0,alt:!0,class:!0}),this.h()},h(){v(r,"srcset",n="\r\n  img/"+t[0]+"-mobile.webp  440w,\r\n  img/"+t[0]+"-small.webp   800w,\r\n  img/"+t[0]+"-medium.webp 1200w,\r\n  img/"+t[0]+"-large.webp  1920w\r\n  "),r.src!==(s="img/"+t[0]+"-mobile.webp")&&v(r,"src",s),v(r,"width","1920"),v(r,"height","250"),v(r,"alt",""),v(r,"class","cover-image svelte-rcui05")},m(e,t){u(e,r,t)},p(e,[t]){1&t&&n!==(n="\r\n  img/"+e[0]+"-mobile.webp  440w,\r\n  img/"+e[0]+"-small.webp   800w,\r\n  img/"+e[0]+"-medium.webp 1200w,\r\n  img/"+e[0]+"-large.webp  1920w\r\n  ")&&v(r,"srcset",n),1&t&&r.src!==(s="img/"+e[0]+"-mobile.webp")&&v(r,"src",s)},i:e,o:e,d(e){e&&h(r)}}}function pe(e,t,r){let{imageName:n}=t;return e.$$set=e=>{"imageName"in e&&r(0,n=e.imageName)},[n]}class me extends ee{constructor(e){super(),Z(this,e,pe,he,l,{imageName:0})}}function de(e){let t,r,n;return{c(){t=m("h2"),r=d(e[1]),n=d("_"),this.h()},l(s){t=w(s,"H2",{class:!0,"aria-label":!0});var a=b(t);r=y(a,e[1]),n=y(a,"_"),a.forEach(h),this.h()},h(){v(t,"class","brow-copy-right svelte-g5k4cz"),v(t,"aria-label",e[1])},m(e,s){u(e,t,s),f(t,r),f(t,n)},p(e,n){2&n&&x(r,e[1]),2&n&&v(t,"aria-label",e[1])},d(e){e&&h(t)}}}function ge(e){let t,r,n;return{c(){t=m("h2"),r=d(e[1]),n=d("_"),this.h()},l(s){t=w(s,"H2",{class:!0,"aria-label":!0});var a=b(t);r=y(a,e[1]),n=y(a,"_"),a.forEach(h),this.h()},h(){v(t,"class","brow-copy-left svelte-g5k4cz"),v(t,"aria-label",e[1])},m(e,s){u(e,t,s),f(t,r),f(t,n)},p(e,n){2&n&&x(r,e[1]),2&n&&v(t,"aria-label",e[1])},d(e){e&&h(t)}}}function $e(t){let r;function n(e,t){return 1==e[0]?ge:de}let s=n(t),a=s(t);return{c(){r=m("div"),a.c(),this.h()},l(e){r=w(e,"DIV",{class:!0});var t=b(r);a.l(t),t.forEach(h),this.h()},h(){v(r,"class","brow-container svelte-g5k4cz")},m(e,t){u(e,r,t),a.m(r,null)},p(e,[t]){s===(s=n(e))&&a?a.p(e,t):(a.d(1),a=s(e),a&&(a.c(),a.m(r,null)))},i:e,o:e,d(e){e&&h(r),a.d()}}}function ve(e,t,r){let{left:n=1}=t,{copy:s="Eyebrow Copy"}=t;return e.$$set=e=>{"left"in e&&r(0,n=e.left),"copy"in e&&r(1,s=e.copy)},[n,s]}class be extends ee{constructor(e){super(),Z(this,e,ve,$e,l,{left:0,copy:1})}}function we(e){let t,r,n;return{c(){t=m("img"),this.h()},l(e){t=w(e,"IMG",{srcset:!0,src:!0,width:!0,height:!0,alt:!0,class:!0}),this.h()},h(){v(t,"srcset",r="\r\n        img/"+e[2]+"-small.webp 420w,\r\n        img/"+e[2]+"-medium.webp 800w,\r\n        img/"+e[2]+"-large.webp 1200w\r\n      "),t.src!==(n="img/"+e[2]+"-small.webp")&&v(t,"src",n),v(t,"width","1200"),v(t,"height","585"),v(t,"alt",""),v(t,"class","svelte-1491ch4"),_(t,"wide-img-left",0==e[5]),_(t,"wide-img-right",1==e[5])},m(e,r){u(e,t,r)},p(e,s){4&s&&r!==(r="\r\n        img/"+e[2]+"-small.webp 420w,\r\n        img/"+e[2]+"-medium.webp 800w,\r\n        img/"+e[2]+"-large.webp 1200w\r\n      ")&&v(t,"srcset",r),4&s&&t.src!==(n="img/"+e[2]+"-small.webp")&&v(t,"src",n),32&s&&_(t,"wide-img-left",0==e[5]),32&s&&_(t,"wide-img-right",1==e[5])},d(e){e&&h(t)}}}function ye(e){let t,r,n;return{c(){t=m("img"),this.h()},l(e){t=w(e,"IMG",{srcset:!0,src:!0,width:!0,height:!0,alt:!0,class:!0}),this.h()},h(){v(t,"srcset",r="\r\n        img/"+e[3]+"-small.webp 430w,\r\n        img/"+e[3]+"-large.webp 750w\r\n      "),t.src!==(n="img/"+e[3]+"-small.webp")&&v(t,"src",n),v(t,"width","440"),v(t,"height","440"),v(t,"alt",""),v(t,"class","square-img svelte-1491ch4")},m(e,r){u(e,t,r)},p(e,s){8&s&&r!==(r="\r\n        img/"+e[3]+"-small.webp 430w,\r\n        img/"+e[3]+"-large.webp 750w\r\n      ")&&v(t,"srcset",r),8&s&&t.src!==(n="img/"+e[3]+"-small.webp")&&v(t,"src",n)},d(e){e&&h(t)}}}function Ee(e){let t,r;return{c(){t=m("h3"),r=d(e[0]),this.h()},l(n){t=w(n,"H3",{class:!0});var s=b(t);r=y(s,e[0]),s.forEach(h),this.h()},h(){v(t,"class","svelte-1491ch4"),_(t,"title-left",1==e[5]),_(t,"title-right",0==e[5])},m(e,n){u(e,t,n),f(t,r)},p(e,n){1&n&&x(r,e[0]),32&n&&_(t,"title-left",1==e[5]),32&n&&_(t,"title-right",0==e[5])},d(e){e&&h(t)}}}function xe(e){let t,r,n,s,a=Ne(e[6])+"";return{c(){t=m("em"),r=m("p"),n=m("strong"),s=d(a)},l(e){t=w(e,"EM",{});var l=b(t);r=w(l,"P",{});var o=b(r);n=w(o,"STRONG",{});var c=b(n);s=y(c,a),c.forEach(h),o.forEach(h),l.forEach(h)},m(e,a){u(e,t,a),f(t,r),f(r,n),f(n,s)},p(e,t){64&t&&a!==(a=Ne(e[6])+"")&&x(s,a)},d(e){e&&h(t)}}}function _e(e){let t,r,n;return{c(){t=m("em"),r=m("a"),n=d(e[7]),this.h()},l(s){t=w(s,"EM",{});var a=b(t);r=w(a,"A",{rel:!0,href:!0});var l=b(r);n=y(l,e[7]),l.forEach(h),a.forEach(h),this.h()},h(){v(r,"rel","prefetch"),v(r,"href",e[7])},m(e,s){u(e,t,s),f(t,r),f(r,n)},p(e,t){128&t&&x(n,e[7]),128&t&&v(r,"href",e[7])},d(e){e&&h(t)}}}function Se(e){let t,r;return{c(){t=m("p"),r=d(e[1])},l(n){t=w(n,"P",{});var s=b(t);r=y(s,e[1]),s.forEach(h)},m(e,n){u(e,t,n),f(t,r)},p(e,t){2&t&&x(r,e[1])},d(e){e&&h(t)}}}function Ie(e){let t,r,n,s,a;return{c(){t=m("em"),r=m("a"),n=d("See project"),this.h()},l(e){t=w(e,"EM",{});var s=b(t);r=w(s,"A",{rel:!0,href:!0,"aria-label":!0});var a=b(r);n=y(a,"See project"),a.forEach(h),s.forEach(h),this.h()},h(){v(r,"rel","prefetch"),v(r,"href",s="projects/"+e[4]),v(r,"aria-label",a="Project: "+e[0])},m(e,s){u(e,t,s),f(t,r),f(r,n)},p(e,t){16&t&&s!==(s="projects/"+e[4])&&v(r,"href",s),1&t&&a!==(a="Project: "+e[0])&&v(r,"aria-label",a)},d(e){e&&h(t)}}}function Ae(e){let t,r,n;return{c(){t=m("div"),r=m("iframe"),this.h()},l(e){t=w(e,"DIV",{class:!0});var n=b(t);r=w(n,"IFRAME",{title:!0,src:!0,width:!0,height:!0,frameborder:!0,allowfullscreen:!0,class:!0}),b(r).forEach(h),n.forEach(h),this.h()},h(){v(r,"title","Video Player"),r.src!==(n=e[8])&&v(r,"src",n),v(r,"width","1085"),v(r,"height","610"),v(r,"frameborder","0"),r.allowFullscreen=!0,v(r,"class","svelte-1491ch4"),v(t,"class","iframe-container svelte-1491ch4")},m(e,n){u(e,t,n),f(t,r)},p(e,t){256&t&&r.src!==(n=e[8])&&v(r,"src",n)},d(e){e&&h(t)}}}function ke(e){let t,r,n,s,a,l,c,p,d,$,y,x=e[2]&&we(e),S=e[3]&&ye(e),I=e[0]&&Ee(e);const A=e[10].default,k=o(A,e,e[9],null);let N=e[6]&&xe(e),P=e[7]&&_e(e),j=e[1]&&Se(e),L=e[4]&&Ie(e),R=e[8]&&Ae(e);return{c(){t=m("div"),x&&x.c(),r=g(),S&&S.c(),n=g(),I&&I.c(),s=g(),a=m("div"),k&&k.c(),l=g(),N&&N.c(),c=g(),P&&P.c(),p=g(),j&&j.c(),d=g(),L&&L.c(),$=g(),R&&R.c(),this.h()},l(e){t=w(e,"DIV",{class:!0});var o=b(t);x&&x.l(o),r=E(o),S&&S.l(o),n=E(o),I&&I.l(o),s=E(o),a=w(o,"DIV",{class:!0});var i=b(a);k&&k.l(i),l=E(i),N&&N.l(i),c=E(i),P&&P.l(i),p=E(i),j&&j.l(i),d=E(i),L&&L.l(i),i.forEach(h),$=E(o),R&&R.l(o),o.forEach(h),this.h()},h(){v(a,"class","svelte-1491ch4"),_(a,"paragraph-left",1==e[5]),_(a,"paragraph-right",0==e[5]),_(a,"align-right",0!=e[4]&&0==e[5]),v(t,"class","content-block svelte-1491ch4")},m(e,o){u(e,t,o),x&&x.m(t,null),f(t,r),S&&S.m(t,null),f(t,n),I&&I.m(t,null),f(t,s),f(t,a),k&&k.m(a,null),f(a,l),N&&N.m(a,null),f(a,c),P&&P.m(a,null),f(a,p),j&&j.m(a,null),f(a,d),L&&L.m(a,null),f(t,$),R&&R.m(t,null),y=!0},p(e,[l]){e[2]?x?x.p(e,l):(x=we(e),x.c(),x.m(t,r)):x&&(x.d(1),x=null),e[3]?S?S.p(e,l):(S=ye(e),S.c(),S.m(t,n)):S&&(S.d(1),S=null),e[0]?I?I.p(e,l):(I=Ee(e),I.c(),I.m(t,s)):I&&(I.d(1),I=null),k&&k.p&&512&l&&i(k,A,e,e[9],l,null,null),e[6]?N?N.p(e,l):(N=xe(e),N.c(),N.m(a,c)):N&&(N.d(1),N=null),e[7]?P?P.p(e,l):(P=_e(e),P.c(),P.m(a,p)):P&&(P.d(1),P=null),e[1]?j?j.p(e,l):(j=Se(e),j.c(),j.m(a,d)):j&&(j.d(1),j=null),e[4]?L?L.p(e,l):(L=Ie(e),L.c(),L.m(a,null)):L&&(L.d(1),L=null),32&l&&_(a,"paragraph-left",1==e[5]),32&l&&_(a,"paragraph-right",0==e[5]),48&l&&_(a,"align-right",0!=e[4]&&0==e[5]),e[8]?R?R.p(e,l):(R=Ae(e),R.c(),R.m(t,null)):R&&(R.d(1),R=null)},i(e){y||(V(k,e),y=!0)},o(e){W(k,e),y=!1},d(e){e&&h(t),x&&x.d(),S&&S.d(),I&&I.d(),k&&k.d(e),N&&N.d(),P&&P.d(),j&&j.d(),L&&L.d(),R&&R.d()}}}function Ne(e){let t=new Date(e);return`${["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]} ${t.getFullYear()}_`}function Pe(e,t,r){let{$$slots:n={},$$scope:s}=t,{title:a=!1}=t,{paragraph:l=!1}=t,{wideImage:o=!1}=t,{squareImage:c=!1}=t,{link:i=!1}=t,{left:f=0}=t,{date:u=!1}=t,{weblink:h=!1}=t,{video:p=!1}=t;return e.$$set=e=>{"title"in e&&r(0,a=e.title),"paragraph"in e&&r(1,l=e.paragraph),"wideImage"in e&&r(2,o=e.wideImage),"squareImage"in e&&r(3,c=e.squareImage),"link"in e&&r(4,i=e.link),"left"in e&&r(5,f=e.left),"date"in e&&r(6,u=e.date),"weblink"in e&&r(7,h=e.weblink),"video"in e&&r(8,p=e.video),"$$scope"in e&&r(9,s=e.$$scope)},[a,l,o,c,i,f,u,h,p,s,n]}class je extends ee{constructor(e){super(),Z(this,e,Pe,ke,l,{title:0,paragraph:1,wideImage:2,squareImage:3,link:4,left:5,date:6,weblink:7,video:8})}}function Le(e){let t,r,n;return{c(){t=m("h2"),r=m("a"),n=d("Say Hello"),this.h()},l(e){t=w(e,"H2",{class:!0});var s=b(t);r=w(s,"A",{href:!0,class:!0});var a=b(r);n=y(a,"Say Hello"),a.forEach(h),s.forEach(h),this.h()},h(){v(r,"href","contact"),v(r,"class","hello svelte-cqfrbx"),v(t,"class","hello-right svelte-cqfrbx")},m(e,s){u(e,t,s),f(t,r),f(r,n)},d(e){e&&h(t)}}}function Re(e){let t,r,n;return{c(){t=m("h2"),r=m("a"),n=d("Say Hello"),this.h()},l(e){t=w(e,"H2",{class:!0});var s=b(t);r=w(s,"A",{href:!0,class:!0});var a=b(r);n=y(a,"Say Hello"),a.forEach(h),s.forEach(h),this.h()},h(){v(r,"href","contact"),v(r,"class","hello svelte-cqfrbx"),v(t,"class","hello-left svelte-cqfrbx")},m(e,s){u(e,t,s),f(t,r),f(r,n)},d(e){e&&h(t)}}}function qe(t){let r;function n(e,t){return 1==e[0]?Re:Le}let s=n(t),a=s(t);return{c(){r=m("div"),a.c(),this.h()},l(e){r=w(e,"DIV",{class:!0});var t=b(r);a.l(t),t.forEach(h),this.h()},h(){v(r,"class","hello-container svelte-cqfrbx")},m(e,t){u(e,r,t),a.m(r,null)},p(e,[t]){s!==(s=n(e))&&(a.d(1),a=s(e),a&&(a.c(),a.m(r,null)))},i:e,o:e,d(e){e&&h(r),a.d()}}}function Ce(e,t,r){let{left:n=1}=t;return e.$$set=e=>{"left"in e&&r(0,n=e.left)},[n]}class Oe extends ee{constructor(e){super(),Z(this,e,Ce,qe,l,{left:0})}}function Te(e){let t,r,n=e[1].stack+"";return{c(){t=m("pre"),r=d(n)},l(e){t=w(e,"PRE",{});var s=b(t);r=y(s,n),s.forEach(h)},m(e,n){u(e,t,n),f(t,r)},p(e,t){2&t&&n!==(n=e[1].stack+"")&&x(r,n)},d(e){e&&h(t)}}}function Me(e){let t,r,n,s,a,l,o,c,i,p,d,v,y,x;document.title=t=e[0],s=new me({props:{imageName:"data-object"}}),o=new be({props:{copy:"Error Message",left:"0"}}),i=new je({props:{title:e[0],wideImage:"radio-telescopes",paragraph:e[1].message,left:"0"}}),d=new Oe({props:{left:"1"}});let _=e[2]&&e[1].stack&&Te(e);return{c(){r=g(),n=m("header"),z(s.$$.fragment),a=g(),l=m("section"),z(o.$$.fragment),c=g(),z(i.$$.fragment),p=g(),z(d.$$.fragment),v=g(),_&&_.c(),y=$()},l(e){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),r=E(e),n=w(e,"HEADER",{});var t=b(n);K(s.$$.fragment,t),t.forEach(h),a=E(e),l=w(e,"SECTION",{});var f=b(l);K(o.$$.fragment,f),c=E(f),K(i.$$.fragment,f),p=E(f),K(d.$$.fragment,f),f.forEach(h),v=E(e),_&&_.l(e),y=$()},m(e,t){u(e,r,t),u(e,n,t),Y(s,n,null),u(e,a,t),u(e,l,t),Y(o,l,null),f(l,c),Y(i,l,null),f(l,p),Y(d,l,null),u(e,v,t),_&&_.m(e,t),u(e,y,t),x=!0},p(e,[r]){(!x||1&r)&&t!==(t=e[0])&&(document.title=t);const n={};1&r&&(n.title=e[0]),2&r&&(n.paragraph=e[1].message),i.$set(n),e[2]&&e[1].stack?_?_.p(e,r):(_=Te(e),_.c(),_.m(y.parentNode,y)):_&&(_.d(1),_=null)},i(e){x||(V(s.$$.fragment,e),V(o.$$.fragment,e),V(i.$$.fragment,e),V(d.$$.fragment,e),x=!0)},o(e){W(s.$$.fragment,e),W(o.$$.fragment,e),W(i.$$.fragment,e),W(d.$$.fragment,e),x=!1},d(e){e&&h(r),e&&h(n),X(s),e&&h(a),e&&h(l),X(o),X(i),X(d),e&&h(v),_&&_.d(e),e&&h(y)}}}function He(e,t,r){let{status:n}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&r(0,n=e.status),"error"in e&&r(1,s=e.error)},[n,s,false]}class Ue extends ee{constructor(e){super(),Z(this,e,He,Me,l,{status:0,error:1})}}function Fe(e){let r,n,s;const a=[e[4].props];var l=e[4].component;function o(e){let r={};for(let e=0;e<a.length;e+=1)r=t(r,a[e]);return{props:r}}return l&&(r=new l(o())),{c(){r&&z(r.$$.fragment),n=$()},l(e){r&&K(r.$$.fragment,e),n=$()},m(e,t){r&&Y(r,e,t),u(e,n,t),s=!0},p(e,t){const s=16&t?B(a,[G(e[4].props)]):{};if(l!==(l=e[4].component)){if(r){D();const e=r;W(e.$$.fragment,1,0,(()=>{X(e,1)})),J()}l?(r=new l(o()),z(r.$$.fragment),V(r.$$.fragment,1),Y(r,n.parentNode,n)):r=null}else l&&r.$set(s)},i(e){s||(r&&V(r.$$.fragment,e),s=!0)},o(e){r&&W(r.$$.fragment,e),s=!1},d(e){e&&h(n),r&&X(r,e)}}}function De(e){let t,r;return t=new Ue({props:{error:e[0],status:e[1]}}),{c(){z(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){Y(t,e,n),r=!0},p(e,r){const n={};1&r&&(n.error=e[0]),2&r&&(n.status=e[1]),t.$set(n)},i(e){r||(V(t.$$.fragment,e),r=!0)},o(e){W(t.$$.fragment,e),r=!1},d(e){X(t,e)}}}function Je(e){let t,r,n,s;const a=[De,Fe],l=[];function o(e,t){return e[0]?0:1}return t=o(e),r=l[t]=a[t](e),{c(){r.c(),n=$()},l(e){r.l(e),n=$()},m(e,r){l[t].m(e,r),u(e,n,r),s=!0},p(e,s){let c=t;t=o(e),t===c?l[t].p(e,s):(D(),W(l[c],1,1,(()=>{l[c]=null})),J(),r=l[t],r?r.p(e,s):(r=l[t]=a[t](e),r.c()),V(r,1),r.m(n.parentNode,n))},i(e){s||(V(r),s=!0)},o(e){W(r),s=!1},d(e){l[t].d(e),e&&h(n)}}}function Ve(e){let r,n;const s=[{segment:e[2][0]},e[3].props];let a={$$slots:{default:[Je]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)a=t(a,s[e]);return r=new ue({props:a}),{c(){z(r.$$.fragment)},l(e){K(r.$$.fragment,e)},m(e,t){Y(r,e,t),n=!0},p(e,[t]){const n=12&t?B(s,[4&t&&{segment:e[2][0]},8&t&&G(e[3].props)]):{};147&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n)},i(e){n||(V(r.$$.fragment,e),n=!0)},o(e){W(r.$$.fragment,e),n=!1},d(e){X(r,e)}}}function We(e,t,r){let{stores:n}=t,{error:s}=t,{status:a}=t,{segments:l}=t,{level0:o}=t,{level1:c=null}=t,{notify:i}=t;var f,u,h;return f=i,k().$$.after_update.push(f),u=ne,h=n,k().$$.context.set(u,h),e.$$set=e=>{"stores"in e&&r(5,n=e.stores),"error"in e&&r(0,s=e.error),"status"in e&&r(1,a=e.status),"segments"in e&&r(2,l=e.segments),"level0"in e&&r(3,o=e.level0),"level1"in e&&r(4,c=e.level1),"notify"in e&&r(6,i=e.notify)},[s,a,l,o,c,n,i]}class Be extends ee{constructor(e){super(),Z(this,e,We,Ve,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Ge=[],ze=[{js:()=>Promise.all([import("./index.a4707be0.js"),__inject_styles(["client-b4e9e4bb.css","Intro-c62f19c1.css","index-e2a22bcb.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./[permalink].4b3ebedb.js"),__inject_styles(["client-b4e9e4bb.css","Intro-c62f19c1.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./contact.27490b46.js"),__inject_styles(["client-b4e9e4bb.css","Intro-c62f19c1.css","contact-486687f4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./about.f8c29c6d.js"),__inject_styles(["client-b4e9e4bb.css","Intro-c62f19c1.css","about-3656278b.css"])]).then((function(e){return e[0]}))}],Ke=(Ye=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/([^/]+?)\/?$/,parts:[null,{i:1,params:e=>({permalink:Ye(e[1])})}]},{pattern:/^\/contact\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]}]);var Ye;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xe(e,t,r,n){return new(r||(r=Promise))((function(s,a){function l(e){try{c(n.next(e))}catch(e){a(e)}}function o(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,o)}c((n=n.apply(e,t||[])).next())}))}function Qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let Ze,et=1;const tt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},rt={};let nt,st;function at(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((e=>{const[,r,n=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[r]&&(t[r]=[t[r]]),"object"==typeof t[r]?t[r].push(n):t[r]=n})),t}function lt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(nt))return null;let t=e.pathname.slice(nt.length);if(""===t&&(t="/"),!Ge.some((e=>e.test(t))))for(let r=0;r<Ke.length;r+=1){const n=Ke[r],s=n.pattern.exec(t);if(s){const r=at(e.search),a=n.parts[n.parts.length-1],l=a.params?a.params(s):{},o={host:location.host,path:t,query:r,params:l};return{href:e.href,route:n,match:s,page:o}}}}function ot(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=Qe(e.target);if(!t)return;if(!t.href)return;const r="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(r?t.target.baseVal:t.target)return;const s=new URL(n);if(s.pathname===location.pathname&&s.search===location.search)return;const a=lt(s);if(a){ft(a,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),tt.pushState({id:Ze},"",s.href)}}function ct(){return{x:pageXOffset,y:pageYOffset}}function it(e){if(rt[Ze]=ct(),e.state){const t=lt(new URL(location.href));t?ft(t,e.state.id):location.href=location.href}else et=et+1,function(e){Ze=e}(et),tt.replaceState({id:Ze},"",location.href)}function ft(e,t,r,n){return Xe(this,void 0,void 0,(function*(){const s=!!t;if(s)Ze=t;else{const e=ct();rt[Ze]=e,Ze=t=++et,rt[Ze]=r?e:{x:0,y:0}}if(yield st(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!r){let e,r=rt[t];n&&(e=document.getElementById(n.slice(1)),e&&(r={x:0,y:e.getBoundingClientRect().top+scrollY})),rt[Ze]=r,s||e?scrollTo(r.x,r.y):scrollTo(0,0)}}))}function ut(e){let t=e.baseURI;if(!t){const r=e.getElementsByTagName("base");t=r.length?r[0].href:e.URL}return t}let ht,pt=null;function mt(e){const t=Qe(e.target);t&&"prefetch"===t.rel&&function(e){const t=lt(new URL(e,ut(document)));if(t)pt&&e===pt.href||(pt={href:e,promise:jt(t)}),pt.promise}(t.href)}function dt(e){clearTimeout(ht),ht=setTimeout((()=>{mt(e)}),20)}function gt(e,t={noscroll:!1,replaceState:!1}){const r=lt(new URL(e,ut(document)));return r?(tt[t.replaceState?"replaceState":"pushState"]({id:Ze},"",e),ft(r,null,t.noscroll)):(location.href=e,new Promise((()=>{})))}const $t="undefined"!=typeof __SAPPER__&&__SAPPER__;let vt,bt,wt,yt=!1,Et=[],xt="{}";const _t={page:function(e){const t=re(e);let r=!0;return{notify:function(){r=!0,t.update((e=>e))},set:function(e){r=!1,t.set(e)},subscribe:function(e){let n;return t.subscribe((t=>{(void 0===n||r&&t!==n)&&e(n=t)}))}}}({}),preloading:re(null),session:re($t&&$t.session)};let St,It,At;function kt(e,t){const{error:r}=e;return Object.assign({error:r},t)}function Nt(e){return Xe(this,void 0,void 0,(function*(){vt&&_t.preloading.set(!0);const t=function(e){return pt&&pt.href===e.href?pt.promise:jt(e)}(e),r=bt={},n=yield t,{redirect:s}=n;if(r===bt)if(s)yield gt(s.location,{replaceState:!0});else{const{props:t,branch:r}=n;yield Pt(r,t,kt(t,e.page))}}))}function Pt(e,t,r){return Xe(this,void 0,void 0,(function*(){_t.page.set(r),_t.preloading.set(!1),vt?vt.$set(t):(t.stores={page:{subscribe:_t.page.subscribe},preloading:{subscribe:_t.preloading.subscribe},session:_t.session},t.level0={props:yield wt},t.notify=_t.page.notify,vt=new Be({target:At,props:t,hydrate:!0})),Et=e,xt=JSON.stringify(r.query),yt=!0,It=!1}))}function jt(e){return Xe(this,void 0,void 0,(function*(){const{route:t,page:r}=e,n=r.path.split("/").filter(Boolean);let s=null;const a={error:null,status:200,segments:[n[0]]},l={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};if(!wt){const e=()=>({});wt=$t.preloaded[0]||e.call(l,{host:r.host,path:r.path,query:r.query,params:{}},St)}let o,c=1;try{const s=JSON.stringify(r.query),i=t.pattern.exec(r.path);let f=!1;o=yield Promise.all(t.parts.map(((t,o)=>Xe(this,void 0,void 0,(function*(){const u=n[o];if(function(e,t,r,n){if(n!==xt)return!0;const s=Et[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0)}(o,u,i,s)&&(f=!0),a.segments[c]=n[o+1],!t)return{segment:u};const h=c++;if(!It&&!f&&Et[o]&&Et[o].part===t.i)return Et[o];f=!1;const{default:p,preload:m}=yield ze[t.i].js();let d;return d=yt||!$t.preloaded[o+1]?m?yield m.call(l,{host:r.host,path:r.path,query:r.query,params:t.params?t.params(e.match):{}},St):{}:$t.preloaded[o+1],a[`level${h}`]={component:p,props:d,segment:u,match:i,part:t.i}})))))}catch(e){a.error=e,a.status=500,o=[]}return{redirect:s,props:a,branch:o}}))}var Lt,Rt,qt;_t.session.subscribe((e=>Xe(void 0,void 0,void 0,(function*(){if(St=e,!yt)return;It=!0;const t=lt(new URL(location.href)),r=bt={},{redirect:n,props:s,branch:a}=yield jt(t);r===bt&&(n?yield gt(n.location,{replaceState:!0}):yield Pt(a,s,kt(s,t.page)))})))),Lt={target:document.querySelector("#sapper")},Rt=Lt.target,At=Rt,qt=$t.baseUrl,nt=qt,st=Nt,"scrollRestoration"in tt&&(tt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{tt.scrollRestoration="auto"})),addEventListener("load",(()=>{tt.scrollRestoration="manual"})),addEventListener("click",ot),addEventListener("popstate",it),addEventListener("touchstart",mt),addEventListener("mousemove",dt),$t.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:r}=location,{session:n,preloaded:s,status:a,error:l}=$t;wt||(wt=s&&s[0]);const o={error:l,status:a,session:n,level0:{props:wt},level1:{props:{status:a,error:l},component:Ue},segments:s},c=at(r);Pt([],o,{host:e,path:t,query:c,params:{},error:l})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;tt.replaceState({id:et},"",t);const r=lt(new URL(location.href));if(r)return ft(r,et,!0,e)}));export{_ as A,je as B,me as C,o as D,be as E,i as F,Oe as H,ee as S,K as a,W as b,z as c,X as d,g as e,m as f,h as g,E as h,Z as i,w as j,b as k,u as l,Y as m,e as n,f as o,J as p,S as q,p as r,l as s,V as t,D as u,d as v,y as w,v as x,x as y,$ as z};

import __inject_styles from './inject_styles.5607aec6.js';