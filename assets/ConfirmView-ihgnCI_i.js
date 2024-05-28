import{s as r,aj as N,b8 as M,r as l,j as e,dI as H,dJ as U,dR as $,dS as q,e8 as O,aD as T,cn as _,u as P,b as B,co as Q,cq as G,d as J,de as K,f as V,e9 as W,L as z,d4 as X,ea as Y,a4 as Z,cK as ee,eb as h,ec as te,ed as ne,ee as se}from"./index-z3CvngUh.js";import{v as ie,w as oe,x as re,k as ae}from"./ActivityDetailsLayout-8lp4KXH7.js";import{U as ce}from"./UserCancelledError-WQqxL8x6.js";const le=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`,ue=r.img`
    width: 96px;
    height: 96px;
    border-radius: ${t=>t.full?t.theme.cornerFull:t.theme.cornerMedium};
`,me=r.div`
    width: 96px;
    height: 96px;
    border-radius: ${t=>t.full?t.theme.cornerFull:t.theme.cornerMedium};
    background: ${t=>t.theme.backgroundContent};
`,de=r(N)`
    user-select: none;
    color: ${t=>t.theme.textSecondary};
    margin: 20px 0 4px;
`,fe=r(M)`
    user-select: none;
    text-align: center;
`,y=l.createContext({});function u(){return l.useContext(y)}function Ve({children:t,estimation:n,recipient:o,onBack:s,onClose:a,assetAmount:c,fitContent:d,...m}){const{mutateAsync:f,isLoading:x,reset:v}=m,D=J(),E=m.error||n.error;let j=e.jsx(A,{children:e.jsx(he,{})}),C=e.jsx(w,{children:e.jsx(je,{})}),g=e.jsxs(b,{children:[e.jsx(Ce,{}),e.jsx(ge,{}),e.jsx(pe,{}),e.jsx(Se,{})]}),p=e.jsx(k,{children:e.jsx(ke,{MainButton:K})});l.Children.map(t,i=>{if(l.isValidElement(i))switch(i.type){case A:j=i;return;case w:C=i;return;case b:g=i;return;case k:p=i;return}});const[F,I]=l.useState(!1),{standalone:R}=V(),S=async()=>{if(x)return!1;v();try{const i=await f();return i&&(I(!0),setTimeout(()=>{setTimeout(()=>D.invalidateQueries(),100),a(!0)},2e3)),i}catch(i){return console.error(i),!1}},L=async i=>{i.stopPropagation(),i.preventDefault(),S()};return e.jsx(y.Provider,{value:{recipient:o,assetAmount:c,estimation:n,formState:{done:F,isLoading:x,error:E},onClose:()=>a(),onBack:s,handleSubmit:S},children:e.jsxs(W,{onSubmit:L,standalone:R,fitContent:d,children:[j,C,e.jsx(z,{margin:!1,fullWidth:!0,children:g}),e.jsx(X,{}),e.jsx(Y,{children:p})]})})}const xe=r.div`
    margin-bottom: 1rem;
`,A=({children:t})=>e.jsx(e.Fragment,{children:t}),he=()=>{const{onClose:t,onBack:n}=u();return e.jsxs(H,{children:[n?e.jsx(U,{onClick:n,children:e.jsx($,{})}):e.jsx("div",{}),e.jsx(q,{handleClose:()=>t()})]})},w=({children:t,className:n})=>e.jsx(xe,{className:n,children:t}),je=({className:t,title:n})=>{const{t:o}=B(),{recipient:s,assetAmount:a}=u(),c=ie(a.asset),d={[Z.id]:o("txActions_signRaw_types_tonTransfer"),[ee.id]:o("txActions_USDT_transfer")};n||(n=h(s)?s.toAccount.name:d[a.asset.id]||o("txActions_signRaw_types_jettonTransfer"));const m=h(s)&&s.toAccount.icon||c;return e.jsxs(le,{className:t,children:[m?e.jsx(ue,{full:!0,src:c}):e.jsx(me,{full:!0}),e.jsx(de,{children:o("confirm_sending_title")}),e.jsx(fe,{children:n})]})},b=({children:t})=>e.jsx(e.Fragment,{children:t}),Ce=()=>{const{recipient:t}=u();return e.jsx(te,{recipient:t})},ge=()=>{const{fiat:t}=V(),{assetAmount:n}=u(),{data:o}=oe(n),s=o?ne(t,o):void 0;return e.jsx(se,{coinAmount:n.stringAssetRelativeAmount,fiatAmount:s})},pe=()=>{var n;const{estimation:t}=u();return e.jsx(re,{fee:t.isFetching||(n=t.data)==null?void 0:n.fee})},Se=()=>{const{recipient:t}=u();return h(t)?e.jsx(ae,{comment:t.comment}):null},Ae=r(O)`
    min-width: 32px;
    min-height: 32px;
`,we=r(T)`
    text-align: center;
`,be=r(_)`
    height: unset;
    min-height: 56px;
`,k=({children:t})=>e.jsx(e.Fragment,{children:t}),ke=({MainButton:t})=>{const n=P(),{formState:{done:o,error:s,isLoading:a},estimation:{isFetching:c},onClose:d,handleSubmit:m}=u(),{t:f}=B(),x=!a&&!c;return l.useEffect(()=>{o&&n.hapticNotification("success")},[o]),l.useEffect(()=>{s&&n.hapticNotification("error")},[s]),o?e.jsxs(_,{done:!0,children:[e.jsx(Q,{}),e.jsx(T,{children:f("send_screen_steps_done_done_label")})]}):s&&!(s instanceof ce)?e.jsxs(be,{children:[e.jsx(Ae,{}),e.jsx(we,{children:s instanceof G?s.message:f("send_publish_tx_error")})]}):e.jsx(t,{isDisabled:!x,isLoading:a,onClick:m,onClose:d})};export{Ve as C,le as I,de as S,fe as T,A as a,he as b,k as c,ke as d,w as e,b as f,ge as g,pe as h,y as i,ue as j,me as k,Ce as l,Se as m};
