// ROTNIVKA

console.log("ROTNIVKA loaded.");

// Current year

const year = new Date().getFullYear();

const footer = document.querySelector(".footer-bottom p");

if (footer) {
    footer.innerHTML = `© ${year} ROTNIVKA.`;
}

// Smooth fade on load

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity .5s ease";

    document.body.style.opacity = "1";

});
