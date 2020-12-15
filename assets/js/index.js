let e_header = document.getElementById('header');
let hero = document.getElementById('hero');
let welcome = document.getElementsByClassName('welcome')[0];

window.onload = ()=>{
    e_header.classList.add('header-show');
    setTimeout(()=>{
        hero.classList.add('hero-show');
    },1);
    setTimeout(()=>{
        welcome.classList.add('welcome-show');
    },800);
    
};



let about = document.getElementsByClassName('about-hide')[0];
let portfolio = document.getElementsByClassName('portfolio-hide')[0];
let contact = document.getElementsByClassName('contact-hide')[0];

window.onscroll = ()=>{
    let wscroll = window.pageYOffset;

    about.classList.remove('about-show');
    portfolio.classList.remove('portfolio-show');
    contact.classList.remove('contact-show');

    if (wscroll > about.offsetTop - 500){
        about.classList.add('about-show');
    }
    if (wscroll > portfolio.offsetTop - 500){
        portfolio.classList.add('portfolio-show');
    }
    if (wscroll > contact.offsetTop - 500){
        contact.classList.add('contact-show');
    }
};