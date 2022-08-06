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


// FAQ

const AllCross = document.querySelectorAll('.visible-pannel img');

AllCross.forEach(logo => {

    logo.addEventListener('click', function(){
        // console.log(this);
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];
       
        if(this.src.includes('plus')){
            this.src = "assets/minus.svg"
            currentChoice.style.height = height + 40 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "assets/plus.svg"
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = 0;
        }
    })
})


// Footer

const btnFooter = document.querySelector(".arrow-img");
const FooterCol = document.querySelector(".footer-col ul");
console.log(btnFooter);

btnFooter.addEventListener("click", () => {
  FooterCol.classList.toggle("active");
});