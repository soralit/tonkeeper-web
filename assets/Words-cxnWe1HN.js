import{s as d,ax as O,r as c,bv as E,j as t,bw as D,aH as w,H as P,aj as _,c as q,u as z,b as S,C as A,bd as W,B as N,f as G,v as F,bx as M,x as J,by as Q,k as U}from"./index-z3CvngUh.js";const X=d.div`
    max-height: 240px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: auto;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
        background: transparent;
        height: 0;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    /* optimise large emojis list rendering avoiding styled components */
    > .emoji-button {
        height: 32px;
        width: 32px;
        line-height: 24px;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`,R=d.div`
    position: sticky;
    width: 100%;
    height: 16px;
`,Y=d(R)`
    bottom: -1px;
    background: ${e=>e.theme.gradientBackgroundBottom};
`,Z=d(R)`
    top: 0;
    background: ${e=>e.theme.gradientBackgroundTop};
`,ee=E.slice(0,150),le=O.memo(({onClick:e,keepShortListForMS:r})=>{const[s,l]=c.useState(r?ee:E);return c.useEffect(()=>{r&&setTimeout(()=>l(E),r)},[]),t.jsxs(X,{children:[t.jsx(Z,{}),D.map(n=>t.jsx("div",{className:"emoji-button",onClick:()=>e(n.name),children:t.jsx(n.icon,{})},n.name)),s.map(n=>t.jsx("div",{className:"emoji-button",onClick:()=>e(n),children:n},n)),t.jsx(Y,{})]})}),v=d.div`
    display: flex;
    text-align: center;
    gap: 1rem;
    flex-direction: column;

    & + & {
        margin-top: 2rem;
    }
`,L=d(P)`
    user-select: none;
`,T=d(_)`
    user-select: none;

    text-align: center;
    color: ${e=>e.theme.textSecondary};
`,te=d.div`
    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 0.5rem;
    place-content: space-evenly;
    margin: 1rem 0;

    white-space: normal;
`,ne=d(_)``,re=d(q)`
    display: inline-block;
    width: 24px;
    line-height: 24px;
    color: ${e=>e.theme.textSecondary};

    user-select: none;
`,V=d(_)`
    display: inline-block;
    width: 26px;
    text-align: right;

    font-size: 15px;

    color: ${e=>e.theme.textSecondary};
`;d.div`
    display: flex;
`;const ce=({mnemonic:e,onBack:r,onCheck:s})=>{const l=z(),{t:n}=S();return c.useEffect(()=>{l.twaExpand&&l.twaExpand()},[]),t.jsxs(A,{children:[t.jsx(W,{onClick:r}),t.jsx(v,{children:t.jsxs("div",{children:[t.jsx(L,{children:n("secret_words_title")}),t.jsx(T,{children:n("secret_words_caption")})]})}),t.jsx(te,{children:e.map((u,x)=>t.jsxs(ne,{children:[t.jsxs(re,{children:[" ",x+1,"."]})," ",u," "]},x))}),t.jsx(N,{size:"large",fullWidth:!0,primary:!0,marginTop:!0,onClick:s,children:n("continue")})]})},H=d.input`
    outline: none;
    border: none;
    background: transparent;
    flex-grow: 1;
    font-weight: 500;
    font-size: 16px;

    color: ${e=>e.theme.textPrimary};
`,se=d.label`
    width: 100%;
    line-height: 54px;
    border-radius: ${e=>e.theme.cornerSmall};
    padding: 0 1rem;
    box-sizing: border-box;
    text-align: left;

    ${e=>e.submitted?e.valid?e.active?w`
                      border: 1px solid ${e.theme.fieldActiveBorder};
                      background: ${e.theme.fieldBackground};
                  `:w`
                      border: 1px solid ${e.theme.fieldBackground};
                      background: ${e.theme.fieldBackground};
                  `:w`
                      border: 1px solid ${e.theme.fieldErrorBorder};
                      background: ${e.theme.fieldErrorBackground};
                  `:e.active?w`
                      border: 1px solid ${e.theme.fieldActiveBorder};
                      background: ${e.theme.fieldBackground};
                  `:e.valid?w`
                      border: 1px solid ${e.theme.fieldBackground};
                      background: ${e.theme.fieldBackground};
                  `:w`
                      border: 1px solid ${e.theme.fieldErrorBorder};
                      background: ${e.theme.fieldErrorBackground};
                  `}

    ${V} {
        display: inline-block;
        line-height: 54px;
        padding-right: 0.35rem;
    }
    ${H} {
        display: inline-block;
        width: calc(100% - 38px);
        height: 54px;
        line-height: 54px;
        box-sizing: border-box;
    }
`,B=({value:e,test:r,onChange:s,focusNext:l,isValid:n,tabIndex:u})=>{const[x,h]=c.useState(!1),[g,y]=c.useState(!1),b=g?n===!0:n||x,j=c.useCallback(f=>{f.key==="Enter"&&l()},[l]);return t.jsxs(se,{submitted:g,active:x,valid:b,children:[t.jsxs(V,{children:[r,":"]}),t.jsx(H,{tabIndex:u,autoComplete:"off",value:e,onChange:f=>s(f.target.value.toLocaleLowerCase()),onFocus:()=>h(!0),onKeyDown:j,onBlur:()=>{y(!0),h(!1)}})]})};function C(e,r){return Math.floor(Math.random()*(r-e))+e}const $=(e,r)=>{if(e==="en"){const s=new Intl.PluralRules(e,{type:"ordinal"}),l=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]),n=s.select(r),u=l.get(n);return`${r}${u}`}else return`${r}`},I=(e,r)=>e===""||e.toLowerCase().trim()===r,de=({onBack:e,onConfirm:r,mnemonic:s,isLoading:l})=>{const{t:n,i18n:u}=S(),[x,h]=c.useState(""),[g,y]=c.useState(""),[b,j]=c.useState(""),f=c.useRef(null),[a,o,i]=c.useMemo(()=>[C(1,8),C(8,16),C(16,24)],[]),p=c.useMemo(()=>n("check_words_caption").replace("%1%",$(u.language,a)).replace("%2%",$(u.language,o)).replace("%3%",$(u.language,i)),[n,a,o,i]),m=x.toLowerCase().trim()===s[a-1]&&g.toLowerCase().trim()===s[o-1]&&b.toLowerCase().trim()===s[i-1];return t.jsxs(A,{children:[t.jsx(W,{onClick:e}),t.jsx(v,{children:t.jsxs("div",{children:[t.jsx(L,{children:n("check_words_title")}),t.jsx(T,{children:p})]})}),t.jsxs(v,{ref:f,children:[t.jsx(B,{tabIndex:1,test:a,value:x,onChange:h,isValid:I(x,s[a-1]),focusNext:()=>k(f.current,1)}),t.jsx(B,{tabIndex:2,test:o,value:g,onChange:y,isValid:I(g,s[o-1]),focusNext:()=>k(f.current,2)}),t.jsx(B,{tabIndex:3,test:i,value:b,onChange:j,isValid:I(b,s[i-1]),focusNext:()=>m?r():void 0})]}),t.jsx(v,{children:t.jsx(N,{tabIndex:4,size:"large",fullWidth:!0,primary:!0,loading:l,disabled:!m,onClick:r,children:n("continue")})})]})},oe=d.div`
    display: grid;
    grid-template-rows: repeat(12, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
        grid-template-rows: repeat(24, minmax(0, 1fr));
    }

    ${e=>e.theme.displayType==="full-width"&&w`
            grid-template-rows: repeat(8, minmax(0, 1fr));
        `}
`,ie=e=>M.includes(e),k=(e,r)=>{var l;if(!e)return;const s=e.childNodes[r];s&&((l=s.querySelector("input"))==null||l.focus())},ue=({isLoading:e,onMnemonic:r})=>{const s=z(),{standalone:l}=G(),n=c.useRef(null),{t:u}=S(),x=F(),[h,g]=c.useState(Array(24).fill("")),y=c.useCallback((a,o)=>{if(a.includes(" ")){let i=a.trim().split(" ");if(i.length===1)g(p=>p.map((m,K)=>K===o?i[0]:m)),k(n.current,o+1);else{const p=Math.min(24-o,i.length);i=i.slice(0,p),g(m=>(m=[...m],m.splice(o,p,...i),m)),k(n.current,p-1)}return}else return g(i=>i.map((p,m)=>m===o?a:p))},[n.current]),b=c.useMemo(()=>h.map(a=>a===""||M.includes(a)),[h]),j=()=>{s.topMessage(u("import_wallet_wrong_words_err")),s.hapticNotification("error")},f=async()=>{const a=h.findIndex(i=>!ie(i));a!==-1&&(k(n.current,a),j()),h.length<24&&(k(n.current,h.length-1),j()),s.isIOs()&&Q("text"),await U.mnemonicValidate(h)?r(h):j()};return t.jsxs(t.Fragment,{children:[t.jsx(W,{onClick:()=>x(J.home)}),t.jsx(v,{children:t.jsxs("div",{children:[t.jsx(L,{children:u("import_wallet_title")}),t.jsx(T,{children:u("import_wallet_caption")})]})}),t.jsx(v,{children:t.jsx(oe,{ref:n,children:h.map((a,o)=>t.jsx(B,{value:a,test:o+1,isValid:b[o],onChange:i=>y(i,o),tabIndex:o+1,focusNext:()=>k(n.current,o+1)},o))})}),t.jsx(v,{children:t.jsx(N,{size:"large",fullWidth:!0,primary:!0,loading:e,onClick:f,bottom:l,children:u("continue")})})]})};export{de as C,le as E,ue as I,ce as W,te as a,re as b};
