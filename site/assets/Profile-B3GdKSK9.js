import{h as j,r as t,l as N,A as b,j as e}from"./index-djq0z_Y8.js";const P=()=>{const s=j(a=>a.user.userDetails),i=t.useRef(null),x=N(),[n,f]=t.useState(!1),[l,h]=t.useState({fullName:"",emailID:"",phone:"",address:"",profilePicture:b}),[d,p]=t.useState({currentPassword:"",newPassword:"",confirmPassword:""});t.useEffect(()=>{s&&h({fullName:s.accountName||"",emailID:s.emailID||"",phone:s.phone||"",address:s.address||"",profilePicture:s.profilePicture||b})},[s]);const c=a=>{const{name:r,value:o}=a.target;h(m=>({...m,[r]:o}))},u=a=>{const{name:r,value:o}=a.target;p(m=>({...m,[r]:o}))},w=()=>{console.log("Updated Profile:",l),f(!1)},g=()=>{const{currentPassword:a,newPassword:r,confirmPassword:o}=d;if(!a||!r||!o){alert("Please fill in all password fields.");return}if(r!==o){alert("New password and confirmation do not match.");return}console.log("Password updated:",{currentPassword:a,newPassword:r}),p({currentPassword:"",newPassword:"",confirmPassword:""}),alert("Password updated successfully!")};return t.useEffect(()=>{x.pathname==="/security"&&i.current&&i.current.scrollIntoView({behavior:"smooth"})},[x]),e.jsxs("div",{className:"flex flex-col items-center justify-center p-4",children:[e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Profile"}),e.jsx("button",{className:"text-sm text-blue-600 hover:underline",onClick:()=>f(!n),children:n?"Cancel":"Edit"})]}),e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("img",{src:l.profilePicture,alt:"Profile",className:"w-24 h-24 rounded-full object-cover border"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-lg font-semibold",children:s.accountName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.companyName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.userRole})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Full Name"}),n?e.jsx("input",{type:"text",name:"fullName",value:l.fullName,onChange:c,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"}):e.jsx("p",{className:"text-gray-800",children:l.fullName})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Email"}),n?e.jsx("input",{type:"email",name:"emailID",value:l.emailID,onChange:c,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"}):e.jsx("p",{className:"text-gray-800",children:l.emailID})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Phone"}),n?e.jsx("input",{type:"tel",name:"phone",value:l.phone,onChange:c,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"}):e.jsx("p",{className:"text-gray-800",children:l.phone})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Address"}),n?e.jsx("input",{type:"text",name:"address",value:l.address,onChange:c,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"}):e.jsx("p",{className:"text-gray-800",children:l.address})]})]}),n&&e.jsx("div",{className:"mt-6 text-right",children:e.jsx("button",{onClick:w,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",children:"Save Changes"})})]}),e.jsxs("div",{ref:i,className:"bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mt-8",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Security"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Current Password"}),e.jsx("input",{type:"password",name:"currentPassword",value:d.currentPassword,onChange:u,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"New Password"}),e.jsx("input",{type:"password",name:"newPassword",value:d.newPassword,onChange:u,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold mb-1",children:"Confirm New Password"}),e.jsx("input",{type:"password",name:"confirmPassword",value:d.confirmPassword,onChange:u,className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"})]})]}),e.jsx("div",{className:"mt-6 text-right",children:e.jsx("button",{onClick:g,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",children:"Update Password"})})]})]})};export{P as default};
