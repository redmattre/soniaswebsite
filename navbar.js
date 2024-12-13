const navIcons = document.querySelectorAll('#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4');
const menu = document.getElementById("black-panel");
const title = document.getElementById("mainNameLink");
const body = document.body;
let count = 1;

navIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        this.classList.toggle('open');
        
        if (count % 2 === 0) {
            menu.style.opacity = 0;
            menu.style.pointerEvents = "none";
            body.style.overflow = "scroll";
            // title.style.opacity = 1;
            title.textContent = "Sonia Gasparini";
        } else {
            menu.style.opacity = 1;
            menu.style.pointerEvents = "all";
            body.style.overflow = "hidden";
            // title.style.opacity = 0;
            title.textContent = "SG";
        }
        count++;
    });
});
