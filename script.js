document.addEventListener('DOMContentLoaded', function () {
    var gif = document.getElementById('gif');
    var splashScreen = document.getElementById('splash-screen');

    // You may choose to hide the splash screen after a certain delay
    setTimeout(function () {
        splashScreen.style.display = 'none';
    }, 15000); // Adjust the delay (in milliseconds) as needed

    // Get all the buttons and panels
    var buttons = document.querySelectorAll(".tab button");
    var panels = document.querySelectorAll(".tabcontent");

    // Loop through the buttons and add a click event listener
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            // Get the id of the panel to show
            var panelId = this.getAttribute("aria-controls");

            // Loop through the panels and hide them
            for (var j = 0; j < panels.length; j++) {
                panels[j].classList.remove("active");
            }

            // Show the panel with the matching id
            document.getElementById(panelId).classList.add("active");

            // Loop through the buttons and remove the active class
            for (var k = 0; k < buttons.length; k++) {
                buttons[k].classList.remove("active");
                buttons[k].setAttribute("aria-selected", "false");
            }

            // Add the active class to the clicked button
            this.classList.add("active");
            this.setAttribute("aria-selected", "true");
        });
    }
});
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlides() {
    let i;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds (adjust as needed)
    setTimeout(showSlides, 3000);
}

// Initial show
showSlides();

