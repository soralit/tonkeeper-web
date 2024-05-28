import{s as i,ax as a,j as o,aH as d,cA as s,aD as c,ag as p,c as r}from"./index-z3CvngUh.js";const l=i.span`
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`,x=i.span`
    position: absolute;
    top: 2px;
    right: 0;
`,h=i(c)`
    overflow: hidden;
    text-overflow: ellipsis;
`,B=a.memo(({nft:e})=>o.jsx(h,{children:e.dns??e.metadata.name})),m=i(p)`
    color: ${e=>e.theme.textSecondary};

    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;

    ${e=>e.verified&&d`
            padding-right: 19px;
            position: relative;
        `}
`,y=i.span`
    position: absolute;
    top: 0;
    right: 0;
`,j=a.memo(({nft:e})=>{var n;const t=e.approvedBy&&e.approvedBy.length>0;return o.jsxs(m,{verified:t,children:[o.jsx(l,{children:((n=e.collection)==null?void 0:n.name)??e.metadata.description}),t&&o.jsx(y,{children:o.jsx(s,{})})]})}),v=i(r)`
    overflow: hidden;
    text-overflow: ellipsis;
`,g=a.memo(({nft:e})=>o.jsx(v,{children:e.dns??e.metadata.name})),f=i(r)`
    color: ${e=>e.theme.textSecondary};

    display: inline-flex;
    width: fit-content;
    max-width: 100%;
    box-sizing: border-box;

    ${e=>e.verified&&d`
            padding-right: 19px;
            position: relative;
        `}
`,w=a.memo(({nft:e})=>{var n;const t=e.approvedBy&&e.approvedBy.length>0;return o.jsxs(f,{verified:t,children:[o.jsx(l,{children:((n=e.collection)==null?void 0:n.name)??e.metadata.description}),t&&o.jsx(x,{children:o.jsx(s,{})})]})});export{g as N,w as a,B as b,j as c};
