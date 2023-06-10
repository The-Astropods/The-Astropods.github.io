let quote_bg = document.querySelector(".quote");

function changeBackground(filename) {
    quote_bg.style.background = 'url(' + filename + ')';
    quote_bg.style.backgroundPosition = 'center';
    quote_bg.style.backgroundRepeat = 'no-repeat';
    quote_bg.style.backgroundSize = 'cover';
}

function reverseBackground() {
    quote_bg.style.background = 'url("background-1.jpg")';
    quote_bg.style.backgroundPosition = 'center';
    quote_bg.style.backgroundRepeat = 'no-repeat';
    quote_bg.style.backgroundSize = 'cover';
}