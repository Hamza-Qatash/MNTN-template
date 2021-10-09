let headerBar = document.querySelector("[data-header]");
let mainContent = document.getElementById("main_content");
let bg = document.querySelector("[data-parallax]");
let heroText = document.querySelector("[data-hero-text]");

// Parallax Scrolling
window.onscroll = function () {
    bg.style.top = `${20 - window.scrollY / 25}%`;
    heroText.style.top = `${40 + window.scrollY / 25}%`;
    heroText.style.opacity = `${1 - window.scrollY / 800}`;
    if (window.scrollY > mainContent.offsetTop - 160) {
        headerBar.classList.add("scroll");
    } else {
        headerBar.classList.remove("scroll");
    }
};

let menuBtn = document.querySelector("[data-header-menu]");
let siteWrapper = document.querySelector("[data-site-wrapper]");
let mobileNav = document.querySelector("[data-mobile-nav]");
// Toggle mobile nav
menuBtn.onclick = function (e) {
    e.stopPropagation();
    siteWrapper.style.transform = "rotate(10deg)";
    siteWrapper.style.opacity = 0.1;
    mobileNav.style.opacity = 1;
    mobileNav.style.transform = "scale(1)";
    window.onclick = function (e) {
        e.stopPropagation();
        if (e.target.dataset.type != "nav") {
            siteWrapper.style.transform = "none";
            siteWrapper.style.opacity = 1;
            mobileNav.style.opacity = 0;
            mobileNav.style.transform = "scale(0)";
        }
    };
};

// Panels Gallery
let panels = document.querySelectorAll("[data-panel]");
panels.forEach((panel) => {
    panel.addEventListener("click", () => panel.classList.toggle("open"));
});

// Animation
const scrollElements = document.querySelectorAll(".animation");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

// const elementOutofView = (el) => {
//     const elementTop = el.getBoundingClientRect().top;

//     return (
//         elementTop >
//         (window.innerHeight || document.documentElement.clientHeight)
//     );
// };

const displayScrollElement = (element) => {
    element.classList.add(element.dataset.animation);
};

// const hideScrollElement = (element) => {
//     element.classList.remove(element.dataset.animation);
// };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
