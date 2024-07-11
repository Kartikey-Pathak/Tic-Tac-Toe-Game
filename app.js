//home page effects logic
let load=document.querySelector(".load");
load.classList.remove("hideload");
function calllate(){
    let playdiv=document.querySelector(".playgame");
    playdiv.classList.remove("hides");
    let playlink=document.querySelector(".play");
    playlink.classList.remove("hides");
    console.log("call late executed");
    load.classList.add("hideload");
}
setTimeout(calllate, 3000);