import{s as n,aH as d,aj as b,j as t,eS as s}from"./index-z3CvngUh.js";const c=n.div`
    display: inline-flex;
    gap: 15px;
    align-items: center;

    cursor: pointer;
`,l=n.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-width: 2px;
    border-style: solid;
    box-sizing: border-box;

    ${e=>e.disabled?d`
                  opacity: 0.48;
              `:void 0}

    ${e=>e.checked?d`
                  color: ${e.theme.buttonPrimaryForeground};
                  background: ${e.theme.buttonPrimaryBackground};
                  border-color: ${e.theme.buttonPrimaryBackground};
              `:d`
                  color: transparent;
                  background: transparent;
                  border-color: ${e.theme.backgroundContentTint};
              `}
`,u=n(l)`
    width: 22px;
    height: 22px;

    border-radius: 6px;
`,m=n(l)`
    width: 24px;
    height: 24px;

    border-radius: ${e=>e.theme.cornerFull};
`,x=n(b)`
    color: ${e=>e.light?e.theme.textPrimary:e.theme.textSecondary};
`,j=({checked:e,onChange:i,disabled:a,children:r,light:o,className:h})=>t.jsxs(c,{onClick:()=>i(!e),className:h,children:[t.jsx(u,{checked:e,disabled:a,children:e?t.jsx(s,{}):void 0}),r&&t.jsx(x,{light:o,children:r})]}),y=({checked:e,onChange:i,disabled:a,children:r})=>t.jsxs(c,{onClick:o=>{o.stopPropagation(),o.preventDefault(),i(!e)},children:[t.jsx(m,{checked:e,disabled:a,children:e?t.jsx(s,{}):void 0}),r&&t.jsx(x,{children:r})]});export{j as C,y as R};
