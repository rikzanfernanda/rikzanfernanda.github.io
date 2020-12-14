let img = document.querySelectorAll('#img-modal')
let modal_img = document.getElementById('modal-img');
let img01 = document.getElementById('img01');
let span_close = document.getElementsByClassName('close')[0]

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", ()=>{
        modal_img.style.display = "block";
        img01.src = img[i].src;
    });
}

span_close.addEventListener("click", ()=>{
    modal_img.style.display = "none";
});
