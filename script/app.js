// Navbar

const btnNav = document.querySelector('.responsive-nav-btn');
const navlist = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

    navlist.classList.toggle('active-nav');
    if(imgBtn.src.includes('menu')){
        imgBtn.src = 'assets/croix.svg';
        imgBtn.style.width = "30px";
        imgBtn.style.height = "30px";
    } else {
        imgBtn.src = 'assets/menu.svg';
        imgBtn.style.width = "40px";
        imgBtn.style.height = "40px";
    }
})