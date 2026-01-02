import{S as y0,i as k0,s as _0,k as r,l as o,m as p,h as e,n as w,am as h0,p as l0,b as l,U as C0,B as i0,q as f,a as y,w as F0,r as m,c as k,x as I0,L as n,y as T0,f as O0,t as P0,z as b0}from"../../../../../chunks/index-3887b52b.js";/* empty css                                                                  */function x0(h){let a,c,d,i;return{c(){a=r("iframe"),this.h()},l(v){a=o(v,"IFRAME",{title:!0,name:!0,src:!0,style:!0,scrolling:!0,frameborder:!0}),p(a).forEach(e),this.h()},h(){w(a,"title","cifplayer"),w(a,"name","CifplayerFrame"),h0(a.src,c=h[1])||w(a,"src",c),l0(a,"width","100%"),l0(a,"height","600px"),l0(a,"border","none"),a.allowFullscreen=!0,w(a,"scrolling","no"),w(a,"frameborder","0")},m(v,u){l(v,a,u),d||(i=C0(a,"load",h[2]),d=!0)},p(v,[u]){u&2&&!h0(a.src,c=v[1])&&w(a,"src",c)},i:i0,o:i0,d(v){v&&e(a),d=!1,i()}}}function B0(h){const a=setInterval(()=>{const c=window.frames.CifplayerFrame;c&&(c.postMessage(h,"*"),clearInterval(a))},300)}function S0(h,a,c){let{data:d=""}=a,{src:i="https://nanoshow.mpds.io/"}=a;const v=()=>d&&B0(d);return h.$$set=u=>{"data"in u&&c(0,d=u.data),"src"in u&&c(1,i=u.src)},[d,i,v]}class R0 extends y0{constructor(a){super(),k0(this,a,S0,x0,_0,{data:0,src:1})}}function z0(h){let a,c,d,i,v,u,N,G,E,J,K,A,T,Q,H,C,w0=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CIFPlayer</span> <span class="token attr-name">data=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>initialData<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CIFPlayer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> initialData <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span> <span class="token comment">// your crystal structure</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,L,O,V,g,_,B,W,X,S,Y,Z,R,t0,D,F,z,a0,e0,j,P,s0,U,I,$,q,M;return I=new R0({props:{data:h[0]}}),{c(){a=r("h1"),c=f("CIFPlayer"),d=y(),i=r("p"),v=f("The "),u=r("code"),N=f("CIFPlayer"),G=f(" component allows you to embed the interactive "),E=r("a"),J=f("crystal structure viewer"),K=f(" directly into your Svelte application. This is useful for visualizing CIF, POSCAR, and Optimade formats in scientific and educational projects."),A=y(),T=r("h2"),Q=f("Usage"),H=y(),C=r("pre"),L=y(),O=r("h2"),V=f("Features"),g=y(),_=r("ul"),B=r("li"),W=f("Embeds the crystal structure viewer via an iframe"),X=y(),S=r("li"),Y=f("Responsive width and fixed height (customizable)"),Z=y(),R=r("li"),t0=f("Accepts structure data as a prop and sends it to the viewer on load"),D=y(),F=r("p"),z=r("strong"),a0=f("Note:"),e0=f(" The viewer is loaded from an external website. Ensure your users have internet access to use this feature."),j=y(),P=r("h2"),s0=f("Example"),U=y(),F0(I.$$.fragment),$=y(),q=r("hr"),this.h()},l(t){a=o(t,"H1",{});var s=p(a);c=m(s,"CIFPlayer"),s.forEach(e),d=k(t),i=o(t,"P",{});var b=p(i);v=m(b,"The "),u=o(b,"CODE",{});var r0=p(u);N=m(r0,"CIFPlayer"),r0.forEach(e),G=m(b," component allows you to embed the interactive "),E=o(b,"A",{href:!0,rel:!0});var o0=p(E);J=m(o0,"crystal structure viewer"),o0.forEach(e),K=m(b," directly into your Svelte application. This is useful for visualizing CIF, POSCAR, and Optimade formats in scientific and educational projects."),b.forEach(e),A=k(t),T=o(t,"H2",{});var p0=p(T);Q=m(p0,"Usage"),p0.forEach(e),H=k(t),C=o(t,"PRE",{class:!0});var E0=p(C);E0.forEach(e),L=k(t),O=o(t,"H2",{});var c0=p(O);V=m(c0,"Features"),c0.forEach(e),g=k(t),_=o(t,"UL",{});var x=p(_);B=o(x,"LI",{});var u0=p(B);W=m(u0,"Embeds the crystal structure viewer via an iframe"),u0.forEach(e),X=k(x),S=o(x,"LI",{});var f0=p(S);Y=m(f0,"Responsive width and fixed height (customizable)"),f0.forEach(e),Z=k(x),R=o(x,"LI",{});var m0=p(R);t0=m(m0,"Accepts structure data as a prop and sends it to the viewer on load"),m0.forEach(e),x.forEach(e),D=k(t),F=o(t,"P",{});var n0=p(F);z=o(n0,"STRONG",{});var d0=p(z);a0=m(d0,"Note:"),d0.forEach(e),e0=m(n0," The viewer is loaded from an external website. Ensure your users have internet access to use this feature."),n0.forEach(e),j=k(t),P=o(t,"H2",{});var v0=p(P);s0=m(v0,"Example"),v0.forEach(e),U=k(t),I0(I.$$.fragment,t),$=k(t),q=o(t,"HR",{}),this.h()},h(){w(E,"href","https://nanoshow.mpds.io"),w(E,"rel","nofollow"),w(C,"class","language-svelte")},m(t,s){l(t,a,s),n(a,c),l(t,d,s),l(t,i,s),n(i,v),n(i,u),n(u,N),n(i,G),n(i,E),n(E,J),n(i,K),l(t,A,s),l(t,T,s),n(T,Q),l(t,H,s),l(t,C,s),C.innerHTML=w0,l(t,L,s),l(t,O,s),n(O,V),l(t,g,s),l(t,_,s),n(_,B),n(B,W),n(_,X),n(_,S),n(S,Y),n(_,Z),n(_,R),n(R,t0),l(t,D,s),l(t,F,s),n(F,z),n(z,a0),n(F,e0),l(t,j,s),l(t,P,s),n(P,s0),l(t,U,s),T0(I,t,s),l(t,$,s),l(t,q,s),M=!0},p:i0,i(t){M||(O0(I.$$.fragment,t),M=!0)},o(t){P0(I.$$.fragment,t),M=!1},d(t){t&&e(a),t&&e(d),t&&e(i),t&&e(A),t&&e(T),t&&e(H),t&&e(C),t&&e(L),t&&e(O),t&&e(g),t&&e(_),t&&e(D),t&&e(F),t&&e(j),t&&e(P),t&&e(U),b0(I,t),t&&e($),t&&e(q)}}}const g0={file:"cifplayer.md",title:"CIFPlayer",api:[{title:"data :String",description:"Show initial structure",variables:"data: string (CIF data to visualize, sent to the viewer on load)"}]};function A0(h){return[`BaTiO3
1.0000000000000000
		8.0000000000000000    0.0000000000000000    0.0000000000000000
		0.0000000000000000    8.0000000000000000    0.0000000000000000
		0.0000000000000000    0.0000000000000000    8.0000000000000000
Ba  Ti  O   Ba  Ti  O   Ba  Ti  O   Ba  Ti  O   Ba  Ti  O   Ba  Ti  O   Ba  Ti  O   Ba  Ti  O
	1   1   3   1   1   3   1   1   3   1   1   3   1   1   3   1   1   3   1   1   3   1   1   3
Cartesian
-1.0000000000000000 -1.0000000000000000 -1.0000000000000000
-3.0000000000000000 -3.0000000000000000 -3.0000000000000000
-1.0000000000000000 -3.0000000000000000 -3.0000000000000000
-3.0000000000000000 -1.0000000000000000 -3.0000000000000000
-3.0000000000000000 -3.0000000000000000 -1.0000000000000000
-1.0000000000000000 -1.0000000000000000  3.0000000000000000
-3.0000000000000000 -3.0000000000000000  1.0000000000000000
-1.0000000000000000 -3.0000000000000000  1.0000000000000000
-3.0000000000000000 -1.0000000000000000  1.0000000000000000
-3.0000000000000000 -3.0000000000000000  3.0000000000000000
-1.0000000000000000  3.0000000000000000 -1.0000000000000000
-3.0000000000000000  1.0000000000000000 -3.0000000000000000
-1.0000000000000000  1.0000000000000000 -3.0000000000000000
-3.0000000000000000  3.0000000000000000 -3.0000000000000000
-3.0000000000000000  1.0000000000000000 -1.0000000000000000
-1.0000000000000000  3.0000000000000000  3.0000000000000000
-3.0000000000000000  1.0000000000000000  1.0000000000000000
-1.0000000000000000  1.0000000000000000  1.0000000000000000
-3.0000000000000000  3.0000000000000000  1.0000000000000000
-3.0000000000000000  1.0000000000000000  3.0000000000000000
3.0000000000000000 -1.0000000000000000 -1.0000000000000000
1.0000000000000000 -3.0000000000000000 -3.0000000000000000
3.0000000000000000 -3.0000000000000000 -3.0000000000000000
1.0000000000000000 -1.0000000000000000 -3.0000000000000000
1.0000000000000000 -3.0000000000000000 -1.0000000000000000
3.0000000000000000 -1.0000000000000000  3.0000000000000000
1.0000000000000000 -3.0000000000000000  1.0000000000000000
3.0000000000000000 -3.0000000000000000  1.0000000000000000
1.0000000000000000 -1.0000000000000000  1.0000000000000000
1.0000000000000000 -3.0000000000000000  3.0000000000000000
3.0000000000000000  3.0000000000000000 -1.0000000000000000
1.0000000000000000  1.0000000000000000 -3.0000000000000000
3.0000000000000000  1.0000000000000000 -3.0000000000000000
1.0000000000000000  3.0000000000000000 -3.0000000000000000
1.0000000000000000  1.0000000000000000 -1.0000000000000000
3.0000000000000000  3.0000000000000000  3.0000000000000000
1.0000000000000000  1.0000000000000000  1.0000000000000000
3.0000000000000000  1.0000000000000000  1.0000000000000000
1.0000000000000000  3.0000000000000000  1.0000000000000000
1.0000000000000000  1.0000000000000000  3.0000000000000000`]}class D0 extends y0{constructor(a){super(),k0(this,a,A0,z0,_0,{})}}export{D0 as default,g0 as metadata};
