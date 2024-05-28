import{s as g,ax as ge,r as u,u as w,f as v,j as s,dU as pe,dV as je,dW as we,dX as Se,dY as _e,aj as ye,a8 as I,aq as R,J as O,ak as F,b as M,b6 as ve,L as B,a9 as H,dZ as Ae,Q as C,d_ as Y,G as _,ao as y,ar as Z,d$ as Te,aP as ee,aR as se,ae as te,d as ne,a as Q,e0 as be,e1 as Ne,c as ke,cO as Fe,e2 as Ie,a3 as h,e3 as L,bk as Ce,ch as De,cR as We,cS as Le,e4 as Re,d4 as Me,cl as Ve,cm as Pe,da as Ee,a1 as re,e5 as $e,e6 as Oe,e7 as ae,by as Be}from"./index-z3CvngUh.js";const He=g.div`
    position: absolute;
    right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${e=>e.theme.textSecondary};

    &:hover {
        color: ${e=>e.theme.textTertiary};
    }
`,Qe=g.div`
    position: absolute;
    right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    color: ${e=>e.theme.accentBlue};
`,qe=ge.forwardRef(({value:e,onChange:t,isValid:n=!0,label:a,disabled:i,onScan:r,onSubmit:l},d)=>{const[m,p]=u.useState(!1),[A,V]=u.useState(void 0),j=w(),{hideQrScanner:T}=v(),P=f=>{f.stopPropagation(),f.preventDefault(),!i&&(t==null||t(""))},E=f=>{if(f.stopPropagation(),f.preventDefault(),i)return;const S=Date.now();j.uiEvents.emit("scan",{method:"scan",id:S,params:void 0}),V(S)};return u.useEffect(()=>{const f=S=>{S.id===A&&r(S.params)};return j.uiEvents.on("response",f),()=>{j.uiEvents.off("response",f)}},[j,A,r]),s.jsxs(pe,{focus:m,valid:n,scanner:!0,children:[s.jsx(je,{onSubmit:l,ref:d,disabled:i,value:e,onChange:f=>t&&t(f.target.value),onFocus:()=>p(!0),onBlur:()=>p(!1)}),a&&s.jsx(we,{active:e!=="",children:a}),e===""?T===!0?s.jsx(s.Fragment,{}):s.jsx(Qe,{onClick:E,children:s.jsx(Se,{})}):s.jsx(He,{onClick:P,children:s.jsx(_e,{})})]})}),oe=()=>{const e=document.createDocumentFragment(),t=document.createElement("canvas");return e.appendChild(t),t.getContext("2d")},Ke=(e,t)=>{const n=oe();return n.font=t,Array.isArray(e)?Math.max(...e.map(a=>n.measureText(a).width)):n.measureText(e).width},X=e=>{const t=u.useMemo(()=>"text"in e?e:void 0,[e]),n=u.useMemo(()=>"ref"in e?e:void 0,[e]);return u.useMemo(()=>{var a;if((a=n==null?void 0:n.ref.current)!=null&&a.textContent){const i=oe(),r=window.getComputedStyle(n.ref.current);return i.font=r.font,i.measureText(n.ref.current.textContent).width}else if(t!=null&&t.text)return Ke(t.text,t.font??"16px times");return NaN},[t==null?void 0:t.text,t==null?void 0:t.font,n==null?void 0:n.ref])},Ge=(e,t,n)=>{const a=I(),i=(n==null?void 0:n.address)??void 0,[r,l]=u.useState(void 0),d=X({text:t,font:"16px sans-serif"}),m=X({text:i?R(i):void 0,font:"16px sans-serif"});return u.useEffect(()=>{e.current&&n&&!isNaN(d)&&!isNaN(m)&&e.current.clientWidth-16*3-d-m>0?l({inputTextWidth:d,addressTextWidth:m,value:R(O(n.address,a.network))}):l(void 0)},[e.current,n,d,m]),r},ze=g.div`
    position: relative;
    width: 100%;
`,Ue=g(ye)`
    position: absolute;
    bottom: 0;
    line-height: 46px;
    left: ${e=>Math.ceil(e.inputTextWidth)+46}px;
    color: ${e=>e.theme.textSecondary};
    user-select: none;
`,Xe=({value:e,children:t})=>s.jsxs(ze,{children:[t,e&&s.jsx(Ue,{inputTextWidth:e.inputTextWidth,children:e.value})]}),J=g(F)`
    user-select: none;
    width: 100%;
    margin-top: 12px;
    margin-bottom: -4px;
`,Je=e=>{const t=w(),{api:n}=v(),a=I();return H([a.active.rawAddress,C.activity,"suggestions",e],()=>Ae(t,n,a,e),{keepPreviousData:!0})},ie=g.span`
    display: flex;
    color: ${e=>e.theme.iconSecondary};

    padding: 8px;
    margin: -8px;
`,Ye=g.span`
    display: inline-flex;
    color: ${e=>e.theme.accentBlue};
`,Ze=(e,t)=>new Intl.DateTimeFormat(te(e),{day:"numeric",month:"long"}).format(new Date(t)),es=e=>{const t=w(),n=I(),a=ne();return Q(async()=>{await be(t.storage,n.publicKey,e.address),await a.invalidateQueries([n.active.rawAddress,C.activity,"suggestions"])})},ss=({item:e,onSelect:t,onEdit:n})=>{const a=w(),{mutateAsync:i}=es(e),{t:r}=M(),l=Y(e);return s.jsx(_,{onClick:()=>t(e),children:s.jsxs(y,{children:[s.jsx(Z,{noWrap:!0,text:s.jsxs(s.Fragment,{children:[e.name," ",s.jsx(Ye,{children:s.jsx(Te,{})})]}),secondary:R(l)}),s.jsx(ee,{payload:d=>s.jsxs(B,{margin:!1,dropDown:!0,children:[s.jsx(_,{dropDown:!0,onClick:m=>{m.stopPropagation(),n(e),d()},children:s.jsx(y,{children:s.jsx(F,{children:r("add_edit_favorite_edit_title")})})}),s.jsx(_,{dropDown:!0,onClick:m=>{m.stopPropagation(),a.confirm(r("send_screen_steps_address_delete_alert_text").replace("%{name}",e.name)).then(p=>{if(p)return i()}).finally(()=>{d()})},children:s.jsx(y,{children:s.jsx(F,{children:r("add_edit_favorite_delete")})})})]}),children:s.jsx(ie,{children:s.jsx(se,{})})})]})},e.address)},ts=e=>{const t=w(),n=I(),a=ne();return Q(async()=>{await Ne(t.storage,n.publicKey,e.address),await a.invalidateQueries([n.active.rawAddress,C.activity,"suggestions"])})},ns=({item:e,onSelect:t,onAddFavorite:n})=>{const{mutateAsync:a}=ts(e),{t:i,i18n:r}=M(),l=Y(e);return s.jsx(_,{onClick:()=>t(e),children:s.jsxs(y,{children:[s.jsx(Z,{text:R(l),secondary:Ze(te(r.language),e.timestamp)}),s.jsx(ee,{payload:d=>s.jsxs(B,{margin:!1,dropDown:!0,children:[s.jsx(_,{dropDown:!0,onClick:m=>{m.stopPropagation(),n(e),d()},children:s.jsx(y,{children:s.jsx(F,{children:i("send_screen_steps_address_suggest_actions_add")})})}),s.jsx(_,{dropDown:!0,onClick:m=>{m.stopPropagation(),a().finally(()=>d())},children:s.jsx(y,{children:s.jsx(F,{children:i("send_screen_steps_address_suggest_actions_hide")})})})]}),children:s.jsx(ie,{children:s.jsx(se,{})})})]})},e.address)},rs=({onSelect:e,disabled:t,acceptBlockchains:n})=>{const a=w(),{t:i}=M(),{data:r}=Je(n);return r?s.jsxs(s.Fragment,{children:[r.length>0?s.jsx(J,{children:i("send_screen_steps_address_suggests_label")}):void 0,s.jsx(B,{margin:!1,fullWidth:!0,noUserSelect:!0,children:r.map(l=>l.isFavorite?s.jsx(ss,{item:l,onSelect:d=>!t&&e(d),onEdit:d=>{t||a.uiEvents.emit("editSuggestion",{method:"editSuggestion",params:d})}},l.address):s.jsx(ns,{item:l,onSelect:d=>!t&&e(d),onAddFavorite:d=>{t||a.uiEvents.emit("addSuggestion",{method:"addSuggestion",params:d})}},l.address))})]}):s.jsxs(s.Fragment,{children:[s.jsx(J,{children:i("send_screen_steps_address_suggests_label")}),s.jsx(ve,{size:4,margin:!1,fullWidth:!0})]})},as=g(ke)`
    user-select: none;
    display: block;
    width: 100%;
    margin-top: -4px;
    color: ${e=>e.theme.accentOrange};
`,ls=()=>{const{api:e}=v();return Q(t=>{const n="dns"in t?t.dns.address:t.address;return new re(e.tonApiV2).getAccount({accountId:n})})},os=(e,t)=>{const{api:n}=v(),a="dns"in t?t.dns.address:t.address;return H([C.account,a],()=>new re(n.tonApiV2).getAccount({accountId:a}),{enabled:e})},is=e=>e.length<8||e.length===48||e.length===52||ae(e)||L(e),ds=e=>{const{api:t}=v(),[n,a]=u.useState("");return u.useMemo(()=>$e(r=>a(r),400),[a])(e),H([C.dns,e,n],async()=>{if(e!==n)return null;let r=n.trim();if(is(r))return null;r=r.toString().toLowerCase();const l=await new Oe(t.tonApiV2).dnsResolve({domainName:r});return l.wallet?l.wallet:null},{retry:0,keepPreviousData:!1})},$=e=>"dns"in e||ae(e.address),cs={address:""},fs=({data:e,setRecipient:t,keyboard:n,onScan:a,isExternalLoading:i,acceptBlockchains:r,HeaderBlock:l,fitContent:d,isAnimationProcess:m})=>{const p=w(),[A,V]=u.useState(!1),j=I(),{t:T}=M(),{standalone:P,ios:E}=v(),f=u.useRef(null),q=Fe()&&m,[b,de]=u.useState(e&&"comment"in e?e.comment:""),[c,N]=u.useState((e==null?void 0:e.address)??cs),{data:D,isFetching:ce}=ds(c.address);u.useEffect(()=>{const o=setTimeout(()=>Ie(),300);return()=>{clearTimeout(o)}},[]),u.useEffect(()=>{D&&N(o=>({address:o.address,dns:D,dnsName:o.address.toLowerCase()})),D==null&&N(o=>"dns"in o?{address:o.address}:o)},[N,D]);const k=u.useMemo(()=>{if(r&&r.length===1)return r[0];let o;return $(c)?o=h.TON:L(c.address)&&(o=h.TRON),!r||o&&r.includes(o)?o:null},[c]),ue=u.useMemo(()=>r&&r.length===1?r[0]===h.TON?$(c):L(c.address):!0,[r,c]),{data:x,isFetching:le}=os(k===h.TON&&$(c),c),fe=le||i,K=Ce(),G=u.useMemo(()=>K?/^[ -~]*$/gm.test(b):x&&x.memoRequired?b.length>0:!0,[x,b,K]);u.useEffect(()=>{p.isIOs()||f.current&&f.current.focus()},[f.current]);const z=u.useMemo(()=>"isFavorite"in c?c.blockchain===h.TRON?c.address:O(c.address,j.network):"dnsName"in c&&typeof c.dnsName=="string"?c.dnsName:c.address,[c]),me=Ge(f,z,x),W=()=>{V(!0);let o;switch(k){case h.TON:o=G&&x;break;case h.TRON:o=L(c.address)}o?(E&&n&&Be(n),k===h.TON?t({address:{...c,blockchain:h.TON},toAccount:x,comment:b,done:!0}):t({address:{...c,blockchain:h.TRON},done:!0})):p.hapticNotification("error")},he=o=>{o.stopPropagation(),o.preventDefault(),W()},xe=async o=>{var U;o.blockchain===h.TON&&(o.address=O(o.address,j.network)),N(o),(U=f.current)==null||U.focus()};return s.jsxs(De,{onSubmit:he,standalone:P,fitContent:d,noPadding:!0,children:[!q&&s.jsx(We,{children:s.jsx(Le,{children:s.jsx(l,{})})}),s.jsx(Xe,{value:me,children:s.jsx(qe,{onSubmit:W,ref:f,value:z,onScan:a,onChange:o=>N({address:o}),label:T("transaction_recipient_address"),isValid:!A||!!k&&ue,disabled:i})}),k!==h.TRON&&s.jsx(Re,{onSubmit:W,value:b,onChange:de,label:T("txActions_signRaw_comment"),isValid:!A||G,disabled:i}),x&&x.memoRequired&&s.jsx(as,{children:T("send_screen_steps_comfirm_comment_required_text")}),s.jsx(rs,{onSelect:xe,disabled:i,acceptBlockchains:r}),s.jsx(Me,{}),!q&&s.jsx(Ve,{children:s.jsx(Pe,{children:s.jsx(Ee,{isLoading:fe||ce,onClick:W})})})]})};export{fs as R,Ke as g,ls as u};
