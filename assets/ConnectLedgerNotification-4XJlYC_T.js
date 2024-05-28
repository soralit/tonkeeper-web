import{s as h,b as L,r as t,z as k,j as o,B as x,u as E,aw as b}from"./index-z3CvngUh.js";import{L as y}from"./LedgerConnectionSteps-FH31nI6T.js";import{U as C}from"./UserCancelledError-WQqxL8x6.js";const w=h.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`,v=h(y)`
    margin: 1rem 0;
`,T=h.div`
    margin-top: 1rem;
    display: flex;
    gap: 8px;
    width: 100%;

    > * {
        flex: 1;
    }
`,q=({ledgerParams:e,onClose:i,onSubmit:a})=>{const{t:d}=L(),[n,m]=t.useState(!1),{mutateAsync:c,data:l,isLoading:u,isDeviceConnected:g,reset:s}=k(),p=()=>{c().then(j=>j.signTransaction(e.path,e.transaction).then(r=>{m(!0),setTimeout(()=>a(r),500)}).catch(r=>{console.error(r),typeof r=="object"&&"message"in r&&r.message.includes("0x6985")?i(new C("Cancel auth request")):i(r)})).catch(console.debug)};t.useEffect(()=>{p()},[]);const S=()=>{s(),p()};let f="connect";return g&&(f="open-ton"),l&&(f="confirm-tx"),n&&(f="all-completed"),o.jsxs(w,{children:[o.jsx(v,{showConfirmTxStep:!0,currentStep:f}),o.jsxs(T,{children:[o.jsx(x,{secondary:!0,onClick:()=>i(new C("Cancel auth request")),children:d("cancel")}),o.jsx(x,{primary:!0,loading:u||!!l||n,onClick:S,children:d("try_again")})]})]})},_=()=>{const e=E(),{t:i}=L(),[a,d]=t.useState(void 0),[n,m]=t.useState(void 0),c=t.useCallback(()=>{d(void 0),m(void 0)},[]),l=t.useCallback(s=>{e.uiEvents.emit("response",{method:"response",id:n,params:s}),c()},[e,n,c]),u=t.useCallback(s=>{n&&e.uiEvents.emit("response",{method:"response",id:n,params:s??new Error("Unknown Ledger error")}),c()},[n,e,c]);t.useEffect(()=>{const s=p=>{d(p.params),m(p.id)};return e.uiEvents.on("ledger",s),()=>{e.uiEvents.off("ledger",s)}},[e]);const g=t.useCallback(()=>{if(!(!a||!n))return o.jsx(q,{ledgerParams:a,onClose:u,onSubmit:l})},[e,a,n,u,l]);return o.jsx(b,{isOpen:a!=null&&n!=null,handleClose:()=>u(new C("Cancel auth request")),title:i("ledger_connect_header"),children:g})};export{q as LedgerContent,_ as default};
