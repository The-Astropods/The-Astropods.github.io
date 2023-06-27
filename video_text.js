let title_element = document.querySelector('.details-grid h2');
let paragraph_element = document.querySelector('.details-grid p');
let article_title = document.querySelector('.articles h2');
let article_paragraph = document.querySelector('.articles p');

function fadeText() {
    title_element.style.opacity = 0;
    paragraph_element.style.opacity = 0;
    title_element.style.transform = "translateY(3vh)";
    paragraph_element.style.transform = "translateY(3vh)";
    article_paragraph.style.opacity = 0;
    article_title.style.opacity = 0;
    article_paragraph.style.transform = "translateY(3vh)";
    article_title.style.transform = "translateY(3vh)";
}

function showFeaturedText() {
    fadeText();
    setTimeout(function() {
        title_element.innerHTML = "Featured Video";
        paragraph_element.innerHTML = "How an Australian Gravitational Wave Detector Could Revolutionise Astronomy";
        title_element.style.opacity = 1;
        paragraph_element.style.opacity = 1;
        title_element.style.transform = "translateY(0vh)";
        paragraph_element.style.transform = "translateY(0vh)";
    }, 400);
}

function showRecentText() {
    fadeText();
    setTimeout(function() {
        title_element.innerHTML = "Most Recent Video";
        paragraph_element.innerHTML = "How 4 Astronauts Will Revolutionise Space Travel"
        title_element.style.opacity = 1;
        paragraph_element.style.opacity = 1;
        title_element.style.transform = "translateY(0vh)";
        paragraph_element.style.transform = "translateY(0vh)";
    }, 400);
}

function showViewedText() {
    fadeText();
    setTimeout(function() {
        title_element.innerHTML = "Most Viewed Video";
        paragraph_element.innerHTML = "Ducks, Dragons, and the Essence of Composite Functions"
        title_element.style.opacity = 1;
        paragraph_element.style.opacity = 1;
        title_element.style.transform = "translateY(0vh)";
        paragraph_element.style.transform = "translateY(0vh)";
    }, 400);
}

function showArticle1Text() {
    fadeText();
    setTimeout(function() {
        article_title.innerHTML = "Astronomy's Golden Age Could Come to an End";
        article_paragraph.innerHTML = "Technologies like Wi-Fi, satellites and even streetlights, are playing a drastic, negative effect in astronomy. All these technologies produce light, and this light can interfere with what we are trying to see in space.";
        article_title.style.opacity = 1;
        article_paragraph.style.opacity = 1;
        title_element.style.transform = "translateY(0vh)";
        paragraph_element.style.transform = "translateY(0vh)";
    }, 400);
}

function showArticle2Text() {
    fadeText();
    setTimeout(function() {
        article_title.innerHTML = "Unravelling the Enigma of Black Holes";
        article_paragraph.innerHTML = "Black holes remain an enigmatic phenomenon in the vast expanse of space, fueling the imagination of individuals worldwide. The study of black holes has already fostered a more profound comprehension of the universe's mechanisms.";
        article_title.style.opacity = 1;
        article_paragraph.style.opacity = 1;
        title_element.style.transform = "translateY(0vh)";
        paragraph_element.style.transform = "translateY(0vh)";
    }, 400);
}