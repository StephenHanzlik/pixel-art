"use strict";

//click palette to store color:

var paletteStore = document.getElementsByClassName("paletteStore");

// var palette1 = document.getElementsByClassName("palcolorAquamarine");
// palette1[0].addEventListener("click", function() {
//   paletteStore[0].style.backgroundColor = 'aquamarine';
// });
// var palette2 = document.getElementsByClassName("palcolorDarkGoldenRod");
// palette2[0].addEventListener("click", function() {
//   paletteStore[0].style.backgroundColor = 'darkgoldenrod';
// });
// var palette3 = document.getElementsByClassName("palcolorDarkOliveGreen");
// palette3[0].addEventListener("click", function() {
//   paletteStore[0].style.backgroundColor = 'darkolivegreen';
// });
// var palette4 = document.getElementsByClassName("palcolorDarkSalmon");
// palette4[0].addEventListener("click", function() {
//   paletteStore[0].style.backgroundColor = 'darksalmon';
// });

// Loop through array of colors and create a palatte:
var colArr = ['#f44842', '#db4b27', '#db6927', '#db7e27', '#db9f27', '#dbb127', '#dbc027', '#dbd227', '#cfdb27', '#abdb27', '#84db27', '#54db27', '#27db30', '#27db75', '#27db90', '#27dbcf', '#27c0db', '#275adb', '#272adb', '#6c27db', '#8727db', '#9927db', '#bd27db', '#db27db', '#db27b1','#840976', '#840959', '#600722', '#2b020e', '#070001', '#ffffff'];


for (var x = 0; x < colArr.length; x++) {
  var palette = document.getElementsByClassName("palette");
  var palCreate = document.createElement("div");
  palCreate.style.backgroundColor = colArr[x];
  palCreate.style.height = '50px';
  palCreate.style.width = '50px';
  palCreate.style.border = '1px solid lightgrey';
  palette[0].appendChild(palCreate);
  palCreate.addEventListener("click", function() {
    paletteStore[0].style.backgroundColor = event.target.style.backgroundColor;
  });
};

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
