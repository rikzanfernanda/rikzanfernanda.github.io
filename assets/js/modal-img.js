let img = document.querySelectorAll('#img-modal')
let modal_img = document.getElementById('modal-img');
let img01 = document.getElementById('img01');
let span_close = document.getElementsByClassName('close')[0];
let deskripsi = document.getElementsByClassName('deskripsi');
let modal_img_deskripsi = modal_img.getElementsByClassName('modal-img-deskripsi')[0];

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", ()=>{
        modal_img.style.display = "block";
        img01.src = img[i].src;
        modal_img_deskripsi.innerHTML = deskripsi[i].innerHTML;
    });
}

span_close.addEventListener("click", ()=>{
    modal_img.style.display = "none";
});
