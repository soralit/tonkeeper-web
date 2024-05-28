import{ci as F,cj as L,ck as M,s as f,b as p,r as d,j as n,ak as q,L as D,b5 as K,bR as $,au as B,bS as z,bP as P,c as w,aH as N,aw as O,H as Q,u as v,aJ as C,cl as E,cm as S,cn as H,co as U,aD as W,B as b,f as T,a8 as g,a9 as _,Q as k,d as J,aa as G,a as A,cp as V,cq as X,b6 as Y,cr as Z,cs as ee,ct as te,cu as ne,cv as se,cw as oe,cx as ie}from"./index-z3CvngUh.js";import{e as ce,t as ae,s as re}from"./tonService-784EZxnW.js";import{f as le,T as ue}from"./TonActivityEvents-fcdndn3P.js";import"./jettonService-hyWKbxlO.js";import"./ActivityDetailsLayout-8lp4KXH7.js";import"./NftHeader-uTS0xySw.js";const de=async({connection:e,request:{id:t,method:s}})=>{await F({response:L(t,s),sessionKeyPair:e.sessionKeyPair,clientSessionId:e.clientSessionId})},fe=async({connection:e,request:{id:t}})=>{await F({response:M(t),sessionKeyPair:e.sessionKeyPair,clientSessionId:e.clientSessionId})},pe=f.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${e=>e.theme.textSecondary};
    padding: 0 16px 12px;
    box-sizing: border-box;
`,xe=({extra:e})=>{const{t}=p(),s=e<0?e*-1:e,i=K(s),{data:o}=$(B.TON),{fiatAmount:a}=z(o,P(s));let c=`≈ ${i} ${B.TON}`;return a&&(c+=` · ${a}`),n.jsxs(pe,{children:[n.jsx(w,{children:e>0?t("txActions_refund"):t("transaction_fee")}),n.jsx(w,{children:c})]})},he=f.div`
    padding: 12px 16px;

    background-color: ${e=>e.theme.accentOrange};
    position: relative;
    border-radius: ${e=>e.theme.cornerSmall};

    user-select: none;
`,ye=({isError:e,estimate:t})=>{const{t:s,i18n:i}=p(),[o,a]=d.useMemo(()=>{const c=t!=null&&t.accountEvent.event.timestamp?(t==null?void 0:t.accountEvent.event.timestamp)*1e3:Date.now();return[le(i.language,"now",c),c]},[t]);return e?n.jsx(he,{children:n.jsx(q,{children:s("send_fee_estimation_error")})}):t?n.jsxs(n.Fragment,{children:[n.jsx(D,{noUserSelect:!0,fullWidth:!0,margin:!1,children:n.jsx(ue,{hover:!1,event:t.accountEvent.event,date:o,timestamp:a,setActivity:()=>null})}),n.jsx(xe,{extra:t.accountEvent.event.extra})]}):n.jsx(n.Fragment,{})},I=f.div`
    ${e=>e.theme.displayType==="full-width"?N`
                  height: 1rem;
              `:N`
                  display: none;
              `}
`,R=f.div`
    display: flex;
    gap: 1rem;
    width: 100%;

    & > * {
        flex: 1;
    }
`,me=(e,t)=>{const s=g(),i=v(),{api:o}=T(),a=J(),{t:c}=p(),{mutateAsync:x}=G();return A(async()=>{const h=await V(i,s.publicKey,x);if(h.type!=="cell")throw new X(c("ledger_operation_not_supported"));const y=await re(o,s,e,h);return a.invalidateQueries({predicate:u=>u.queryKey.includes(s.active.rawAddress)}),y})},ge=({handleClose:e})=>{const{t}=p();return n.jsxs(C,{children:[n.jsx(Y,{size:3,margin:!0,fullWidth:!0}),n.jsx(I,{}),n.jsx(E,{children:n.jsx(S,{children:n.jsxs(R,{children:[n.jsx(b,{size:"large",type:"button",onClick:()=>e(),children:t("notifications_alert_cancel")}),n.jsx(b,{size:"large",type:"submit",primary:!0,loading:!0,children:t("confirm")})]})})})]})},je=f.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    margin: 1rem 0px 2rem;
`,be=f(Q)`
    text-align: center;
`;f(w)`
    color: ${e=>e.theme.textSecondary};
`;const we=({handleClose:e})=>{const{t}=p();return n.jsxs(C,{children:[n.jsxs(je,{children:[n.jsx(Z,{}),n.jsx(be,{children:t("send_screen_steps_amount_insufficient_balance")})]}),n.jsx(I,{}),n.jsx(E,{children:n.jsx(S,{children:n.jsx(R,{children:n.jsx(b,{size:"large",type:"button",onClick:()=>e(),children:t("notifications_alert_cancel")})})})})]})},ve=({params:e,handleClose:t})=>{const s=v(),[i,o]=d.useState(!1),{t:a}=p(),{data:c,isFetched:x}=Ee(e),{data:h,isLoading:y,isError:u}=Ce(e,x),{mutateAsync:j,isLoading:m}=me(e);d.useEffect(()=>{s.twaExpand&&s.twaExpand(),s.hapticNotification("success")},[]);const r=async()=>{try{const l=await j();o(!0),s.hapticNotification("success"),setTimeout(()=>t(l),300)}catch(l){console.error(l)}};return(c==null?void 0:c.kind)!==void 0?n.jsx(we,{kind:c==null?void 0:c.kind,handleClose:t}):y?n.jsx(ge,{handleClose:t}):n.jsxs(C,{children:[n.jsx(ye,{isError:u,estimate:h}),n.jsx(I,{}),n.jsx(E,{children:n.jsxs(S,{children:[i&&n.jsxs(H,{done:!0,children:[n.jsx(U,{}),n.jsx(W,{children:a("ton_login_success")})]}),!i&&n.jsxs(R,{children:[n.jsx(b,{size:"large",type:"button",loading:m,disabled:m,onClick:()=>t(),children:a("notifications_alert_cancel")}),n.jsx(b,{size:"large",type:"button",primary:!0,loading:m,disabled:m,onClick:r,children:a("confirm")})]})]})})]})},Ce=(e,t)=>{const{api:s}=T(),i=g();return _([k.estimate,e],async()=>({accountEvent:await ce(s,i,e)}),{enabled:t})},Ee=e=>{const{api:t}=T(),s=g();return _([k.estimate,"error",e],async()=>ae(t,s,e))},Se=({params:e,handleClose:t})=>{const{t:s}=p(),i=d.useCallback(()=>{if(e)return n.jsx(ve,{params:e,handleClose:t})},[origin,e,t]);return n.jsx(O,{isOpen:e!=null,handleClose:()=>t(),title:s("txActions_signRaw_title"),hideButton:!0,children:i})},Te=e=>{const t=g();return _([t.publicKey,k.connection],async()=>{const s=await se(e.storage),i=await oe(e.storage,t);return{lastEventId:s,connections:i}})},_e=e=>{const t=g();return A(async({connection:s,request:i})=>{if(await ie({storage:e.storage,wallet:t,clientSessionId:s.clientSessionId}),await fe({connection:s,request:i}),e.notifications)try{await e.notifications.unsubscribeTonConnect(s.clientSessionId)}catch(o){o instanceof Error&&e.topMessage(o.message)}})},ke=()=>A(de),Le=()=>{var y;const[e,t]=d.useState(void 0),s=v(),i=g(),{data:o}=Te(s),{mutate:a}=_e(s),{mutate:c}=ke(),{mutateAsync:x}=ee();te((y=e==null?void 0:e.connection)==null?void 0:y.manifest),d.useEffect(()=>{const u=r=>{switch(r.request.method){case"disconnect":return a(r);case"sendTransaction":{t(void 0);const l={connection:r.connection,id:r.request.id,payload:JSON.parse(r.request.params[0])};setTimeout(()=>{t(l)},100);return}default:return c(r)}},{notifications:j}=s;(async()=>{if(j&&o)try{if(await j.subscribed(i.active.rawAddress))for(let l of o.connections)await j.subscribeTonConnect(l.clientSessionId,new URL(l.manifest.url).host)}catch(r){r instanceof Error&&s.topMessage(r.message)}})();const m=ne({storage:s.storage,handleMessage:u,connections:o==null?void 0:o.connections,lastEventId:o==null?void 0:o.lastEventId});return()=>{m()}},[s,o,a,t,c]);const h=d.useCallback(async u=>{if(e)try{await x({request:e,boc:u})}finally{t(void 0)}},[e,x,t]);return n.jsx(n.Fragment,{children:n.jsx(Se,{params:(e==null?void 0:e.payload)??null,handleClose:h})})};export{Le as default};
