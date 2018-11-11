'use strict'

function drawBar(sum, nbr) {
  var progression = document.querySelector('.bar-progression');
  if (nbr>sum){
    alert('vous essayez avec un nombre invalide');
    progression.style.width = 0 + '%' ;
    return ;
  }
 
  var width = nbr / sum * 100;
  progression.style.width = width + '%';
}

//drawBar(365, 73);
drawBar(250, 14);
//drawBar(365, 365);