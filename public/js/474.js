(self.webpackChunk=self.webpackChunk||[]).push([[474],{85474:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});a(67294);var n=a(5977),o=a(98259),u=a(16527);const r=[{path:"/",component:a(36194).Z},{path:"/logout",component:u.Z}];var s=a(15395),l=a(85893);function c(){return"developer"!==(0,o.aC)().auth.role?(0,l.jsx)(n.l_,{to:{pathname:"/login",state:{from:location}}}):(0,l.jsxs)(n.rs,{children:[r.map((function(e,t){return(0,l.jsx)(n.AW,{path:e.path,exact:!e.isNotExact,component:e.component},t)})),(0,l.jsx)(n.l_,{path:"/login",to:"/"}),(0,l.jsx)(n.AW,{children:(0,l.jsx)(s.Z,{})})]})}},16527:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(67294),o=a(5977),u=a(98259),r=a(86121),s=a(85893);function l(){var e=(0,o.k6)(),t=(0,u.aC)(),a=(t.auth,t.setAuthState),l=t.axios;return n.useEffect((function(){l({method:"get",url:"/logout"});var t={name:"",role:void 0,username:"",token:""};a(t),r.Z.auth.put({key:"auth_token",value:t.token}),r.Z.auth.put({key:"name",value:t.name}),r.Z.auth.put({key:"username",value:t.username}),r.Z.auth.put({key:"role",value:t.role}),e.replace("/")})),(0,s.jsx)("div",{})}}}]);