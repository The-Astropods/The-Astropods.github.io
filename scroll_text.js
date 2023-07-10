let line1 = document.getElementById('line-one');
let line2 = document.getElementById('line-two');
let line3 = document.getElementById('line-three');

window.addEventListener('scroll', function() {
    let pos1 = (-1*(window.scrollY - 900))/3;
    let pos2 = (window.scrollY - 1500)/3;
    let pos3 = (-1*(window.scrollY - 1100))/5;
    line1.animate({
        transform: "translateX(" + pos1 + "px)",
    }, duration=3000, fill='forwards')
    line2.animate({
        transform: "translateX(" + pos2 + "px)",
    }, duration=3000, fill='forwards')
    line3.animate({
        transform: "translateX(" + pos3 + "px)",
    }, duration=3000, fill='forwards')
});