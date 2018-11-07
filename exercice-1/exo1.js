'use strict'
/**
  *Créer une fonction “gridGenerator”
  *prenant les arguments “xAxis” et “yAxis”. 
  *Vous devez générer une matrice en “table” html de x * y. 
  *Vous devrez colorer aléatoirement chaque case de la grille 
  *d’une couleur différente toutes les “1s” à “2s”.
  */
function gridGenerator(xAxis,yAxis){
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
   
  for (var i = 0; i <= xAxis; i++) {
    var tr = document.createElement('tr');

    for (var j = 0 ; j <= yAxis; j++) {
      var td= document.createElement('td');
      setInterval(function(){
        td.style.backgroundColor = getRandomColor();
      }, 1000);
      tr.appendChild(td);

      var check = document.querySelector('id');
    
    
    }

      tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
}
gridGenerator(20,20);
setInterval(clignot, 1000);

  function clignot(){
    var tds = document.querySelectorAll('td');

    tds.forEach(function(td){
      td.style.backgroundColor = getRandomColor();
    })
   
  }
  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
