let more_efek = document.getElementsByClassName('more-efek')[0];
let more = document.getElementsByClassName('more')[0];
let more_btn = document.getElementsByClassName('more-btn')[0];
more_efek.onmouseout = ()=>{
    more.style.opacity = '0';
    more_btn.style.display = 'none';
}
more_efek.onmouseover = ()=>{
    more.style.opacity = '0.5';
    more_btn.style.display = 'block';
}