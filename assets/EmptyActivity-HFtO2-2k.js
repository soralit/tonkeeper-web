import{s,b as c,u as l,r as p,eM as d,j as t,aD as m,eN as x,eO as u,c as y,B as f}from"./index-z3CvngUh.js";import{a as h}from"./BuyAction-eOu1mM-j.js";import"./BuyItemNotification-1Tz62mp5.js";import"./Checkbox-MQ5csBGn.js";import"./v4-OErdnafK.js";const j=s.div`
    margin-top: -64px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,B=s(y)`
    color: ${e=>e.theme.textSecondary};
    margin-bottom: 1.5rem;
`,g=s.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`,n=s(f)`
    display: flex;
    gap: 6px;

    > svg {
        color: ${e=>e.theme.buttonTertiaryForeground};
    }
`,k=()=>{const{t:e}=c(),i=l(),[a,o]=p.useState(!1),{data:r}=d();return t.jsxs(j,{children:[t.jsx(m,{children:e("activity_empty_transaction_title")}),t.jsx(B,{children:e("activity_empty_transaction_caption")}),t.jsxs(g,{children:[t.jsxs(n,{size:"small",onClick:()=>o(!0),children:[t.jsx(x,{}),e("exchange_title")]}),t.jsxs(n,{size:"small",onClick:()=>i.uiEvents.emit("receive",{method:"receive",params:{}}),children:[t.jsx(u,{}),e("wallet_receive")]})]}),t.jsx(h,{buy:r,open:a,handleClose:()=>o(!1)})]})};export{k as default};
