!function(e){const t=!0,n=!0,l=!0,o=!0,s=!0,i=!0,r=!0,c=!0,f=!1,u=!1,a=!1,p=!1,h=!0,d=!1,m=!0;let y,g,$,b=!1,w=!1,v=!1,S=!1,k=null,j=!1;const x="undefined"!=typeof window?window:{};!1&&x.CSS;const O=x.document||{head:{}},E=x.HTMLElement||class{},M={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},C=!d||!l||(()=>(O.head.attachShadow+"").indexOf("[native")>-1)(),T=(()=>{let e=!1;try{O.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),W=!!m&&(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),_=(e,t,n,l)=>{n&&n.map((([n,l,o])=>{const s=R(e,n),i=H(t,o),r=D(n);M.ael(s,l,i,r),(t.$rmListeners$=t.$rmListeners$||[]).push((()=>M.rel(s,l,i,r)))}))},H=(e,t)=>n=>{try{p||e.$hostElement$[t](n)}catch(e){Ce(e)}},R=(e,t)=>4&t?O:8&t?x:16&t?O.body:e,D=e=>T?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e),N="http://www.w3.org/1999/xlink",F=new WeakMap,L=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,l=t.$flags$,o=(t.$tagName$,()=>{}),s=((e,t,n,l)=>{let o=U(t,n),s=He.get(o);if(e=11===e.nodeType?e:O,s)if("string"==typeof s){e=e.head||e;let t,n=F.get(e);n||F.set(e,n=new Set),n.has(o)||(t=O.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),n&&n.add(o))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return o})(C&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"),2&l&&n.classList.add(s+"-s")),o()},U=(e,t)=>"sc-"+(t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),A={},I=e=>"object"===(e=typeof e)||"function"===e,q=(e,t,...n)=>{let l=null,o=null,c=null,u=!1,a=!1,p=[];const d=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?d(l):null!=l&&"boolean"!=typeof l&&((u="function"!=typeof e&&!I(l))&&(l=String(l)),u&&a?p[p.length-1].$text$+=l:p.push(u?z(null,l):l),a=u)};if(d(n),t&&(f&&"input"===e&&J(t),r&&t.key&&(o=t.key),h&&t.name&&(c=t.name),s)){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if(f&&p.some(V)&&We("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),i&&"function"==typeof e)return e(null===t?{}:t,p,Y);const m=z(e,null);return m.$attrs$=t,p.length>0&&(m.$children$=p),r&&(m.$key$=o),h&&(m.$name$=c),m},z=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return o&&(n.$attrs$=null),r&&(n.$key$=null),h&&(n.$name$=null),n},P={},V=e=>e&&e.$tag$===P,Y={forEach:(e,t)=>e.map(B).forEach(t),map:(e,t)=>e.map(B).map(t).map(G)},B=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),G=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),q(e.vtag,t,...e.vchildren||[])}const t=z(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},J=e=>{const t=Object.keys(e),n=t.indexOf("value");if(-1===n)return;const l=t.indexOf("type"),o=t.indexOf("min"),s=t.indexOf("max"),i=t.indexOf("step");(n<l||n<o||n<s||n<i)&&_e('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},K=(e,t,n,l,o,s)=>{if(n!==l){let i=Me(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=X(n),s=X(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(e.__lookupSetter__(t)||"o"!==t[0]||"n"!==t[1]){const c=I(l);if((i||c&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(N,t):e.removeAttribute(t)):(!i||4&s||o)&&!c&&(l=!0===l?"":l,f?e.setAttributeNS(N,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Me(x,r)?r.slice(2):r[2]+t.slice(3),n&&M.rel(e,t,n,!1),l&&M.ael(e,t,l,!1)}},Q=/\s/,X=e=>e?e.split(Q):[],Z=(e,t,n,l)=>{const o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||A,i=t.$attrs$||A;for(l in s)l in i||K(o,l,s[l],void 0,n,t.$flags$);for(l in i)K(o,l,s[l],i[l],n,t.$flags$)},ee=(e,t,n,l)=>{let o,s,i,r=t.$children$[n],c=0;if(b||(v=!0,"slot"===r.$tag$&&(y&&l.classList.add(y+"-s"),r.$flags$|=r.$children$?2:1)),null!==r.$text$)o=r.$elm$=O.createTextNode(r.$text$);else if(1&r.$flags$)o=r.$elm$=O.createTextNode("");else{if(S||(S="svg"===r.$tag$),o=r.$elm$=O.createElementNS(S?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&r.$flags$?"slot-fb":r.$tag$),S&&"foreignObject"===r.$tag$&&(S=!1),Z(null,r,S),null!=y&&o["s-si"]!==y&&o.classList.add(o["s-si"]=y),r.$children$)for(c=0;c<r.$children$.length;++c)s=ee(e,r,c,o),s&&o.appendChild(s);"svg"===r.$tag$?S=!1:"foreignObject"===o.tagName&&(S=!0)}return o["s-hn"]=$,3&r.$flags$&&(o["s-sr"]=!0,o["s-cr"]=g,o["s-sn"]=r.$name$||"",i=e&&e.$children$&&e.$children$[n],i&&i.$tag$===r.$tag$&&e.$elm$&&te(e.$elm$,!1)),o},te=(e,t)=>{M.$flags$|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const l=n[e];l["s-hn"]!==$&&l["s-ol"]&&(ie(l).insertBefore(l,se(l)),l["s-ol"].remove(),l["s-ol"]=void 0,v=!0),t&&te(l,t)}M.$flags$&=-2},ne=(e,t,n,l,o,s)=>{let i,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===$&&(r=r.shadowRoot);o<=s;++o)l[o]&&(i=ee(null,n,o,e),i&&(l[o].$elm$=i,r.insertBefore(i,se(t))))},le=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.$elm$,pe(l),w=!0,o["s-ol"]?o["s-ol"].remove():te(o,!0),o.remove())},oe=(e,t)=>e.$tag$===t.$tag$&&("slot"===e.$tag$?e.$name$===t.$name$:e.$key$===t.$key$),se=e=>e&&e["s-ol"]||e,ie=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,re=(e,t)=>{const n=t.$elm$=e.$elm$,l=e.$children$,o=t.$children$,s=t.$tag$,i=t.$text$;let r;null===i?(S="svg"===s||"foreignObject"!==s&&S,"slot"===s||Z(e,t,S),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,u=t.length-1,a=t[0],p=t[u],h=l.length-1,d=l[0],m=l[h];for(;i<=u&&r<=h;)if(null==a)a=t[++i];else if(null==p)p=t[--u];else if(null==d)d=l[++r];else if(null==m)m=l[--h];else if(oe(a,d))re(a,d),a=t[++i],d=l[++r];else if(oe(p,m))re(p,m),p=t[--u],m=l[--h];else if(oe(a,m))"slot"!==a.$tag$&&"slot"!==m.$tag$||te(a.$elm$.parentNode,!1),re(a,m),e.insertBefore(a.$elm$,p.$elm$.nextSibling),a=t[++i],m=l[--h];else if(oe(p,d))"slot"!==a.$tag$&&"slot"!==m.$tag$||te(p.$elm$.parentNode,!1),re(p,d),e.insertBefore(p.$elm$,a.$elm$),p=t[--u],d=l[++r];else{for(c=-1,f=i;f<=u;++f)if(t[f]&&null!==t[f].$key$&&t[f].$key$===d.$key$){c=f;break}c>=0?(s=t[c],s.$tag$!==d.$tag$?o=ee(t&&t[r],n,c,e):(re(s,d),t[c]=void 0,o=s.$elm$),d=l[++r]):(o=ee(t&&t[r],n,r,e),d=l[++r]),o&&ie(a.$elm$).insertBefore(o,se(a.$elm$))}i>u?ne(e,null==l[h+1]?null:l[h+1].$elm$,n,l,r,h):r>h&&le(t,i,u)})(n,l,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),ne(n,null,t,o,0,o.length-1)):null!==l&&le(l,0,l.length-1),S&&"svg"===s&&(S=!1)):(r=n["s-cr"])?r.parentNode.textContent=i:e.$text$!==i&&(n.data=i)},ce=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i=r[o].nodeType,r[o]["s-hn"]!==t["s-hn"]||""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}ce(t)}},fe=[],ue=e=>{let t,n,l,o,s,i,r=0,c=e.childNodes,f=c.length;for(;r<f;r++){if(t=c[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,o=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(ae(n,o)?(s=fe.find((e=>e.$nodeToRelocate$===n)),w=!0,n["s-sn"]=n["s-sn"]||o,s?s.$slotRefNode$=t:fe.push({$slotRefNode$:t,$nodeToRelocate$:n}),n["s-sr"]&&fe.map((e=>{ae(e.$nodeToRelocate$,n["s-sn"])&&(s=fe.find((e=>e.$nodeToRelocate$===n)),s&&!e.$slotRefNode$&&(e.$slotRefNode$=s.$slotRefNode$))}))):fe.some((e=>e.$nodeToRelocate$===n))||fe.push({$nodeToRelocate$:n}));1===t.nodeType&&ue(t)}},ae=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,pe=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(pe)},he=(e,t)=>{e.$flags$|=16,e.$ancestorComponent$;return Ie((()=>de(e,t)))},de=(e,t)=>{const n=e.$hostElement$,l=(e.$cmpMeta$.$tagName$,()=>{}),o=n;let s;return s=$e(o,t?"componentWillLoad":"componentWillUpdate"),s=be(s,(()=>$e(o,"componentWillRender"))),l(),be(s,(()=>me(e,o,t)))},me=async(e,t,n)=>{const l=e.$hostElement$,o=(e.$cmpMeta$.$tagName$,()=>{});l["s-rc"],n&&L(e);const s=(e.$cmpMeta$.$tagName$,()=>{});ye(e,t,l),s(),o(),ge(e)},ye=(e,l,o)=>{try{k=l,l=l.render&&l.render(),e.$flags$&=-17,e.$flags$|=2,(t||n)&&(c||n)&&(a||((e,t)=>{const n=e.$hostElement$,l=e.$cmpMeta$,o=e.$vnode$||z(null,null),s=V(t)?t:q(null,null,t);if($=n.tagName,l.$attrsToReflect$&&(s.$attrs$=s.$attrs$||{},l.$attrsToReflect$.map((([e,t])=>s.$attrs$[t]=n[e]))),s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=o.$elm$=n.shadowRoot||n,y=n["s-sc"],g=n["s-cr"],b=C&&0!=(1&l.$flags$),w=!1,re(o,s),M.$flags$|=1,v){let e,t,n,l,o,i;ue(s.$elm$);let r=0;for(;r<fe.length;r++)e=fe[r],t=e.$nodeToRelocate$,t["s-ol"]||(n=O.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<fe.length;r++)if(e=fe[r],t=e.$nodeToRelocate$,e.$slotRefNode$){for(l=e.$slotRefNode$.parentNode,o=e.$slotRefNode$.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(i=n["s-nr"],i&&i["s-sn"]===t["s-sn"]&&l===i.parentNode&&(i=i.nextSibling,!i||!i["s-nr"])){o=i;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}w&&ce(s.$elm$),M.$flags$&=-2,fe.length=0})(e,l))}catch(t){Ce(t,e.$hostElement$)}return k=null,null},ge=e=>{e.$cmpMeta$.$tagName$;const t=()=>{},n=e.$hostElement$;e.$ancestorComponent$,$e(n,"componentDidRender"),64&e.$flags$?($e(n,"componentDidUpdate"),t()):(e.$flags$|=64,$e(n,"componentDidLoad"),t())},$e=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Ce(e)}},be=(e,t)=>e&&e.then?e.then(t):t(),we=(e,t,n,l)=>{const o=Oe(e),s=e,i=o.$instanceValues$.get(t),r=o.$flags$,c=s;var f,u;if(f=n,u=l.$members$[t][0],(n=null==f||I(f)?f:4&u?"false"!==f&&(""===f||!!f):2&u?parseFloat(f):1&u?String(f):f)!==i){if(o.$instanceValues$.set(t,n),l.$watchers$&&128&r){const e=l.$watchers$[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){Ce(e,s)}}))}if(2==(18&r)){if(c.componentShouldUpdate&&!1===c.componentShouldUpdate(n,i,t))return;he(o,!1)}}},ve=(e,t,n)=>{if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const n=Object.entries(t.$members$),l=e.prototype;n.map((([e,[n]])=>{(31&n||32&n)&&Object.defineProperty(l,e,{get(){return t=e,Oe(this).$instanceValues$.get(t);var t},set(n){we(this,e,n,t)},configurable:!0,enumerable:!0})}));{const o=new Map;l.attributeChangedCallback=function(e,t,n){M.jmp((()=>{const t=o.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(l.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return o.set(l,e),512&n[0]&&t.$attrsToReflect$.push([e,l]),l}))}}return e},Se=async(e,t,n,l,o)=>{if(0==(32&t.$flags$)&&(o=e.constructor,t.$flags$|=32,customElements.whenDefined(n.$tagName$).then((()=>t.$flags$|=128)),o.style)){let l=o.style;"string"!=typeof l&&(l=l[t.$modeName$=(e=>Re.map((t=>t(e))).find((e=>!!e)))(e)]);const s=U(n,t.$modeName$);if(!He.has(s)){const e=(n.$tagName$,()=>{});((e,t,n)=>{let l=He.get(e);W&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,He.set(e,l)})(s,l,!!(1&n.$flags$)),e()}}t.$ancestorComponent$;he(t,!0)},ke=e=>{const t=e["s-cr"]=O.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},je=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};n.$members$=t[2],n.$listeners$=t[3],n.$watchers$=e.$watchers$,n.$attrsToReflect$=[],!C&&1&n.$flags$&&(n.$flags$|=8);const l=e.prototype.connectedCallback,o=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{t(){Ee(this,n)},connectedCallback(){(e=>{if(0==(1&M.$flags$)){const t=Oe(e),n=t.$cmpMeta$,l=(n.$tagName$,()=>{});1&t.$flags$?(_(e,t,n.$listeners$),t.$lazyInstance$):(t.$flags$|=1,12&n.$flags$&&ke(e),n.$members$&&Object.entries(n.$members$).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),Se(e,t,n)),l()}})(this),l&&l.call(this)},disconnectedCallback(){(e=>{if(0==(1&M.$flags$)){const t=Oe(e);t.$rmListeners$&&(t.$rmListeners$.map((e=>e())),t.$rmListeners$=void 0)}})(this),o&&o.call(this)},l(){C?this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)}):this.shadowRoot=this}}),e.is=n.$tagName$,ve(e,n)},xe=new WeakMap,Oe=e=>xe.get(e),Ee=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return _(e,n,t.$listeners$),xe.set(e,n)},Me=(e,t)=>t in e,Ce=(e,t)=>(0,console.error)(e,t),Te=u?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],We=(...e)=>console.error(...Te,...e),_e=(...e)=>console.warn(...Te,...e),He=new Map,Re=[],De=[],Ne=[],Fe=(e,t)=>n=>{e.push(n),j||(j=!0,t&&4&M.$flags$?Ae(Ue):M.raf(Ue))},Le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Ce(e)}e.length=0},Ue=()=>{Le(De),Le(Ne),(j=De.length>0)&&M.raf(Ue)},Ae=e=>{return Promise.resolve(t).then(e);var t},Ie=Fe(Ne,!0);let qe=class extends E{constructor(){super(),this.t(),this.l()}getText(){return e=this.first,t=this.middle,n=this.last,(e||"")+(t?` ${t}`:"")+(n?` ${n}`:"");var e,t,n}render(){return q("div",null,"Hello, World! I'm ",this.getText())}static get style(){return":host{display:block}"}};function ze(){if("undefined"==typeof customElements)return;["my-stencil-component"].forEach((e=>{if("my-stencil-component"===e)customElements.get(e)||customElements.define(e,qe)}))}qe=je(qe,[1,"my-stencil-component",{first:[1],middle:[1],last:[1]}]),ze();const Pe=qe,Ve=ze;e.MyStencilComponent=Pe,e.defineCustomElement=Ve,Object.defineProperty(e,"o",{value:!0})}({});