import{b as v,r as a,ae as b,s as r,aH as d,ax as j,f as k,dO as w,dG as N,j as t,dP as y,dQ as D,u as C}from"./index-z3CvngUh.js";import{b as S,c as I}from"./NftHeader-uTS0xySw.js";function O(e,n){const{i18n:o}=v();return a.useMemo(()=>e?new Intl.DateTimeFormat(b(o.language),{month:"short",day:"numeric",year:new Date().getFullYear()-1===new Date(e).getFullYear()?"numeric":void 0,hour:"numeric",minute:"numeric",...n}).format(e):"",[e,o.language,n])}function $(e){if(!e)return"";const n=Math.floor((new Date(e).getTime()-Date.now())/(1e3*60*60*24));return n<0?"0":n.toString()}const E=r.div`
    display: grid;
    margin: 0 0 2rem 0;
    gap: 0.5rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`,F=r.div`
    position: relative;
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: column;

    background-color: ${e=>e.theme.backgroundContent};
    transition: background-color 0.1s ease;

    border-radius: ${e=>e.theme.cornerSmall};

    overflow: hidden;

    ${e=>{if(e.ios){if(e.isHover)return d`
                    background-color: ${e.theme.backgroundContentTint};
                `}else return e.hover?d`
                    cursor: pointer;

                    &:hover {
                        background-color: ${e.theme.backgroundContentTint};
                    }
                `:void 0}}
`,H=r.div`
    width: 100%;
    position: relative;
`,T=r.div`
    width: 100%;
    padding-bottom: 100%;

    ${e=>e.url&&d`
            background-image: url('${e.url}');
        `}
    background-size: cover;
`,B=r.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.75rem 0.5rem;
    white-space: nowrap;
`,L=r.div`
    position: absolute;
    top: 10px;
    right: 8px;
`,A=r.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 32px;
    width: 32px;
`,R=j.memo(({nft:e,resolution:n,onOpen:o})=>{var f;const s=e.sale!==void 0,i=(f=e.previews)==null?void 0:f.find(h=>h.resolution===n),{ios:x}=k(),[g,u]=a.useState(!1),c=a.useRef(null),l=a.useContext(w),{data:m}=N(e);a.useLayoutEffect(()=>{c.current&&l&&c.current.contains(l)?u(!0):u(!1)},[c.current,l,u]);const p=m&&Number($(m))<=30;return t.jsxs(F,{hover:!0,isHover:g,ios:x,ref:c,onClick:()=>o(e),children:[t.jsxs(H,{children:[t.jsx(T,{url:i==null?void 0:i.url}),s&&t.jsx(L,{children:t.jsx(y,{})}),p&&t.jsx(A,{children:t.jsx(D,{})})]}),t.jsxs(B,{children:[t.jsx(S,{nft:e}),t.jsx(I,{nft:e})]})]})}),Y=({nfts:e,className:n})=>{const o=C();return t.jsx(E,{className:n,children:(e??[]).map(s=>{var i;return((i=s.metadata)==null?void 0:i.render_type)==="hidden"?t.jsx(t.Fragment,{}):t.jsx(R,{nft:s,resolution:"500x500",onOpen:()=>o.openNft(s)},s.address)})})};export{T as I,Y as N,F as a,$ as t,O as u};
