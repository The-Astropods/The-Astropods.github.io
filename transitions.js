let navbar = document.querySelector('.navbar');
let about = document.querySelector('.why');
let footer = document.querySelector('.footer');
let footer_text_animation = new SplitType('.footer h1');
let footer_text_animation_2 = new SplitType('.footer h2');
let footer_text_animation_3 = new SplitType('.footer > h3');
let footer_text_animation_4 = new SplitType('.footer > p');
let footer_links_animation = document.querySelectorAll('.footer .inner-cell a');
let quote_box = document.querySelector('.quote');
let videos_box = document.querySelector('.videos');
let articles_box = document.querySelector('.articles');

let about_text_animation = new SplitType('.why h1');

window.addEventListener('scroll', function() {
    if (this.window.scrollY > 0) {
        navbar.style.background = 'black';
    }
    else {
        navbar.style.background = 'none';
    }
});

window.addEventListener('scroll', function() {
    if (about.getBoundingClientRect().top < (window.innerHeight/3)) {
        let i = 0;
        this.document.querySelectorAll('.why .char').forEach(char => {
            char.style.transform = "translateY(0)";
            char.style.transitionDelay = i*30 + 'ms';
            i++;
        })
        setTimeout(() => {
            this.document.querySelector('.why a').style.transform = 'scale(1)';
            this.document.querySelector('.why a').style.opacity = '1';
            this.document.querySelector('.why a').style.pointerEvents = 'all';
        }, 1000);
    }

    if (footer.getBoundingClientRect().top < (window.innerHeight/3)) {
        let i = 0;
        this.document.querySelectorAll('.footer .char').forEach(char => {
            char.style.transform = "translateY(0)";
            char.style.transitionDelay = i*30 + 'ms';
            i++;
        });

        i = 0;
        this.document.querySelectorAll('.footer .word').forEach(paragraph => {
            paragraph.style.transform = "translateY(0)";
            paragraph.style.transitionDelay = (i*30)+300 + 'ms';
            i++;
        });

        i=0;
        this.document.querySelectorAll('.footer .inner-cell > *').forEach(header => {
            header.style.transform = "translateY(0)";
            header.style.opacity = 1;
            header.style.transitionDelay = (i*50)+1000 + 'ms';
            i++;
        })
    }

    if (videos_box.getBoundingClientRect().top < (window.innerHeight/3)) {
        this.document.querySelector('.videos h1').style.opacity = '1';
        this.document.querySelector('.videos h1').style.transform = 'translateY(0)';
        let i = 1;
        this.document.querySelectorAll('.video-grid .cell').forEach(cell => {
            cell.style.opacity = 1;
            cell.style.transform = 'translateY(0)';
            cell.style.transitionDelay = (i*50) + 'ms';
            i++;
        });

        this.setTimeout(() => {
            this.document.querySelector('.details-grid a').style.transform = 'translateY(0)';
        }, 2000)
    }

    if (articles_box.getBoundingClientRect().top < (window.innerHeight/3)) {
        this.document.querySelector('.articles h1').style.opacity = '1';
        this.document.querySelector('.articles h1').style.transform = 'translateX(0)';
        let i = 1;
        this.document.querySelectorAll('#article-image-cell > div').forEach(cell => {
            cell.style.opacity = 1;
            cell.style.transform = 'translateX(0)';
            cell.style.transitionDelay = (i*75) + 'ms';
            i++;
        });

        this.setTimeout(() => {
            this.document.querySelector('.details-grid a').style.transform = 'translateY(0)';
        }, 2000)
    }
});

window.addEventListener('scroll', function() {
    if (quote_box.getBoundingClientRect().top < (window.innerHeight/2)) {
        quote_box.style.transform = 'scale(1)';
        quote_box.style.opacity = '1';
        if (quote_box.getBoundingClientRect().top < (window.innerHeight/10)) {
            navbar.style.background = 0;
        }
        this.setTimeout(() => {
            this.document.querySelector('.quote h1').style.opacity = 1;
            this.document.querySelector('.quote h1').style.transform = 'translateY(0)';
        }, 750)
        this.setTimeout(() => {
            this.document.querySelector('.quote h2').style.opacity = 1;
            this.document.querySelector('.quote h2').style.transform = 'translateY(0)';
        }, 1000)

    }
});