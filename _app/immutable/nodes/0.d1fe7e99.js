import{s as E,n as m,c as C,u as D,g as I,d as N}from"../chunks/scheduler.e108d1fd.js";import{S as M,i as O,g as h,h as d,x as V,k as $,a as S,f as _,m as g,j as x,n as v,y as p,r as j,s as F,u as H,c as L,v as z,d as b,t as y,w as A}from"../chunks/index.5ae4157e.js";import{b as w}from"../chunks/paths.1e195bcf.js";const k=!0,W=Object.freeze(Object.defineProperty({__proto__:null,prerender:k},Symbol.toStringTag,{value:"Module"}));const q="rizal suryawan";function P(c){let t,a=`<ul class="navbar-menu"><li><a href="${w}/showcase">showcase</a></li> <li><a href="${w}/blog">blog</a></li> <li><a href="${w}/about">about</a></li></ul> <button class="button-hire"><span class="mdi mdi-briefcase-plus-outline"></span> <p>hire me</p></button>`;return{c(){t=h("nav"),t.innerHTML=a,this.h()},l(s){t=d(s,"NAV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-19c0lda"&&(t.innerHTML=a),this.h()},h(){$(t,"class","navbar")},m(s,n){S(s,t,n)},p:m,i:m,o:m,d(s){s&&_(t)}}}class R extends M{constructor(t){super(),O(this,t,null,P,E,{})}}function Y(c){let t,a=q+"",s,n,f=new Date().getFullYear()+"",o;return{c(){t=h("footer"),s=g(a),n=g(" © "),o=g(f),this.h()},l(l){t=d(l,"FOOTER",{class:!0});var u=x(t);s=v(u,a),n=v(u," © "),o=v(u,f),u.forEach(_),this.h()},h(){$(t,"class","text-white")},m(l,u){S(l,t,u),p(t,s),p(t,n),p(t,o)},p:m,i:m,o:m,d(l){l&&_(t)}}}class B extends M{constructor(t){super(),O(this,t,null,Y,E,{})}}function G(c){let t,a,s,n,f,o,l;a=new R({});const u=c[1].default,r=C(u,c,c[0],null);return o=new B({}),{c(){t=h("div"),j(a.$$.fragment),s=F(),n=h("main"),r&&r.c(),f=F(),j(o.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var i=x(t);H(a.$$.fragment,i),s=L(i),n=d(i,"MAIN",{class:!0});var T=x(n);r&&r.l(T),T.forEach(_),f=L(i),H(o.$$.fragment,i),i.forEach(_),this.h()},h(){$(n,"class",""),$(t,"class","page-container")},m(e,i){S(e,t,i),z(a,t,null),p(t,s),p(t,n),r&&r.m(n,null),p(t,f),z(o,t,null),l=!0},p(e,[i]){r&&r.p&&(!l||i&1)&&D(r,u,e,e[0],l?N(u,e[0],i,null):I(e[0]),null)},i(e){l||(b(a.$$.fragment,e),b(r,e),b(o.$$.fragment,e),l=!0)},o(e){y(a.$$.fragment,e),y(r,e),y(o.$$.fragment,e),l=!1},d(e){e&&_(t),A(a),r&&r.d(e),A(o)}}}function J(c,t,a){let{$$slots:s={},$$scope:n}=t;return c.$$set=f=>{"$$scope"in f&&a(0,n=f.$$scope)},[n,s]}class X extends M{constructor(t){super(),O(this,t,J,G,E,{})}}export{X as component,W as universal};
