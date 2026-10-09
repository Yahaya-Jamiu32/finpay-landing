const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$("#yr").textContent=new Date().getFullYear();
/* mobile drawer */
const root=document.documentElement,mb=$("#mb");
function menu(o){root.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);$("#drawer").setAttribute("aria-hidden",!o);(o?$("#mx"):mb).focus()}
mb.onclick=()=>menu(true);$("#mx").onclick=()=>menu(false);$("#scrim").onclick=()=>menu(false);
$$("#drawer a").forEach(a=>a.addEventListener("click",()=>menu(false)));
addEventListener("keydown",e=>{if(e.key==="Escape"&&root.classList.contains("open"))menu(false)});
/* active nav */
const links=$$(".nav a"),io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["home","features","security","pricing","faq"].forEach(i=>io.observe(document.getElementById(i)));
/* reveal */
const rv=$$(".rv");if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion:reduce)").matches){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px"});rv.forEach(r=>o.observe(r))}else rv.forEach(r=>r.classList.add("in"));
/* dialog (prototype: nothing is sent anywhere) */
const dlg=$("#dlg"),de=$("#de");
$$("[data-open]").forEach(b=>b.addEventListener("click",()=>{menu(false);const[t,plan]=b.dataset.open.split("|");$("#dt").textContent=t;$("#dp").textContent=(plan?plan+" · ":"")+"Enter your email to join the waitlist. This is a design prototype, so nothing is submitted.";$("#ds").textContent="";$("#der").textContent="";de.value="";de.removeAttribute("aria-invalid");dlg.showModal();de.focus()}));
$("#dc").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$("#df").addEventListener("submit",e=>{e.preventDefault();const ok=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(de.value);de.setAttribute("aria-invalid",!ok);$("#der").textContent=ok?"":"Enter a valid email, like name@example.com.";$("#ds").textContent=ok?"Thanks! You're on the list. (Prototype: no data was stored.)":"";if(!ok)de.focus()});
