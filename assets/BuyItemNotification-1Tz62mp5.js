import{s as o,aH as m,aj as h,ao as k,eQ as v,u as j,a8 as O,f as S,b as f,r as w,j as s,G as D,ak as T,b7 as B,aw as I,b8 as R,B as N,eR as _,d as P,a as A,a9 as E,J as L,k as F}from"./index-z3CvngUh.js";import{C as M}from"./Checkbox-MQ5csBGn.js";import{a as Q}from"./v4-OErdnafK.js";const g=o.img`
    pointer-events: none;

    ${e=>e.large?m`
                  width: 72px;
                  height: 72px;
                  margin-bottom: 20px;
                  border-radius: ${t=>t.theme.cornerSmall};
              `:m`
                  width: 44px;
                  height: 44px;
                  border-radius: ${t=>t.theme.cornerExtraSmall};
              `}
`,U=o.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`,H=o.div`
    display: flex;
    flex-direction: column;

    user-select: none;
`,y=o(h)`
    color: ${e=>e.theme.textSecondary};
`,b=o.div`
    display: flex;
    color: ${e=>e.theme.iconTertiary};
`,z=o(k)`
    transition: color 0.1s ease;

    &:hover ${b} {
        color: ${e=>e.theme.iconPrimary};
    }
`,W=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,X=o.div`
    text-align: center;
`,G=o.span`
    margin: 28px 0 0;
    display: flex;
`,J=o.div`
    margin: 2rem 0;
    padding: 18px 18px;
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    width: 100%;

    background: ${e=>e.theme.backgroundContent};
    border-radius: ${e=>e.theme.cornerSmall};
`,q=o(h)`
    display: block;
`,K=o(h)`
    cursor: pointer;
    color: ${e=>e.theme.textSecondary};
    margin-right: 0.75rem;
    transition: color 0.1s ease;

    &:hover {
        color: ${e=>e.theme.textPrimary};
    }
`,V=({buttons:e})=>{const{t}=f(),r=j();return s.jsxs(J,{children:[s.jsx(q,{children:t("exchange_method_open_warning")}),e&&e.length>0&&s.jsx("div",{children:e.map((n,a)=>s.jsx(K,{onClick:()=>r.openPage(n.url),children:n.title},a))})]})},Y=(e,t)=>{const r=_(),n=P();return A(async a=>{await r.set(`${t}_${e}`,a),await n.invalidateQueries([e,t])})},Z=(e,t)=>{const r=_();return E([e,t],async()=>{const n=await r.get(`${t}_${e}`);return n===null?!1:n})},ee=(e,t,r,n,a)=>{const[i,l]=a==="buy"?[n,"TON"]:["TON",n],c=L(r.active.rawAddress,r.network);if(e=e.replace("{ADDRESS}",c).replace("{CUR_FROM}",i).replace("{CUR_TO}",l),e.includes("TX_ID")){const d="mercuryo_"+Q();e=e.replace(/\{TX_ID\}/g,d),e=e.replace(/\=TON\&/gi,"=TONCOIN&"),e+=`&signature=${F.sha512_sync(`${c}${t.mercuryoSecret??""}`).toString("hex")}`}return e},oe=({item:e,kind:t})=>{const r=v(),n=j(),a=O(),{config:i,fiat:l}=S(),{t:c}=f(),[d,x]=w.useState(!1),{data:p}=Z(e.title,t),{mutate:C}=Y(e.title,t),u=()=>{r(e.action_button.url),n.openPage(ee(e.action_button.url,i,a,l,t)),x(!1)},$=()=>{p?u():x(!0)};return s.jsxs(s.Fragment,{children:[s.jsx(D,{onClick:$,children:s.jsxs(z,{children:[s.jsxs(U,{children:[s.jsx(g,{src:e.icon_url}),s.jsxs(H,{children:[s.jsx(T,{children:e.title}),s.jsx(y,{children:e.description})]})]}),s.jsx(b,{children:s.jsx(B,{})})]})},e.title),s.jsx(I,{isOpen:d,handleClose:()=>x(!1),children:()=>s.jsxs(W,{children:[s.jsx(g,{large:!0,src:e.icon_url}),s.jsx(R,{children:e.title}),s.jsx(X,{children:s.jsx(y,{children:e.description})}),s.jsx(V,{buttons:e.info_buttons}),s.jsx(N,{size:"large",fullWidth:!0,primary:!0,onClick:u,children:e.action_button.title}),s.jsx(G,{children:s.jsx(M,{checked:!!p,onChange:C,children:c("exchange_method_dont_show_again")})})]})})]})};export{oe as B,J as D};
