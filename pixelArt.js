"use strict";

//click palette to store color:

var paletteStore = document.getElementsByClassName("paletteStore");
paletteStore[0].style.backgroundColor = 'white';

// Loop through array of colors and create a palatte:

var colArr = ['#f44842', '#db4b27', '#db6927', '#db7e27', '#db9f27', '#dbb127', '#dbc027', '#dbd227', '#cfdb27', '#abdb27', '#84db27', '#54db27', '#27db30', '#27db75', '#27db90', '#27dbcf', '#27c0db', '#275adb', '#272adb', '#6c27db', '#8727db', '#9927db', '#bd27db', '#db27db', '#db27b1'];
// '#840976', '#840959', '#600722', '#2b020e', '#070001', '#ffffff'];

var palette = document.getElementsByClassName("palette");

for (var x = 0; x < colArr.length; x++) {
  var palCreate = document.createElement("div");
  palCreate.style.backgroundColor = colArr[x];
  palCreate.style.height = '15%';
  palCreate.style.width = '2.5%';
  palCreate.style.padding = '1%';
  palCreate.style.marginLeft = '10px';
  palCreate.style.marginTop = '10px';
  palCreate.style.borderRadius = '50%';
  // palCreate.style.border = '1px solid #e0e0e0';
  palette[0].appendChild(palCreate);
  palCreate.addEventListener("click", function() {
    paletteStore[0].style.backgroundColor = event.target.style.backgroundColor;
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
};

//create and append divs to fill out canvas: 4422

for (var i = 0; i < 3569; i++) {
 var canvas = document.getElementsByClassName("canvas");
 var pixCreate = document.createElement("div");
 pixCreate.style.backgroundColor = 'white';
 pixCreate.style.height = '2%';
 pixCreate.style.width = '1%';
 pixCreate.style.border = '1px solid #e0e0e0';
 canvas[0].appendChild(pixCreate);
 pixCreate.addEventListener("click", function(){
   event.target.style.backgroundColor = paletteStore[0].style.backgroundColor;
 });
}

//append 'current color' text to pallette:

var currentColTXT = document.createElement("p");
currentColTXT.innerText = 'CURRENT COLOR > ';
currentColTXT.style.fontSize = '150%';
currentColTXT.style.marginLeft = '30px';
currentColTXT.style.marginTop = '20px';
currentColTXT.style.color = "#595959";
palette[0].appendChild(currentColTXT);

//create a div & house current color pic:

var currentColor = document.createElement("div");
currentColor.style.height = "43px";
currentColor.style.width = "200px";
currentColor.style.marginLeft = "30px";
currentColor.style.marginTop = "11px";
currentColor.style.backgroundColor = "white";
palette[0].appendChild(currentColor);
