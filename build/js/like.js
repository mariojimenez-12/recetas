const LIKE_BTN = document.querySelector('.like-btn');
const valor = document.querySelector('#contador');
let contador = 130;

document.addEventListener('DOMContentLoaded', () => {
    app();
});

function app(){
    LIKE_BTN.addEventListener('click', e => {
        e.preventDefault();

        if(LIKE_BTN.classList.contains('like-active')){
            LIKE_BTN.classList.remove('like-active');
        }else{
            LIKE_BTN.classList.add('like-active');
            contador++;
        }
        valor.textContent = contador;
    });
}