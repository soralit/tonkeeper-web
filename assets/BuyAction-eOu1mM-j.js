import{j as e,s as c,aH as u,r as a,aw as h,v as x,u as p,bG as g,b as k,f as m,cR as j,cS as w,dI as y,eP as b,x as f,aF as B,b8 as C,dS as L,aD as v,eM as M,bT as N,aV as P,cg as S,L as _}from"./index-z3CvngUh.js";import{B as H}from"./BuyItemNotification-1Tz62mp5.js";const R=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V14M14 14V6.5M14 14H21.5M14 14H6.5",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),E=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 6.5V21.5M14 6.5L7.5 13M14 6.5L20.5 13",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),F=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",children:e.jsx("path",{d:"M14 21.5V6.5M14 21.5L7.5 15M14 21.5L20.5 15",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})}),A=({items:t,kind:o})=>e.jsx(_,{margin:!1,children:t.filter(n=>!n.disabled).map(n=>e.jsx(H,{item:n,kind:o},n.title))}),I=c.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,T=({item:t,kind:o,handleClose:n})=>{const s=x(),i=p(),{data:r}=g(),{t:l}=k(),{config:d}=m();return e.jsxs(I,{children:[e.jsx(j,{children:e.jsx(w,{children:e.jsxs(y,{children:[e.jsx(b,{country:r,onClick:()=>s(f.settings+B.country)}),e.jsx(C,{children:t.title}),e.jsx(L,{handleClose:n})]})})}),e.jsx(A,{items:t.items,kind:o}),e.jsx(V,{children:e.jsx(U,{onClick:()=>d.exchangePostUrl&&i.openPage(d.exchangePostUrl),children:l(o==="buy"?"exchange_modal_other_ways_to_buy":"exchange_other_ways")})})]})},V=c.div`
    text-align: center;

    ${t=>t.theme.displayType==="full-width"&&u`
            padding-bottom: 1rem;
        `}
`,U=c(v)`
    cursor: pointer;
    padding: 7.5px 1rem 8.5px;
    background-color: ${t=>t.theme.backgroundContent};
    transition: background-color 0.1s ease;
    border-radius: ${t=>t.theme.cornerMedium};
    display: inline-block;

    &:hover {
        background-color: ${t=>t.theme.backgroundHighlighted};
    }
`,$=({buy:t,open:o,handleClose:n})=>{const s=a.useCallback(()=>{if(!(!o||!t))return e.jsx(T,{item:t,kind:"buy",handleClose:n})},[o,t]);return e.jsx(h,{isOpen:o&&t!=null,handleClose:n,hideButton:!0,children:s})},D=()=>{const{data:t}=M(),o=N(),[n,s]=P(),i=a.useMemo(()=>new URLSearchParams(n).get("buy")==="open",[n,o]),r=a.useCallback(()=>{n.has("buy")?n.delete("buy"):n.append("buy","open"),s(n,{replace:!0})},[n,s]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{icon:e.jsx(R,{}),title:"wallet_buy",action:r}),e.jsx($,{buy:t,open:i,handleClose:r})]})};export{D as B,F as R,E as S,$ as a};
