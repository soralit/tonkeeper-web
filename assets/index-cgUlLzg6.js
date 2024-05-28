import{bz as O,r as c,u as W,bA as X,s as h,L as j,G as Y,f as g,j as t,bB as z,bC as B,bD as L,aD as E,ag as P,b7 as _,b8 as D,af as U,bE as A,ak as G,bF as I,bG as K,a9 as Q,Q as T,bc as q,ah as J,ai as $,bH as m,bI as N,bJ as V,bK as Z,T as ee,U as S}from"./index-z3CvngUh.js";const te=(e,s,n)=>{const r=new Date,i=O.stringify({utm_source:"tonkeeper",utm_campaign:s==="recommendation"?"recom":`feat-${r.getMonth()+1}-${r.getFullYear()}`,utm_medium:n}),o=e.includes("?")?"&":"?";return`${e}${o}${i}`};function k(e,s,n,r){const i=c.useRef(s);c.useLayoutEffect(()=>{i.current=s},[s]),c.useEffect(()=>{const o=(n==null?void 0:n.current)??window;if(!(o&&o.addEventListener))return;const l=a=>i.current(a);return o.addEventListener(e,l,r),()=>{o.removeEventListener(e,l,r)}},[e,n,r])}function ne({callback:e,precisionXPx:s,precisionYPx:n}){const r=c.useRef({clientX:0,clientY:0}),i=c.useRef(null),o=c.useCallback(a=>{r.current={clientY:a.clientY,clientX:a.clientX}},[]),l=c.useCallback(a=>{const u=Math.abs(a.clientX-r.current.clientX)<(s??10),d=Math.abs(a.clientY-r.current.clientY)<(n??10);u&&d&&e()},[e,s,n]);return k("mousedown",o,i),k("mouseup",l,i),i}function H(e,s,n){const r=W(),i=X(),o=c.useCallback(()=>{i(e,s),r.openPage(te(e,s,n))},[e,r,i]);return ne({callback:o})}function se(){const e=c.useRef(!1);return c.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),c.useCallback(()=>e.current,[])}const y={width:void 0,height:void 0};function re(e){const{ref:s,box:n="content-box"}=e,[{width:r,height:i},o]=c.useState(y),l=se(),a=c.useRef({...y}),u=c.useRef(void 0);return u.current=e.onResize,c.useEffect(()=>{if(!s.current||typeof window>"u"||!("ResizeObserver"in window))return;const d=new ResizeObserver(([f])=>{const w=n==="border-box"?"borderBoxSize":n==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",x=R(f,w,"inlineSize"),p=R(f,w,"blockSize");if(a.current.width!==x||a.current.height!==p){const C={width:x,height:p};a.current.width=x,a.current.height=p,u.current?u.current(C):l()&&o(C)}});return d.observe(s.current,{box:n}),()=>{d.disconnect()}},[n,s,l]),{width:r,height:i}}function R(e,s,n){return e[s]?Array.isArray(e[s])?e[s][0][n]:e[s][n]:s==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0}function oe(){const e=c.useRef(null),[s,n]=c.useState({width:0,height:0,scrollWidth:0,scrollHeight:0}),r=c.useCallback(()=>{var i,o,l,a;n({width:((i=e.current)==null?void 0:i.offsetWidth)||0,height:((o=e.current)==null?void 0:o.offsetHeight)||0,scrollWidth:((l=e.current)==null?void 0:l.scrollWidth)||0,scrollHeight:((a=e.current)==null?void 0:a.scrollHeight)||0})},[]);return re({ref:e,onResize:r}),[e,s]}const ie=h.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 1rem;
    gap: 1rem;
`,ce=h.button`
    border: none;
    background: transparent;
    height: fit-content;
    width: fit-content;
    color: ${e=>e.theme.textAccent};
    cursor: pointer;
    padding: 4px 8px;
`,ae=h.div`
    padding-left: 1rem;
    padding-right: 1rem;
`,v=h(j)`
    width: ${e=>e.width} !important;
    margin-left: ${e=>e.marginLeft} !important;
    margin-bottom: 0;
`,M=h.div`
    margin-left: auto;
    margin-right: 1rem;
    color: ${e=>e.theme.iconTertiary};
    transition: transform 0.15s ease;
`,de=h(Y)`
    padding-left: 1rem;

    &:hover ${M} {
        transform: translateX(2px);
    }
`,ue=({category:e,className:s})=>{const[n,{width:r}]=oe(),i=r-36,o=c.useMemo(()=>e.apps.reduce((u,d,f)=>(f%3===0?u.push([d]):u[u.length-1].push(d),u),[]),[e.apps]),l=c.useMemo(()=>o.map(u=>u.map(d=>d.url).join("")),[o]),a=o.length>1;return t.jsxs("div",{className:s,ref:n,children:[t.jsxs(ie,{children:[t.jsx(D,{children:e.title}),a&&t.jsx(U,{to:"."+A.category+"/"+e.id,children:t.jsx(ce,{children:t.jsx(G,{children:"All"})})})]}),a?t.jsx(I,{gap:"8px",infinite:!1,children:o.map((u,d)=>t.jsx(v,{width:d===0||d===o.length-1?(i-28).toString()+"px":"unset",marginLeft:d===0?"-34px":"0",children:u.map(f=>t.jsx(b,{item:f},f.url))},l[d]))}):o.map((u,d)=>t.jsx(ae,{children:t.jsx(v,{width:"100%",children:u.map(f=>t.jsx(b,{item:f},f.url))},l[d])},l[d]))]})},b=({item:e})=>{const{tonendpoint:s}=g(),n=H(e.url,"recommendation",s.getTrack());return t.jsx(de,{ref:n,children:t.jsxs(z,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{children:[t.jsx(E,{children:e.name}),t.jsx(P,{children:e.description})]}),t.jsx(M,{children:t.jsx(_,{})})]})},e.url)};function F(){const{tonendpoint:e}=g(),n=K().data||"en";return Q([T.featuredRecommendations,n],async()=>{const r=await e.getAppsPopular(n);return r.categories=r.categories.filter(i=>i.id!=="featured"),r})}const le=()=>{const{id:e}=q(),{data:s}=F(),n=s==null?void 0:s.categories.find(r=>r.id===e);return t.jsxs(t.Fragment,{children:[t.jsx(J,{title:n==null?void 0:n.title}),t.jsx($,{children:n?t.jsx(j,{children:n.apps.map(r=>t.jsx(b,{item:r},r.url))}):t.jsxs(j,{children:[t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{}),t.jsx(m,{})]})})]})},he=h.div`
    width: 100%;
    aspect-ratio: 2 / 1;

    background-image: ${e=>`url(${e.img})`};
    background-size: cover;
    border-radius: ${e=>e.theme.cornerSmall};

    display: inline-flex !important;
    align-items: flex-end;
    justify-content: flex-start;
    cursor: pointer;
`,fe=h(z)`
    margin-left: 1rem;
`,me=({apps:e,className:s,...n})=>{const{config:r}=g(),i=r.featured_play_interval||1e3*10;return t.jsx(I,{className:s,gap:"8px",autoplay:!0,centerPadding:"16px",autoplaySpeed:i,...n,children:e.map(o=>t.jsx(ge,{item:o},o.url))})},ge=({item:e})=>{const{tonendpoint:s}=g(),n=H(e.url,"featured",s.getTrack());return t.jsx(he,{img:e.poster,ref:n,children:t.jsxs(fe,{children:[t.jsx(B,{src:e.icon}),t.jsxs(L,{color:e.textColor,children:[t.jsx(E,{children:e.name}),t.jsx(P,{children:e.description})]})]})})},xe=h($)`
    padding: 0;
`,pe=h(me)`
    margin-bottom: 1rem;
`,je=h(ue)`
    margin-bottom: 1rem;
`,be=h.div`
    padding: 0 1rem;
`,we=()=>{const{data:e}=F(),s=N();return c.useEffect(()=>{e&&s()},[s,e]),t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx(xe,{children:e?t.jsxs(t.Fragment,{children:[t.jsx(pe,{apps:e.apps}),e.categories.map(n=>t.jsx(je,{category:n},n.id))]}):t.jsx(be,{children:t.jsx(Z,{})})})]})},ke=()=>t.jsxs(ee,{children:[t.jsx(S,{path:A.category+"/:id",element:t.jsx(le,{})}),t.jsx(S,{path:"*",element:t.jsx(we,{})})]});export{ke as default};
