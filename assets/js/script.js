(function(){
var c=window.SEEP_CONFIG||{},d=document;
var u=c.sfbUrl||"";var ok=u&&u.indexOf("REPLACE_WITH")!==0;
d.querySelectorAll("[data-sfb-link]").forEach(function(a){
  if(ok){a.href=u;}
  else{a.addEventListener("click",function(e){e.preventDefault();alert("The Students Focus Blueprint page link has not been set yet. See README.md.");});}
});
var b=d.querySelector(".menu-btn"),n=d.getElementById("nav");
function set(o){b.setAttribute("aria-expanded",o);n.classList.toggle("open",o);}
b.addEventListener("click",function(){set(b.getAttribute("aria-expanded")!=="true");});
d.addEventListener("keydown",function(e){if(e.key==="Escape")set(false);});
n.addEventListener("click",function(e){if(e.target.tagName==="A")set(false);});
var y=d.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
})();
