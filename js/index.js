let img = document.querySelector('image');
let start = img.src;
let hover = img.getAttribute('data-hover'); 
img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } 



function respNav() {
        var navbar = document.getElementById("hamburger");
        if (navbar.style.display === "none") {
          navbar.style.display = "block";
        } else {
          navbar.style.display = "none";
        }
      }