let pf = document.getElementsByClassName('pf');
let btn_category = document.getElementsByClassName('btn-category');

for (let i = 0; i < btn_category.length; i++) {
    btn_category[i].addEventListener("click", (e) => {
        e.preventDefault();

        for (let btn = 0; btn < btn_category.length; btn++) {
            btn_category[btn].classList.remove('clicked-category');
        }

        let current_click = btn_category[i].getAttribute('value');
        btn_category[i].classList.add('clicked-category');

        for (let j = 0; j < pf.length; j++) {
            pf[j].style.display = 'none';

            if (current_click == 'all') {
                pf[j].style.display = 'block';
            } else if (current_click == pf[j].getAttribute('data-category')) {
                pf[j].style.display = 'block';
            }
        }
    });

}

let img = document.querySelectorAll('.img-modal')
let modal_img = document.getElementById('modal-img');
let img01 = document.getElementById('img01');
let span_close = document.getElementsByClassName('close')[0];
let deskripsi = document.getElementsByClassName('deskripsi');
let modal_img_deskripsi = modal_img.getElementsByClassName('modal-img-deskripsi')[0];

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        $('body').addClass("doc-fixed");

        modal_img.style.display = "block";
        img01.src = img[i].src;
        modal_img_deskripsi.innerHTML = deskripsi[i].innerHTML;
    });
}

span_close.addEventListener("click", () => {
    modal_img.style.display = "none";
    $('body').removeClass("doc-fixed");
});

var fixmeTop = $('.ctg').offset().top;       // get initial position of the element
var share = 441;

$(window).scroll(function () {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.ctg').css({// scroll to that element or below it
            position: 'fixed',
            top: '0',
            zIndex: 99,
            width: "100%"
        });
        $('#portfolio-row').addClass('portfolio-row');
    } else {                                   // apply position: static
        $('.ctg').css({// if you scroll above it
            position: 'static'
        });
        $('#portfolio-row').removeClass('portfolio-row');
    }

    if (currentScroll >= share) {
        $('.share').css({// scroll to that element or below it
            position: 'fixed',
            top: '5rem',
            zIndex: 2
        });
    } else {
        $('.share').css({// scroll to that element or below it
            position: 'static',
        });
    }

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}