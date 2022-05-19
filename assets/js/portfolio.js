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
            } else if (current_click == pf[j].getAttribute('data-category')){
                pf[j].style.display = 'block';
            }
        }
    });

}

