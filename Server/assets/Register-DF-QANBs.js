import{r as j,aF as S,j as e,G as n,S as l,aj as m,aB as z,aC as B,ak as E,B as k,q as u,ap as y,aD as g,aE as A,L as I}from"./index-BwL1kY1x.js";import{F as q,c as C,E as W,a as R,b as x,A as D}from"./EyeInvisibleOutlined-BmXoj5PX.js";import{I as p,F as o}from"./FormHelperText-DJJe1lQX.js";const L=s=>new RegExp(/[0-9]/).test(s),N=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),M=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),$=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},G=s=>{let i=0;return s.length>5&&(i+=1),s.length>7&&(i+=1),L(s)&&(i+=1),M(s)&&(i+=1),N(s)&&(i+=1),i};function O(){const[s,i]=j.useState(),[h,b]=j.useState(!1),P=()=>{b(!h)},v=a=>{a.preventDefault()},f=a=>{const t=G(a);i($(t))},[F]=S();return F.get("auth"),j.useEffect(()=>{f("")},[]),e.jsx(e.Fragment,{children:e.jsx(q,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:C().shape({firstname:x().max(255).required("First Name is required"),lastname:x().max(255).required("Last Name is required"),email:x().email("Must be a valid email").max(255).required("Email is required"),password:x().required("Password is required").test("no-leading-trailing-whitespace","Password cannot start or end with spaces",a=>a===a.trim()).max(10,"Password must be less than 10 characters")}),children:({errors:a,handleBlur:t,handleChange:c,touched:r,values:d})=>e.jsx("form",{noValidate:!0,children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsxs(n,{size:{xs:12,md:6},children:[e.jsxs(l,{sx:{gap:1},children:[e.jsx(p,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(m,{id:"firstname-login",type:"firstname",value:d.firstname,name:"firstname",onBlur:t,onChange:c,placeholder:"John",fullWidth:!0,error:!!(r.firstname&&a.firstname)})]}),r.firstname&&a.firstname&&e.jsx(o,{error:!0,id:"helper-text-firstname-signup",children:a.firstname})]}),e.jsxs(n,{size:{xs:12,md:6},children:[e.jsxs(l,{sx:{gap:1},children:[e.jsx(p,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(m,{fullWidth:!0,error:!!(r.lastname&&a.lastname),id:"lastname-signup",type:"lastname",value:d.lastname,name:"lastname",onBlur:t,onChange:c,placeholder:"Doe",inputProps:{}})]}),r.lastname&&a.lastname&&e.jsx(o,{error:!0,id:"helper-text-lastname-signup",children:a.lastname})]}),e.jsxs(n,{size:12,children:[e.jsxs(l,{sx:{gap:1},children:[e.jsx(p,{htmlFor:"company-signup",children:"Company"}),e.jsx(m,{fullWidth:!0,error:!!(r.company&&a.company),id:"company-signup",value:d.company,name:"company",onBlur:t,onChange:c,placeholder:"Demo Inc.",inputProps:{}})]}),r.company&&a.company&&e.jsx(o,{error:!0,id:"helper-text-company-signup",children:a.company})]}),e.jsxs(n,{size:12,children:[e.jsxs(l,{sx:{gap:1},children:[e.jsx(p,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(m,{fullWidth:!0,error:!!(r.email&&a.email),id:"email-login",type:"email",value:d.email,name:"email",onBlur:t,onChange:c,placeholder:"demo@company.com",inputProps:{}})]}),r.email&&a.email&&e.jsx(o,{error:!0,id:"helper-text-email-signup",children:a.email})]}),e.jsxs(n,{size:12,children:[e.jsxs(l,{sx:{gap:1},children:[e.jsx(p,{htmlFor:"password-signup",children:"Password"}),e.jsx(m,{fullWidth:!0,error:!!(r.password&&a.password),id:"password-signup",type:h?"text":"password",value:d.password,name:"password",onBlur:t,onChange:w=>{c(w),f(w.target.value)},endAdornment:e.jsx(z,{position:"end",children:e.jsx(B,{"aria-label":"toggle password visibility",onClick:P,onMouseDown:v,edge:"end",color:"secondary",children:h?e.jsx(W,{}):e.jsx(R,{})})}),placeholder:"******",inputProps:{}})]}),r.password&&a.password&&e.jsx(o,{error:!0,id:"helper-text-password-signup",children:a.password}),e.jsx(E,{fullWidth:!0,sx:{mt:2},children:e.jsxs(n,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(n,{children:e.jsx(k,{sx:{bgcolor:s==null?void 0:s.color,width:85,height:8,borderRadius:"7px"}})}),e.jsx(n,{children:e.jsx(u,{variant:"subtitle1",fontSize:"0.75rem",children:s==null?void 0:s.label})})]})})]}),e.jsx(n,{size:12,children:e.jsxs(u,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Privacy Policy"})]})}),a.submit&&e.jsx(n,{size:12,children:e.jsx(o,{error:!0,children:a.submit})}),e.jsx(n,{size:12,children:e.jsx(A,{children:e.jsx(I,{fullWidth:!0,size:"large",variant:"contained",color:"primary",children:"Create Account"})})})]})})})})}function J(){return e.jsx(D,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{size:12,children:e.jsxs(l,{direction:"row",sx:{alignItems:"baseline",justifyContent:"space-between",mb:{xs:-.5,sm:.5}},children:[e.jsx(u,{variant:"h3",children:"Sign up"}),e.jsx(u,{component:g,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(n,{size:12,children:e.jsx(O,{})})]})})}export{J as default};
