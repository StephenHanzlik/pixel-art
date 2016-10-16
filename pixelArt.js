"use strict";

//click to change the color of squares to red:

var pix = document.getElementsByClassName("celltop");
pix[0].addEventListener("click", function() {
  pix[0].style.backgroundColor = "red";
});
pix[1].addEventListener("click", function() {
  pix[1].style.backgroundColor = "red";
});
var pix1 = document.getElementsByClassName("cellbottomL");
pix1[0].addEventListener("click", function() {
  pix1[0].style.backgroundColor = "red";
});
var pix2 = document.getElementsByClassName("cellbottomR");
pix2[0].addEventListener("click", function() {
  pix2[0].style.backgroundColor = "red";
});

//click palette to store color:

var paletteStore = document.getElementsByClassName("paletteStore");
var palette1 = document.getElementsByClassName("palcolorgreen");
palette1[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'green';
});
var palette2 = document.getElementsByClassName("palcolorblue");
palette2[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'blue';
});

//create and append divs to fill out pix canvas:


for (var i = 0; i < 28; i++) {
 var pixCreate = document.createElement("div");
 pixCreate.style.backgroundColor = 'brown';
 pixCreate.style.height = '50px';
 pixCreate.style.width = '50px';
 document.body.appendChild(pixCreate)
}
