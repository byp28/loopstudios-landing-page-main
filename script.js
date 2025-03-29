const overlay = document.querySelector('#overlay');
const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');
const header = document.querySelector('.header');
const seuil = 500;
open_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})
close_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})

window.addEventListener('scroll', function() {
    if (window.scrollY > seuil) {
        header.classList.add('bg-black');

    } else {
        header.classList.remove('bg-black');
    }
    
});
console.log(window.scrollY )