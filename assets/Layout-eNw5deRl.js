import{j as s,r as i,L as x,u as m,O as p}from"./index-CFPHUVU_.js";const u=t=>t==null||!t.trim(),e="/icons",d=Object.freeze({at:`${e}/at.svg`,"arrow-left":`${e}/arrow-left.svg`,bars:`${e}/bars-solid.svg`,check:`${e}/check-solid.svg`,lock:`${e}/lock.svg`,glass:`${e}/magnifying-glass-solid.svg`,message:`${e}/message-solid.svg`,"paper-plane":`${e}/paper-plane-solid.svg`,paperclip:`${e}/paperclip-solid.svg`,pen:`${e}/pen-solid.svg`,"pen-to-square":`${e}/pen-to-square-solid.svg`,plus:`${e}/plus-solid.svg`,"qr-code":`${e}/qr-code-solid.svg`,"rotate-right":`${e}/rotate-right-solid.svg`,search:`${e}/search-solid.svg`,spinner:`${e}/spinner-solid.svg`}),h=({color:t="text-dark",width:a="100px"})=>s.jsx("div",{className:"h-100 w-100 d-flex align-items-center justify-content-center mt-3",children:s.jsx("div",{className:`spinner-border ${t}`,style:{width:a,height:a},role:"status"})}),g="",v=({iconSrc:t,link:a,styleClass:l="",width:n=16,height:o=16})=>{const[r,c]=i.useState(g);return i.useEffect(()=>{d[t]?c(d[t]):c(g)},[t]),u(r)?s.jsx(h,{}):s.jsx(s.Fragment,{children:a?s.jsx(x,{to:a,children:s.jsx("img",{className:l,src:r,width:n,height:o,alt:"icon"})}):s.jsx("img",{className:l,src:r,width:n,height:o,alt:"icon"})})},f=({setToggle:t,toggle:a})=>s.jsxs(s.Fragment,{children:[s.jsx("button",{className:`p-0 absolute right-0 top-[50%] z-10 hidden  size-12 bg-light-blue translate-x-1/2 rounded-full  sm:flex items-center justify-center transition-all duration-75 ease-in-out ${a?"rotate-180":""}`,onClick:()=>t(!a),children:s.jsx(v,{iconSrc:"arrow-left"})}),s.jsxs("div",{className:`h-full overflow-hidden text-nowrap ${a?"sm:text-transparent":"text-black"} `,children:[s.jsx("h1",{className:"h-16 bg-light-blue",children:"side bar"}),s.jsx(x,{to:"/moses",children:"moses"})]})]}),$=()=>{const t=m(),[a,l]=i.useState(!1);return s.jsxs("div",{className:"flex h-dvh flex-col",children:[s.jsx("h1",{className:"mt-2 px-5",children:"Cengineer3"}),s.jsx("div",{className:"grow p-5",children:s.jsxs("div",{className:"relative flex size-full overflow-hidden rounded-lg",children:[s.jsx("div",{className:`relative bg-light-gray grow ${a?"sm:max-w-5":"sm:max-w-[300px]"} transition-all duration-500 drop-shadow-lg sm:z-50`,children:s.jsx(f,{setToggle:l,toggle:a})}),s.jsx("div",{className:`absolute ${t.pathname==="/"?"translate-x-[100%] opacity-0":"translate-x-0 opacity-100"} sm:translate-x-0 sm:opacity-100 inset-0 grow bg-light-gray transition-all duration-200 ease-in-out sm:relative`,children:s.jsx(p,{})})]})})]})};export{$ as default};
//# sourceMappingURL=Layout-eNw5deRl.js.map
