'use strict'
function renderWorldMap(){
var paths = document.querySelectorAll('path');
paths.forEach(function(path){

path.addEventListener('click',function(){
path.setAttribute('style', 'fill:red');

});

path.addEventListener('mouseenter',function(){
  if (path.style.fill == 'red'){
   return;
  }
  path.setAttribute('style', 'fill:blue');
  
});

});
}
renderWorldMap();