document
.getElementById("openSite")
.addEventListener("click",function(){

window.location.href="https://www.bank-project-1-q95z.onrender.com";

});


if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js");

