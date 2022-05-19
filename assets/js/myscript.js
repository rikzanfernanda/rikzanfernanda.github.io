let header = document.getElementById('header');
let menu = document.getElementsByClassName('menu')[0]
let close_nav = document.getElementsByClassName('close-nav')[0];

menu.addEventListener('click', ()=>{
    header.style.marginLeft = "0";
    menu.style.display = "none";
});

close_nav.addEventListener('click', ()=>{
    header.style.marginLeft = "-100%";
    menu.style.display = "block";
});