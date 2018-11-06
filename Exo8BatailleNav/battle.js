'use strict'



var BatailleNavale = function() {
var tds = document.querySelectorAll('td');
this.matrix = [
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0]
];
this.boats = {
  boat1 : {
      type : 'torpilleur',
      positions: [this.matrix[0][4],this.matrix[1][4]],
      boat1Touched : []
    },
    boat2 : {
      type : 'sous-marin',
      positions: [this.matrix[3][6],this.matrix[3][7],this.matrix[3][8]],
      boat2Touched : []
    },
    boat3 : {
      type : 'contre torpilleur',
      positions: [this.matrix[7][1],this.matrix[7][2],this.matrix[7][3],this.matrix[7][4]],
      boat3Touched : []
    },
    boat4 : {
      type : 'croiseur',
      positions: [this.matrix[4][10],this.matrix[5][10],this.matrix[6][10],this.matrix[7][10],this.matrix[8][10]],
      boat4Touched : []
    },
    boat5 : {
      type : 'porte avion',
      positions: [this.matrix[11][5],this.matrix[11][6],this.matrix[11][7],this.matrix[11][8],this.matrix[11][8]],
      boat5Touched : []
    }  
};
var self = this;

tds.forEach(function(td){
		td.addEventListener('click',function(){
		var shoot = self.matrix[td.dataset.y][td.dataset.x];
    if (td.className == 'shootPlayer'){
      return;
    }else{
      switch (shoot) {
        case 0 :
            td.style.backgroundColor = 'blue';
            td.setAttribute("class", "shootPlayer");
            self.checkWin()
        break;
        case 1 :
          td.style.backgroundColor = 'red';
          td.setAttribute("class", "shootPlayer");
          self.boats.boat1.boat1Touched.push(1);
          if(self.boats.boat1.boat1Touched.length == 2){
            self.message('<s>'+self.boats.boat1.type+'</s>');
          }
          self.checkWin()
        break;
        case 2 :
          td.style.backgroundColor = 'red';
          td.setAttribute("class", "shootPlayer");
          self.boats.boat2.boat2Touched.push(1);
          if(self.boats.boat2.boat2Touched.length == 3){
            self.message('<s>'+self.boats.boat2.type+'</s>');
          }
          self.checkWin()
        break;
        case 3 :
          td.style.backgroundColor = 'red';
          td.setAttribute("class", "shootPlayer");
          self.boats.boat3.boat3Touched.push(1);
          if(self.boats.boat3.boat3Touched.length == 4){
            self.message('<s>'+self.boats.boat3.type+'</s>');
          }
          self.checkWin()
        break
        case 4 :
          td.style.backgroundColor = 'red';
          td.setAttribute("class", "shootPlayer");
          self.boats.boat4.boat4Touched.push(1);
          if(self.boats.boat4.boat4Touched.length == 5){
            self.message('<s>'+self.boats.boat4.type+'</s>');
          }
          self.checkWin()
        break;
        case 5 : 
        td.style.backgroundColor = 'red';
        td.setAttribute("class", "shootPlayer");
        self.boats.boat5.boat5Touched.push(1);
        if(self.boats.boat5.boat5Touched.length == 5){
          self.message('<s>'+self.boats.boat5.type+'</s>');
          }
          self.checkWin()
        break;
        default:
          console.log('dnelzj fnejkz');
          self.checkWin()
      }
    }
    
	});
  
});	
}
BatailleNavale.prototype.message=function(value){
  var elMsgContent = document.querySelector('.chat-messages');
  var dom = '';

  dom += '<div>';
  dom += '<label>'+value+'</label>';
  dom += '</div>';
  elMsgContent.innerHTML += dom;
}

BatailleNavale.prototype.checkWin = function(){
  var boat1Down = this.boats.boat1.boat1Touched.length == 2;
  var boat2Down = this.boats.boat2.boat2Touched.length == 3;
  var boat3Down = this.boats.boat3.boat3Touched.length == 4;
  var boat4Down = this.boats.boat4.boat4Touched.length == 5;
  var boat5Down = this.boats.boat5.boat5Touched.length == 5;
  if (boat1Down && boat2Down && boat3Down && boat4Down && boat5Down){
    this.message('vous avez gagne  !!!!!!!!');
  }
}
var BatailleNavale = new BatailleNavale;