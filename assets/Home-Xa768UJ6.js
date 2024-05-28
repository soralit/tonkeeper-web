import{s as i,aH as f,j as t,ak as u,bO as R,c as I,r as d,b,v as C,bP as S,bQ as T,bR as v,au as j,bS as w,G as E,x as N,a2 as P,L as g,bT as _,aV as K,bU as U,bV as H,bW as D,bX as M,bY as V,a3 as W}from"./index-z3CvngUh.js";import{N as k}from"./Nfts-2YYDcbAs.js";import{H as z}from"./TonActions-xPnrsW1t.js";import"./NftHeader-uTS0xySw.js";import"./BuyAction-eOu1mM-j.js";import"./BuyItemNotification-1Tz62mp5.js";import"./Checkbox-MQ5csBGn.js";import"./v4-OErdnafK.js";const O=i.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
    box-sizing: border-box;
    gap: 1rem;
    width: 100%;
`,$=i.img`
    width: 44px;
    height: 44px;
    border-radius: ${e=>e.theme.cornerFull};

    pointer-events: none;
`,G=i.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;

    white-space: nowrap;
`,J=i.div`
    display: grid;
    grid-template-columns: auto 1fr 0fr;
    gap: 0.25rem;
    width: 100%;
`,q=i(u)`
    text-overflow: ellipsis;
    overflow: hidden;

    display: flex;
    align-items: center;
`,Q=i(R)`
    display: inline-block;
    margin-left: 8px;
    padding: 3px 4px;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.backgroundContentTint};
    color: ${e=>e.theme.textSecondary};
`,X=i.div`
    display: flex;
    justify-content: space-between;
`,L=i(I)`
    color: ${e=>e.theme.textSecondary};
`,Y=i(u)`
    color: ${e=>e.theme.textSecondary};
`,A=({name:e,symbol:s,balance:a,secondary:n,fiatAmount:o,label:r,rate:c})=>t.jsxs(G,{children:[t.jsxs(J,{children:[t.jsxs(q,{children:[s??e,r?t.jsx(Q,{children:r}):null]}),t.jsx(Y,{}),t.jsx(u,{children:a})]}),t.jsxs(X,{children:[t.jsx(L,{children:t.jsxs(t.Fragment,{children:[n," ",t.jsx(ee,{data:c})]})}),t.jsx(L,{children:o})]})]}),Z=i.span`
  margin-left: 0.5rem;
  opacity: 0.64;

  ${e=>e.positive?f`
                color: ${e.theme.accentGreen};
            `:f`
                color: ${e.theme.accentRed};
            `}}
`,ee=({data:e})=>{if(!e||!e.diff24h||e.diff24h=="0")return null;const s=e.diff24h.startsWith("+");return t.jsx(Z,{positive:s,children:e.diff24h})},te=d.forwardRef(({info:e,className:s},a)=>{const{t:n}=b(),o=C(),r=d.useMemo(()=>S(e.balance),[e.balance]),c=T(r),{data:m}=v(j.TON),{fiatPrice:h,fiatAmount:p}=w(m,r);return t.jsx(E,{onClick:()=>o(N.coins+"/ton"),className:s,ref:a,children:t.jsxs(O,{children:[t.jsx($,{src:"https://wallet.tonkeeper.com/img/toncoin.svg"}),t.jsx(A,{name:n("Toncoin"),symbol:j.TON,balance:c,secondary:h,fiatAmount:p,rate:m})]})})}),se=d.forwardRef(({jetton:e,className:s},a)=>{const{t:n}=b(),o=C(),[r,c]=d.useMemo(()=>[S(e.balance,e.jetton.decimals),P.Address.parse(e.jetton.address).toString()],[e]),m=T(r,e.jetton.decimals),{data:h}=v(c),{fiatPrice:p,fiatAmount:F}=w(h,r);return t.jsx(E,{onClick:()=>o(N.coins+`/${encodeURIComponent(e.jetton.address)}`),className:s,ref:a,children:t.jsxs(O,{children:[t.jsx($,{src:e.jetton.image}),t.jsx(A,{name:e.jetton.name??n("Unknown_COIN"),symbol:e.jetton.symbol,balance:m,secondary:p,fiatAmount:F,rate:h})]})})}),B=({assets:{ton:{info:e,jettons:s},tron:a}})=>t.jsxs(t.Fragment,{children:[t.jsx(g,{noUserSelect:!0,children:t.jsx(te,{info:e})}),t.jsx(g,{noUserSelect:!0,children:s.balances.map(n=>t.jsx(se,{jetton:n},n.jetton.address))})]}),ne=({assets:e,nfts:s})=>t.jsxs(t.Fragment,{children:[t.jsx(B,{assets:e}),t.jsx(k,{nfts:s})]}),oe=i.div`
    display: flex;
    padding-top: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    justify-content: center;
    gap: 2.25rem;

    user-select: none;
`,y=i.div`
    cursor: pointer;

    padding: 0.5rem;
    margin: -0.5rem;
    box-sizing: border-box;

    ${e=>e.active?f`
                  color: ${e.theme.textPrimary};
              `:f`
                  color: ${e.theme.textSecondary};
              `}
`,re=i.div`
    position: absolute;
    height: 3px;
    width: 0px;
    bottom: -0.5rem;
    border-radius: ${e=>e.theme.corner3xSmall};
    background: ${e=>e.theme.accentBlue};
`;var l;(function(e){e[e.TOKENS=0]="TOKENS",e[e.COLLECTIBLES=1]="COLLECTIBLES"})(l||(l={}));const ae=({tab:e,onTab:s})=>{const{t:a}=b(),n=d.useRef(null),o=d.useRef(null);return d.useEffect(()=>{if(n.current&&o.current){const r=n.current.childNodes[e],c=40;o.current.style.width=c+"px",o.current.style.left=r.offsetLeft+(r.clientWidth-c)/2+"px",window.requestAnimationFrame(()=>{o.current&&(o.current.style.transition="all 0.3s ease-in-out")})}},[n,o,e]),t.jsxs(oe,{ref:n,children:[t.jsx(y,{active:e===l.TOKENS,onClick:()=>s(l.TOKENS),children:t.jsx(u,{children:a("jettons_list_title")})}),t.jsx(y,{active:e===l.COLLECTIBLES,onClick:()=>s(l.COLLECTIBLES),children:t.jsx(u,{children:a("wallet_collectibles_tab_lable")})}),t.jsx(re,{ref:o})]})},x="collectibles",ie=({assets:e,nfts:s})=>{const a=_(),[n,o]=K(),r=d.useMemo(()=>new URLSearchParams(n).get(x)==="open"?l.COLLECTIBLES:l.TOKENS,[n,a]),c=d.useCallback(m=>{m===l.COLLECTIBLES?n.has(x)||n.append(x,"open"):n.has(x)&&n.delete(x),o(n,{replace:!0})},[n,o]);return t.jsxs(t.Fragment,{children:[t.jsx(ae,{tab:r,onTab:c}),r===l.COLLECTIBLES?t.jsx(k,{nfts:s}):t.jsx(B,{assets:e})]})},ce=({assets:e,nfts:s})=>e.ton.jettons.balances.length+s.length<10||e.ton.jettons.balances.length<3?t.jsx(ne,{assets:e,nfts:s}):t.jsx(ie,{assets:e,nfts:s}),be=()=>{const{isFetched:e}=U(),[s,a,n]=H(),{data:o,isFetching:r}=D(),c=n||r;return!o||!s||!e?t.jsx(M,{}):t.jsxs(t.Fragment,{children:[t.jsx(V,{assets:s,error:a,isFetching:c}),t.jsx(z,{chain:W.TON}),t.jsx(ce,{assets:s,nfts:o})]})};export{be as default};
