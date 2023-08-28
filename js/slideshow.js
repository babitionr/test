//Change Tab
function openTab(event, tabName) {
    let i, tabcontent, tabs;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



//Image slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("imageshow");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    for (i = 0; i < slides.length; i++) 
      slides[slideIndex-1].style.display = "block";
}


//MENU SLIDER

let slideMenu = 1;
showSlidesMenu(slideMenu);

function plusSlidesMenu(n) {
    showSlidesMenu(slideMenu += n);
}

function currentSlideMenu(n) {
    showSlides(slideIndex = n);
}

function showSlidesMenu(n) {
  let i;
  let slidesMenu = document.getElementsByClassName("slides-menu");
  if (n > slidesMenu.length) {slideMenu = 1}    
  if (n < 1) {slideMenu = slidesMenu.length}
  for (i = 0; i < slidesMenu.length; i++) {
    slidesMenu[i].style.display = "none";  
  }
  for (i = 0; i < slidesMenu.length; i++) 
  slidesMenu[slideMenu-1].style.display = "block";  
}



