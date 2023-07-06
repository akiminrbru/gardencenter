let burger = document.querySelector(".burger");
let burger__content = document.querySelector(".burger__content");
let open = document.querySelector(".headerMobile__burgerOpen");
let close = document.querySelector(".headerMobile__burgerClose");

if (open) {
    open.addEventListener("click", () => {
        burger__content.classList.remove("close");
        burger__content.classList.add("open");
        burger.classList.toggle('burger__back');
        close.classList.remove("closeBtn");
        open.classList.add("closeBtn");
    });
}



if (close) {
    close.addEventListener("click", () => {
        burger__content.classList.remove("open");
        burger__content.classList.add("close");
        burger.classList.toggle('burger__back');
        open.classList.remove("closeBtn");
        close.classList.add("closeBtn");
    });
}

if (burger) {
    burger.addEventListener('click', () => {
        burger__content.classList.remove("open");
        burger__content.classList.add("close");
        burger.classList.toggle('burger__back');
        open.classList.remove("closeBtn");
        close.classList.add("closeBtn");
    })
}

if (burger__content) {
    burger__content.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}