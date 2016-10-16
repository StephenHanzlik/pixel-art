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

var palette1 = document.getElementsByClassName("palcolorAquamarine");
palette1[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'Aquamarine';
});
var palette2 = document.getElementsByClassName("palcolorblue");
palette2[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'blue';
});
var palette3 = document.getElementsByClassName("palcolorred");
palette3[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'red';
});
var palette4 = document.getElementsByClassName("palcoloryellow");
palette4[0].addEventListener("click", function() {
  paletteStore[0].style.backgroundColor = 'yellow';
});

//create and append divs to fill out pix canvas:


for (var i = 0; i < 2808; i++) {
 var canvas = document.getElementsByClassName("canvas");
 var pixCreate = document.createElement("div");
 pixCreate.style.backgroundColor = 'white';
 pixCreate.style.height = '42px';
 pixCreate.style.width = '42px';
 pixCreate.style.border = '1px solid grey';
 canvas[0].appendChild(pixCreate);
 pixCreate.addEventListener("click", function(){
   event.target.style.backgroundColor = paletteStore[0].style.backgroundColor;
 });
}
