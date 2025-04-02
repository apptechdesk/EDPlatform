import{c as l,a as g,u as j,b,r as t,j as e,L as w,d as N,s as v}from"./index-CudSqWDM.js";import{L as k}from"./Loading-Dqa0WC_U.js";/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],S=l("eye-off",L);/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_=l("eye",E);/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],M=l("mail",C),I=async a=>(await g.post("/Authentication",a)).data,$=({title:a})=>{const n=j(),c=b(),[o,x]=t.useState("mch@oceanpass.com"),[i,h]=t.useState("Start$123"),[d,u]=t.useState(""),[r,p]=t.useState(!1),[f,m]=t.useState(!1),y=async()=>{u(""),m(!0);try{const s=await I({email:o,password:i});localStorage.setItem("userDetails",JSON.stringify(s)),n(v(s)),s.userRole==="Client"?c("/client/dashboard"):c("/dashboard")}catch(s){console.error("Login failed",s),u("Invalid credentials")}finally{m(!1)}};return t.useEffect(()=>{document.title=a},[a]),e.jsxs("div",{children:[e.jsx(k,{status:f}),e.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-100 p-4",children:e.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("img",{src:w,alt:"logo",className:"h-12"})}),e.jsx("h2",{className:"text-2xl font-bold text-center mb-2",children:"Login into account"}),e.jsx("p",{className:"text-sm text-gray-500 text-center mb-6",children:"Use your credentials to access your account."}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4 relative",children:[e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:e.jsx(M,{className:"w-5 h-5 text-gray-400"})}),e.jsx("input",{type:"email",className:"w-full pl-10 pr-4 py-3 border rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"Email Address",value:o,onChange:s=>x(s.target.value),required:!0})]}),e.jsxs("div",{className:"mb-4 relative",children:[e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3",children:e.jsx(N,{className:"w-5 h-5 text-gray-400"})}),e.jsx("input",{type:r?"text":"password",className:"w-full pl-10 pr-10 py-3 border rounded-full text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"Password",value:i,onChange:s=>h(s.target.value),required:!0}),e.jsx("span",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:()=>p(!r),children:r?e.jsx(S,{className:"w-5 h-5 text-gray-400"}):e.jsx(_,{className:"w-5 h-5 text-gray-400"})})]}),d&&e.jsx("p",{style:{color:"red"},children:d}),e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("label",{className:"flex items-center text-sm text-gray-600",children:[e.jsx("input",{type:"checkbox",className:"mr-2"}),"Remember me"]}),e.jsx("a",{href:"#",className:"text-sm text-purple-600 hover:underline",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"w-full py-3 bg-black hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition duration-200",onClick:y,children:"Login"})]})]})})]})};export{$ as Login,$ as default};
