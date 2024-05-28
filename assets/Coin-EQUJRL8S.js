import{bZ as K,b_ as M,r as d,j as e,b$ as g,ah as p,ai as h,c0 as E,a3 as f,f as j,a8 as y,Q as A,c1 as W,a1 as B,bP as F,a2 as D,bR as T,bQ as N,bS as v,c2 as P,b as H,c3 as Q,au as _,s as O,v as b,c4 as U,x as R,T as V,U as $,c as Z,bc as L,c5 as z,c6 as G}from"./index-z3CvngUh.js";import{u as w,a as C,A as I}from"./useFetchNext-gnHMA7eg.js";import{S,R as J,H as X}from"./TonActions-xPnrsW1t.js";import"./TonActivityEvents-fcdndn3P.js";import"./ActivityDetailsLayout-8lp4KXH7.js";import"./NftHeader-uTS0xySw.js";import"./BuyAction-eOu1mM-j.js";import"./BuyItemNotification-1Tz62mp5.js";import"./Checkbox-MQ5csBGn.js";import"./v4-OErdnafK.js";const Y=t=>{var s,n;return t.type==="TonTransfer"?!0:!!(t.type==="ContractDeploy"&&(n=(s=t.contractDeploy)==null?void 0:s.interfaces)!=null&&n.includes("wallet"))},k=t=>({pages:t.pages.reduce((s,n)=>{const a=n.events.reduce((r,o)=>(o.actions.every(Y)&&r.push(o),r),[]);return a.length&&s.push({events:a,nextFrom:0}),s},[]),pageParams:[]}),ee=({balance:t,innerRef:s})=>{const{api:n,standalone:a}=j(),r=y(),{isFetched:o,hasNextPage:i,data:l,isFetchingNextPage:u,fetchNextPage:m}=w({queryKey:[t.walletAddress.address,A.activity,W.history],queryFn:({pageParam:c=void 0})=>new B(n.tonApiV2).getAccountJettonHistoryByID({accountId:r.active.rawAddress,jettonId:t.jetton.address,limit:20,beforeLt:c}),getNextPageParam:c=>c.nextFrom>0?c.nextFrom:void 0});return C(i,u,m,a,s),e.jsx(I,{isFetched:o,isFetchingNextPage:u,tonEvents:l})},te=({info:t,balance:s})=>{const[n,a]=d.useMemo(()=>[F(s.balance,t.metadata.decimals),D.Address.parse(s.jetton.address).toString()],[t,s]),{data:r}=T(a),o=N(n,t.metadata.decimals),{fiatAmount:i}=v(r,n),{description:l,image:u}=t.metadata;return e.jsx(P,{amount:o,symbol:t.metadata.symbol,price:i,description:l,image:u})},se=({jettonAddress:t})=>{const{data:s}=K(t),{data:n}=M(t),a=d.useRef(null);return!s||!n?e.jsx(g,{}):e.jsxs(e.Fragment,{children:[e.jsx(p,{title:s.metadata.name}),e.jsxs(h,{ref:a,children:[e.jsx(te,{balance:n,info:s}),e.jsxs(E,{children:[e.jsx(S,{asset:s.metadata.address,chain:f.TON}),e.jsx(J,{jetton:s.metadata.address})]}),e.jsx(ee,{balance:n,innerRef:a})]})]})},ne=({info:{balance:t}})=>{const{t:s}=H(),n=d.useMemo(()=>F(t),[t]),a=N(n),{data:r}=T(_.TON),{fiatAmount:o}=v(r,n);return e.jsx(P,{amount:a,symbol:"TON",price:o,description:s("Ton_page_description"),image:"https://wallet.tonkeeper.com/img/toncoin.svg"})},ae=()=>{const{t}=H(),s=d.useRef(null),{data:n}=Q(),{api:a,standalone:r}=j(),o=y(),{fetchNextPage:i,hasNextPage:l,isFetchingNextPage:u,data:m,isFetched:c}=w({queryKey:[o.active.rawAddress,A.activity,"ton"],queryFn:({pageParam:x=void 0})=>new B(a.tonApiV2).getAccountEvents({accountId:o.active.rawAddress,limit:20,beforeLt:x,subjectOnly:!0}),getNextPageParam:x=>x.nextFrom>0?x.nextFrom:void 0});C(l,u,i,r,s);const q=d.useMemo(()=>m?k(m):void 0,[m]);return n?e.jsxs(e.Fragment,{children:[e.jsx(p,{title:t("Toncoin")}),e.jsxs(h,{ref:s,children:[e.jsx(ne,{info:n}),e.jsx(X,{chain:f.TON}),e.jsx(I,{isFetched:c,isFetchingNextPage:u,tonEvents:q})]})]}):e.jsx(g,{activity:4})},oe=({tronBalance:{token:t,weiAmount:s}})=>{const n=d.useMemo(()=>F(s,t.decimals),[s,t]),a=N(n,t.decimals),{data:r}=T(t.symbol),{fiatAmount:o}=v(r,n);return e.jsx(P,{amount:a,symbol:t.symbol,price:o,image:t.image})},re=({tron:t,innerRef:s})=>{const n=y(),{standalone:a,api:{tronApi:r}}=j(),{data:o,isFetched:i,isFetchingNextPage:l,hasNextPage:u,fetchNextPage:m}=w({queryKey:[t.ownerWalletAddress,n.network,A.tron],queryFn:({pageParam:c=void 0})=>new G(r).getTransactions({ownerAddress:t.ownerWalletAddress,fingerprint:c,limit:100}),getNextPageParam:c=>c.fingerprint});return C(u,l,m,a,s),e.jsx(I,{isFetched:i,isFetchingNextPage:l,tronEvents:o})},ie=O.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 22px;
`,ce=O(Z)`
    color: ${t=>t.theme.textSecondary};
`,de=({tron:t})=>{const{address:s}=L(),n=b(),{data:a,isLoading:r,isError:o}=z(t,s);d.useEffect(()=>{o&&n(R.home)},[o]);const i=d.useRef(null);return r||!a?e.jsx(g,{}):e.jsxs(e.Fragment,{children:[e.jsx(p,{title:e.jsxs(ie,{children:[e.jsx("div",{children:a.token.name}),e.jsx(ce,{children:"TRC20"})]})}),e.jsxs(h,{ref:i,children:[e.jsx(oe,{tronBalance:a}),e.jsxs(E,{children:[e.jsx(S,{asset:"TON",chain:f.TRON}),e.jsx(J,{chain:f.TRON})]}),e.jsx(re,{tron:t,innerRef:i})]})]})},ue=()=>{const t=b(),{data:s,isLoading:n,isError:a}=U();return d.useEffect(()=>{a&&t(R.home)},[a]),n||!s?e.jsx(g,{}):e.jsx(V,{children:e.jsx($,{path:":address",element:e.jsx(de,{tron:s})})})},Fe=()=>{const t=b(),{name:s}=L();return d.useEffect(()=>{s||t(R.home)},[s]),s?s==="tron"?e.jsx(ue,{}):s==="ton"?e.jsx(ae,{}):e.jsx(se,{jettonAddress:decodeURIComponent(s)}):e.jsx(e.Fragment,{})};export{Fe as default};
