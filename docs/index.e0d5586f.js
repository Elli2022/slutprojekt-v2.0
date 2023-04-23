const e=document.getElementById("image-selection"),t=document.getElementById("logged-in-users"),n=document.getElementById("create-account-button"),o=document.getElementById("submit-button"),s=document.getElementById("username"),a=document.getElementById("password"),d=document.getElementById("form"),r=document.createElement("p"),l=document.createElement("h1"),c=document.createElement("h1"),i=document.createElement("input"),u=document.createElement("li"),m=document.getElementById("body"),y=document.createElement("h1"),p=document.createElement("div");const h=document.createElement("div");h.style.display="flex",h.style.justifyContent="center";const f="https://social-media-68d76-default-rtdb.europe-west1.firebasedatabase.app/";async function E(){try{const e=await fetch(`${f}users.json`);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`);const t=await e.json();if(!t)return[];return Object.values(t)}catch(e){throw new Error("Failed to fetch users")}}async function w(e){await E();const t=`${f}users/${e.userName}.json`,n={method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`)}catch(e){throw console.log(e),new Error("Failed to save user information.")}}function C(e){if(t){t.innerHTML="";for(const n of e)if(!n.newUser){const e=document.createElement("li");e.textContent=`${n.userName} - Status: ${n.status}`;const o=document.createElement("img");o.src=n.imageurl,o.id="userImage",e.appendChild(o),t.appendChild(e),e.addEventListener("click",(()=>{document.body.innerHTML="",d.style.display="none";const e=document.createElement("div");e.innerHTML=`<h1>Welcome to ${n.userName}'s page! </br> Status: ${n.status}</h1>`,document.body.appendChild(e);const o=document.createElement("img");o.src=n.imageurl,e.appendChild(o);const s=document.createElement("button");s.textContent="Log Out",s.style.textAlign="center",s.style.margin="10px",document.body.appendChild(s),s.addEventListener("click",(function(){i.style.display="none",p.innerHTML="",s.style.display="none",l.textContent=" ",d.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload()}))}))}}else console.error("Logged-in users list element not found.")}e?e.addEventListener("change",(()=>{const t=e.value;e.value=t})):console.error("Image dropdown element not found."),n&&s&&a?n.addEventListener("click",(async()=>{l.textContent=" ",r.innerText=" ";const t=s.value,o=a.value;if(!t||!o)return r.textContent="Username and / or password cannot be empty.",r.style.color="red",void n.insertAdjacentElement("afterend",r);if(!await async function(e){return!(await E()).some((t=>t.userName===e))}(t))return r.textContent="Username is already taken. Please choose another one.",r.style.color="red",void n.insertAdjacentElement("afterend",r);m.appendChild(y),y.textContent="Your account has been successfully created! You may now log in with your new account.";const d={userName:t,password:o,status:"",imageurl:e?.value??"",newUser:!0};await w(d)})):console.error("One or more DOM elements not found."),o&&s&&a?o.addEventListener("click",(async e=>{e.preventDefault(),y.textContent=" ",l.textContent=" ",document.body.style.alignContent="center",r.textContent=" ";const n=a.value,o=await E(),m=o.find((e=>e.userName===s.value));if(r.textContent="Log In Successfull! ",!m)return r.textContent="No account found for this user. Please create an account first.",r.style.color="red",void d?.appendChild(r);if(m.password!==n)return r.textContent="Incorrect password. Please try again.",r.style.color="red",void d?.appendChild(r);if(!t)return void console.error("Logged-in users list element not found.");t.innerHTML="";for(const e of o)e.newUser||(document.body.innerHTML="",u.addEventListener("click",(()=>{document.body.innerHTML="",d.style.display="none";const t=document.createElement("div");t.innerHTML=`<h1>Welcome to ${e.userName}'s page! </br> Status: ${e.status}</h1>`,document.body.appendChild(t),document.body.style.alignContent="center";const n=document.createElement("img");t.appendChild(n);const o=document.createElement("button");o.textContent="Log Out",document.body.appendChild(o),o.addEventListener("click",x),x()})));m.newUser=!1,await w(m),C(await E()),d.style.display="none",p.innerHTML=`<h1>Welcome ${s.value}!</h1> `,p.style.textAlign="center",document.body.appendChild(p),p.appendChild(t),t.style.display="block",i.style.display="block",i.value="",i.id="status",document.body.appendChild(i);const g=document.createElement("button");g.innerText="Send statusmessage! ",g.id="statusButton",h.appendChild(g),document.body.appendChild(h);const b=document.createElement("button");b.innerText="Delete User",b.id="deleteButton",h.appendChild(b),document.body.appendChild(h),b?.addEventListener("click",(async e=>{e?.preventDefault(),i.style.display="none",p.innerHTML="",v.style.display="none",l.textContent=" ",d.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload(),s?(await async function(e){console.log("Deleting user");const t=`${f}users/${e}.json`,n={method:"DELETE",headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`);console.log("User deleted successfully"),l.textContent="User deleted successfully!",document.body.appendChild(l),C(await E())}catch(e){throw console.log(e),c.textContent="Failed to delete user. Please try again.",document.body.appendChild(c),new Error("Failed to delete user.")}}(s.value),r.textContent=" "):console.error("Username input element not found.")})),g.addEventListener("click",(async()=>{const e=i.value,t=`${f}users/${m.userName}/status.json`,n={method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}};try{const e=await fetch(t,n);if(!e.ok)throw new Error(`Error: ${e.status} ${e.statusText}`)}catch(e){throw console.log(e),new Error("Failed to save user information.")}C(await E()),i.value=""}));const v=document.createElement("button");function x(){i.style.display="none",p.innerHTML="",g.style.display="none",v.style.display="none",b.style.display="none",l.textContent=" ",d.style.display="block",a.value="",r.textContent=" ",p.style.display="none",t.style.display="none",window.location.reload()}v.textContent="Log Out",v.id="logout",h.appendChild(v),document.body.appendChild(h),v.addEventListener("click",x)})):console.error("One or more DOM elements not found.");
//# sourceMappingURL=index.e0d5586f.js.map
