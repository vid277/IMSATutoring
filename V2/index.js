let img = document.querySelector("topImage")
let start = img.src;
let hover = "Light_Bulb_ON.png"

img.onmouseover = () => { img.src = hover; }
img.onmouseout = () => { img.src = start; } 