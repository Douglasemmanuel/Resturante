const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click", () => {
     console.log("CALLED!!!!")
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
       
    } )

function Loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}
const fadeout=()=>{
setInterval(Loader,3000)
}
window.onload = fadeout();