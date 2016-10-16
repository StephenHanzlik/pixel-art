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


for (var i = 0; i < 2808; i++) {
 var canvas = document.getElementsByClassName("canvas");
 var pixCreate = document.createElement("div");
 pixCreate.style.backgroundColor = 'yellow';
 pixCreate.style.height = '42px';
 pixCreate.style.width = '42px';
 pixCreate.style.border = '1px solid black';
 canvas[0].appendChild(pixCreate);
}

//add event listener to target of click to paint palette colors:

pixCreate.addEventListener("click", function(){
  this.style.backgroundColor =  paletteStore[0].style.backgroundColor;
})
