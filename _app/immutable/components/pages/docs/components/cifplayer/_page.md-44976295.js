import{S as E0,i as C0,s as F0,k as r,l as i,m as u,h as a,n as k,am as w0,p as o0,b as l,U as O0,B as p0,q as p,a as y,w as P0,r as c,c as _,x as b0,L as s,y as x0,f as B0,t as S0,z as R0}from"../../../../../chunks/index-3887b52b.js";/* empty css                                                                  */function A0(v){let e,f,d,o;return{c(){e=r("iframe"),this.h()},l(h){e=i(h,"IFRAME",{title:!0,name:!0,src:!0,style:!0,scrolling:!0,frameborder:!0}),u(e).forEach(a),this.h()},h(){k(e,"title","cifplayer"),k(e,"name","CifplayerFrame"),w0(e.src,f=v[1])||k(e,"src",f),o0(e,"width","100%"),o0(e,"height","600px"),o0(e,"border","none"),e.allowFullscreen=!0,k(e,"scrolling","no"),k(e,"frameborder","0")},m(h,m){l(h,e,m),d||(o=O0(e,"load",v[2]),d=!0)},p(h,[m]){m&2&&!w0(e.src,f=h[1])&&k(e,"src",f)},i:p0,o:p0,d(h){h&&a(e),d=!1,o()}}}function z0(v){const e=setInterval(()=>{const f=window.frames.CifplayerFrame;f&&(f.postMessage(v,"*"),clearInterval(e))},300)}function H0(v,e,f){let{data:d=""}=e,{src:o="https://nanoshow.mpds.io/"}=e;const h=()=>d&&z0(d);return v.$$set=m=>{"data"in m&&f(0,d=m.data),"src"in m&&f(1,o=m.src)},[d,o,h]}class L0 extends E0{constructor(e){super(),C0(this,e,H0,A0,F0,{data:0,src:1})}}function g0(v){let e,f,d,o,h,m,J,K,C,Q,V,L,O,W,g,F,T0=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CIFPlayer</span> <span class="token attr-name">data=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>initialData<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> CIFPlayer <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte-spectre'</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> initialData <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span> <span class="token comment">// your crystal structure</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,D,P,X,j,w,S,Y,Z,R,t0,e0,A,a0,U,E,z,s0,n0,T,l0,r0,$,b,i0,q,I,M,N,G;return I=new L0({props:{data:v[0]}}),{c(){e=r("h1"),f=p("CIFPlayer"),d=y(),o=r("p"),h=p("The "),m=r("code"),J=p("CIFPlayer"),K=p(" component allows you to embed the interactive "),C=r("a"),Q=p("crystal structure viewer"),V=p(" directly into your Svelte application. This is useful for visualizing the crystal structure formats CIF, POSCAR, and Optimade in scientific and educational projects."),L=y(),O=r("h2"),W=p("Usage"),g=y(),F=r("pre"),D=y(),P=r("h2"),X=p("Features"),j=y(),w=r("ul"),S=r("li"),Y=p("Embeds the crystal structure viewer via an iframe"),Z=y(),R=r("li"),t0=p("Responsive width and fixed height (customizable)"),e0=y(),A=r("li"),a0=p("Accepts structure data as a prop and sends it to the viewer on load"),U=y(),E=r("p"),z=r("strong"),s0=p("Note:"),n0=p(" The viewer is loaded from an external website "),T=r("a"),l0=p("https://nanoshow.mpds.io."),r0=p(" Ensure your users have internet access to use this feature."),$=y(),b=r("h2"),i0=p("Example"),q=y(),P0(I.$$.fragment),M=y(),N=r("hr"),this.h()},l(t){e=i(t,"H1",{});var n=u(e);f=c(n,"CIFPlayer"),n.forEach(a),d=_(t),o=i(t,"P",{});var x=u(o);h=c(x,"The "),m=i(x,"CODE",{});var c0=u(m);J=c(c0,"CIFPlayer"),c0.forEach(a),K=c(x," component allows you to embed the interactive "),C=i(x,"A",{href:!0,rel:!0});var u0=u(C);Q=c(u0,"crystal structure viewer"),u0.forEach(a),V=c(x," directly into your Svelte application. This is useful for visualizing the crystal structure formats CIF, POSCAR, and Optimade in scientific and educational projects."),x.forEach(a),L=_(t),O=i(t,"H2",{});var f0=u(O);W=c(f0,"Usage"),f0.forEach(a),g=_(t),F=i(t,"PRE",{class:!0});var I0=u(F);I0.forEach(a),D=_(t),P=i(t,"H2",{});var m0=u(P);X=c(m0,"Features"),m0.forEach(a),j=_(t),w=i(t,"UL",{});var B=u(w);S=i(B,"LI",{});var d0=u(S);Y=c(d0,"Embeds the crystal structure viewer via an iframe"),d0.forEach(a),Z=_(B),R=i(B,"LI",{});var h0=u(R);t0=c(h0,"Responsive width and fixed height (customizable)"),h0.forEach(a),e0=_(B),A=i(B,"LI",{});var v0=u(A);a0=c(v0,"Accepts structure data as a prop and sends it to the viewer on load"),v0.forEach(a),B.forEach(a),U=_(t),E=i(t,"P",{});var H=u(E);z=i(H,"STRONG",{});var y0=u(z);s0=c(y0,"Note:"),y0.forEach(a),n0=c(H," The viewer is loaded from an external website "),T=i(H,"A",{href:!0,rel:!0});var _0=u(T);l0=c(_0,"https://nanoshow.mpds.io."),_0.forEach(a),r0=c(H," Ensure your users have internet access to use this feature."),H.forEach(a),$=_(t),b=i(t,"H2",{});var k0=u(b);i0=c(k0,"Example"),k0.forEach(a),q=_(t),b0(I.$$.fragment,t),M=_(t),N=i(t,"HR",{}),this.h()},h(){k(C,"href","https://nanoshow.mpds.io"),k(C,"rel","nofollow"),k(F,"class","language-svelte"),k(T,"href","https://nanoshow.mpds.io."),k(T,"rel","nofollow")},m(t,n){l(t,e,n),s(e,f),l(t,d,n),l(t,o,n),s(o,h),s(o,m),s(m,J),s(o,K),s(o,C),s(C,Q),s(o,V),l(t,L,n),l(t,O,n),s(O,W),l(t,g,n),l(t,F,n),F.innerHTML=T0,l(t,D,n),l(t,P,n),s(P,X),l(t,j,n),l(t,w,n),s(w,S),s(S,Y),s(w,Z),s(w,R),s(R,t0),s(w,e0),s(w,A),s(A,a0),l(t,U,n),l(t,E,n),s(E,z),s(z,s0),s(E,n0),s(E,T),s(T,l0),s(E,r0),l(t,$,n),l(t,b,n),s(b,i0),l(t,q,n),x0(I,t,n),l(t,M,n),l(t,N,n),G=!0},p:p0,i(t){G||(B0(I.$$.fragment,t),G=!0)},o(t){S0(I.$$.fragment,t),G=!1},d(t){t&&a(e),t&&a(d),t&&a(o),t&&a(L),t&&a(O),t&&a(g),t&&a(F),t&&a(D),t&&a(P),t&&a(j),t&&a(w),t&&a(U),t&&a(E),t&&a($),t&&a(b),t&&a(q),R0(I,t),t&&a(M),t&&a(N)}}}const $0={file:"cifplayer.md",title:"CIFPlayer",api:[{title:"data: String",description:"Show initial structure",variables:"data: string (data to visualize, sent to the viewer on load)"}]};function D0(v){return[`BaTiO3
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
1.0000000000000000  1.0000000000000000  3.0000000000000000`]}class q0 extends E0{constructor(e){super(),C0(this,e,D0,g0,F0,{})}}export{q0 as default,$0 as metadata};
