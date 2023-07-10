let mouseCursor = document.querySelector(".cursor-dot");
let mouseOutline = document.querySelector('.cursorOutline');
let mark1 = document.getElementById('first-mark');
let mark2 = document.getElementById('second-mark');
let mark3 = document.getElementById('third-mark');
let navbar_button = document.querySelector('.navbar > a');
let arrow_button = document.querySelector('.why a');
let image_cells = document.querySelectorAll('.video-grid a');
let arrow_button_2 = document.querySelector('.videos .details-grid a');
let article_images = document.querySelectorAll('.articles .cell a');
let bold_words = document.querySelectorAll('.quote mark');
let footer_links = document.querySelectorAll('.footer a');
let navbar_menu = document.querySelector('.navbar .menu');
let navbar_buttons = document.querySelectorAll('.navbar .menu a');
let topic_button = document.querySelector('.topics a');

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';

    mouseOutline.animate({
      top:e.pageY + 'px',
      left:e.pageX + 'px', 
    }, duration=2000, fill='forwards')
}

mark1.addEventListener('mouseenter', (e) => {
    image = document.getElementById('first');
    image.style.opacity = 1;
    mouseCursor.style.opacity = 0;
    mouseOutline.style.opacity = 0;
  })
  
mark1.addEventListener('mouseleave', (e) => {
    image = document.getElementById('first');
    image.style.opacity = 0;
    mouseCursor.style.opacity = 1;
    mouseOutline.style.opacity = 1;
  })

mark1.addEventListener('mousemove', (e) => {
    image = document.getElementById('first');
    image.style.top = e.pageY + 'px';
    image.style.left = e.pageX + 'px';
  })

mark2.addEventListener('mouseenter', (e) => {
    image = document.getElementById('second');
    image.style.opacity = 1;
    mouseCursor.style.opacity = 0;
    mouseOutline.style.opacity = 0;
  })
  
mark2.addEventListener('mouseleave', (e) => {
    image = document.getElementById('second');
    image.style.opacity = 0;
    mouseCursor.style.opacity = 1;
    mouseOutline.style.opacity = 1;
  })

mark2.addEventListener('mousemove', (e) => {
    image = document.getElementById('second');
    image.style.top = e.pageY + 'px';
    image.style.left = e.pageX + 'px';
  })

mark3.addEventListener('mouseenter', (e) => {
    image = document.getElementById('third');
    image.style.opacity = 1;
    mouseCursor.style.opacity = 0;
    mouseOutline.style.opacity = 0;
  })
  
mark3.addEventListener('mouseleave', (e) => {
    image = document.getElementById('third');
    image.style.opacity = 0;
    mouseCursor.style.opacity = 1;
    mouseOutline.style.opacity = 1;
  })

mark3.addEventListener('mousemove', (e) => {
    image = document.getElementById('third');
    image.style.top = e.pageY + 'px';
    image.style.left = e.pageX + 'px';
  })

navbar_button.addEventListener('mouseenter', (e) => {
    navbar_button.style.outline = "2px solid white";
    mouseOutline.style.opacity = 0;
  })
  
navbar_button.addEventListener('mouseleave', (e) => {
    navbar_button.style.outline = "2px solid rgba(0,0,0,0)";
    mouseOutline.style.opacity = 1;
  })

arrow_button.addEventListener('mouseenter', (e) => {
    image = document.getElementById('arrow-black');
    image.style.opacity = 1;
    mouseCursor.style.opacity = 0;
    mouseOutline.style.opacity = 0;
  })
  
arrow_button.addEventListener('mouseleave', (e) => {
    image = document.getElementById('arrow-black');
    image.style.opacity = 0;
    mouseCursor.style.opacity = 1;
    mouseOutline.style.opacity = 1;
  })

arrow_button.addEventListener('mousemove', (e) => {
    image = document.getElementById('arrow-black');
    image.style.top = e.pageY + 'px';
    image.style.left = e.pageX + 'px';
  })

arrow_button_2.addEventListener('mouseenter', (e) => {
    image = document.getElementById('arrow-black-two');
    image.style.opacity = 1;
    mouseCursor.style.opacity = 0;
    mouseOutline.style.opacity = 0;
  })
  
arrow_button_2.addEventListener('mouseleave', (e) => {
    image = document.getElementById('arrow-black-two');
    image.style.opacity = 0;
    mouseCursor.style.opacity = 1;
    mouseOutline.style.opacity = 1;
  })

arrow_button_2.addEventListener('mousemove', (e) => {
    image = document.getElementById('arrow-black-two');
    image.style.top = e.pageY + 'px';
    image.style.left = e.pageX + 'px';
  })

article_images.forEach(cell => {
    cell.addEventListener('mouseenter', (e) => {
        image = document.getElementById('read');
        image.style.opacity = 1;
        mouseCursor.style.opacity = 0;
        mouseOutline.style.opacity = 0;
      })
      
    cell.addEventListener('mouseleave', (e) => {
        image = document.getElementById('read');
        image.style.opacity = 0;
        mouseCursor.style.opacity = 1;
        mouseOutline.style.opacity = 1;
      })
    
    cell.addEventListener('mousemove', (e) => {
        image = document.getElementById('read');
        image.style.top = e.pageY + 'px';
        image.style.left = e.pageX + 'px';
      })
});

image_cells.forEach(cell => {
  cell.addEventListener('mouseenter', (e) => {
      image = document.getElementById('play');
      image.style.opacity = 1;
      mouseCursor.style.opacity = 0;
      mouseOutline.style.opacity = 0;
    })
    
  cell.addEventListener('mouseleave', (e) => {
      image = document.getElementById('play');
      image.style.opacity = 0;
      mouseCursor.style.opacity = 1;
      mouseOutline.style.opacity = 1;
    })
  
  cell.addEventListener('mousemove', (e) => {
      image = document.getElementById('play');
      image.style.top = e.pageY + 'px';
      image.style.left = e.pageX + 'px';
    })
});

bold_words.forEach(cell => {
  cell.addEventListener('mouseenter', (e) => {
      mouseOutline.style.opacity = 0;
    })
    
  cell.addEventListener('mouseleave', (e) => {
      mouseOutline.style.opacity = 1;
    })
});

footer_links.forEach(cell => {
  cell.addEventListener('mouseenter', (e) => {
      mouseOutline.style.opacity = 0;
    })
    
  cell.addEventListener('mouseleave', (e) => {
      mouseOutline.style.opacity = 1;
    })
});

navbar_buttons.forEach(cell => {
  cell.addEventListener('mouseenter', (e) => {
      mouseCursor.style.opacity = 0;
    })
    
  cell.addEventListener('mouseleave', (e) => {
      mouseCursor.style.opacity = 1;
    })
});

topic_button.addEventListener('mouseenter', (e) => {
  mouseCursor.style.opacity = 0;
  mouseOutline.style.opacity = 0;
})

topic_button.addEventListener('mouseleave', (e) => {
  mouseCursor.style.opacity = 1;
  mouseOutline.style.opacity = 1;
})

function navbarOpen() {
  mouseOutline.classList.toggle('hide');
  navbar_menu.classList.toggle('activated');
  navbar_button.classList.toggle('circled');
}

function goToSection(id_of_section) {
  document.getElementById(id_of_section).scrollIntoView(true);
  setTimeout(navbarOpen, 400);
}