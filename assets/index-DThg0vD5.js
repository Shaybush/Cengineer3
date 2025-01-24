import{R as I,j as w,r as q1}from"./index-CFPHUVU_.js";var d1=e=>e.type==="checkbox",t1=e=>e instanceof Date,N=e=>e==null;const te=e=>typeof e=="object";var F=e=>!N(e)&&!Array.isArray(e)&&te(e)&&!t1(e),ge=e=>F(e)&&e.target?d1(e.target)?e.target.checked:e.target.value:e,ve=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,be=(e,s)=>e.has(ve(s)),xe=e=>{const s=e.constructor&&e.constructor.prototype;return F(s)&&s.hasOwnProperty("isPrototypeOf")},k1=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function j(e){let s;const r=Array.isArray(e),l=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(k1&&(e instanceof Blob||l))&&(r||F(e)))if(s=r?[]:{},!r&&!xe(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=j(e[u]));else return e;return s}var _1=e=>Array.isArray(e)?e.filter(Boolean):[],A=e=>e===void 0,C=(e,s,r)=>{if(!s||!F(e))return r;const l=_1(s.split(/[,[\].]+?/)).reduce((u,a)=>N(u)?u:u[a],e);return A(l)||l===e?A(e[s])?r:e[s]:l},Z=e=>typeof e=="boolean",p1=e=>/^\w*$/.test(e),re=e=>_1(e.replace(/["|']|\]/g,"").split(/\.|\[/)),_=(e,s,r)=>{let l=-1;const u=p1(s)?[s]:re(s),a=u.length,f=a-1;for(;++l<a;){const y=u[l];let L=r;if(l!==f){const H=e[y];L=F(H)||Array.isArray(H)?H:isNaN(+u[l+1])?{}:[]}if(y==="__proto__"||y==="constructor"||y==="prototype")return;e[y]=L,e=e[y]}return e};const W1={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},B={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};I.createContext(null);var Ve=(e,s,r,l=!0)=>{const u={defaultValues:s._defaultValues};for(const a in e)Object.defineProperty(u,a,{get:()=>{const f=a;return s._proxyFormState[f]!==B.all&&(s._proxyFormState[f]=!l||B.all),e[f]}});return u},T=e=>F(e)&&!Object.keys(e).length,_e=(e,s,r,l)=>{r(e);const{name:u,...a}=e;return T(a)||Object.keys(a).length>=Object.keys(s).length||Object.keys(a).find(f=>s[f]===B.all)},g1=e=>Array.isArray(e)?e:[e];function me(e){const s=I.useRef(e);s.current=e,I.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var W=e=>typeof e=="string",Fe=(e,s,r,l,u)=>W(e)?(l&&s.watch.add(e),C(r,e,u)):Array.isArray(e)?e.map(a=>(l&&s.watch.add(a),C(r,a))):(l&&(s.watchAll=!0),r),Ae=(e,s,r,l,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[l]:u||!0}}:{},$1=e=>({isOnSubmit:!e||e===B.onSubmit,isOnBlur:e===B.onBlur,isOnChange:e===B.onChange,isOnAll:e===B.all,isOnTouch:e===B.onTouched}),K1=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(l=>e.startsWith(l)&&/^\.\w+/.test(e.slice(l.length))));const c1=(e,s,r,l)=>{for(const u of r||Object.keys(e)){const a=C(e,u);if(a){const{_f:f,...y}=a;if(f){if(f.refs&&f.refs[0]&&s(f.refs[0],u)&&!l)return!0;if(f.ref&&s(f.ref,f.name)&&!l)return!0;if(c1(y,s))break}else if(F(y)&&c1(y,s))break}}};var we=(e,s,r)=>{const l=g1(C(e,r));return _(l,"root",s[r]),_(e,r,l),e},M1=e=>e.type==="file",q=e=>typeof e=="function",b1=e=>{if(!k1)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},v1=e=>W(e),N1=e=>e.type==="radio",x1=e=>e instanceof RegExp;const z1={value:!1,isValid:!1},Y1={value:!0,isValid:!0};var se=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||e[0].value===""?Y1:{value:e[0].value,isValid:!0}:Y1:z1}return z1};const G1={isValid:!1,value:null};var ie=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,G1):G1;function J1(e,s,r="validate"){if(v1(e)||Array.isArray(e)&&e.every(v1)||Z(e)&&!e)return{type:r,message:v1(e)?e:"",ref:s}}var i1=e=>F(e)&&!x1(e)?e:{value:e,message:""},Q1=async(e,s,r,l,u,a)=>{const{ref:f,refs:y,required:L,maxLength:H,minLength:m,min:b,max:f1,pattern:C1,validate:$,name:O,valueAsNumber:K,mount:J}=e._f,x=C(r,O);if(!J||s.has(O))return{};const z=y?y[0]:f,Y=v=>{u&&z.reportValidity&&(z.setCustomValidity(Z(v)?"":v||""),z.reportValidity())},D={},r1=N1(f),y1=d1(f),e1=r1||y1,s1=(K||M1(f))&&A(f.value)&&A(x)||b1(f)&&f.value===""||x===""||Array.isArray(x)&&!x.length,R=Ae.bind(null,O,l,D),h1=(v,V,S,M=G.maxLength,P=G.minLength)=>{const U=v?V:S;D[O]={type:v?M:P,message:U,ref:f,...R(v?M:P,U)}};if(a?!Array.isArray(x)||!x.length:L&&(!e1&&(s1||N(x))||Z(x)&&!x||y1&&!se(y).isValid||r1&&!ie(y).isValid)){const{value:v,message:V}=v1(L)?{value:!!L,message:L}:i1(L);if(v&&(D[O]={type:G.required,message:V,ref:z,...R(G.required,V)},!l))return Y(V),D}if(!s1&&(!N(b)||!N(f1))){let v,V;const S=i1(f1),M=i1(b);if(!N(x)&&!isNaN(x)){const P=f.valueAsNumber||x&&+x;N(S.value)||(v=P>S.value),N(M.value)||(V=P<M.value)}else{const P=f.valueAsDate||new Date(x),U=a1=>new Date(new Date().toDateString()+" "+a1),l1=f.type=="time",n1=f.type=="week";W(S.value)&&x&&(v=l1?U(x)>U(S.value):n1?x>S.value:P>new Date(S.value)),W(M.value)&&x&&(V=l1?U(x)<U(M.value):n1?x<M.value:P<new Date(M.value))}if((v||V)&&(h1(!!v,S.message,M.message,G.max,G.min),!l))return Y(D[O].message),D}if((H||m)&&!s1&&(W(x)||a&&Array.isArray(x))){const v=i1(H),V=i1(m),S=!N(v.value)&&x.length>+v.value,M=!N(V.value)&&x.length<+V.value;if((S||M)&&(h1(S,v.message,V.message),!l))return Y(D[O].message),D}if(C1&&!s1&&W(x)){const{value:v,message:V}=i1(C1);if(x1(v)&&!x.match(v)&&(D[O]={type:G.pattern,message:V,ref:f,...R(G.pattern,V)},!l))return Y(V),D}if($){if(q($)){const v=await $(x,r),V=J1(v,z);if(V&&(D[O]={...V,...R(G.validate,V.message)},!l))return Y(V.message),D}else if(F($)){let v={};for(const V in $){if(!T(v)&&!l)break;const S=J1(await $[V](x,r),z,V);S&&(v={...S,...R(V,S.message)},Y(S.message),l&&(D[O]=v))}if(!T(v)&&(D[O]={ref:z,...v},!l))return D}}return Y(!0),D};function Le(e,s){const r=s.slice(0,-1).length;let l=0;for(;l<r;)e=A(e)?l++:e[s[l++]];return e}function De(e){for(const s in e)if(e.hasOwnProperty(s)&&!A(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:p1(s)?[s]:re(s),l=r.length===1?e:Le(e,r),u=r.length-1,a=r[u];return l&&delete l[a],u!==0&&(F(l)&&T(l)||Array.isArray(l)&&De(l))&&E(e,r.slice(0,-1)),e}var L1=()=>{let e=[];return{get observers(){return e},next:u=>{for(const a of e)a.next&&a.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(a=>a!==u)}}),unsubscribe:()=>{e=[]}}},E1=e=>N(e)||!te(e);function X(e,s){if(E1(e)||E1(s))return e===s;if(t1(e)&&t1(s))return e.getTime()===s.getTime();const r=Object.keys(e),l=Object.keys(s);if(r.length!==l.length)return!1;for(const u of r){const a=e[u];if(!l.includes(u))return!1;if(u!=="ref"){const f=s[u];if(t1(a)&&t1(f)||F(a)&&F(f)||Array.isArray(a)&&Array.isArray(f)?!X(a,f):a!==f)return!1}}return!0}var le=e=>e.type==="select-multiple",Se=e=>N1(e)||d1(e),D1=e=>b1(e)&&e.isConnected,ne=e=>{for(const s in e)if(q(e[s]))return!0;return!1};function V1(e,s={}){const r=Array.isArray(e);if(F(e)||r)for(const l in e)Array.isArray(e[l])||F(e[l])&&!ne(e[l])?(s[l]=Array.isArray(e[l])?[]:{},V1(e[l],s[l])):N(e[l])||(s[l]=!0);return s}function ae(e,s,r){const l=Array.isArray(e);if(F(e)||l)for(const u in e)Array.isArray(e[u])||F(e[u])&&!ne(e[u])?A(s)||E1(r[u])?r[u]=Array.isArray(e[u])?V1(e[u],[]):{...V1(e[u])}:ae(e[u],N(s)?{}:s[u],r[u]):r[u]=!X(e[u],s[u]);return r}var u1=(e,s)=>ae(e,s,V1(s)),ue=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:l})=>A(e)?e:s?e===""?NaN:e&&+e:r&&W(e)?new Date(e):l?l(e):e;function S1(e){const s=e.ref;return M1(s)?s.files:N1(s)?ie(e.refs).value:le(s)?[...s.selectedOptions].map(({value:r})=>r):d1(s)?se(e.refs).value:ue(A(s.value)?e.ref.value:s.value,e)}var Ee=(e,s,r,l)=>{const u={};for(const a of e){const f=C(s,a);f&&_(u,a,f._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:l}},o1=e=>A(e)?e:x1(e)?e.source:F(e)?x1(e.value)?e.value.source:e.value:e;const X1="AsyncFunction";var ke=e=>!!e&&!!e.validate&&!!(q(e.validate)&&e.validate.constructor.name===X1||F(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===X1)),pe=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ee(e,s,r){const l=C(e,r);if(l||p1(r))return{error:l,name:r};const u=r.split(".");for(;u.length;){const a=u.join("."),f=C(s,a),y=C(e,a);if(f&&!Array.isArray(f)&&r!==a)return{name:r};if(y&&y.type)return{name:a,error:y};u.pop()}return{name:r}}var Me=(e,s,r,l,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?l.isOnBlur:u.isOnBlur)?!e:(r?l.isOnChange:u.isOnChange)?e:!0,Ne=(e,s)=>!_1(C(e,s)).length&&E(e,s);const Te={mode:B.onSubmit,reValidateMode:B.onChange,shouldFocusError:!0};function Oe(e={}){let s={...Te,...e},r={submitCount:0,isDirty:!1,isLoading:q(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},l={},u=F(s.defaultValues)||F(s.values)?j(s.defaultValues||s.values)||{}:{},a=s.shouldUnregister?{}:j(u),f={action:!1,mount:!1,watch:!1},y={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},L,H=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:L1(),array:L1(),state:L1()},f1=$1(s.mode),C1=$1(s.reValidateMode),$=s.criteriaMode===B.all,O=t=>i=>{clearTimeout(H),H=setTimeout(t,i)},K=async t=>{if(!s.disabled&&(m.isValid||t)){const i=s.resolver?T((await e1()).errors):await R(l,!0);i!==r.isValid&&b.state.next({isValid:i})}},J=(t,i)=>{!s.disabled&&(m.isValidating||m.validatingFields)&&((t||Array.from(y.mount)).forEach(n=>{n&&(i?_(r.validatingFields,n,i):E(r.validatingFields,n))}),b.state.next({validatingFields:r.validatingFields,isValidating:!T(r.validatingFields)}))},x=(t,i=[],n,d,c=!0,o=!0)=>{if(d&&n&&!s.disabled){if(f.action=!0,o&&Array.isArray(C(l,t))){const h=n(C(l,t),d.argA,d.argB);c&&_(l,t,h)}if(o&&Array.isArray(C(r.errors,t))){const h=n(C(r.errors,t),d.argA,d.argB);c&&_(r.errors,t,h),Ne(r.errors,t)}if(m.touchedFields&&o&&Array.isArray(C(r.touchedFields,t))){const h=n(C(r.touchedFields,t),d.argA,d.argB);c&&_(r.touchedFields,t,h)}m.dirtyFields&&(r.dirtyFields=u1(u,a)),b.state.next({name:t,isDirty:v(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else _(a,t,i)},z=(t,i)=>{_(r.errors,t,i),b.state.next({errors:r.errors})},Y=t=>{r.errors=t,b.state.next({errors:r.errors,isValid:!1})},D=(t,i,n,d)=>{const c=C(l,t);if(c){const o=C(a,t,A(n)?C(u,t):n);A(o)||d&&d.defaultChecked||i?_(a,t,i?o:S1(c._f)):M(t,o),f.mount&&K()}},r1=(t,i,n,d,c)=>{let o=!1,h=!1;const g={name:t};if(!s.disabled){const k=!!(C(l,t)&&C(l,t)._f&&C(l,t)._f.disabled);if(!n||d){m.isDirty&&(h=r.isDirty,r.isDirty=g.isDirty=v(),o=h!==g.isDirty);const p=k||X(C(u,t),i);h=!!(!k&&C(r.dirtyFields,t)),p||k?E(r.dirtyFields,t):_(r.dirtyFields,t,!0),g.dirtyFields=r.dirtyFields,o=o||m.dirtyFields&&h!==!p}if(n){const p=C(r.touchedFields,t);p||(_(r.touchedFields,t,n),g.touchedFields=r.touchedFields,o=o||m.touchedFields&&p!==n)}o&&c&&b.state.next(g)}return o?g:{}},y1=(t,i,n,d)=>{const c=C(r.errors,t),o=m.isValid&&Z(i)&&r.isValid!==i;if(s.delayError&&n?(L=O(()=>z(t,n)),L(s.delayError)):(clearTimeout(H),L=null,n?_(r.errors,t,n):E(r.errors,t)),(n?!X(c,n):c)||!T(d)||o){const h={...d,...o&&Z(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...h},b.state.next(h)}},e1=async t=>{J(t,!0);const i=await s.resolver(a,s.context,Ee(t||y.mount,l,s.criteriaMode,s.shouldUseNativeValidation));return J(t),i},s1=async t=>{const{errors:i}=await e1(t);if(t)for(const n of t){const d=C(i,n);d?_(r.errors,n,d):E(r.errors,n)}else r.errors=i;return i},R=async(t,i,n={valid:!0})=>{for(const d in t){const c=t[d];if(c){const{_f:o,...h}=c;if(o){const g=y.array.has(o.name),k=c._f&&ke(c._f);k&&m.validatingFields&&J([d],!0);const p=await Q1(c,y.disabled,a,$,s.shouldUseNativeValidation&&!i,g);if(k&&m.validatingFields&&J([d]),p[o.name]&&(n.valid=!1,i))break;!i&&(C(p,o.name)?g?we(r.errors,p,o.name):_(r.errors,o.name,p[o.name]):E(r.errors,o.name))}!T(h)&&await R(h,i,n)}}return n.valid},h1=()=>{for(const t of y.unMount){const i=C(l,t);i&&(i._f.refs?i._f.refs.every(n=>!D1(n)):!D1(i._f.ref))&&m1(t)}y.unMount=new Set},v=(t,i)=>!s.disabled&&(t&&i&&_(a,t,i),!X(T1(),u)),V=(t,i,n)=>Fe(t,y,{...f.mount?a:A(i)?u:W(t)?{[t]:i}:i},n,i),S=t=>_1(C(f.mount?a:u,t,s.shouldUnregister?C(u,t,[]):[])),M=(t,i,n={})=>{const d=C(l,t);let c=i;if(d){const o=d._f;o&&(!o.disabled&&_(a,t,ue(i,o)),c=b1(o.ref)&&N(i)?"":i,le(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?d1(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(g=>g===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):M1(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||b.values.next({name:t,values:{...a}})))}(n.shouldDirty||n.shouldTouch)&&r1(t,c,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&a1(t)},P=(t,i,n)=>{for(const d in i){const c=i[d],o=`${t}.${d}`,h=C(l,o);(y.array.has(t)||F(c)||h&&!h._f)&&!t1(c)?P(o,c,n):M(o,c,n)}},U=(t,i,n={})=>{const d=C(l,t),c=y.array.has(t),o=j(i);_(a,t,o),c?(b.array.next({name:t,values:{...a}}),(m.isDirty||m.dirtyFields)&&n.shouldDirty&&b.state.next({name:t,dirtyFields:u1(u,a),isDirty:v(t,o)})):d&&!d._f&&!N(o)?P(t,o,n):M(t,o,n),K1(t,y)&&b.state.next({...r}),b.values.next({name:f.mount?t:void 0,values:{...a}})},l1=async t=>{f.mount=!0;const i=t.target;let n=i.name,d=!0;const c=C(l,n),o=()=>i.type?S1(c._f):ge(t),h=g=>{d=Number.isNaN(g)||t1(g)&&isNaN(g.getTime())||X(g,C(a,n,g))};if(c){let g,k;const p=o(),Q=t.type===W1.BLUR||t.type===W1.FOCUS_OUT,Ce=!pe(c._f)&&!s.resolver&&!C(r.errors,n)&&!c._f.deps||Me(Q,C(r.touchedFields,n),r.isSubmitted,C1,f1),A1=K1(n,y,Q);_(a,n,p),Q?(c._f.onBlur&&c._f.onBlur(t),L&&L(0)):c._f.onChange&&c._f.onChange(t);const w1=r1(n,p,Q,!1),ye=!T(w1)||A1;if(!Q&&b.values.next({name:n,type:t.type,values:{...a}}),Ce)return m.isValid&&(s.mode==="onBlur"&&Q?K():Q||K()),ye&&b.state.next({name:n,...A1?{}:w1});if(!Q&&A1&&b.state.next({...r}),s.resolver){const{errors:B1}=await e1([n]);if(h(p),d){const he=ee(r.errors,l,n),Z1=ee(B1,l,he.name||n);g=Z1.error,n=Z1.name,k=T(B1)}}else J([n],!0),g=(await Q1(c,y.disabled,a,$,s.shouldUseNativeValidation))[n],J([n]),h(p),d&&(g?k=!1:m.isValid&&(k=await R(l,!0)));d&&(c._f.deps&&a1(c._f.deps),y1(n,k,g,w1))}},n1=(t,i)=>{if(C(r.errors,i)&&t.focus)return t.focus(),1},a1=async(t,i={})=>{let n,d;const c=g1(t);if(s.resolver){const o=await s1(A(t)?t:c);n=T(o),d=t?!c.some(h=>C(o,h)):n}else t?(d=(await Promise.all(c.map(async o=>{const h=C(l,o);return await R(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!r.isValid)&&K()):d=n=await R(l);return b.state.next({...!W(t)||m.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!d&&c1(l,n1,t?c:y.mount),d},T1=t=>{const i={...f.mount?a:u};return A(t)?i:W(t)?C(i,t):t.map(n=>C(i,n))},O1=(t,i)=>({invalid:!!C((i||r).errors,t),isDirty:!!C((i||r).dirtyFields,t),error:C((i||r).errors,t),isValidating:!!C(r.validatingFields,t),isTouched:!!C((i||r).touchedFields,t)}),oe=t=>{t&&g1(t).forEach(i=>E(r.errors,i)),b.state.next({errors:t?r.errors:{}})},H1=(t,i,n)=>{const d=(C(l,t,{_f:{}})._f||{}).ref,c=C(r.errors,t)||{},{ref:o,message:h,type:g,...k}=c;_(r.errors,t,{...k,...i,ref:d}),b.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&d&&d.focus&&d.focus()},ce=(t,i)=>q(t)?b.values.subscribe({next:n=>t(V(void 0,i),n)}):V(t,i,!0),m1=(t,i={})=>{for(const n of t?g1(t):y.mount)y.mount.delete(n),y.array.delete(n),i.keepValue||(E(l,n),E(a,n)),!i.keepError&&E(r.errors,n),!i.keepDirty&&E(r.dirtyFields,n),!i.keepTouched&&E(r.touchedFields,n),!i.keepIsValidating&&E(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&E(u,n);b.values.next({values:{...a}}),b.state.next({...r,...i.keepDirty?{isDirty:v()}:{}}),!i.keepIsValid&&K()},R1=({disabled:t,name:i,field:n,fields:d})=>{(Z(t)&&f.mount||t||y.disabled.has(i))&&(t?y.disabled.add(i):y.disabled.delete(i),r1(i,S1(n?n._f:C(d,i)._f),!1,!1,!0))},F1=(t,i={})=>{let n=C(l,t);const d=Z(i.disabled)||Z(s.disabled);return _(l,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),y.mount.add(t),n?R1({field:n,disabled:Z(i.disabled)?i.disabled:s.disabled,name:t}):D(t,!0,i.value),{...d?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:o1(i.min),max:o1(i.max),minLength:o1(i.minLength),maxLength:o1(i.maxLength),pattern:o1(i.pattern)}:{},name:t,onChange:l1,onBlur:l1,ref:c=>{if(c){F1(t,i),n=C(l,t);const o=A(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Se(o),g=n._f.refs||[];if(h?g.find(k=>k===o):o===n._f.ref)return;_(l,t,{_f:{...n._f,...h?{refs:[...g.filter(D1),o,...Array.isArray(C(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),D(t,!1,void 0,o)}else n=C(l,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(be(y.array,t)&&f.action)&&y.unMount.add(t)}}},U1=()=>s.shouldFocusError&&c1(l,n1,y.mount),de=t=>{Z(t)&&(b.state.next({disabled:t}),c1(l,(i,n)=>{const d=C(l,n);d&&(i.disabled=d._f.disabled||t,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||t}))},0,!1))},j1=(t,i)=>async n=>{let d;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let c=j(a);if(y.disabled.size)for(const o of y.disabled)_(c,o,void 0);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await e1();r.errors=o,c=h}else await R(l);if(E(r.errors,"root"),T(r.errors)){b.state.next({errors:{}});try{await t(c,n)}catch(o){d=o}}else i&&await i({...r.errors},n),U1(),setTimeout(U1);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:T(r.errors)&&!d,submitCount:r.submitCount+1,errors:r.errors}),d)throw d},fe=(t,i={})=>{C(l,t)&&(A(i.defaultValue)?U(t,j(C(u,t))):(U(t,i.defaultValue),_(u,t,j(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?v(t,j(C(u,t))):v()),i.keepError||(E(r.errors,t),m.isValid&&K()),b.state.next({...r}))},I1=(t,i={})=>{const n=t?j(t):u,d=j(n),c=T(t),o=c?u:d;if(i.keepDefaultValues||(u=n),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...y.mount,...Object.keys(u1(u,a))]);for(const g of Array.from(h))C(r.dirtyFields,g)?_(o,g,C(a,g)):U(g,C(o,g))}else{if(k1&&A(t))for(const h of y.mount){const g=C(l,h);if(g&&g._f){const k=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(b1(k)){const p=k.closest("form");if(p){p.reset();break}}}}l={}}a=s.shouldUnregister?i.keepDefaultValues?j(u):{}:j(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}y={mount:i.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},f.mount=!m.isValid||!!i.keepIsValid||!!i.keepDirtyValues,f.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:c?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!X(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&a?u1(u,a):r.dirtyFields:i.keepDefaultValues&&t?u1(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},P1=(t,i)=>I1(q(t)?t(a):t,i);return{control:{register:F1,unregister:m1,getFieldState:O1,handleSubmit:j1,setError:H1,_executeSchema:e1,_getWatch:V,_getDirty:v,_updateValid:K,_removeUnmounted:h1,_updateFieldArray:x,_updateDisabledField:R1,_getFieldArray:S,_reset:I1,_resetDefaultValues:()=>q(s.defaultValues)&&s.defaultValues().then(t=>{P1(t,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:de,_subjects:b,_proxyFormState:m,_setErrors:Y,get _fields(){return l},get _formValues(){return a},get _state(){return f},set _state(t){f=t},get _defaultValues(){return u},get _names(){return y},set _names(t){y=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:a1,register:F1,handleSubmit:j1,watch:ce,setValue:U,getValues:T1,reset:P1,resetField:fe,clearErrors:oe,unregister:m1,setError:H1,setFocus:(t,i={})=>{const n=C(l,t),d=n&&n._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&q(c.select)&&c.select())}},getFieldState:O1}}function He(e={}){const s=I.useRef(void 0),r=I.useRef(void 0),[l,u]=I.useState({isDirty:!1,isValidating:!1,isLoading:q(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:q(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...Oe(e),formState:l});const a=s.current.control;return a._options=e,me({subject:a._subjects.state,next:f=>{_e(f,a._proxyFormState,a._updateFormState)&&u({...a._formState})}}),I.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),I.useEffect(()=>{if(a._proxyFormState.isDirty){const f=a._getDirty();f!==l.isDirty&&a._subjects.state.next({isDirty:f})}},[a,l.isDirty]),I.useEffect(()=>{e.values&&!X(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values,u(f=>({...f}))):a._resetDefaultValues()},[e.values,a]),I.useEffect(()=>{e.errors&&a._setErrors(e.errors)},[e.errors,a]),I.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),I.useEffect(()=>{e.shouldUnregister&&a._subjects.values.next({values:a._getWatch()})},[e.shouldUnregister,a]),s.current.formState=Ve(l,a),s.current}const Re=({register:e,name:s,...r})=>w.jsxs("div",{className:"w-full",children:[w.jsx("p",{children:r==null?void 0:r.title}),w.jsxs("div",{className:"flex flex-col relative mt-1",children:[w.jsx("input",{...r,...e(s)}),w.jsx("button",{type:"submit",className:"absolute right-0 bg-blue-500 text-white  rounded-md",children:s==="email"?"send-code":"Submit"})]})]}),Ue=[{type:"email",name:"email",title:"Enter your email to continue",placeholder:"@ Enter email here "},{type:"text",name:"code",title:"Check your email for the code",placeholder:"Enter code here"}],je=()=>{const[e,s]=q1.useState(0),{register:r,handleSubmit:l,formState:{errors:u}}=He(),a=["email","code"],f=y=>{s(L=>(L+1)%2),console.log(y)};return w.jsx("form",{className:"flex flex-col gap-2",onSubmit:l(f),children:(()=>{var L;const y=Ue.find(H=>H.name===a[e]);return y&&w.jsxs(q1.Fragment,{children:[w.jsx(Re,{register:r,name:a[e],...y}),u[a[e]]&&w.jsx("p",{children:(L=u[a[e]])==null?void 0:L.message}),w.jsx("button",{type:"button",disabled:e===0,className:"text-blue-500 text-center mx-auto underline p-0 bg-transparent disabled:opacity-0 hover:bg-transparent",children:"Resend code"})]},a[e])})()})},Ie=({color:e="none",width:s="207px",height:r="38px",styleClass:l=""})=>w.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:`transition duration-75 ${l}`,width:s,height:r,fill:e,viewBox:"0 0 207 38",children:[w.jsx("path",{d:"M53.46 30.3C52 30.3 50.66 30.04 49.44 29.52C48.22 29 47.16 28.26 46.26 27.3C45.36 26.32 44.66 25.17 44.16 23.85C43.68 22.53 43.44 21.08 43.44 19.5C43.44 18 43.7 16.61 44.22 15.33C44.76 14.03 45.5 12.89 46.44 11.91C47.38 10.93 48.47 10.17 49.71 9.63C50.95 9.09 52.29 8.82 53.73 8.82C54.75 8.82 55.74 8.98 56.7 9.3C57.68 9.6 58.56 10.03 59.34 10.59C60.14 11.13 60.79 11.75 61.29 12.45L59.13 14.7C58.55 14.12 57.96 13.64 57.36 13.26C56.78 12.86 56.18 12.56 55.56 12.36C54.96 12.16 54.35 12.06 53.73 12.06C52.75 12.06 51.83 12.25 50.97 12.63C50.13 12.99 49.39 13.5 48.75 14.16C48.13 14.82 47.64 15.61 47.28 16.53C46.92 17.43 46.74 18.42 46.74 19.5C46.74 20.64 46.91 21.68 47.25 22.62C47.61 23.54 48.11 24.33 48.75 24.99C49.39 25.65 50.15 26.16 51.03 26.52C51.93 26.86 52.92 27.03 54 27.03C54.66 27.03 55.31 26.94 55.95 26.76C56.59 26.58 57.19 26.32 57.75 25.98C58.31 25.64 58.82 25.24 59.28 24.78L60.9 27.42C60.44 27.96 59.81 28.45 59.01 28.89C58.23 29.33 57.35 29.68 56.37 29.94C55.41 30.18 54.44 30.3 53.46 30.3ZM71.8713 30.3C70.2513 30.3 68.8113 29.96 67.5513 29.28C66.3113 28.58 65.3313 27.63 64.6113 26.43C63.9113 25.23 63.5613 23.85 63.5613 22.29C63.5613 21.05 63.7613 19.92 64.1613 18.9C64.5613 17.88 65.1113 17 65.8113 16.26C66.5313 15.5 67.3813 14.92 68.3613 14.52C69.3613 14.1 70.4413 13.89 71.6013 13.89C72.6213 13.89 73.5713 14.09 74.4513 14.49C75.3313 14.87 76.0913 15.4 76.7313 16.08C77.3913 16.76 77.8913 17.57 78.2313 18.51C78.5913 19.43 78.7613 20.44 78.7413 21.54L78.7113 22.86H65.8413L65.1513 20.4H76.0413L75.5913 20.91V20.19C75.5313 19.53 75.3113 18.94 74.9313 18.42C74.5513 17.9 74.0713 17.49 73.4913 17.19C72.9113 16.89 72.2813 16.74 71.6013 16.74C70.5213 16.74 69.6113 16.95 68.8713 17.37C68.1313 17.77 67.5713 18.37 67.1913 19.17C66.8113 19.95 66.6213 20.92 66.6213 22.08C66.6213 23.18 66.8513 24.14 67.3113 24.96C67.7713 25.76 68.4213 26.38 69.2613 26.82C70.1013 27.26 71.0713 27.48 72.1713 27.48C72.9513 27.48 73.6713 27.35 74.3313 27.09C75.0113 26.83 75.7413 26.36 76.5213 25.68L78.0813 27.87C77.6013 28.35 77.0113 28.77 76.3113 29.13C75.6313 29.49 74.9013 29.78 74.1213 30C73.3613 30.2 72.6113 30.3 71.8713 30.3ZM82.0995 30V14.25H85.1895V17.49L84.6495 17.85C84.8495 17.15 85.2395 16.51 85.8195 15.93C86.3995 15.33 87.0895 14.85 87.8895 14.49C88.6895 14.11 89.5095 13.92 90.3495 13.92C91.5495 13.92 92.5495 14.16 93.3495 14.64C94.1495 15.1 94.7495 15.81 95.1495 16.77C95.5495 17.73 95.7495 18.94 95.7495 20.4V30H92.6595V20.61C92.6595 19.71 92.5395 18.97 92.2995 18.39C92.0595 17.79 91.6895 17.36 91.1895 17.1C90.6895 16.82 90.0695 16.7 89.3295 16.74C88.7295 16.74 88.1795 16.84 87.6795 17.04C87.1795 17.22 86.7395 17.48 86.3595 17.82C85.9995 18.16 85.7095 18.56 85.4895 19.02C85.2895 19.46 85.1895 19.94 85.1895 20.46V30H83.6595C83.3995 30 83.1395 30 82.8795 30C82.6195 30 82.3595 30 82.0995 30ZM106.991 36.9C105.871 36.9 104.751 36.72 103.631 36.36C102.531 36.02 101.641 35.57 100.961 35.01L102.101 32.61C102.501 32.91 102.971 33.17 103.511 33.39C104.051 33.63 104.621 33.81 105.221 33.93C105.821 34.07 106.411 34.14 106.991 34.14C108.091 34.14 109.011 33.96 109.751 33.6C110.491 33.24 111.051 32.71 111.431 32.01C111.811 31.31 112.001 30.44 112.001 29.4V26.37L112.331 26.58C112.231 27.2 111.901 27.8 111.341 28.38C110.801 28.94 110.121 29.4 109.301 29.76C108.481 30.12 107.641 30.3 106.781 30.3C105.281 30.3 103.941 29.95 102.761 29.25C101.601 28.53 100.681 27.56 100.001 26.34C99.3213 25.1 98.9813 23.69 98.9813 22.11C98.9813 20.53 99.3113 19.13 99.9713 17.91C100.651 16.67 101.571 15.7 102.731 15C103.911 14.28 105.231 13.92 106.691 13.92C107.291 13.92 107.871 14 108.431 14.16C108.991 14.3 109.511 14.51 109.991 14.79C110.471 15.05 110.901 15.34 111.281 15.66C111.661 15.98 111.971 16.32 112.211 16.68C112.451 17.04 112.601 17.38 112.661 17.7L112.001 17.94V14.25H115.091V29.04C115.091 30.3 114.901 31.41 114.521 32.37C114.161 33.35 113.631 34.17 112.931 34.83C112.231 35.51 111.381 36.02 110.381 36.36C109.381 36.72 108.251 36.9 106.991 36.9ZM107.111 27.45C108.091 27.45 108.961 27.22 109.721 26.76C110.481 26.3 111.071 25.67 111.491 24.87C111.911 24.07 112.121 23.15 112.121 22.11C112.121 21.07 111.901 20.15 111.461 19.35C111.041 18.53 110.451 17.89 109.691 17.43C108.951 16.97 108.091 16.74 107.111 16.74C106.151 16.74 105.291 16.98 104.531 17.46C103.791 17.92 103.201 18.56 102.761 19.38C102.341 20.18 102.131 21.09 102.131 22.11C102.131 23.13 102.341 24.05 102.761 24.87C103.201 25.67 103.791 26.3 104.531 26.76C105.291 27.22 106.151 27.45 107.111 27.45ZM119.934 30V14.25H123.024V30H119.934ZM121.434 10.77C120.774 10.77 120.264 10.6 119.904 10.26C119.544 9.92 119.364 9.44 119.364 8.82C119.364 8.24 119.544 7.77 119.904 7.41C120.284 7.05 120.794 6.87 121.434 6.87C122.094 6.87 122.604 7.04 122.964 7.38C123.324 7.72 123.504 8.2 123.504 8.82C123.504 9.4 123.314 9.87 122.934 10.23C122.574 10.59 122.074 10.77 121.434 10.77ZM127.773 30V14.25H130.863V17.49L130.323 17.85C130.523 17.15 130.913 16.51 131.493 15.93C132.073 15.33 132.763 14.85 133.563 14.49C134.363 14.11 135.183 13.92 136.023 13.92C137.223 13.92 138.223 14.16 139.023 14.64C139.823 15.1 140.423 15.81 140.823 16.77C141.223 17.73 141.423 18.94 141.423 20.4V30H138.333V20.61C138.333 19.71 138.213 18.97 137.973 18.39C137.733 17.79 137.363 17.36 136.863 17.1C136.363 16.82 135.743 16.7 135.003 16.74C134.403 16.74 133.853 16.84 133.353 17.04C132.853 17.22 132.413 17.48 132.033 17.82C131.673 18.16 131.383 18.56 131.163 19.02C130.963 19.46 130.863 19.94 130.863 20.46V30H129.333C129.073 30 128.813 30 128.553 30C128.293 30 128.033 30 127.773 30ZM152.965 30.3C151.345 30.3 149.905 29.96 148.645 29.28C147.405 28.58 146.425 27.63 145.705 26.43C145.005 25.23 144.655 23.85 144.655 22.29C144.655 21.05 144.855 19.92 145.255 18.9C145.655 17.88 146.205 17 146.905 16.26C147.625 15.5 148.475 14.92 149.455 14.52C150.455 14.1 151.535 13.89 152.695 13.89C153.715 13.89 154.665 14.09 155.545 14.49C156.425 14.87 157.185 15.4 157.825 16.08C158.485 16.76 158.985 17.57 159.325 18.51C159.685 19.43 159.855 20.44 159.835 21.54L159.805 22.86H146.935L146.245 20.4H157.135L156.685 20.91V20.19C156.625 19.53 156.405 18.94 156.025 18.42C155.645 17.9 155.165 17.49 154.585 17.19C154.005 16.89 153.375 16.74 152.695 16.74C151.615 16.74 150.705 16.95 149.965 17.37C149.225 17.77 148.665 18.37 148.285 19.17C147.905 19.95 147.715 20.92 147.715 22.08C147.715 23.18 147.945 24.14 148.405 24.96C148.865 25.76 149.515 26.38 150.355 26.82C151.195 27.26 152.165 27.48 153.265 27.48C154.045 27.48 154.765 27.35 155.425 27.09C156.105 26.83 156.835 26.36 157.615 25.68L159.175 27.87C158.695 28.35 158.105 28.77 157.405 29.13C156.725 29.49 155.995 29.78 155.215 30C154.455 30.2 153.705 30.3 152.965 30.3ZM170.543 30.3C168.923 30.3 167.483 29.96 166.223 29.28C164.983 28.58 164.003 27.63 163.283 26.43C162.583 25.23 162.233 23.85 162.233 22.29C162.233 21.05 162.433 19.92 162.833 18.9C163.233 17.88 163.783 17 164.483 16.26C165.203 15.5 166.053 14.92 167.033 14.52C168.033 14.1 169.113 13.89 170.273 13.89C171.293 13.89 172.243 14.09 173.123 14.49C174.003 14.87 174.763 15.4 175.403 16.08C176.063 16.76 176.563 17.57 176.903 18.51C177.263 19.43 177.433 20.44 177.413 21.54L177.383 22.86H164.513L163.823 20.4H174.713L174.263 20.91V20.19C174.203 19.53 173.983 18.94 173.603 18.42C173.223 17.9 172.743 17.49 172.163 17.19C171.583 16.89 170.953 16.74 170.273 16.74C169.193 16.74 168.283 16.95 167.543 17.37C166.803 17.77 166.243 18.37 165.863 19.17C165.483 19.95 165.293 20.92 165.293 22.08C165.293 23.18 165.523 24.14 165.983 24.96C166.443 25.76 167.093 26.38 167.933 26.82C168.773 27.26 169.743 27.48 170.843 27.48C171.623 27.48 172.343 27.35 173.003 27.09C173.683 26.83 174.413 26.36 175.193 25.68L176.753 27.87C176.273 28.35 175.683 28.77 174.983 29.13C174.303 29.49 173.573 29.78 172.793 30C172.033 30.2 171.283 30.3 170.543 30.3ZM180.771 30V14.25H183.891V19.2L183.591 18C183.811 17.24 184.181 16.55 184.701 15.93C185.241 15.31 185.851 14.82 186.531 14.46C187.231 14.1 187.951 13.92 188.691 13.92C189.031 13.92 189.351 13.95 189.651 14.01C189.971 14.07 190.221 14.14 190.401 14.22L189.591 17.58C189.351 17.48 189.081 17.4 188.781 17.34C188.501 17.26 188.221 17.22 187.941 17.22C187.401 17.22 186.881 17.33 186.381 17.55C185.901 17.75 185.471 18.04 185.091 18.42C184.731 18.78 184.441 19.21 184.221 19.71C184.001 20.19 183.891 20.72 183.891 21.3V30H180.771ZM198.241 30.3C196.761 30.3 195.471 29.96 194.371 29.28C193.291 28.6 192.271 27.46 191.311 25.86L193.831 24.27C194.331 25.01 194.821 25.62 195.301 26.1C195.801 26.56 196.311 26.9 196.831 27.12C197.351 27.34 197.901 27.45 198.481 27.45C199.181 27.45 199.831 27.28 200.431 26.94C201.031 26.58 201.511 26.09 201.871 25.47C202.231 24.85 202.411 24.15 202.411 23.37C202.411 22.59 202.271 21.93 201.991 21.39C201.711 20.83 201.301 20.41 200.761 20.13C200.221 19.83 199.581 19.68 198.841 19.68C198.501 19.68 198.141 19.72 197.761 19.8C197.401 19.86 197.011 19.96 196.591 20.1C196.171 20.22 195.711 20.38 195.211 20.58L194.311 18.21L200.791 11.07L201.421 12H192.481V9H204.511L205.111 10.2L198.241 17.82L197.491 17.04C197.651 16.96 197.911 16.89 198.271 16.83C198.651 16.75 198.961 16.71 199.201 16.71C200.081 16.71 200.901 16.88 201.661 17.22C202.441 17.54 203.111 18 203.671 18.6C204.251 19.18 204.701 19.87 205.021 20.67C205.361 21.45 205.531 22.29 205.531 23.19C205.531 24.55 205.201 25.77 204.541 26.85C203.901 27.91 203.031 28.75 201.931 29.37C200.831 29.99 199.601 30.3 198.241 30.3Z",fill:"#00142E"}),w.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.9128 20.2627C33.9764 19.6507 34.0091 19.0293 34.0091 18.4C34.0091 16.664 33.7606 14.9873 33.2981 13.4052L29.8829 16.9963C30.2452 17.0622 30.5988 17.1674 30.9437 17.3118C31.5786 17.5627 32.1396 17.9171 32.6268 18.3747C33.114 18.8176 33.4978 19.3418 33.7783 19.9471C33.8275 20.0505 33.8723 20.1557 33.9128 20.2627ZM32.4053 25.7865C29.6904 31.7031 23.815 35.8 17.0045 35.8C7.61319 35.8 0 28.0098 0 18.4C0 8.79024 7.61319 1 17.0045 1C23.9703 1 29.9579 5.28583 32.5861 11.4211H23.0821V15.0086L27.7901 15.139L24.898 18.264L25.806 20.6336C26.0717 20.5007 26.3301 20.39 26.5811 20.3014C26.8468 20.2128 27.0978 20.1464 27.334 20.1021C27.585 20.0578 27.8138 20.0357 28.0205 20.0357C28.4782 20.0357 28.8694 20.1095 29.1942 20.2571C29.519 20.39 29.77 20.5967 29.9472 20.8772C30.1243 21.1429 30.2129 21.4751 30.2129 21.8737C30.2129 22.2576 30.117 22.5898 29.925 22.8703C29.7479 23.1508 29.5043 23.3649 29.1942 23.5125C28.8842 23.6601 28.5446 23.7339 28.1755 23.7339C27.7769 23.7339 27.3857 23.6749 27.0018 23.5568C26.6327 23.4239 26.2784 23.2098 25.9388 22.9146C25.5993 22.6193 25.2819 22.2207 24.9866 21.7187L21.8862 23.7118C22.6835 25.0553 23.584 25.9928 24.588 26.5243C25.5919 27.0558 26.7508 27.3215 28.0648 27.3215C29.2164 27.3215 30.2498 27.0853 31.1652 26.6129C31.6256 26.379 32.039 26.1035 32.4053 25.7865ZM9.74736 27.1V11.5982H21.0194V15.2079H13.955V17.5332H20.1336V20.9436H13.955V23.4903H21.3516V27.1H9.74736Z",fill:"#00142E"})]}),We=()=>w.jsxs("div",{className:"flex flex-col sm:flex-row h-dvh w-full",children:[w.jsx(Ie,{styleClass:"absolute m-2"}),w.jsx("div",{className:" basis-2/5 min-w-[400px] flex flex-col p-5 sm:items-center sm:justify-center",children:w.jsxs("div",{className:"mt-[30%] sm:m-0 ",children:[w.jsx("h1",{className:"text-2xl font-bold",children:"Welcome to Cengineers3"}),w.jsx(je,{})]})}),w.jsx("div",{className:"bg-red-100 grow"})]});export{We as default};
//# sourceMappingURL=index-DThg0vD5.js.map
