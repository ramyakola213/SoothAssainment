let img = document.querySelector('image');
let start = img.src;
let hover = img.getAttribute('data-hover'); 
img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } 