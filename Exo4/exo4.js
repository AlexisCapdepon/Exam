'use strict'
function renderWorldMap(){
var paths = document.querySelectorAll('path');
paths.forEach(function(path){

path.addEventListener('click',function(){
path.setAttribute('style', 'fill:red');

});

path.addEventListener('mouseenter',function(){
  messageLegend(path.id);
  if (path.style.fill == 'red'){
   return;
  }
  path.setAttribute('style', 'fill:blue');
  
  
});

path.addEventListener('mouseleave',function(){
  if (path.style.fill == 'red'){
   return;
  }
  path.setAttribute('style', 'fill:black');
  messageLegend(path.id);
  
});
});
}
renderWorldMap();

function messageLegend(value){
  var elMsgContent = document.querySelector('#legend');
  var dom = '';
  dom += '<div>';
  dom += '<label>'+value+'</label>';
  dom += '</div>';
  elMsgContent.innerHTML = dom;
}  
