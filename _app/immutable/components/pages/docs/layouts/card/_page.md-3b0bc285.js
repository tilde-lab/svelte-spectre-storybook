import{S as N,i as J,s as O,k as d,q as v,a as B,w as E,l as _,m as T,r as b,h as r,c as j,x as L,n as h,b as f,L as C,y as P,f as $,t as x,z as D,g as Q,d as U,K as W,B as A,am as X}from"../../../../../chunks/index-3764ed31.js";import{b as Y}from"../../../../../chunks/paths-6cd3a76e.js";/* empty css                                                                  */import{B as I}from"../../../../../chunks/Button-d955df96.js";import{D as K}from"../../../../../chunks/Divider-a310aea8.js";import{C as Z}from"../../../../../chunks/Card-ff5aba5f.js";import{G as aa,C as sa}from"../../../../../chunks/Col-02e68245.js";function q(c,a,n){const s=c.slice();return s[1]=a[n].col,s[2]=a[n].pos,s[3]=a[n].img,s[4]=a[n].text,s}function na(c){let a,n=c[4]+"",s;return{c(){a=d("p"),s=v(n)},l(t){a=_(t,"P",{});var p=T(a);s=b(p,n),p.forEach(r)},m(t,p){f(t,a,p),C(a,s)},p:A,d(t){t&&r(a)}}}function ta(c){let a,n;return{c(){a=d("img"),this.h()},l(s){a=_(s,"IMG",{class:!0,src:!0,alt:!0,slot:!0}),this.h()},h(){h(a,"class","img-responsive"),X(a.src,n=Y+"/img/"+c[3])||h(a,"src",n),h(a,"alt","img"),h(a,"slot","img")},m(s,t){f(s,a,t)},p:A,d(s){s&&r(a)}}}function ea(c){let a,n;return{c(){a=d("div"),n=v("Title"),this.h()},l(s){a=_(s,"DIV",{slot:!0,class:!0});var t=T(a);n=b(t,"Title"),t.forEach(r),this.h()},h(){h(a,"slot","title"),h(a,"class","h5")},m(s,t){f(s,a,t),C(a,n)},p:A,d(s){s&&r(a)}}}function pa(c){let a,n;return{c(){a=d("div"),n=v("SubTitle"),this.h()},l(s){a=_(s,"DIV",{slot:!0,class:!0});var t=T(a);n=b(t,"SubTitle"),t.forEach(r),this.h()},h(){h(a,"slot","subtitle"),h(a,"class","text-gray")},m(s,t){f(s,a,t),C(a,n)},p:A,d(s){s&&r(a)}}}function oa(c){let a;return{c(){a=v("Primary")},l(n){a=b(n,"Primary")},m(n,s){f(n,a,s)},d(n){n&&r(a)}}}function la(c){let a;return{c(){a=v("Link")},l(n){a=b(n,"Link")},m(n,s){f(n,a,s)},d(n){n&&r(a)}}}function ca(c){let a,n,s,t;return a=new I({props:{variant:"primary",href:"#cards",$$slots:{default:[oa]},$$scope:{ctx:c}}}),s=new I({props:{variant:"link",href:"#cards",$$slots:{default:[la]},$$scope:{ctx:c}}}),{c(){E(a.$$.fragment),n=B(),E(s.$$.fragment)},l(p){L(a.$$.fragment,p),n=j(p),L(s.$$.fragment,p)},m(p,k){P(a,p,k),f(p,n,k),P(s,p,k),t=!0},p(p,k){const o={};k&128&&(o.$$scope={dirty:k,ctx:p}),a.$set(o);const w={};k&128&&(w.$$scope={dirty:k,ctx:p}),s.$set(w)},i(p){t||($(a.$$.fragment,p),$(s.$$.fragment,p),t=!0)},o(p){x(a.$$.fragment,p),x(s.$$.fragment,p),t=!1},d(p){D(a,p),p&&r(n),D(s,p)}}}function ua(c){let a,n;return a=new Z({props:{pos:c[2],$$slots:{footer:[ca],subtitle:[pa],title:[ea],img:[ta],default:[na]},$$scope:{ctx:c}}}),{c(){E(a.$$.fragment)},l(s){L(a.$$.fragment,s)},m(s,t){P(a,s,t),n=!0},p(s,t){const p={};t&128&&(p.$$scope={dirty:t,ctx:s}),a.$set(p)},i(s){n||($(a.$$.fragment,s),n=!0)},o(s){x(a.$$.fragment,s),n=!1},d(s){D(a,s)}}}function F(c){let a,n;return a=new sa({props:{col:c[1],$$slots:{default:[ua]},$$scope:{ctx:c}}}),{c(){E(a.$$.fragment)},l(s){L(a.$$.fragment,s)},m(s,t){P(a,s,t),n=!0},p(s,t){const p={};t&128&&(p.$$scope={dirty:t,ctx:s}),a.$set(p)},i(s){n||($(a.$$.fragment,s),n=!0)},o(s){x(a.$$.fragment,s),n=!1},d(s){D(a,s)}}}function ia(c){let a,n,s,t,p;a=new K({props:{align:"vertical",text:"LEFT"}});let k=c[0],o=[];for(let e=0;e<k.length;e+=1)o[e]=F(q(c,k,e));const w=e=>x(o[e],1,1,()=>{o[e]=null});return t=new K({props:{align:"vertical",text:"RIGHT"}}),{c(){E(a.$$.fragment),n=B();for(let e=0;e<o.length;e+=1)o[e].c();s=B(),E(t.$$.fragment)},l(e){L(a.$$.fragment,e),n=j(e);for(let u=0;u<o.length;u+=1)o[u].l(e);s=j(e),L(t.$$.fragment,e)},m(e,u){P(a,e,u),f(e,n,u);for(let i=0;i<o.length;i+=1)o[i].m(e,u);f(e,s,u),P(t,e,u),p=!0},p(e,u){if(u&1){k=e[0];let i;for(i=0;i<k.length;i+=1){const g=q(e,k,i);o[i]?(o[i].p(g,u),$(o[i],1)):(o[i]=F(g),o[i].c(),$(o[i],1),o[i].m(s.parentNode,s))}for(Q(),i=k.length;i<o.length;i+=1)w(i);U()}},i(e){if(!p){$(a.$$.fragment,e);for(let u=0;u<k.length;u+=1)$(o[u]);$(t.$$.fragment,e),p=!0}},o(e){x(a.$$.fragment,e),o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)x(o[u]);x(t.$$.fragment,e),p=!1},d(e){D(a,e),e&&r(n),W(o,e),e&&r(s),D(t,e)}}}function ra(c){let a,n,s,t,p,k,o,w,e,u,i,g,M=`<code class="language-sv"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">&#123;</span>Button<span class="token punctuation">,</span> Card<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> Divider<span class="token punctuation">,</span> Grid<span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span>

	<span class="token keyword">let</span> pos <span class="token operator">=</span> <span class="token string">'top'</span><span class="token punctuation">,</span>
	img <span class="token operator">=</span> <span class="token string">'1b9a004a-db27-45e4-b762-0fa21bc97277.webp'</span><span class="token punctuation">,</span>
	text <span class="token operator">=</span> <span class="token string">'Lightweight (~10KB gzipped) starting point for your projects'</span><span class="token punctuation">,</span>
	title <span class="token operator">=</span> <span class="token string">'Title'</span><span class="token punctuation">,</span>
	subTitle <span class="token operator">=</span> <span class="token string">'SubTitle'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Card</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>pos<span class="token punctuation">&#125;</span></span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img-responsive<span class="token punctuation">"</span></span> <span class="token attr-name">src="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>base<span class="token punctuation">&#125;</span></span>/<span class="token attr-name">img</span>/<span class="token language-javascript"><span class="token punctuation">&#123;</span>img<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>title<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>subtitle<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>subTitle<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>text<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">svelte:</span>fragment</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cards<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cards<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">svelte:</span>fragment</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Card</span><span class="token punctuation">></span></span></code>`,G,y,R;return y=new aa({props:{offset:"my-2",oneline:!0,align:"",$$slots:{default:[ia]},$$scope:{ctx:c}}}),{c(){a=d("h1"),n=v(H),s=B(),t=d("p"),p=v("Cards are flexible content containers."),k=B(),o=d("p"),w=v("Add child elements with the image, title, subtitle, content and/or footer slot. "),e=d("br"),u=v(`
The image can be placed in any position`),i=B(),g=d("pre"),G=B(),E(y.$$.fragment),this.h()},l(l){a=_(l,"H1",{});var m=T(a);n=b(m,H),m.forEach(r),s=j(l),t=_(l,"P",{});var S=T(t);p=b(S,"Cards are flexible content containers."),S.forEach(r),k=j(l),o=_(l,"P",{});var z=T(o);w=b(z,"Add child elements with the image, title, subtitle, content and/or footer slot. "),e=_(z,"BR",{}),u=b(z,`
The image can be placed in any position`),z.forEach(r),i=j(l),g=_(l,"PRE",{class:!0});var V=T(g);V.forEach(r),G=j(l),L(y.$$.fragment,l),this.h()},h(){h(g,"class","language-sv")},m(l,m){f(l,a,m),C(a,n),f(l,s,m),f(l,t,m),C(t,p),f(l,k,m),f(l,o,m),C(o,w),C(o,e),C(o,u),f(l,i,m),f(l,g,m),g.innerHTML=M,f(l,G,m),P(y,l,m),R=!0},p(l,[m]){const S={};m&128&&(S.$$scope={dirty:m,ctx:l}),y.$set(S)},i(l){R||($(y.$$.fragment,l),R=!0)},o(l){x(y.$$.fragment,l),R=!1},d(l){l&&r(a),l&&r(s),l&&r(t),l&&r(k),l&&r(o),l&&r(i),l&&r(g),l&&r(G),D(y,l)}}}const ka={file:"card.md",title:"Card"},{file:ha,title:H}=ka;function fa(c){return[[{pos:"top",col:"4",img:"1b9a004a-db27-45e4-b762-0fa21bc97277.webp",text:"Lightweight (~10KB gzipped) starting point for your projects"},{pos:"middle",col:"6",img:"c2179403-954f-4f5d-82a4-3dfdeaba9597.webp",text:"Flexbox-based, responsive and mobile-friendly layout"},{pos:"bottom",col:"8",img:"b64f151d-e194-497a-9b70-e15ffdd8730d.webp",text:"Elegantly designed and developed elements and components"},{pos:"middle",col:"10",img:"4603a846-4daf-4018-aa74-e3ab567a69fc.webp",text:"Lightweight (~10KB gzipped) starting point for your projects"},{pos:"top",col:"12",img:"04696e1a-eb5d-43b9-bb1d-d2ee117f4430.webp",text:"Flexbox-based, responsive and mobile-friendly layout"}]]}class xa extends N{constructor(a){super(),J(this,a,fa,ra,O,{})}}export{xa as default,ka as metadata};
